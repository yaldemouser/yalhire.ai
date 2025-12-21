import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { stripeConfig } from "@/config/stripe";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      price: 0,
      credits: 5,
      costPerInterview: "$0",
      popular: false,
      features: {
        "One-way Interview": true,
        "Two-way Interview": true,
        "AI Coding Interviewer": true,
        "AI Phone Screener": true,
        "AI Resume Screener": true,
        "Users": "1",
        "Active job posts": "1",
        "Video retention": "7 days",
        "Interview duration": "10 mins",
        "AI Voices": "1",
      },
    },
    {
      name: "Lite",
      price: isAnnual ? 99 : 119,
      credits: 20,
      costPerInterview: "~$5",
      popular: false,
      features: {
        "One-way Interview": true,
        "Two-way Interview": false,
        "AI Coding Interviewer": false,
        "AI Phone Screener": true,
        "AI Resume Screener": true,
        "Users": "1",
        "Active job posts": "1",
        "Video retention": "15 days",
        "Interview duration": "10 mins",
        "AI Voices": "1",
      },
    },
    {
      name: "Starter",
      price: isAnnual ? 299 : 359,
      credits: 70,
      costPerInterview: "~$4.25",
      popular: false,
      features: {
        "One-way Interview": true,
        "Two-way Interview": true,
        "AI Coding Interviewer": true,
        "AI Phone Screener": true,
        "AI Resume Screener": true,
        "Users": "2",
        "Active job posts": "5",
        "Video retention": "30 days",
        "Interview duration": "15 mins",
        "AI Voices": "2",
      },
    },
    {
      name: "Growth",
      price: isAnnual ? 1999 : 2399,
      credits: 600,
      costPerInterview: "~$3.50",
      popular: true,
      features: {
        "One-way Interview": true,
        "Two-way Interview": true,
        "AI Coding Interviewer": true,
        "AI Phone Screener": true,
        "AI Resume Screener": true,
        "Users": "5",
        "Active job posts": "20",
        "Video retention": "45 days",
        "Interview duration": "20 mins",
        "AI Voices": "3",
      },
    },
    {
      name: "Pro",
      price: isAnnual ? 4999 : 5999,
      credits: 5000,
      costPerInterview: "~$1",
      popular: false,
      features: {
        "One-way Interview": true,
        "Two-way Interview": true,
        "AI Coding Interviewer": true,
        "AI Phone Screener": true,
        "AI Resume Screener": true,
        "Users": "10",
        "Active job posts": "Unlimited",
        "Video retention": "90 days",
        "Interview duration": "45 mins",
        "AI Voices": "5",
      },
    },
  ];

  return (
    <section className="py-24 bg-secondary/30" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-primary font-medium mb-2">Heavy on the features, but</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            light on your <span className="text-gradient-lime">budget</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-8">
            Pricing Plans
          </h3>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
              Pay monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
              Pay annually & Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-full mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-6 transition-all duration-300 ${plan.popular
                ? "bg-primary text-primary-foreground scale-105 shadow-glow"
                : "bg-card border border-border hover:border-primary/30"
                }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/20 text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h4 className="font-heading font-semibold text-xl mb-2">{plan.name}</h4>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-heading font-bold">${plan.price}</span>
                  <span className={plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}>
                    /month
                  </span>
                </div>
                <p className={`text-sm mt-2 ${plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {isAnnual ? "Billed yearly" : "Billed monthly"}
                </p>
                <div className={`mt-2 inline-block px-3 py-1 rounded-full text-xs font-medium ${plan.popular ? "bg-primary-foreground/20" : "bg-primary/10 text-primary"
                  }`}>
                  {plan.credits} credits/mo. • {plan.costPerInterview}/interview
                </div>
              </div>

              import {stripeConfig} from "@/config/stripe";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

              // ... (plans definition remains the same)

              return (
              // ... (rest of the component)
              <Button
                asChild
                className={`w-full mb-6 ${plan.popular
                  ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  : "bg-primary text-primary-foreground hover:bg-lime-dark"
                  }`}
              >
                <a
                  href={stripeConfig.plans[plan.name]?.[isAnnual ? "annual" : "monthly"] || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Now
                </a>
              </Button>

              <div className="space-y-3">
                {Object.entries(plan.features).map(([feature, value]) => (
                  <div key={feature} className="flex items-center justify-between text-sm">
                    <span className={plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}>
                      {feature}
                    </span>
                    {typeof value === "boolean" ? (
                      value ? (
                        <Check className={`w-4 h-4 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/40" />
                      )
                    ) : (
                      <span className="font-medium">{value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise */}
        <div className="max-w-3xl mx-auto mt-12">
          <div className="glass rounded-3xl p-8 text-center">
            <h4 className="font-heading font-bold text-2xl mb-2">Enterprise</h4>
            <p className="text-muted-foreground mb-4">Custom solutions for large organizations</p>
            <p className="text-lg font-medium mb-6">10k+ credits/mo. • Custom pricing</p>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
