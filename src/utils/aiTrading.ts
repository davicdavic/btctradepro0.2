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
  discountPct: number;
}> = [
  { key: '1m', label: '1 Month', months: 1, discountPct: 0 },
  { key: '3m', label: '3 Months', months: 3, discountPct: 1 },
  { key: '6m', label: '6 Months', months: 6, discountPct: 3 },
  { key: '1y', label: '1 Year', months: 12, discountPct: 5 },
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

function addMonths(baseDate: Date, months: number) {
  const next = new Date(baseDate);
  next.setMonth(next.getMonth() + months);
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

export function canStartAiSession(subscription?: AiTradingSubscription) {
  if (!subscription || !isAiSubscriptionActive(subscription) || subscription.active) return false;
  if (!subscription.lastSessionStartedAt) return true;
  return toAiSessionDateKey(subscription.lastSessionStartedAt) !== toAiSessionDateKey(Date.now());
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
    : addMonths(new Date(), duration.months).toISOString();
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
