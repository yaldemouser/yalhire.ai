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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Proven impact with our <span className="text-gradient-lime">AI recruitment</span> software
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-2">
              {formatNumber(counters.interviews)}
            </div>
            <p className="text-lg text-muted-foreground">Interviews completed</p>
          </div>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-2">
              {counters.rating}/5
            </div>
            <p className="text-lg text-muted-foreground">Candidate experience rating</p>
          </div>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-2">
              {formatNumber(counters.hours)}
            </div>
            <p className="text-lg text-muted-foreground">HR manhours saved</p>
          </div>
        </div>

        {/* Featured In */}
        <div className="mt-20 text-center">
          <h3 className="text-lg font-heading font-semibold text-muted-foreground mb-8">
            Featured in
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {["TechNews", "Forbes", "Bloomberg", "Reuters", "CNBC"].map((name) => (
              <div
                key={name}
                className="px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <span className="font-heading font-semibold text-muted-foreground">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
