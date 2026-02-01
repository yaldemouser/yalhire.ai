import { useEffect, useState } from "react";

const StatsSection = () => {
  const [counters, setCounters] = useState({
    interviews: 0,
    rating: 0,
    hours: 0,
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      interviews: 212063,
      rating: 4.4,
      hours: 1060317,
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCounters({
        interviews: Math.floor(targets.interviews * easeProgress),
        rating: Math.round(targets.rating * easeProgress * 10) / 10,
        hours: Math.floor(targets.hours * easeProgress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-border">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 tracking-tighter text-gradient leading-tight">
            PROVEN IMPACT ON <br />
            <span className="text-primary italic">GLOBAL RECRUITMENT</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Helping thousands of companies transform their hiring culture with data-driven AI insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-32">
          <div className="text-center group">
            <div className="text-6xl md:text-7xl font-heading font-black text-foreground tracking-tighter mb-4 group-hover:text-primary transition-colors duration-500">
              {formatNumber(counters.interviews)}
            </div>
            <div className="h-1.5 w-12 bg-primary/20 rounded-full mx-auto mb-6 group-hover:w-24 group-hover:bg-primary transition-all duration-500" />
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">Interviews Completed</p>
          </div>

          <div className="text-center group">
            <div className="text-6xl md:text-7xl font-heading font-black text-foreground tracking-tighter mb-4 group-hover:text-primary transition-colors duration-500">
              {counters.rating}<span className="text-3xl text-primary">/5</span>
            </div>
            <div className="h-1.5 w-12 bg-primary/20 rounded-full mx-auto mb-6 group-hover:w-24 group-hover:bg-primary transition-all duration-500" />
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">Candidate Rating</p>
          </div>

          <div className="text-center group">
            <div className="text-6xl md:text-7xl font-heading font-black text-foreground tracking-tighter mb-4 group-hover:text-primary transition-colors duration-500">
              {formatNumber(counters.hours)}
            </div>
            <div className="h-1.5 w-12 bg-primary/20 rounded-full mx-auto mb-6 group-hover:w-24 group-hover:bg-primary transition-all duration-500" />
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">HR Hours Saved</p>
          </div>
        </div>

        {/* Featured In - Premium Minimalist Style */}
        <div className="pt-24 border-t border-border">
          <div className="flex flex-col items-center gap-12">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground/50">As seen in the world's leading publications</span>
            <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 hover:opacity-100 transition-opacity duration-700">
              {["TechNews", "Forbes", "Bloomberg", "Reuters", "CNBC"].map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-110 cursor-pointer"
                >
                  <span className="font-heading font-black text-2xl tracking-tighter text-foreground whitespace-nowrap">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
