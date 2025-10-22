export type BillingCycle = 'monthly' | 'yearly';
export type Plan = 'premium' | 'pro' | 'enterprise';

const env = import.meta.env;

const map: Record<Plan, { monthly: string | undefined; yearly: string | undefined }> = {
  premium: {
    monthly: env.VITE_PAYMENT_PREMIUM_MONTHLY_URL as string | undefined,
    yearly: env.VITE_PAYMENT_PREMIUM_YEARLY_URL as string | undefined,
  },
  pro: {
    monthly: env.VITE_PAYMENT_PRO_MONTHLY_URL as string | undefined,
    yearly: env.VITE_PAYMENT_PRO_YEARLY_URL as string | undefined,
  },
  enterprise: {
    monthly: env.VITE_PAYMENT_ENTERPRISE_MONTHLY_URL as string | undefined,
    yearly: env.VITE_PAYMENT_ENTERPRISE_YEARLY_URL as string | undefined,
  },
};

export function getPaymentUrl(plan: Plan, cycle: BillingCycle): string | null {
  const url = map[plan]?.[cycle];
  if (url && /^https?:\/\//i.test(url)) return url;
  return null;
}
