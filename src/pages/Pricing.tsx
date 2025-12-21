import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, X, Calculator, TrendingUp } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { stripeConfig } from "@/config/stripe";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [activeTab, setActiveTab] = useState<"calculator" | "roi">("calculator");

  // Calculator state
  const [videoInterviews, setVideoInterviews] = useState(50);
  const [phoneScreenings, setPhoneScreenings] = useState(50);
  const [resumeScreenings, setResumeScreenings] = useState(500);
  const [codingInterviews, setCodingInterviews] = useState(25);

  const creditsRequired =
    videoInterviews * 1 +
    phoneScreenings * 0.5 +
    resumeScreenings * 0.25 +
    codingInterviews * 1;

  const plans = [
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
        "Multilingual": false,
        "Integrity check": false,
        "Bulk invite": false,
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
        "Multilingual": true,
        "Integrity check": "Limited",
        "Bulk invite": false,
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
        "Multilingual": true,
        "Integrity check": true,
        "Bulk invite": true,
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
        "Multilingual": true,
        "Integrity check": true,
        "Bulk invite": true,
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        {/* Hero */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <p className="text-sm text-primary font-medium mb-2">Heavy on the features, but</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
              light on your <span className="text-gradient-lime">budget</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-heading font-semibold mb-8">
              Pricing Plans
            </h2>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-sm ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
                Pay monthly
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-primary"
              />
              <span className={`text-sm ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
                Pay annually & Save 20%+ all credits upfront
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
                    <h3 className="font-heading font-semibold text-xl mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-heading font-bold">${plan.price}</span>
                      <span className={plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}>
                        /month
                      </span>
                    </div>
                    <p className={`text-sm mt-2 ${plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                      {isAnnual ? "Billed yearly. All credits granted upfront" : "Billed monthly"}
                    </p>
                    <div className={`mt-2 inline-block px-3 py-1 rounded-full text-xs font-medium ${plan.popular ? "bg-primary-foreground/20" : "bg-primary/10 text-primary"
                      }`}>
                      {plan.credits} credits/mo. • {plan.costPerInterview}/interview
                    </div>
                  </div>

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

        {/* Calculator Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            {/* Tab Toggle */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-full bg-card border border-border p-1">
                <button
                  onClick={() => setActiveTab("calculator")}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === "calculator"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <Calculator className="w-4 h-4" />
                  Credits Calculator
                </button>
                <button
                  onClick={() => setActiveTab("roi")}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === "roi"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <TrendingUp className="w-4 h-4" />
                  ROI Calculator
                </button>
              </div>
            </div>

            {activeTab === "calculator" && (
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Sliders */}
                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="font-medium">Total AI Video Interviews</label>
                        <span className="text-primary font-bold">{videoInterviews}</span>
                      </div>
                      <Slider
                        value={[videoInterviews]}
                        onValueChange={(v) => setVideoInterviews(v[0])}
                        max={200}
                        step={1}
                        className="[&_[role=slider]]:bg-primary"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="font-medium">Total AI Phone Screenings</label>
                        <span className="text-primary font-bold">{phoneScreenings}</span>
                      </div>
                      <Slider
                        value={[phoneScreenings]}
                        onValueChange={(v) => setPhoneScreenings(v[0])}
                        max={200}
                        step={1}
                        className="[&_[role=slider]]:bg-primary"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="font-medium">Total AI Resume Screenings</label>
                        <span className="text-primary font-bold">{resumeScreenings}</span>
                      </div>
                      <Slider
                        value={[resumeScreenings]}
                        onValueChange={(v) => setResumeScreenings(v[0])}
                        max={1000}
                        step={10}
                        className="[&_[role=slider]]:bg-primary"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="font-medium">Total AI Coding Interviews</label>
                        <span className="text-primary font-bold">{codingInterviews}</span>
                      </div>
                      <Slider
                        value={[codingInterviews]}
                        onValueChange={(v) => setCodingInterviews(v[0])}
                        max={100}
                        step={1}
                        className="[&_[role=slider]]:bg-primary"
                      />
                    </div>
                  </div>

                  {/* Results */}
                  <div className="glass rounded-3xl p-8">
                    <div className="text-center mb-8">
                      <p className="text-muted-foreground mb-2">Credits required</p>
                      <p className="text-5xl font-heading font-bold text-primary">{creditsRequired}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <span className="text-muted-foreground">AI Resume Screener</span>
                        <span className="font-medium">0.25 credits/Screening</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <span className="text-muted-foreground">AI Phone Screener</span>
                        <span className="font-medium">0.5 credits/Screening</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <span className="text-muted-foreground">AI Video Interviewer</span>
                        <span className="font-medium">1 credit/Interview</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="text-muted-foreground">AI Coding Interviewer</span>
                        <span className="font-medium">1 credit/Interview</span>
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full mt-8 bg-primary text-primary-foreground hover:bg-lime-dark"
                    >
                      <a
                        href={stripeConfig.buyCreditsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Purchase Credits
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "roi" && (
              <div className="max-w-2xl mx-auto text-center">
                <div className="glass rounded-3xl p-12">
                  <h3 className="text-2xl font-heading font-bold mb-4">Calculate Your ROI</h3>
                  <p className="text-muted-foreground mb-8">
                    See how much time and money you can save with YalHire's AI recruiting software.
                  </p>
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div>
                      <p className="text-4xl font-heading font-bold text-primary">96%</p>
                      <p className="text-sm text-muted-foreground">Cost Reduction</p>
                    </div>
                    <div>
                      <p className="text-4xl font-heading font-bold text-primary">85%</p>
                      <p className="text-sm text-muted-foreground">Time Saved</p>
                    </div>
                    <div>
                      <p className="text-4xl font-heading font-bold text-primary">3x</p>
                      <p className="text-sm text-muted-foreground">Faster Hiring</p>
                    </div>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-lime-dark">
                    Get Custom ROI Analysis
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
