import { useEffect, useMemo, useRef, useState } from 'react';
import { createChart, IChartApi, IPriceLine, ISeriesApi, CandlestickData, HistogramData, SeriesMarker, Time } from 'lightweight-charts';
import { Activity, BarChart2, TrendingDown, TrendingUp } from 'lucide-react';
import { useAuth, useApp } from '../App';
import type { AiPlanDurationKey, AiPlanTier } from '../types';
import { AI_PLAN_CATALOG, AI_PLAN_DURATIONS, buildAiSubscription, calculateAiPlanTotal, canStartAiSession, getAiDailyLimitSeconds, getAiDailyUsedSeconds, getAiDurationConfig, getAiPlanConfig, getAiRemainingSecondsForToday, isAiSubscriptionActive, toAiSessionDateKey } from '../utils/aiTrading';
import { formatNumber } from '../utils/mockData';
import { createFallbackCandles, fetchBtcCandles, getIntervalSeconds, type MarketCandle, type MarketInterval } from '../utils/marketApi';
import { calculateLiquidationPrice, calculatePnL } from '../utils/tradeEngine';

const TIMEFRAMES: Array<{ label: string; value: MarketInterval; tradeSeconds: number }> = [
  { label: '1m', value: '1m', tradeSeconds: 60 },
  { label: '5m', value: '5m', tradeSeconds: 300 },
  { label: '15m', value: '15m', tradeSeconds: 900 },
  { label: '1h', value: '1h', tradeSeconds: 3600 },
  { label: '4h', value: '4h', tradeSeconds: 14400 },
  { label: '1D', value: '1D', tradeSeconds: 86400 },
];

const LEVERAGE_OPTIONS = [1, 2, 3, 5, 10];
const AMOUNT_PRESETS = [50, 100, 250, 500];

function asUnixTime(value: Time | undefined) {
  return Number(value || Math.floor(Date.now() / 1000));
}

function isFiniteTimestamp(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value > 0;
}

function uniqueMarkers(markers: SeriesMarker<Time>[]) {
  const seen = new Set<string>();

  return markers.filter((marker) => {
    const key = `${String(marker.id || '')}:${String(marker.time)}:${marker.text || ''}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function formatTradeCountdown(totalSeconds: number) {
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (days > 0) return `${days}d ${hours}h ${minutes}m`;
  if (hours > 0) return `${hours}h ${minutes}m ${seconds}s`;
  if (minutes > 0) return `${minutes}m ${seconds}s`;
  return `${seconds}s`;
}

function formatAiTimeRemaining(expiresAt?: string) {
  if (!expiresAt) return 'Inactive';
  const diff = new Date(expiresAt).getTime() - Date.now();
  if (diff <= 0) return 'Expired';
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);
  if (days > 0) return `${days}d ${hours % 24}h left`;
  return `${hours}h left`;
}

function formatAiPlanRemaining(expiresAt?: string) {
  if (!expiresAt) return 'No active plan';
  const diff = new Date(expiresAt).getTime() - Date.now();
  if (diff <= 0) return 'Expired';
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  if (days >= 30) {
    const months = Math.floor(days / 30);
    return `${months} month${months > 1 ? 's' : ''} left`;
  }
  return `${days} day${days > 1 ? 's' : ''} left`;
}

function formatHoursMinutes(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  if (hours <= 0) return `${minutes}m`;
  if (minutes <= 0) return `${hours}h`;
  return `${hours}h ${minutes}m`;
}

const PREVIEW_MOVE_PCT = 0.3;

export default function TradePage() {
  const { user, updateUser } = useAuth();
  const { btcPrice, btcChange24h, btcHigh24h, btcLow24h, trades, activeTrade, lastTradeResult, startTrade, clearTradeResult, addTrade } = useApp();

  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const candleSeriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null);
  const volumeSeriesRef = useRef<ISeriesApi<'Histogram'> | null>(null);
  const activeEntryLineRef = useRef<IPriceLine | null>(null);

  const [timeframe, setTimeframe] = useState<MarketInterval>('1m');
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const [leverage, setLeverage] = useState(2);
  const [amount, setAmount] = useState('100');
  const [tradeMode, setTradeMode] = useState<'normal' | 'ai'>('normal');
  const [showAiModal, setShowAiModal] = useState(false);
  const [selectedAiPlan, setSelectedAiPlan] = useState<AiPlanTier>('normal');
  const [selectedAiDuration, setSelectedAiDuration] = useState<AiPlanDurationKey>('1m');
  const [aiTradeAmount, setAiTradeAmount] = useState('100');
  const [nowMs, setNowMs] = useState(() => Date.now());
  const [candles, setCandles] = useState<MarketCandle[]>([]);
  const [isChartLoading, setIsChartLoading] = useState(true);
  const [chartError, setChartError] = useState<string | null>(null);

  const latestCandle = candles[candles.length - 1]?.candle;
  const latestPrice = latestCandle?.close ?? btcPrice;
  const currentVolume = candles[candles.length - 1]?.volume.value ?? 0;
  const potentialWin = direction ? parseFloat(amount || '0') * (PREVIEW_MOVE_PCT / 100) * leverage : 0;
  const potentialLoss = parseFloat(amount || '0') * (PREVIEW_MOVE_PCT / 100) * leverage;
  const selectedTimeframe = TIMEFRAMES.find((item) => item.value === timeframe) ?? TIMEFRAMES[0];
  const activeTimeframeMeta = TIMEFRAMES.find((item) => item.value === activeTrade?.timeframeValue) ?? selectedTimeframe;
  const isTrading = Boolean(activeTrade && user && activeTrade.userEmail === user.email);
  const canTrade = user?.verificationStatus === 'approved';
  const aiSubscription = user?.aiTrading;
  const aiPlanConfig = getAiPlanConfig(selectedAiPlan);
  const aiDurationConfig = getAiDurationConfig(selectedAiDuration);
  const aiTradeAmountValue = parseFloat(aiTradeAmount || '0');
  const lockedAiAmount = aiSubscription?.active ? aiSubscription.lockedAmount || 0 : 0;
  const hasPaidAiPlan = isAiSubscriptionActive(aiSubscription);
  const canLaunchNextAiSession = canStartAiSession(aiSubscription);
  const aiPlanTotal = calculateAiPlanTotal(aiPlanConfig.price, aiDurationConfig.months, aiDurationConfig.discountPct);
  const freeAiDays = user?.freeAiDays || 0;
  const aiUsedTodaySeconds = getAiDailyUsedSeconds(aiSubscription, nowMs);
  const aiRemainingTodaySeconds = getAiRemainingSecondsForToday(aiSubscription, nowMs);
  const availableUsdBalance = Math.max(0, (user?.usdBalance || 0) - lockedAiAmount);
  const tradeCountdown = activeTrade ? Math.max(0, Math.ceil((new Date(activeTrade.endTime).getTime() - nowMs) / 1000)) : 0;
  const activeUnrealized = activeTrade
    ? calculatePnL({
        entryPrice: activeTrade.entryPrice,
        exitPrice: latestPrice,
        amount: activeTrade.amount,
        leverageValue: activeTrade.leverage,
        tradeDirection: activeTrade.direction,
      })
    : null;
  const myTrades = useMemo(
    () => trades.filter((trade) => trade.userEmail === user?.email),
    [trades, user?.email],
  );
  const manualTrades = useMemo(
    () => myTrades.filter((trade) => trade.source !== 'ai'),
    [myTrades],
  );
  const aiTrades = useMemo(
    () => myTrades.filter((trade) => trade.source === 'ai'),
    [myTrades],
  );
  const aiTerminalLines = useMemo(() => {
    const activeLabel = aiSubscription?.active ? 'RUNNING' : 'IDLE';
    const planLabel = aiSubscription?.displayName || 'NO PLAN';
    return [
      `AI CORE STATUS :: ${activeLabel}`,
      `PLAN PROFILE  :: ${planLabel}`,
      `PLAN PERIOD   :: ${aiSubscription ? formatAiPlanRemaining(aiSubscription.subscriptionEndsAt) : 'NO SUBSCRIPTION'}`,
      `BTC PRICE FEED:: ${latestPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      `LOCKED CAPITAL:: $${formatNumber(lockedAiAmount)}`,
      `SESSION PROFIT:: $${formatNumber(aiSubscription?.active ? aiSubscription.currentProfit || 0 : 0)}`,
      `TODAY USAGE   :: ${formatHoursMinutes(aiUsedTodaySeconds)} / ${formatHoursMinutes(getAiDailyLimitSeconds(aiSubscription))}`,
      `AVAILABLE USD :: $${formatNumber(availableUsdBalance)}`,
      `NEXT ACTION   :: ${aiSubscription?.active ? 'TRACKING BTC MICRO MOVES' : canLaunchNextAiSession ? 'READY FOR TODAY SESSION' : 'WAITING FOR NEXT DAY RESET'}`,
      `TRADE WINDOW  :: ${aiSubscription?.active ? formatAiTimeRemaining(aiSubscription.expiresAt) : hasPaidAiPlan ? 'SESSION CLOSED FOR TODAY' : 'NOT STARTED'}`,
    ];
  }, [aiSubscription, aiUsedTodaySeconds, availableUsdBalance, canLaunchNextAiSession, hasPaidAiPlan, latestPrice, lockedAiAmount]);
  const tradeMarkers = useMemo<SeriesMarker<Time>[]>(() => {
    const historyMarkers = manualTrades.flatMap((trade) => {
      const markers: SeriesMarker<Time>[] = [];

      if (isFiniteTimestamp(trade.entryTime)) {
        markers.push({
          id: `entry-${trade.id}`,
          time: trade.entryTime as Time,
          position: trade.direction === 'up' ? 'belowBar' : 'aboveBar',
          shape: trade.direction === 'up' ? 'arrowUp' : 'arrowDown',
          color: trade.direction === 'up' ? '#0ecb81' : '#f6465d',
          text: `${trade.direction === 'up' ? 'BUY' : 'SELL'} $${formatNumber(trade.amount)} ${trade.leverage}x`,
        });
      }

      if (isFiniteTimestamp(trade.exitTime)) {
        markers.push({
          id: `exit-${trade.id}`,
          time: trade.exitTime as Time,
          position: trade.status === 'won' ? 'aboveBar' : 'belowBar',
          shape: trade.status === 'won' ? 'circle' : 'square',
          color: trade.status === 'won' ? '#0ecb81' : '#f6465d',
          text: `${trade.status === 'won' ? 'WIN' : trade.outcomeReason === 'liquidation' ? 'LIQ' : 'LOSS'} ${trade.pnl && trade.pnl >= 0 ? '+' : '-'}$${formatNumber(Math.abs(trade.pnl || 0))}`,
        });
      }

      return markers;
    });

    if (!activeTrade || activeTrade.userEmail !== user?.email) {
      return uniqueMarkers(historyMarkers);
    }

    return uniqueMarkers([
      ...historyMarkers,
      {
        id: `live-${activeTrade.id}`,
        time: activeTrade.entryTime as Time,
        position: activeTrade.direction === 'up' ? 'belowBar' : 'aboveBar',
        shape: activeTrade.direction === 'up' ? 'arrowUp' : 'arrowDown',
        color: activeTrade.direction === 'up' ? '#0ecb81' : '#f6465d',
        text: `${activeTrade.direction === 'up' ? 'BUY' : 'SELL'} $${formatNumber(activeTrade.amount)} ${activeTrade.leverage}x`,
      },
    ]);
  }, [activeTrade, manualTrades, user?.email]);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    let chart: IChartApi;

    try {
      chart = createChart(chartContainerRef.current, {
        layout: {
          background: { color: '#0b0f15' },
          textColor: '#8ea0b7',
        },
        grid: {
          vertLines: { color: '#19202c' },
          horzLines: { color: '#19202c' },
        },
        crosshair: {
          mode: 1,
        },
        rightPriceScale: {
          borderColor: '#1e2735',
        },
        timeScale: {
          borderColor: '#1e2735',
          timeVisible: true,
          secondsVisible: timeframe === '1m',
        },
      });

      const candleSeries = chart.addCandlestickSeries({
        upColor: '#0ecb81',
        downColor: '#f6465d',
        borderUpColor: '#0ecb81',
        borderDownColor: '#f6465d',
        wickUpColor: '#0ecb81',
        wickDownColor: '#f6465d',
      });

      const volumeSeries = chart.addHistogramSeries({
        priceFormat: { type: 'volume' },
        priceScaleId: '',
      });

      volumeSeries.priceScale().applyOptions({
        scaleMargins: { top: 0.82, bottom: 0 },
      });

      chartRef.current = chart;
      candleSeriesRef.current = candleSeries;
      volumeSeriesRef.current = volumeSeries;
      setChartError(null);
    } catch (error) {
      console.error('Trade chart failed to initialize:', error);
      setChartError('Live chart unavailable');
      return;
    }

    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        try {
          chartRef.current.applyOptions({
            width: chartContainerRef.current.clientWidth,
            height: chartContainerRef.current.clientHeight,
          });
        } catch (error) {
          console.error('Trade chart resize failed:', error);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      try {
        activeEntryLineRef.current = null;
        chart.remove();
      } catch {
        // Ignore chart teardown errors from stale instances.
      }
    };
  }, []);

  useEffect(() => {
    try {
      chartRef.current?.applyOptions({
        timeScale: {
          secondsVisible: timeframe === '1m',
        },
      });
    } catch (error) {
      console.error('Trade chart option update failed:', error);
      setChartError('Live chart unavailable');
    }
  }, [timeframe]);

  useEffect(() => {
    if (!candleSeriesRef.current || !volumeSeriesRef.current) return;

    const candleData = candles.map((entry) => entry.candle) as CandlestickData<Time>[];
    const volumeData = candles.map((entry) => entry.volume) as HistogramData<Time>[];

    try {
      candleSeriesRef.current.setData(candleData);
      volumeSeriesRef.current.setData(volumeData);
      setChartError(null);
    } catch (error) {
      console.error('Trade chart data update failed:', error);
      setChartError('Live chart unavailable');
    }
  }, [candles]);

  useEffect(() => {
    if (!candleSeriesRef.current) return;
    try {
      candleSeriesRef.current.setMarkers(tradeMarkers);
    } catch (error) {
      console.error('Trade chart marker update failed:', error);
    }
  }, [tradeMarkers]);

  useEffect(() => {
    if (!candleSeriesRef.current) return;

    if (activeEntryLineRef.current) {
      try {
        candleSeriesRef.current.removePriceLine(activeEntryLineRef.current);
      } catch {
        // Ignore stale line cleanup errors.
      }
      activeEntryLineRef.current = null;
    }

    if (!isTrading || !activeTrade) return;

    try {
      activeEntryLineRef.current = candleSeriesRef.current.createPriceLine({
        price: activeTrade.entryPrice,
        color: activeTrade.direction === 'up' ? '#0ecb81' : '#f6465d',
        lineWidth: 2,
        lineStyle: 2,
        axisLabelVisible: true,
        title: `${activeTrade.direction === 'up' ? 'UP' : 'DOWN'} $${formatNumber(activeTrade.amount)}`,
      });
    } catch (error) {
      console.error('Trade entry line failed:', error);
    }

    return () => {
      if (!candleSeriesRef.current || !activeEntryLineRef.current) return;
      try {
        candleSeriesRef.current.removePriceLine(activeEntryLineRef.current);
      } catch {
        // Ignore stale line cleanup errors.
      }
      activeEntryLineRef.current = null;
    };
  }, [activeTrade, isTrading]);

  useEffect(() => {
    let active = true;

    const loadCandles = async (showLoader = false) => {
      if (showLoader) {
        setIsChartLoading(true);
      }
      try {
        const data = await fetchBtcCandles(timeframe, 120);
        if (active && data.length > 0) {
          setCandles(data);
        }
      } catch {
        if (active) {
          setCandles((current) => (
            current.length > 0 ? current : createFallbackCandles(timeframe, btcPrice, 120)
          ));
        }
      } finally {
        if (active && showLoader) {
          setIsChartLoading(false);
        }
      }
    };

    loadCandles(true);

    return () => {
      active = false;
    };
  }, [timeframe, btcPrice]);

  useEffect(() => {
    const socket = new WebSocket('wss://ws-feed.exchange.coinbase.com');

    socket.addEventListener('open', () => {
      socket.send(JSON.stringify({
        type: 'subscribe',
        product_ids: ['BTC-USD'],
        channels: ['ticker'],
      }));
    });

    socket.addEventListener('message', (event) => {
      try {
        const payload = JSON.parse(event.data) as { type?: string; price?: string; time?: string };
        if (payload.type !== 'ticker' || !payload.price) return;

        const livePrice = Number(payload.price);
        const eventSeconds = payload.time ? Math.floor(new Date(payload.time).getTime() / 1000) : Math.floor(Date.now() / 1000);
        const bucketSeconds = getIntervalSeconds(timeframe);
        const bucketTime = Math.floor(eventSeconds / bucketSeconds) * bucketSeconds;

        setCandles((current) => {
          if (current.length === 0) return current;

          const next = [...current];
          const lastEntry = next[next.length - 1];
          const lastTime = asUnixTime(lastEntry.candle.time);

          if (bucketTime > lastTime) {
            next.push({
              candle: {
                time: bucketTime as Time,
                open: lastEntry.candle.close,
                high: Math.max(lastEntry.candle.close, livePrice),
                low: Math.min(lastEntry.candle.close, livePrice),
                close: livePrice,
              },
              volume: {
                time: bucketTime as Time,
                value: Math.max(lastEntry.volume.value * 0.35, 32),
                color: livePrice >= lastEntry.candle.close ? 'rgba(14, 203, 129, 0.28)' : 'rgba(246, 70, 93, 0.28)',
              },
            });
            return next.slice(-120);
          }

          next[next.length - 1] = {
            candle: {
              ...lastEntry.candle,
              high: Math.max(lastEntry.candle.high, livePrice),
              low: Math.min(lastEntry.candle.low, livePrice),
              close: livePrice,
            },
            volume: {
              ...lastEntry.volume,
              value: lastEntry.volume.value + 0.75,
              color: livePrice >= lastEntry.candle.open ? 'rgba(14, 203, 129, 0.28)' : 'rgba(246, 70, 93, 0.28)',
            },
          };

          return next;
        });
      } catch {
        // Ignore malformed ticker frames so the live chart keeps running.
      }
    });

    return () => {
      socket.close();
    };
  }, [timeframe]);

  useEffect(() => {
    if (!isTrading && !aiSubscription?.active) return;
    const timer = window.setInterval(() => setNowMs(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [aiSubscription?.active, isTrading]);

  const handleTrade = () => {
    if (!direction || !amount || isTrading) return;
    if (!canTrade) {
      alert('Verify your account in Profile before trading.');
      return;
    }
    const parsedAmount = parseFloat(amount);

    if (parsedAmount > availableUsdBalance) {
      alert('Insufficient balance');
      return;
    }

    const liquidationPrice = calculateLiquidationPrice(latestPrice, leverage, direction);
    const entryTime = asUnixTime(latestCandle?.time);

    startTrade({
      id: `trade-${Date.now()}`,
      pair: 'BTC/USD',
      direction,
      amount: parsedAmount,
      leverage,
      entryPrice: latestPrice,
      liquidationPrice,
      timeframe: selectedTimeframe.label,
      timeframeValue: selectedTimeframe.value,
      tradeSeconds: selectedTimeframe.tradeSeconds,
      entryTime,
      openedAt: new Date().toISOString(),
      endTime: new Date(Date.now() + selectedTimeframe.tradeSeconds * 1000).toISOString(),
      userEmail: user?.email || '',
    });
  };

  const resetTrade = () => {
    setDirection(null);
    clearTradeResult();
  };

  const handlePurchaseAiPlan = () => {
    if (!user) return;
    if (!canTrade) {
      alert('Verify your account in Profile before using AI trading.');
      return;
    }
    if ((user.usdBalance || 0) < aiPlanTotal) {
      alert('Your USD balance is too low for this AI plan.');
      return;
    }
    if (hasPaidAiPlan) {
      alert('Your current AI subscription is still active. Use today session or wait until the plan finishes.');
      return;
    }

    const nextSubscription = buildAiSubscription(selectedAiPlan, 0, selectedAiDuration);
    updateUser({
      usdBalance: Math.max(0, user.usdBalance - aiPlanTotal),
      aiTrading: {
        ...nextSubscription,
        totalTrades: user.aiTrading?.totalTrades || 0,
        totalProfit: user.aiTrading?.totalProfit || 0,
        totalSessionDays: user.aiTrading?.totalSessionDays || 0,
        active: false,
        expiresAt: nextSubscription.purchasedAt,
        lastSessionStartedAt: undefined,
        lastAccruedAt: undefined,
        dailyUsedSeconds: 0,
        dailyUsageDate: undefined,
      },
    });
    setShowAiModal(false);
    setTradeMode('ai');
  };

  const handleStartNextAiSession = () => {
    if (!user || !aiSubscription) return;
    if (!canTrade) {
      alert('Verify your account in Profile before using AI trading.');
      return;
    }
    if (!canLaunchNextAiSession) {
      alert('Today AI session is already used. Please come back on the next day.');
      return;
    }
    if (!aiTradeAmount || aiTradeAmountValue <= 0) {
      alert('Enter a valid AI trade amount.');
      return;
    }
    if ((user.usdBalance || 0) < aiTradeAmountValue) {
      alert('Your USD balance is too low for this AI trade amount.');
      return;
    }

    const nowIso = new Date().toISOString();
    const remainingTodaySeconds = getAiRemainingSecondsForToday(aiSubscription);
    updateUser({
      aiTrading: {
        ...aiSubscription,
        active: true,
        autoAmount: aiTradeAmountValue,
        expiresAt: new Date(Date.now() + remainingTodaySeconds * 1000).toISOString(),
        lastSessionStartedAt: nowIso,
        lastAccruedAt: nowIso,
        lockedAmount: aiTradeAmountValue,
        currentProfit: 0,
        dailyUsageDate: toAiSessionDateKey(nowIso),
        dailyUsedSeconds: getAiDailyUsedSeconds(aiSubscription),
        totalSessionDays: (aiSubscription.totalSessionDays || 0) + 1,
      },
    });
    setTradeMode('ai');
  };

  const handleUseFreeAiDay = () => {
    if (!user) return;
    if (!canTrade) {
      alert('Verify your account in Profile before using AI trading.');
      return;
    }
    if (freeAiDays <= 0) {
      alert('No free AI day is available on this account.');
      return;
    }
    if (!aiTradeAmount || aiTradeAmountValue <= 0) {
      alert('Enter a valid AI trade amount.');
      return;
    }
    if ((user.usdBalance || 0) < aiTradeAmountValue) {
      alert('Your USD balance is too low for this AI trade amount.');
      return;
    }
    if (hasPaidAiPlan || aiSubscription?.active) {
      alert('Finish the current AI plan before using a free AI day.');
      return;
    }

    const nextSubscription = buildAiSubscription(selectedAiPlan, aiTradeAmountValue, '1m', {
      priceOverride: 0,
      freeAccess: true,
      subscriptionHoursOverride: 24,
    });

    updateUser({
      freeAiDays: Math.max(0, freeAiDays - 1),
      aiTrading: {
        ...nextSubscription,
        termLabel: '1 Free Day',
        termMonths: 0,
        discountPct: 100,
        totalTrades: user.aiTrading?.totalTrades || 0,
        totalProfit: user.aiTrading?.totalProfit || 0,
        totalSessionDays: (user.aiTrading?.totalSessionDays || 0) + 1,
      },
    });
    setShowAiModal(false);
    setTradeMode('ai');
  };

  const handleStopAiTrade = () => {
    if (!user?.aiTrading?.active) return;

    addTrade({
      id: `ai-stop-${Date.now()}`,
      pair: 'BTC/USD',
      direction: 'up',
      amount: user.aiTrading.lockedAmount,
      leverage: 1,
      entryPrice: latestPrice,
      exitPrice: latestPrice,
      entryTime: Math.floor(new Date(user.aiTrading.purchasedAt).getTime() / 1000),
      exitTime: Math.floor(Date.now() / 1000),
      timeframe: `AI ${user.aiTrading.tradeWindowHours}h`,
      status: 'won',
      timestamp: new Date().toISOString(),
      userEmail: user.email,
      pnl: user.aiTrading.currentProfit,
      priceMovePct: 0,
      outcomeReason: 'expiry',
      source: 'ai',
      aiPlanTier: user.aiTrading.tier,
    });

    updateUser({
      aiTrading: {
        ...user.aiTrading,
        active: false,
        expiresAt: new Date().toISOString(),
        lockedAmount: 0,
        currentProfit: 0,
        lastTradeAt: new Date().toISOString(),
        totalTrades: (user.aiTrading.totalTrades || 0) + 1,
        totalProfit: (user.aiTrading.totalProfit || 0) + (user.aiTrading.currentProfit || 0),
      },
    });
  };

  const tradeButtonClass = useMemo(() => {
    if (direction === 'up') return 'buy';
    if (direction === 'down') return 'sell';
    return 'neutral';
  }, [direction]);

  return (
    <>
      {showAiModal && (
        <div className="fixed inset-0 z-[300] flex items-start justify-center overflow-y-auto bg-[#05070c] p-0 sm:items-center sm:p-6">
          <div className="ai-modal">
            <div className="ai-modal-head">
              <div>
                <div className="ai-modal-kicker">AI Trading Desk</div>
                <h2>Auto BTC trading subscription</h2>
                <p>
                  The AI trader reads recent BTC price action, opens demo auto-trades on your account, and sends every result into your trade history.
                </p>
              </div>
              <div className="ai-head-actions">
                <button className="ai-close-btn" onClick={() => setShowAiModal(false)}>Back</button>
              </div>
            </div>

            <div className="ai-plan-grid">
              {AI_PLAN_CATALOG.map((plan) => (
                <button
                  key={plan.tier}
                  className={`ai-plan-card ${selectedAiPlan === plan.tier ? 'active' : ''}`}
                  onClick={() => setSelectedAiPlan(plan.tier)}
                >
                  <div className="ai-plan-top">
                    <strong>{plan.name}</strong>
                    <span>${formatNumber(plan.price)}/month</span>
                  </div>
                  <div className="ai-plan-meta">{plan.tradeWindowHours} hour trading window</div>
                  <div className="ai-plan-meta">{plan.leverage}x AI session profile</div>
                  <p>{plan.description}</p>
                </button>
              ))}
            </div>

            <div className="ai-duration-grid">
              {AI_PLAN_DURATIONS.map((duration) => (
                <button
                  key={duration.key}
                  className={`ai-duration-card ${selectedAiDuration === duration.key ? 'active' : ''}`}
                  onClick={() => setSelectedAiDuration(duration.key)}
                >
                  <strong>{duration.label}</strong>
                  <span>{duration.discountPct > 0 ? `${duration.discountPct}% off total plan price` : 'Full monthly price'}</span>
                </button>
              ))}
            </div>
            <div className="ai-modal-body">
              <div className="trade-box">
                <div className="trade-label">What AI trading does</div>
                <div className="ai-feature-list">
                  <div className="ai-feature-row">Paid plans stay active for the full subscription term, and you can run one AI session each day until the plan period ends.</div>
                  <div className="ai-feature-row">Normal runs 4 hours per day, Pro runs 12 hours per day, and Pro Mex runs 24 hours per day.</div>
                  <div className="ai-feature-row">When you press Start Today AI Session, you choose the session amount there and the system locks it only while that session is running.</div>
                  <div className="ai-feature-row">Writes every finished AI session into trade history and grows balance slowly instead of spiking too high.</div>
                </div>
              </div>
              <div className="trade-box">
                <div className="trade-label">Plan rules</div>
                <div className="info-list">
                  <div className="info-row"><span>Subscription term</span><strong>{aiDurationConfig.label}</strong></div>
                  <div className="info-row"><span>Daily session limit</span><strong>{aiPlanConfig.tradeWindowHours} hours per day</strong></div>
                  <div className="info-row"><span>After limit ends</span><strong>Wait for tomorrow</strong></div>
                  <div className="info-row"><span>After subscription ends</span><strong>Buy again</strong></div>
                </div>
              </div>
            </div>

            <div className="ai-summary-bar">
              <div>
                <strong>{aiPlanConfig.name}</strong>
                <span>
                  ${formatNumber(aiPlanTotal)} total • {aiDurationConfig.label} • {aiPlanConfig.tradeWindowHours}h each day
                  {aiDurationConfig.discountPct > 0 ? ` • ${aiDurationConfig.discountPct}% off` : ''}
                </span>
              </div>
              <div className="ai-head-actions">
                {freeAiDays > 0 && (
                  <button className="ai-open-btn secondary" onClick={handleUseFreeAiDay}>
                    Use Free AI Day ({freeAiDays})
                  </button>
                )}
                <button className="ai-buy-btn" onClick={handlePurchaseAiPlan}>
                  Buy AI Version
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    <div className="trade-shell">
      <style>{`
        .trade-shell {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 360px;
          gap: 20px;
          min-height: calc(100vh - 180px);
        }
        .trade-card {
          background: linear-gradient(180deg, rgba(15, 19, 28, 0.94), rgba(12, 16, 24, 0.92));
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 28px;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
        }
        .chart-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          min-height: 680px;
        }
        .chart-card.ai-mode {
          overflow: visible;
          min-height: auto;
        }
        .chart-top {
          position: sticky;
          top: 0;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 14px 18px 12px;
          background: rgba(12, 16, 24, 0.94);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          flex-wrap: nowrap;
        }
        .pair-block {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }
        .pair-inline {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 10px;
          min-width: 0;
          flex-wrap: nowrap;
        }
        .pair-icon {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 800;
          color: #111;
        }
        .pair-copy h1 {
          font-size: 18px;
          font-weight: 800;
          color: #f3f6fb;
          letter-spacing: -0.03em;
        }
        .pair-copy p {
          color: #8fa2ba;
          font-size: 11px;
          margin-top: 2px;
        }
        .pair-stats {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: nowrap;
        }
        .pair-price {
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(18px, 2.2vw, 26px);
          font-weight: 800;
          color: #f3f6fb;
        }
        .pair-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #0ecb81;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .pair-change {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 700;
          font-size: 12px;
        }
        .pair-change.up {
          color: #0ecb81;
        }
        .pair-change.down {
          color: #f6465d;
        }
        .timeframe-row {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: nowrap;
          overflow-x: auto;
        }
        .tf-btn {
          min-height: 34px;
          padding: 0 12px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #8fa2ba;
          font-weight: 700;
          font-size: 12px;
        }
        .tf-btn.active {
          background: rgba(247, 147, 26, 0.15);
          border-color: rgba(247, 147, 26, 0.34);
          color: #f6b353;
        }
        .market-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          padding: 0 22px 18px;
        }
        .live-trade-overlay {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 28px;
          z-index: 3;
          padding: 16px 18px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          background: rgba(14, 18, 26, 0.84);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
        }
        .live-trade-overlay.buy {
          background: rgba(14, 203, 129, 0.12);
          border-color: rgba(14, 203, 129, 0.22);
        }
        .live-trade-overlay.sell {
          background: rgba(246, 70, 93, 0.12);
          border-color: rgba(246, 70, 93, 0.22);
        }
        .live-trade-main {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .live-trade-badge {
          min-height: 34px;
          padding: 0 12px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #fff;
        }
        .live-trade-badge.buy {
          background: #0ecb81;
          color: #06120d;
        }
        .live-trade-badge.sell {
          background: #f6465d;
        }
        .live-trade-copy {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .live-trade-copy strong {
          color: #eef3fb;
          font-size: 15px;
        }
        .live-trade-copy span {
          color: #8fa2ba;
          font-size: 12px;
        }
        .live-trade-stats {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }
        .live-trade-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .live-trade-stat-label {
          color: #8fa2ba;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .live-trade-stat-value {
          color: #eef3fb;
          font-size: 14px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
        }
        .strip-item {
          padding: 0;
          border-radius: 0;
          background: transparent;
        }
        .strip-label {
          color: #7f8ea3;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 6px;
        }
        .strip-value {
          color: #eef3fb;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: 14px;
        }
        .chart-box {
          position: relative;
          flex: 1;
          min-height: 420px;
          padding: 0 14px 14px;
        }
        .chart-canvas {
          width: 100%;
          height: 100%;
          min-height: 420px;
        }
        .chart-loading {
          position: absolute;
          top: 18px;
          right: 18px;
          left: auto;
          bottom: auto;
          border-radius: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: #8fa2ba;
          font-size: 12px;
        }
        .chart-fallback {
          position: absolute;
          inset: 18px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: rgba(8, 12, 18, 0.78);
          color: #c8d2df;
          text-align: center;
          padding: 24px;
        }
        .chart-fallback strong {
          font-size: 18px;
          color: #eef3fb;
        }
        .trade-panel {
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .panel-title {
          font-size: 22px;
          font-weight: 800;
          color: #f3f6fb;
        }
        .ticket-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 20px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02));
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .ticket-topbar-copy strong {
          display: block;
          color: #eef3fb;
          font-size: 14px;
          font-weight: 800;
        }
        .ticket-topbar-copy span {
          display: block;
          margin-top: 4px;
          color: #7f8ea3;
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .ticket-topbar-value {
          color: #0ecb81;
          font-family: 'JetBrains Mono', monospace;
          font-size: 26px;
          font-weight: 800;
        }
        .ticket-pill-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .ticket-pill {
          min-height: 42px;
          padding: 0 14px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #d7dfeb;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }
        .ticket-pill.emphasis {
          color: #f6b353;
          border-color: rgba(247, 147, 26, 0.28);
          background: rgba(247, 147, 26, 0.08);
        }
        .ticket-pill.ai {
          color: #7fb0ff;
          border-color: rgba(52, 120, 246, 0.28);
          background: rgba(52, 120, 246, 0.08);
        }
        .balance-box,
        .trade-box {
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.03);
          padding: 18px;
        }
        .balance-box .label,
        .trade-label {
          color: #7f8ea3;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }
        .balance-box .value {
          color: #eef3fb;
          font-size: 30px;
          font-weight: 800;
          font-family: 'JetBrains Mono', monospace;
        }
        .balance-box .sub {
          color: #90a0b6;
          font-size: 13px;
          margin-top: 6px;
        }
        .direction-grid,
        .preset-grid,
        .leverage-grid {
          display: grid;
          gap: 10px;
        }
        .direction-grid {
          grid-template-columns: repeat(2, 1fr);
          padding: 4px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .preset-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        .leverage-grid {
          grid-template-columns: repeat(5, 1fr);
        }
        .trade-form-grid {
          display: grid;
          gap: 12px;
        }
        .trade-field {
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.026);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .trade-field-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 10px;
        }
        .trade-field-unit {
          color: #8ea0b7;
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .dir-btn,
        .preset-btn,
        .lev-btn {
          min-height: 46px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          color: #d7dfeb;
          font-weight: 700;
        }
        .dir-btn.buy.active,
        .dir-btn.buy:hover {
          background: linear-gradient(135deg, rgba(14, 203, 129, 0.9), rgba(98, 243, 189, 0.92));
          border-color: transparent;
          color: #072117;
        }
        .dir-btn.sell.active,
        .dir-btn.sell:hover {
          background: linear-gradient(135deg, rgba(246, 70, 93, 0.92), rgba(255, 122, 141, 0.92));
          border-color: transparent;
          color: #fff3f5;
        }
        .preset-btn.active,
        .lev-btn.active {
          background: rgba(247, 147, 26, 0.16);
          border-color: rgba(247, 147, 26, 0.4);
          color: #f6b353;
        }
        .amount-input {
          width: 100%;
          min-height: 50px;
          border-radius: 14px;
          background: rgba(6, 10, 15, 0.24);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 0 16px;
          color: #eef3fb;
          font-family: 'JetBrains Mono', monospace;
          font-size: 20px;
          font-weight: 700;
        }
        .amount-input:focus {
          outline: none;
          border-color: rgba(247, 147, 26, 0.45);
        }
        .info-list {
          display: grid;
          gap: 12px;
        }
        .info-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          color: #d7dfeb;
          font-size: 14px;
        }
        .info-row span:first-child {
          color: #7f8ea3;
        }
        .info-row strong {
          font-family: 'JetBrains Mono', monospace;
        }
        .trade-submit {
          min-height: 56px;
          border: none;
          border-radius: 20px;
          font-size: 16px;
          font-weight: 800;
          color: #111;
        }
        .trade-submit.neutral {
          background: linear-gradient(135deg, #3478f6, #5a93f8);
          color: #fff;
        }
        .trade-submit.buy {
          background: linear-gradient(135deg, #0ecb81, #62f3bd);
        }
        .trade-submit.sell {
          background: linear-gradient(135deg, #f6465d, #ff7a8d);
          color: #fff;
        }
        .trade-submit:disabled {
          opacity: 0.55;
        }
        .ai-helper-copy {
          color: #8fa2ba;
          font-size: 13px;
          line-height: 1.6;
          margin-top: 10px;
        }
        .ai-status-card {
          padding: 22px;
          border-radius: 22px;
          border: 1px solid rgba(52, 120, 246, 0.18);
          background:
            radial-gradient(circle at top right, rgba(52, 120, 246, 0.18), transparent 40%),
            linear-gradient(180deg, rgba(12, 18, 30, 0.96), rgba(10, 14, 24, 0.94));
        }
        .ai-panel-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }
        .ai-back-btn {
          min-height: 40px;
          padding: 0 14px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          background: rgba(255,255,255,0.05);
          color: #dce7f7;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
        }
        .ai-status-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 14px;
        }
        .ai-status-head strong {
          color: #eef3fb;
          font-size: 18px;
          font-weight: 800;
        }
        .ai-status-head span {
          display: block;
          margin-top: 4px;
          color: #8fa2ba;
          font-size: 12px;
        }
        .ai-badge {
          display: inline-flex;
          align-items: center;
          min-height: 30px;
          padding: 0 12px;
          border-radius: 999px;
          background: rgba(52, 120, 246, 0.16);
          color: #7fb0ff;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .ai-metrics {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 16px;
        }
        .ai-metric {
          padding: 14px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .ai-metric-label {
          color: #8fa2ba;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 6px;
        }
        .ai-metric-value {
          color: #eef3fb;
          font-size: 18px;
          font-weight: 800;
          font-family: 'JetBrains Mono', monospace;
        }
        .ai-open-btn,
        .ai-buy-btn,
        .ai-close-btn {
          min-height: 48px;
          border: none;
          border-radius: 16px;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
        }
        .ai-open-btn,
        .ai-buy-btn {
          background: linear-gradient(135deg, #3478f6, #7fb0ff);
          color: #f8fbff;
        }
        .ai-open-btn.secondary {
          background: rgba(255,255,255,0.06);
          color: #dce7f7;
        }
        .ai-open-btn.stop {
          background: rgba(246,70,93,0.18);
          color: #ff9fad;
        }
        .ai-close-btn {
          min-height: 42px;
          padding: 0 16px;
          background: rgba(255,255,255,0.06);
          color: #d7dfeb;
        }
        .ai-head-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .ai-mode-actions {
          display: grid;
          gap: 10px;
          margin-top: 16px;
        }
        .ai-terminal-shell {
          display: grid;
          gap: 18px;
          padding: 24px 22px 26px;
          min-height: 0;
          align-content: start;
        }
        .ai-terminal-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .ai-terminal-head strong {
          display: block;
          color: #c6ffd7;
          font-size: 20px;
          font-weight: 800;
        }
        .ai-terminal-head span {
          display: block;
          margin-top: 6px;
          color: #81b890;
          font-size: 13px;
        }
        .ai-terminal-screen {
          flex: 1;
          min-height: 360px;
          border-radius: 24px;
          border: 1px solid rgba(54, 255, 133, 0.18);
          background:
            radial-gradient(circle at top left, rgba(40, 255, 128, 0.09), transparent 25%),
            linear-gradient(180deg, #04110a, #020905);
          box-shadow: inset 0 0 0 1px rgba(41, 91, 55, 0.18);
          padding: 22px;
          overflow: hidden;
          position: relative;
          animation: terminalPulse 3.2s ease-in-out infinite;
        }
        .ai-terminal-screen::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            to bottom,
            rgba(255,255,255,0.03) 0,
            rgba(255,255,255,0.03) 1px,
            transparent 1px,
            transparent 4px
          );
          pointer-events: none;
          opacity: 0.18;
        }
        .ai-terminal-screen::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: -25%;
          height: 35%;
          background: linear-gradient(180deg, rgba(125,255,173,0), rgba(125,255,173,0.12), rgba(125,255,173,0));
          animation: scanSweep 5.4s linear infinite;
          pointer-events: none;
          opacity: 0.85;
        }
        .ai-terminal-line {
          position: relative;
          z-index: 1;
          color: #7dffad;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          line-height: 1.9;
          letter-spacing: 0.02em;
          text-shadow: 0 0 8px rgba(80, 255, 146, 0.22);
          word-break: break-word;
          animation: terminalFlicker 2.8s steps(2) infinite;
        }
        .ai-terminal-line:nth-child(2n) {
          animation-duration: 3.6s;
        }
        .ai-terminal-line:nth-child(3n) {
          animation-duration: 2.2s;
        }
        @keyframes scanSweep {
          0% { transform: translateY(-120%); }
          100% { transform: translateY(420%); }
        }
        @keyframes terminalFlicker {
          0%, 100% { opacity: 0.95; transform: translateX(0); }
          20% { opacity: 0.82; transform: translateX(0.3px); }
          40% { opacity: 1; transform: translateX(-0.4px); }
          60% { opacity: 0.88; transform: translateX(0.2px); }
          80% { opacity: 0.98; transform: translateX(-0.2px); }
        }
        @keyframes terminalPulse {
          0%, 100% { box-shadow: inset 0 0 0 1px rgba(41, 91, 55, 0.18), 0 0 0 rgba(0,0,0,0); }
          50% { box-shadow: inset 0 0 0 1px rgba(41, 91, 55, 0.18), 0 0 24px rgba(125,255,173,0.08); }
        }
        .ai-modal {
          width: min(100%, 980px);
          min-height: min(100vh - 48px, 860px);
          border-radius: 30px;
          border: 1px solid rgba(92, 141, 255, 0.18);
          background:
            radial-gradient(circle at top left, rgba(52,120,246,0.22), transparent 26%),
            radial-gradient(circle at bottom right, rgba(247,147,26,0.14), transparent 24%),
            linear-gradient(180deg, rgba(11, 16, 24, 0.98), rgba(8, 12, 18, 0.98));
          box-shadow: 0 38px 120px rgba(0, 0, 0, 0.38);
          padding: 28px;
          display: grid;
          gap: 22px;
        }
        .ai-modal-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
        }
        .ai-modal-kicker {
          color: #7fb0ff;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }
        .ai-modal-head h2 {
          font-size: 30px;
          font-weight: 800;
          color: #f3f6fb;
          letter-spacing: -0.04em;
        }
        .ai-modal-head p {
          margin-top: 10px;
          max-width: 640px;
          color: #8fa2ba;
          line-height: 1.7;
        }
        .ai-plan-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }
        .ai-duration-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
        }
        .ai-plan-card {
          text-align: left;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          padding: 18px;
          cursor: pointer;
        }
        .ai-plan-card.active {
          border-color: rgba(52,120,246,0.4);
          background: rgba(52,120,246,0.1);
          box-shadow: inset 0 0 0 1px rgba(127,176,255,0.2);
        }
        .ai-plan-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 8px;
        }
        .ai-plan-top strong {
          color: #eef3fb;
          font-size: 18px;
          font-weight: 800;
        }
        .ai-plan-top span {
          color: #7fb0ff;
          font-weight: 800;
        }
        .ai-plan-meta {
          color: #d7dfeb;
          font-size: 13px;
          margin-top: 4px;
        }
        .ai-plan-card p {
          margin-top: 10px;
          color: #8fa2ba;
          font-size: 13px;
          line-height: 1.6;
        }
        .ai-duration-card {
          text-align: left;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          padding: 14px;
          cursor: pointer;
        }
        .ai-duration-card.active {
          border-color: rgba(247,147,26,0.34);
          background: rgba(247,147,26,0.08);
          box-shadow: inset 0 0 0 1px rgba(247,147,26,0.16);
        }
        .ai-duration-card strong {
          display: block;
          color: #eef3fb;
          font-size: 15px;
          font-weight: 800;
        }
        .ai-duration-card span {
          display: block;
          margin-top: 6px;
          color: #8fa2ba;
          font-size: 12px;
          line-height: 1.5;
        }
        .ai-modal-body {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 16px;
        }
        .ai-feature-list {
          display: grid;
          gap: 10px;
        }
        .ai-feature-row {
          padding: 12px 14px;
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          color: #d7dfeb;
          line-height: 1.6;
        }
        .ai-summary-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 20px;
          border-radius: 22px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .ai-summary-bar strong {
          display: block;
          color: #eef3fb;
          font-size: 18px;
          font-weight: 800;
        }
        .ai-summary-bar span {
          display: block;
          margin-top: 4px;
          color: #8fa2ba;
          font-size: 13px;
        }
        .result-card {
          padding: 18px;
          border-radius: 22px;
          text-align: center;
        }
        .verify-warning {
          padding: 16px 18px;
          border-radius: 18px;
          background: rgba(247, 147, 26, 0.14);
          border: 1px solid rgba(247, 147, 26, 0.24);
          color: #f6d79a;
          line-height: 1.6;
          font-size: 13px;
        }
        .result-card.win {
          background: rgba(14, 203, 129, 0.14);
          border: 1px solid rgba(14, 203, 129, 0.24);
        }
        .result-card.loss {
          background: rgba(246, 70, 93, 0.14);
          border: 1px solid rgba(246, 70, 93, 0.24);
        }
        .result-value {
          font-size: 30px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 800;
          margin: 10px 0 14px;
        }
        .recent-list {
          display: grid;
          gap: 10px;
        }
        .recent-row {
          display: grid;
          grid-template-columns: 1.15fr 0.8fr 0.8fr 0.9fr;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.03);
          color: #d7dfeb;
          font-size: 13px;
          align-items: center;
        }
        .recent-cell {
          min-width: 0;
        }
        .recent-value {
          white-space: nowrap;
        }
        .recent-pair {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }
        .recent-pair-name {
          white-space: nowrap;
        }
        .recent-dir {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        @media (max-width: 1180px) {
          .trade-shell {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 780px) {
          .chart-top,
          .market-strip,
          .trade-panel {
            padding-left: 16px;
            padding-right: 16px;
          }
          .chart-top {
            gap: 10px;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          .pair-block {
            gap: 8px;
          }
          .pair-inline {
            gap: 4px;
            flex-wrap: nowrap;
          }
          .pair-icon {
            width: 32px;
            height: 32px;
            border-radius: 10px;
            font-size: 17px;
          }
          .live-trade-overlay {
            left: 18px;
            right: 18px;
            bottom: 18px;
            flex-direction: column;
            align-items: flex-start;
          }
          .live-trade-stats {
            width: 100%;
            justify-content: space-between;
            gap: 12px;
          }
          .market-strip {
            display: flex;
            flex-wrap: nowrap;
            gap: 14px;
            overflow-x: auto;
            padding-bottom: 10px;
          }
          .strip-item {
            flex: 0 0 auto;
          }
          .pair-copy h1 {
            font-size: 15px;
          }
          .pair-copy p {
            display: none;
          }
          .pair-stats {
            width: auto;
            gap: 8px;
            flex-wrap: nowrap;
          }
          .pair-price {
            font-size: 16px;
          }
          .pair-status {
            font-size: 10px;
          }
          .pair-change {
            font-size: 10px;
          }
          .timeframe-row {
            width: 100%;
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 2px;
            gap: 10px;
          }
          .tf-btn {
            min-height: auto;
            padding: 0;
            font-size: 11px;
            flex: 0 0 auto;
            background: transparent;
            border: none;
            border-radius: 0;
          }
          .tf-btn.active {
            background: transparent;
            border-color: transparent;
            color: #f6b353;
          }
          .ticket-pill-row,
          .ai-plan-grid,
          .ai-duration-grid,
          .ai-modal-body,
          .ai-metrics {
            grid-template-columns: 1fr;
          }
          .direction-grid,
          .preset-grid,
          .leverage-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .ai-modal {
            width: 100%;
            min-height: 100vh;
            border-radius: 0;
            border: none;
            padding: 18px;
          }
          .ai-terminal-shell {
            padding: 14px 16px 18px;
            min-height: 0;
          }
          .ai-panel-topbar,
          .ai-terminal-topbar {
            align-items: stretch;
          }
          .ai-back-btn {
            width: 100%;
          }
          .ai-terminal-screen {
            min-height: 340px;
            padding: 16px;
          }
          .ai-modal-head,
          .ai-head-actions,
          .ai-summary-bar {
            flex-direction: column;
            align-items: stretch;
          }
          .recent-row {
            grid-template-columns: minmax(90px, 1.2fr) minmax(66px, auto) minmax(72px, auto) minmax(56px, auto);
            gap: 8px;
            padding: 10px 12px;
            font-size: 12px;
          }
          .recent-row .trade-label {
            display: none;
            margin: 0;
          }
          .recent-pair {
            gap: 6px;
          }
          .recent-pair-name,
          .recent-value,
          .recent-dir {
            font-size: 12px;
          }
        }
      `}</style>

      <section className={`trade-card chart-card ${tradeMode === 'ai' ? 'ai-mode' : ''}`}>
        <div className="chart-top">
          <div className="pair-block">
            <div className="pair-icon">₿</div>
            <div className="pair-inline">
            <div className="pair-copy">
              <h1>BTC/USD</h1>
              <p>Live Coinbase candles for the active market view</p>
            </div>
            <div className="pair-stats">
              <div className="pair-price">
                ${latestPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <div className={`pair-change ${btcChange24h >= 0 ? 'up' : 'down'}`}>
                {btcChange24h >= 0 ? <TrendingUp size={15} /> : <TrendingDown size={15} />}
                {btcChange24h >= 0 ? '+' : ''}{btcChange24h.toFixed(2)}%
              </div>
            </div>
          </div>
          </div>
          <div className="pair-status">
            <Activity size={13} />
            Live
          </div>
          <div className="timeframe-row">
            {TIMEFRAMES.map((item) => (
              <button
                key={item.value}
                className={`tf-btn ${timeframe === item.value ? 'active' : ''}`}
                onClick={() => setTimeframe(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {tradeMode === 'normal' ? (
          <>
            <div className="market-strip">
              <div className="strip-item">
                <div className="strip-label">24h High</div>
                <div className="strip-value">${btcHigh24h.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
              </div>
              <div className="strip-item">
                <div className="strip-label">24h Low</div>
                <div className="strip-value">${btcLow24h.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
              </div>
              <div className="strip-item">
                <div className="strip-label">Volume</div>
                <div className="strip-value">{currentVolume.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
              </div>
              <div className="strip-item">
                <div className="strip-label">Tools</div>
                <div className="strip-value" style={{ display: 'flex', gap: '10px' }}>
                  <BarChart2 size={18} />
                  <Activity size={18} />
                </div>
              </div>
            </div>

            <div className="chart-box">
              <div ref={chartContainerRef} className="chart-canvas" />
              {isChartLoading && <div className="chart-loading">Updating live BTC candles...</div>}
              {isTrading && activeTrade && (
                <div className={`live-trade-overlay ${activeTrade.direction === 'up' ? 'buy' : 'sell'}`}>
                  <div className="live-trade-main">
                    <div className={`live-trade-badge ${activeTrade.direction === 'up' ? 'buy' : 'sell'}`}>
                      {activeTrade.direction === 'up' ? 'UP' : 'DOWN'}
                    </div>
                    <div className="live-trade-copy">
                      <strong>
                        {activeTrade.direction === 'up' ? 'Buy / Up' : 'Sell / Down'} ${formatNumber(activeTrade.amount)}
                      </strong>
                      <span>
                        BTC/USD ${activeTrade.entryPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} • {activeTrade.leverage}x • {activeTrade.timeframe}
                      </span>
                    </div>
                  </div>
                  <div className="live-trade-stats">
                    <div className="live-trade-stat">
                      <div className="live-trade-stat-label">Timer</div>
                      <div className="live-trade-stat-value">{formatTradeCountdown(tradeCountdown)}</div>
                    </div>
                    <div className="live-trade-stat">
                      <div className="live-trade-stat-label">Live PnL</div>
                      <div className="live-trade-stat-value" style={{ color: (activeUnrealized?.pnl || 0) >= 0 ? '#0ecb81' : '#f6465d' }}>
                        {(activeUnrealized?.pnl || 0) >= 0 ? '+' : ''}${formatNumber(Math.abs(activeUnrealized?.pnl || 0))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {chartError && !isChartLoading && (
                <div className="chart-fallback">
                  <strong>Live BTC chart unavailable</strong>
                  <div>The trade ticket is still available. Reload the page to retry the chart connection.</div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="ai-terminal-shell">
            <div className="ai-terminal-topbar">
              <button className="ai-back-btn" onClick={() => setTradeMode('normal')}>
                Back To Normal Trade
              </button>
              <div className="ai-terminal-head">
                <strong>AI Trade View</strong>
                <span>Green terminal stream for live AI session status</span>
              </div>
            </div>
            <div className="ai-terminal-screen">
              {aiTerminalLines.map((line) => (
                <div key={line} className="ai-terminal-line">{'>'} {line}</div>
              ))}
              <div className="ai-terminal-line">{'>'} SESSION RATE  :: ${((aiSubscription?.autoAmount || 0) / 1000 * 0.0001).toFixed(4)}/sec</div>
              <div className="ai-terminal-line">{'>'} BTC AI CORE   :: SIGNAL LOCKED AND RUNNING</div>
              <div className="ai-terminal-line">{'>'} USER STREAM   :: BALANCE GROWTH IS SLOW AND CONTROLLED</div>
            </div>
          </div>
        )}
      </section>

      <aside className="trade-card trade-panel">
        <div className="panel-title">Trade ticket</div>

        <div className="ticket-pill-row">
          <button className={`ticket-pill ${tradeMode === 'normal' ? 'emphasis' : ''}`} onClick={() => setTradeMode('normal')}>
            Normal
          </button>
          <button
            className={`ticket-pill ${tradeMode === 'ai' ? 'ai' : ''}`}
            onClick={() => {
              setTradeMode('ai');
              if (!hasPaidAiPlan && !aiSubscription?.active) {
                setShowAiModal(true);
              }
            }}
          >
            AI Trade
          </button>
        </div>

        {tradeMode === 'normal' ? (
          <>
            <div className="trade-box">
              <div className="trade-label">Direction</div>
              <div className="direction-grid">
                <button className={`dir-btn buy ${direction === 'up' ? 'active' : ''}`} onClick={() => setDirection('up')} disabled={isTrading}>
                  Buy
                </button>
                <button className={`dir-btn sell ${direction === 'down' ? 'active' : ''}`} onClick={() => setDirection('down')} disabled={isTrading}>
                  Sell
                </button>
              </div>
            </div>

            <div className="trade-box">
              <div className="trade-form-grid">
                <div className="trade-field">
                  <div className="trade-field-head">
                    <div className="trade-label" style={{ marginBottom: 0 }}>Order Amount</div>
                    <div className="trade-field-unit">USDT</div>
                  </div>
                  <input
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    className="amount-input"
                    type="number"
                    min="1"
                    placeholder="100"
                  />
                </div>

                <div>
                  <div className="trade-label">Quick Amount</div>
                  <div className="preset-grid">
                    {AMOUNT_PRESETS.map((preset) => (
                      <button
                        key={preset}
                        className={`preset-btn ${amount === String(preset) ? 'active' : ''}`}
                        onClick={() => setAmount(String(preset))}
                      >
                        ${preset}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="trade-label">Leverage</div>
                  <div className="leverage-grid">
                    {LEVERAGE_OPTIONS.map((option) => (
                      <button
                        key={option}
                        className={`lev-btn ${leverage === option ? 'active' : ''}`}
                        onClick={() => setLeverage(option)}
                      >
                        {option}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="trade-box">
              <div className="trade-label">Order summary</div>
              <div className="info-list">
                <div className="info-row">
                  <span>Entry price</span>
                  <strong>${latestPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                </div>
                <div className="info-row">
                  <span>Projected win at {leverage}x</span>
                  <strong style={{ color: '#0ecb81' }}>${formatNumber(potentialWin)}</strong>
                </div>
                <div className="info-row">
                  <span>Projected loss at {leverage}x</span>
                  <strong style={{ color: '#f6465d' }}>${formatNumber(potentialLoss || 0)}</strong>
                </div>
                <div className="info-row">
                  <span>Leverage rule</span>
                  <strong>Trade win/loss x{leverage}</strong>
                </div>
                <div className="info-row">
                  <span>Trade duration</span>
                  <strong>{selectedTimeframe.label}</strong>
                </div>
                <div className="info-row">
                  <span>Settlement timer</span>
                  <strong>{formatTradeCountdown(selectedTimeframe.tradeSeconds)}</strong>
                </div>
                <div className="info-row">
                  <span>Estimated liquidation</span>
                  <strong>${calculateLiquidationPrice(latestPrice, leverage, direction || 'up').toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="ai-status-card">
            <div className="ai-panel-topbar">
              <button className="ai-back-btn" onClick={() => setTradeMode('normal')}>
                Back To Normal Trade
              </button>
            </div>
            <div className="ai-status-head">
              <div>
                <strong>{aiSubscription?.active ? `${aiSubscription.displayName} AI is active` : hasPaidAiPlan ? `${aiSubscription?.displayName} AI plan is ready` : 'Upgrade to AI Trade'}</strong>
                <span>
                  {aiSubscription?.active
                    ? `Auto-trading BTC with ${formatAiTimeRemaining(aiSubscription.expiresAt)}`
                    : hasPaidAiPlan
                      ? `Plan active for ${formatAiPlanRemaining(aiSubscription?.subscriptionEndsAt)}. ${canLaunchNextAiSession ? 'Today session is ready to start.' : 'Today session was already used.'}`
                      : 'Choose a plan and let the system place BTC trades automatically for this account.'}
                </span>
              </div>
              <div className="ai-badge">{aiSubscription?.active ? aiSubscription.displayName : hasPaidAiPlan ? aiSubscription?.termLabel || 'Subscribed' : 'Inactive'}</div>
            </div>

            <div className="ai-helper-copy">
              AI trading reads recent BTC price movement, decides direction automatically, writes each result into trade history, and updates your USD balance without manual entry.
            </div>

            <div className="trade-box" style={{ marginTop: '16px' }}>
              <div className="trade-label">Start AI session amount</div>
              <input
                value={aiTradeAmount}
                onChange={(event) => setAiTradeAmount(event.target.value)}
                className="amount-input"
                type="number"
                min="10"
                placeholder="100"
              />
              <div className="ai-helper-copy">
                Set the amount when you start AI trading. The system locks it only while the AI session is running.
              </div>
            </div>

            <div className="ai-metrics">
              <div className="ai-metric">
                <div className="ai-metric-label">Current plan</div>
                <div className="ai-metric-value">{hasPaidAiPlan ? `${aiSubscription?.displayName} / ${aiSubscription?.termLabel}` : 'None'}</div>
              </div>
              <div className="ai-metric">
                <div className="ai-metric-label">AI trading amount</div>
                <div className="ai-metric-value">${formatNumber(aiSubscription?.active ? aiSubscription.lockedAmount || 0 : aiTradeAmountValue || 0)}</div>
              </div>
              <div className="ai-metric">
                <div className="ai-metric-label">AI history</div>
                <div className="ai-metric-value">{aiTrades.length}</div>
              </div>
              <div className="ai-metric">
                <div className="ai-metric-label">Current session</div>
                <div className="ai-metric-value" style={{ color: (aiSubscription?.active ? aiSubscription.currentProfit || 0 : 0) >= 0 ? '#0ecb81' : '#f6465d' }}>
                  {(aiSubscription?.active ? aiSubscription.currentProfit || 0 : 0) >= 0 ? '+' : '-'}${formatNumber(Math.abs(aiSubscription?.active ? aiSubscription.currentProfit || 0 : 0))}
                </div>
              </div>
            </div>

            <div className="trade-box" style={{ marginTop: '16px', padding: '16px' }}>
              <div className="trade-label">AI plans</div>
              <div className="info-list">
                <div className="info-row"><span>Normal</span><strong>$30 • 4 hours</strong></div>
                <div className="info-row"><span>Pro</span><strong>$40 • 12 hours</strong></div>
                <div className="info-row"><span>Pro Mex</span><strong>$65.55 • 24 hours</strong></div>
                <div className="info-row"><span>Free AI days</span><strong>{freeAiDays}</strong></div>
                {hasPaidAiPlan && (
                  <>
                    <div className="info-row"><span>Subscription</span><strong>{formatAiPlanRemaining(aiSubscription?.subscriptionEndsAt)}</strong></div>
                    <div className="info-row"><span>Today usage</span><strong>{formatHoursMinutes(aiUsedTodaySeconds)} / {formatHoursMinutes(getAiDailyLimitSeconds(aiSubscription))}</strong></div>
                    <div className="info-row"><span>Today remaining</span><strong>{formatHoursMinutes(aiRemainingTodaySeconds)}</strong></div>
                    <div className="info-row"><span>Today Session</span><strong>{aiSubscription?.active ? 'Running' : canLaunchNextAiSession ? 'Ready' : 'Limit reached'}</strong></div>
                  </>
                )}
              </div>
            </div>

            <div className="ai-mode-actions">
              <button className="ai-open-btn" onClick={() => setShowAiModal(true)}>
                {hasPaidAiPlan ? 'Manage AI Plan' : 'Open AI Trading'}
              </button>
              <button className="ai-open-btn secondary" onClick={() => setTradeMode('ai')}>
                Check AI Trade
              </button>
              {hasPaidAiPlan && !aiSubscription?.active && (
                <button className="ai-open-btn secondary" onClick={handleStartNextAiSession}>
                  Start Today AI Session
                </button>
              )}
              {!hasPaidAiPlan && freeAiDays > 0 && (
                <button className="ai-open-btn secondary" onClick={handleUseFreeAiDay}>
                  Use Free AI Day
                </button>
              )}
              {aiSubscription?.active && (
                <button className="ai-open-btn stop" onClick={handleStopAiTrade}>
                  Stop AI Trading
                </button>
              )}
            </div>
          </div>
        )}

        {isTrading && (
          <div className="result-card win">
            <div style={{ fontWeight: 700 }}>Trade running</div>
            <div className="result-value">{formatTradeCountdown(tradeCountdown)}</div>
            <div>Contract: {activeTimeframeMeta.label}</div>
            <div>Entry: ${activeTrade?.entryPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            <div>Live PnL: <span style={{ color: (activeUnrealized?.pnl || 0) >= 0 ? '#0ecb81' : '#f6465d' }}>{(activeUnrealized?.pnl || 0) >= 0 ? '+' : ''}${formatNumber(Math.abs(activeUnrealized?.pnl || 0))}</span></div>
            <div>Move: <span style={{ color: (activeUnrealized?.directionalMovePct || 0) >= 0 ? '#0ecb81' : '#f6465d' }}>{(activeUnrealized?.directionalMovePct || 0) >= 0 ? '+' : ''}{(activeUnrealized?.directionalMovePct || 0).toFixed(3)}%</span></div>
            <div>Liq: ${activeTrade?.liquidationPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
          </div>
        )}

        {lastTradeResult && (
          <div className={`result-card ${lastTradeResult.won ? 'win' : 'loss'}`}>
            <div style={{ fontWeight: 700 }}>{lastTradeResult.outcomeReason === 'liquidation' ? 'Trade liquidated' : lastTradeResult.won ? 'Trade won' : 'Trade lost'}</div>
            <div className="result-value" style={{ color: lastTradeResult.won ? '#0ecb81' : '#f6465d' }}>
              {lastTradeResult.pnl >= 0 ? '+' : ''}${formatNumber(Math.abs(lastTradeResult.pnl))}
            </div>
            <button className="tf-btn active" onClick={resetTrade}>New trade</button>
          </div>
        )}

        {tradeMode === 'normal' && (
          <button
            className={`trade-submit ${tradeButtonClass}`}
            disabled={!direction || !amount || isTrading || !canTrade}
            onClick={handleTrade}
          >
            {isTrading ? `Trade running (${activeTimeframeMeta.label})...` : !canTrade ? 'Verify Account To Trade' : direction === 'up' ? `Margin Buy ${selectedTimeframe.label}` : direction === 'down' ? `Margin Sell ${selectedTimeframe.label}` : 'Choose direction'}
          </button>
        )}

        {!canTrade && (
          <div className="verify-warning">
            This account is still unverified. Go to Profile, submit your verification form and document photos, then wait for System Admin approval before trading.
          </div>
        )}

        <div className="trade-box">
          <div className="trade-label">Recent trades</div>
          <div className="recent-list">
            {myTrades.slice(0, 4).map((trade) => (
              <div key={trade.id} className="recent-row">
                <div className="recent-cell">
                  <div className="trade-label" style={{ marginBottom: '4px' }}>{trade.pair}</div>
                  <div className="recent-pair">
                    <span className="recent-pair-name">{trade.pair}</span>
                    <span className="recent-dir" style={{ color: trade.direction === 'up' ? '#0ecb81' : '#f6465d' }}>
                      {trade.direction.toUpperCase()}
                    </span>
                    {trade.source === 'ai' && (
                      <span className="recent-dir" style={{ color: '#7fb0ff' }}>
                        AI
                      </span>
                    )}
                  </div>
                </div>
                <div className="recent-cell">
                  <div className="trade-label" style={{ marginBottom: '4px' }}>Amount</div>
                  <div className="recent-value">${trade.amount}</div>
                </div>
                <div className="recent-cell">
                  <div className="trade-label" style={{ marginBottom: '4px' }}>PnL</div>
                  <div className="recent-value" style={{ color: (trade.pnl || 0) >= 0 ? '#0ecb81' : '#f6465d' }}>
                    {(trade.pnl || 0) >= 0 ? '+' : ''}${formatNumber(Math.abs(trade.pnl || 0))}
                  </div>
                </div>
                <div className="recent-cell">
                  <div className="trade-label" style={{ marginBottom: '4px' }}>Close</div>
                  <div className="recent-value" style={{ color: trade.status === 'won' ? '#0ecb81' : '#f6465d' }}>
                    {trade.outcomeReason === 'liquidation' ? 'Liquidated' : trade.timeframe}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
    </>
  );
}
