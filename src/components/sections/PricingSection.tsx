import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { stripeConfig } from "@/config/stripe";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const [userType, setUserType] = useState<"employer" | "candidate">("employer");

  const employerPlans = [
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

  const candidatePlans = [
    {
      name: "Lite",
      price: 5,
      credits: 20,
      costPerInterview: "~$0.25",
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
      price: 9,
      credits: 70,
      costPerInterview: "~$0.13",
      popular: false,
      features: {
        "One-way Interview": true,
        "Two-way Interview": true,
        "AI Coding Interviewer": true,
        "AI Phone Screener": true,
        "AI Resume Screener": true,
        "Users": "1",
        "Active job posts": "5",
        "Video retention": "30 days",
        "Interview duration": "15 mins",
        "AI Voices": "2",
      },
    },
    {
      name: "Growth",
      price: 19,
      credits: 600,
      costPerInterview: "~$0.03",
      popular: true,
      features: {
        "One-way Interview": true,
        "Two-way Interview": true,
        "AI Coding Interviewer": true,
        "AI Phone Screener": true,
        "AI Resume Screener": true,
        "Users": "1",
        "Active job posts": "20",
        "Video retention": "45 days",
        "Interview duration": "20 mins",
        "AI Voices": "3",
      },
    },
    {
      name: "Pro",
      price: 29,
      credits: 5000,
      costPerInterview: "~$0.01",
      popular: false,
      features: {
        "One-way Interview": true,
        "Two-way Interview": true,
        "AI Coding Interviewer": true,
        "AI Phone Screener": true,
        "AI Resume Screener": true,
        "Users": "1",
        "Active job posts": "Unlimited",
        "Video retention": "90 days",
        "Interview duration": "45 mins",
        "AI Voices": "5",
      },
    },
  ];

  const currentPlans = userType === "employer" ? employerPlans : candidatePlans;

  return (
    <section className="py-32 mesh-gradient relative border-t border-border" id="pricing">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6 backdrop-blur-sm">
            <Check className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Transparent Pricing</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 tracking-tighter text-gradient leading-tight">
            PLANS THAT SCALE <br />
            <span className="text-primary italic">WITH YOUR SUCCESS</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed mb-12">
            Choose the perfect plan for your recruitment needs. From startups to global enterprises.
          </p>

          {/* User Type Toggle - Modernized */}
          <div className="flex justify-center mb-10">
            <div className="bg-white/40 glass-morphism p-1.5 rounded-2xl inline-flex shadow-sm border-white/20">
              <button
                onClick={() => setUserType("employer")}
                className={`px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 ${userType === "employer"
                  ? "premium-gradient text-white shadow-lg"
                  : "text-foreground/60 hover:text-foreground"
                  }`}
              >
                FOR EMPLOYERS
              </button>
              <button
                onClick={() => setUserType("candidate")}
                className={`px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 ${userType === "candidate"
                  ? "premium-gradient text-white shadow-lg"
                  : "text-foreground/60 hover:text-foreground"
                  }`}
              >
                FOR CANDIDATES
              </button>
            </div>
          </div>

          {/* Billing Toggle - Refined */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <span className={`text-sm font-bold transition-colors ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
              MONTHLY
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-primary shadow-sm"
            />
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold transition-colors ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
                ANNUALLY
              </span>
              <span className="px-2 py-0.5 rounded-md bg-primary text-[10px] font-black text-white">SAVE 20%</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards - Premium Grid */}
        <div className={`grid gap-8 max-w-7xl mx-auto justify-center md:grid-cols-2 ${currentPlans.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'}`}>
          {currentPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2.5rem] p-8 transition-all duration-500 flex flex-col group relative ${plan.popular
                ? "glass-morphism border-primary/20 scale-105 shadow-2xl z-20"
                : "glass-morphism border-white/40 hover:border-primary/20 hover:scale-[1.02] shadow-xl"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-[10px] font-black tracking-[0.2em] px-4 py-2 rounded-full uppercase shadow-lg shadow-primary/20">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-10">
                <h4 className="font-heading font-black text-2xl mb-4 group-hover:text-primary transition-colors text-foreground">{plan.name}</h4>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-heading font-black tracking-tighter text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground font-bold text-sm">/mo</span>
                </div>
                <p className="text-xs font-bold text-muted-foreground mt-2 uppercase tracking-widest">
                  {isAnnual ? "Billed yearly" : "Billed monthly"}
                </p>
              </div>

              <div className="flex-1 space-y-5 mb-10">
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 text-center">
                  <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">{plan.credits} CREDITS</p>
                  <p className="text-[10px] font-bold text-muted-foreground">{plan.costPerInterview}/interview</p>
                </div>

                <div className="space-y-4">
                  {Object.entries(plan.features).map(([feature, value]) => (
                    <div key={feature} className="flex items-center justify-between text-xs font-bold">
                      <span className="text-foreground/60">{feature}</span>
                      {typeof value === "boolean" ? (
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${value ? "bg-primary/10" : "bg-muted/10 opacity-20"}`}>
                          {value ? <Check className="w-3 h-3 text-primary" /> : <X className="w-3 h-3 text-muted-foreground" />}
                        </div>
                      ) : (
                        <span className="text-primary lowercase">{value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <Button
                asChild
                className={`w-full py-8 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-300 ${plan.popular
                  ? "premium-gradient text-white shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 border-0"
                  : "bg-white/40 glass-morphism border-white/60 text-foreground hover:bg-primary hover:text-white hover:border-transparent hover:shadow-lg active:scale-95"
                  }`}
              >
                <a
                  href={(userType === 'employer' ? stripeConfig.plans[plan.name] : stripeConfig.candidatePlans[plan.name])?.[isAnnual ? "annual" : "monthly"] || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Enterprise - Professional Card */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="neural-bg rounded-[3rem] p-12 text-center border border-white/10 shadow-3xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <h4 className="font-heading font-black text-3xl mb-4 text-white">ENTERPRISE SOLUTIONS</h4>
              <p className="text-white/60 font-medium mb-10 max-w-lg mx-auto leading-relaxed">
                Custom credits, dedicated support, and advanced integrations for large scale operations.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
                <span className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs tracking-widest uppercase">Unlimited Users</span>
                <span className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs tracking-widest uppercase">Dedicated Manager</span>
                <span className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs tracking-widest uppercase">SSO Integration</span>
              </div>
              <Button size="lg" className="premium-gradient text-white rounded-2xl px-12 py-8 font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all border-0 shadow-2xl shadow-primary/20">
                Contact Our Sales Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
