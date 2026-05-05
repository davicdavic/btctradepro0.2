import type { AiPlanDurationKey, AiPlanTier, AiTradingSubscription } from '../types';

export const AI_PLAN_CATALOG: Array<{
  tier: AiPlanTier;
  name: string;
  price: number;
  tradeWindowHours: number;
  leverage: number;
  description: string;
}> = [
  {
    tier: 'normal',
    name: 'Normal',
    price: 30,
    tradeWindowHours: 4,
    leverage: 1,
    description: 'Entry AI plan for shorter sessions and lighter BTC momentum trading.',
  },
  {
    tier: 'pro',
    name: 'Pro',
    price: 40,
    tradeWindowHours: 12,
    leverage: 2,
    description: 'Longer monitoring window with stronger position sizing and more signals.',
  },
  {
    tier: 'promex',
    name: 'Pro Mex',
    price: 65.55,
    tradeWindowHours: 24,
    leverage: 3,
    description: 'Full-day auto trading plan with the deepest BTC trend tracking.',
  },
];

export const AI_PLAN_DURATIONS: Array<{
  key: AiPlanDurationKey;
  label: string;
  months: number;
  days: number;
  discountPct: number;
}> = [
  { key: '1m', label: '1 Month', months: 1, days: 30, discountPct: 0 },
  { key: '3m', label: '3 Months', months: 3, days: 90, discountPct: 1 },
  { key: '6m', label: '6 Months', months: 6, days: 180, discountPct: 3 },
  { key: '1y', label: '1 Year', months: 12, days: 365, discountPct: 5 },
];

export function getAiPlanConfig(tier: AiPlanTier) {
  return AI_PLAN_CATALOG.find((plan) => plan.tier === tier) ?? AI_PLAN_CATALOG[0];
}

export function getAiDurationConfig(key: AiPlanDurationKey) {
  return AI_PLAN_DURATIONS.find((duration) => duration.key === key) ?? AI_PLAN_DURATIONS[0];
}

export function calculateAiPlanTotal(monthlyPrice: number, termMonths: number, discountPct: number) {
  const baseTotal = monthlyPrice * termMonths;
  const discountValue = baseTotal * (discountPct / 100);
  return Number((baseTotal - discountValue).toFixed(2));
}

function addDays(baseDate: Date, days: number) {
  const next = new Date(baseDate);
  next.setDate(next.getDate() + days);
  return next;
}

export function toAiSessionDateKey(value: string | number | Date) {
  const date = new Date(value);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function isAiSubscriptionActive(subscription?: AiTradingSubscription) {
  if (!subscription) return false;
  return new Date(subscription.subscriptionEndsAt).getTime() > Date.now();
}

export function getAiDailyLimitSeconds(subscription?: AiTradingSubscription) {
  return (subscription?.tradeWindowHours || 0) * 60 * 60;
}

export function getAiDailyUsedSeconds(subscription?: AiTradingSubscription, now = Date.now()) {
  if (!subscription) return 0;
  if (!subscription.dailyUsageDate || subscription.dailyUsageDate !== toAiSessionDateKey(now)) {
    return 0;
  }
  return subscription.dailyUsedSeconds || 0;
}

export function getAiRemainingSecondsForToday(subscription?: AiTradingSubscription, now = Date.now()) {
  if (!subscription) return 0;
  return Math.max(0, getAiDailyLimitSeconds(subscription) - getAiDailyUsedSeconds(subscription, now));
}

export function canStartAiSession(subscription?: AiTradingSubscription) {
  if (!subscription || !isAiSubscriptionActive(subscription) || subscription.active) return false;
  return getAiRemainingSecondsForToday(subscription) > 0;
}

export function buildAiSubscription(
  tier: AiPlanTier,
  autoAmount: number,
  termKey: AiPlanDurationKey,
  options?: { priceOverride?: number; freeAccess?: boolean; subscriptionHoursOverride?: number },
): AiTradingSubscription {
  const config = getAiPlanConfig(tier);
  const duration = getAiDurationConfig(termKey);
  const purchasedAt = new Date().toISOString();
  const expiresAt = new Date(Date.now() + config.tradeWindowHours * 60 * 60 * 1000).toISOString();
  const subscriptionEndsAt = options?.subscriptionHoursOverride
    ? new Date(Date.now() + options.subscriptionHoursOverride * 60 * 60 * 1000).toISOString()
    : addDays(new Date(), duration.days).toISOString();
  const totalPrice = options?.priceOverride ?? calculateAiPlanTotal(config.price, duration.months, duration.discountPct);

  return {
    tier: config.tier,
    displayName: config.name,
    monthlyPrice: config.price,
    price: totalPrice,
    tradeWindowHours: config.tradeWindowHours,
    termKey: duration.key,
    termLabel: duration.label,
    termMonths: duration.months,
    discountPct: duration.discountPct,
    autoAmount,
    purchasedAt,
    subscriptionEndsAt,
    expiresAt,
    lastSessionStartedAt: purchasedAt,
    lastAccruedAt: purchasedAt,
    dailyUsageDate: toAiSessionDateKey(purchasedAt),
    dailyUsedSeconds: 0,
    lockedAmount: autoAmount,
    currentProfit: 0,
    totalTrades: 0,
    totalProfit: 0,
    totalSessionDays: 1,
    freeAccess: options?.freeAccess || false,
    active: true,
  };
}

export function getAiProfitPerSecond(amount: number) {
  return (amount / 1000) * 0.0001;
}
