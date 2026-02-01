import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DollarSign, Users } from "lucide-react";
import patternBg from "@/assets/pattern-bg.png";

const CostComparisonSection = () => {
  return (
    <section className="py-32 neural-bg relative overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <DollarSign className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Resource Optimization</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8 tracking-tighter leading-tight">
            OPTIMIZE YOUR <br />
            <span className="text-primary italic">COMPANY'S RESOURCES</span>
          </h2>
          <p className="text-xl text-white/60 font-medium leading-relaxed">
            Stop wasting time and money on manual screenings. scale your hiring with AI efficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Cost Comparison - Refined Glassmorphism */}
          <div className="glass-dark rounded-[3rem] p-10 border-white/10 shadow-2xl group hover:border-primary/30 transition-all duration-500">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white tracking-tight">Finances</h3>
            </div>

            <div className="space-y-10">
              {/* Human Cost */}
              <div className="space-y-4">
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Human Interviewer</p>
                <div className="flex items-center justify-between gap-6 p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex gap-2">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-6 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <span className="text-white/20 text-[10px]">$</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-heading font-black text-white">$20</p>
                    <p className="text-white/30 text-[10px] font-bold uppercase tracking-tighter">PER INTERVIEW</p>
                  </div>
                </div>
              </div>

              {/* AI Cost - Premium Highlight */}
              <div className="space-y-4">
                <p className="text-primary text-xs font-black uppercase tracking-widest">Human + YalHire AI Agents</p>
                <div className="flex items-center justify-between gap-6 p-6 rounded-2xl bg-primary/5 border border-primary/20 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex gap-2 relative z-10">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-6 h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${i < 1 ? "bg-primary shadow-lg shadow-primary/40" : "bg-white/5"
                          }`}
                      >
                        <span className={i < 1 ? "text-white text-[10px] font-bold" : "text-white/10 text-[10px]"}>$</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-right relative z-10">
                    <p className="text-4xl font-heading font-black text-primary">$0.80</p>
                    <p className="text-primary/50 text-[10px] font-bold uppercase tracking-tighter">PER INTERVIEW</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Time & Resources - Refined Glassmorphism */}
          <div className="glass-dark rounded-[3rem] p-10 border-white/10 shadow-2xl group hover:border-primary/30 transition-all duration-500">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white tracking-tight">Time & Resources</h3>
            </div>

            <div className="space-y-10">
              {/* Human */}
              <div className="space-y-4">
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Manual Recruiting Team</p>
                <div className="flex items-center justify-between gap-6 p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex-1 h-20 rounded-xl bg-white/5 flex items-center justify-center">
                    <span className="text-5xl font-heading font-black text-white/20">1</span>
                  </div>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-tight w-24">Concurrent <br />Interview</p>
                </div>
              </div>

              {/* AI - Premium Power */}
              <div className="space-y-4">
                <p className="text-primary text-xs font-black uppercase tracking-widest">Autonomous AI Agents</p>
                <div className="flex items-center justify-between gap-6 p-6 rounded-2xl bg-primary shadow-2xl shadow-primary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  <div className="flex-1 h-20 rounded-xl bg-white/10 flex items-center justify-center relative z-10">
                    <span className="text-6xl font-heading font-black text-white">∞</span>
                  </div>
                  <p className="text-white/70 text-[10px] font-black uppercase tracking-widest leading-tight w-24 relative z-10">Infinite <br />Concurrrency</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-24">
          <Button asChild size="lg" className="premium-gradient text-white rounded-2xl px-12 py-8 font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all border-0 shadow-2xl shadow-primary/20">
            <Link to="/pricing">Maximize Efficiency Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CostComparisonSection;
