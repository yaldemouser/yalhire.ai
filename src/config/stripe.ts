export interface PlanLinks {
    monthly: string;
    annual: string;
}

export interface StripeConfig {
    plans: {
        [key: string]: PlanLinks;
    };
    enterpriseContactUrl: string;
    buyCreditsUrl: string;
}

export const stripeConfig: StripeConfig = {
    plans: {
        Lite: {
            monthly: "https://buy.stripe.com/placeholder_lite_monthly",
            annual: "https://buy.stripe.com/placeholder_lite_annual",
        },
        Starter: {
            monthly: "https://buy.stripe.com/placeholder_starter_monthly",
            annual: "https://buy.stripe.com/placeholder_starter_annual",
        },
        Growth: {
            monthly: "https://buy.stripe.com/placeholder_growth_monthly",
            annual: "https://buy.stripe.com/placeholder_growth_annual",
        },
        Pro: {
            monthly: "https://buy.stripe.com/placeholder_pro_monthly",
            annual: "https://buy.stripe.com/placeholder_pro_annual",
        },
    },
    enterpriseContactUrl: "/contact",
    buyCreditsUrl: "https://buy.stripe.com/placeholder_credits",
};
