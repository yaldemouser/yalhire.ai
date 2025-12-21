import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DollarSign, Users } from "lucide-react";
import patternBg from "@/assets/pattern-bg.png";

const CostComparisonSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-dark opacity-95"
        style={{
          backgroundImage: `url(${patternBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/80 to-dark/90" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Optimize your company's <span className="text-gradient-lime">resources</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Cost Comparison */}
          <div className="glass-dark rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <DollarSign className="w-6 h-6 text-primary" />
              <h3 className="font-heading font-semibold text-xl text-white">Finances</h3>
            </div>

            <div className="space-y-6">
              {/* Human Cost */}
              <div className="space-y-3">
                <p className="text-white/60 text-sm">Human Interviewer</p>
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-8 h-12 rounded bg-white/20 flex items-center justify-center">
                        <span className="text-white/60 text-xs">$</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-heading font-bold text-white">$20</p>
                    <p className="text-white/40 text-sm">per interview</p>
                  </div>
                </div>
              </div>

              {/* AI Cost */}
              <div className="space-y-3">
                <p className="text-primary text-sm font-medium">Human + YalHire AI</p>
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-8 h-12 rounded flex items-center justify-center ${i < 1 ? "bg-primary" : "bg-white/10"
                          }`}
                      >
                        <span className={i < 1 ? "text-primary-foreground text-xs" : "text-white/30 text-xs"}>$</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-heading font-bold text-primary">$0.80</p>
                    <p className="text-white/40 text-sm">per interview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Time & Resources */}
          <div className="glass-dark rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="font-heading font-semibold text-xl text-white">Time & Resources</h3>
            </div>

            <div className="space-y-6">
              {/* Human */}
              <div className="space-y-3">
                <p className="text-white/60 text-sm">Human Interviewer</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                    <span className="text-4xl font-heading font-bold text-white">1</span>
                  </div>
                  <p className="text-white/40 text-sm">Concurrent interview</p>
                </div>
              </div>

              {/* AI */}
              <div className="space-y-3">
                <p className="text-primary text-sm font-medium">YalHire AI Interviewer</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-16 rounded-xl bg-primary flex items-center justify-center glow-lime-sm">
                    <span className="text-4xl font-heading font-bold text-primary-foreground">∞</span>
                  </div>
                  <p className="text-white/40 text-sm">Concurrent interviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-lime-dark font-semibold px-8 py-6 text-lg">
            <Link to="/pricing">Buy Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CostComparisonSection;
