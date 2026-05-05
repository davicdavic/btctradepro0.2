import type { AiPlanTier, AiTradingSubscription } from '../types';

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

export function getAiPlanConfig(tier: AiPlanTier) {
  return AI_PLAN_CATALOG.find((plan) => plan.tier === tier) ?? AI_PLAN_CATALOG[0];
}

export function buildAiSubscription(tier: AiPlanTier, autoAmount: number): AiTradingSubscription {
  const config = getAiPlanConfig(tier);
  const purchasedAt = new Date().toISOString();
  const expiresAt = new Date(Date.now() + config.tradeWindowHours * 60 * 60 * 1000).toISOString();

  return {
    tier: config.tier,
    displayName: config.name,
    price: config.price,
    tradeWindowHours: config.tradeWindowHours,
    autoAmount,
    purchasedAt,
    expiresAt,
    lastAccruedAt: purchasedAt,
    lockedAmount: autoAmount,
    currentProfit: 0,
    totalTrades: 0,
    totalProfit: 0,
    active: true,
  };
}

export function getAiProfitPerSecond(amount: number) {
  return (amount / 1000) * 0.0001;
}
