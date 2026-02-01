import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-40 relative overflow-hidden border-t border-border">
      {/* Background decorations - High-End Aesthetic */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px] animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/5 border border-primary/10 mb-10 backdrop-blur-sm">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Get Started Today</span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-foreground mb-10 tracking-tighter leading-[0.9]">
            RECRUITING <br />
            <span className="text-primary italic">EVOLVED.</span>
          </h2>

          <p className="text-2xl text-muted-foreground font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Autonomous AI agents for world-class recruitment. <br />
            Starting at only <span className="text-primary font-black">$1.00</span> per interview.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Button
              asChild
              className="premium-gradient text-white rounded-[2rem] px-12 py-10 font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all shadow-2xl shadow-primary/20 border-0"
            >
              <Link to="/pricing" className="inline-flex items-center gap-3">
                Purchase Credits
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <Button
              variant="outline"
              className="bg-white/40 glass-morphism border-white/60 text-foreground rounded-[2rem] px-12 py-10 font-black uppercase tracking-[0.2em] text-sm hover:bg-primary hover:text-white hover:border-transparent transition-all duration-500 shadow-xl border-0"
            >
              <MessageSquare className="w-4 h-4 mr-3" />
              Chat with Sales
            </Button>
          </div>

          {/* Rating - Premium Badge */}
          <div className="mt-20 inline-flex items-center gap-6 px-10 py-5 rounded-[2.5rem] bg-white/40 glass-morphism border-white/60 shadow-lg">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-primary text-xl">★</span>
              ))}
            </div>
            <div className="h-8 w-px bg-foreground/10" />
            <span className="text-foreground font-bold text-sm tracking-tight">
              Leader of customer satisfaction. Rated 5/5
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
