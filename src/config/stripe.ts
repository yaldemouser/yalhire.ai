export interface PlanLinks {
    monthly: string;
    annual: string;
}

export interface StripeConfig {
    plans: {
        [key: string]: PlanLinks;
    };
    candidatePlans: {
        [key: string]: PlanLinks;
    };
    enterpriseContactUrl: string;
    buyCreditsUrl: string;
}

export const stripeConfig: StripeConfig = {
    plans: {
        Free: {
            monthly: "/signup",
            annual: "/signup",
        },
        Lite: {
            monthly: import.meta.env.VITE_STRIPE_LITE_MONTHLY || "https://buy.stripe.com/placeholder_lite_monthly",
            annual: import.meta.env.VITE_STRIPE_LITE_ANNUAL || "https://buy.stripe.com/placeholder_lite_annual",
        },
        Starter: {
            monthly: import.meta.env.VITE_STRIPE_STARTER_MONTHLY || "https://buy.stripe.com/placeholder_starter_monthly",
            annual: import.meta.env.VITE_STRIPE_STARTER_ANNUAL || "https://buy.stripe.com/placeholder_starter_annual",
        },
        Growth: {
            monthly: import.meta.env.VITE_STRIPE_GROWTH_MONTHLY || "https://buy.stripe.com/placeholder_growth_monthly",
            annual: import.meta.env.VITE_STRIPE_GROWTH_ANNUAL || "https://buy.stripe.com/placeholder_growth_annual",
        },
        Pro: {
            monthly: import.meta.env.VITE_STRIPE_PRO_MONTHLY || "https://buy.stripe.com/placeholder_pro_monthly",
            annual: import.meta.env.VITE_STRIPE_PRO_ANNUAL || "https://buy.stripe.com/placeholder_pro_annual",
        },
    },
    candidatePlans: {
        Lite: {
            monthly: import.meta.env.VITE_STRIPE_CANDIDATE_LITE_MONTHLY || "https://buy.stripe.com/test_14A3cxd9ofV42843Ng4gg00",
            annual: import.meta.env.VITE_STRIPE_CANDIDATE_LITE_ANNUAL || "https://buy.stripe.com/placeholder_candidate_lite_annual",
        },
        Starter: {
            monthly: import.meta.env.VITE_STRIPE_CANDIDATE_STARTER_MONTHLY || "https://buy.stripe.com/placeholder_candidate_starter_monthly",
            annual: import.meta.env.VITE_STRIPE_CANDIDATE_STARTER_ANNUAL || "https://buy.stripe.com/placeholder_candidate_starter_annual",
        },
        Growth: {
            monthly: import.meta.env.VITE_STRIPE_CANDIDATE_GROWTH_MONTHLY || "https://buy.stripe.com/placeholder_candidate_growth_monthly",
            annual: import.meta.env.VITE_STRIPE_CANDIDATE_GROWTH_ANNUAL || "https://buy.stripe.com/placeholder_candidate_growth_annual",
        },
        Pro: {
            monthly: import.meta.env.VITE_STRIPE_CANDIDATE_PRO_MONTHLY || "https://buy.stripe.com/placeholder_candidate_pro_monthly",
            annual: import.meta.env.VITE_STRIPE_CANDIDATE_PRO_ANNUAL || "https://buy.stripe.com/placeholder_candidate_pro_annual",
        },
    },
    enterpriseContactUrl: "/contact",
    buyCreditsUrl: import.meta.env.VITE_STRIPE_BUY_CREDITS || "https://buy.stripe.com/placeholder_credits",
};
