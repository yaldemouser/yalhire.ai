const TrustLogos = () => {
  const logos = [
    { name: "TechCorp", initial: "T" },
    { name: "InnovateCo", initial: "I" },
    { name: "GlobalHR", initial: "G" },
    { name: "SmartHire", initial: "S" },
    { name: "FutureTech", initial: "F" },
    { name: "DataDrive", initial: "D" },
    { name: "CloudSoft", initial: "C" },
    { name: "MegaScale", initial: "M" },
    { name: "NextGen", initial: "N" },
    { name: "ProHire", initial: "P" },
  ];

  return (
    <section className="py-16 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-lg md:text-xl font-heading font-semibold text-muted-foreground">
          Trusted by more than <span className="text-primary">5,000+</span> leading HR teams of all sizes
        </h2>
        <p className="text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">
          Teams choose YalHire's AI interview software to make interviews simple, structured, and deliver a better candidate experience.
        </p>
      </div>

      {/* Scrolling Logos */}
      <div className="relative">
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="w-28 h-12 rounded-lg bg-card border border-border flex items-center justify-center gap-2 hover:border-primary/30 transition-colors">
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                  <span className="font-heading font-bold text-primary">{logo.initial}</span>
                </div>
                <span className="font-medium text-sm text-muted-foreground">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="container mx-auto px-4 mt-12">
        <div className="flex flex-wrap justify-center gap-8">
          <div className="glass rounded-xl px-6 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-xl">🛡️</span>
            </div>
            <div>
              <p className="font-semibold text-sm">SOC 2 Type II</p>
              <p className="text-xs text-muted-foreground">Certified</p>
            </div>
          </div>

          <div className="glass rounded-xl px-6 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-xl">⭐</span>
            </div>
            <div>
              <p className="font-semibold text-sm">G2 Rating</p>
              <p className="text-xs text-muted-foreground">4.9/5 Stars</p>
            </div>
          </div>

          <div className="glass rounded-xl px-6 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-xl">🏆</span>
            </div>
            <div>
              <p className="font-semibold text-sm">Product Hunt</p>
              <p className="text-xs text-muted-foreground">#1 Product</p>
            </div>
          </div>

          <div className="glass rounded-xl px-6 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-xl">✓</span>
            </div>
            <div>
              <p className="font-semibold text-sm">ISO 27001</p>
              <p className="text-xs text-muted-foreground">Compliant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
