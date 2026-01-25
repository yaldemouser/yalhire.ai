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
    <section className="py-24 bg-white/50 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-16 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6 backdrop-blur-sm">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Global Trust</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-heading font-black text-foreground/80 mb-4 tracking-tighter">
          TRUSTED BY <span className="text-primary italic">5,000+</span> MARKET LEADERS
        </h2>
        <p className="text-lg text-muted-foreground font-medium leading-relaxed">
          The world's most innovative companies use YalHire's AI to build exceptional teams with speed and precision.
        </p>
      </div>

      {/* Modern Marquee Logos - Refined for premium look */}
      <div className="relative py-12 group overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white/100 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white/100 to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer scale-90 hover:scale-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shadow-lg border border-white/40">
                  <span className="font-heading font-black text-xl text-primary">{logo.initial}</span>
                </div>
                <span className="font-heading font-extrabold text-xl tracking-tighter text-foreground uppercase">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Certifications & Badges */}
      <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="glass-morphism rounded-[2rem] p-8 text-center border-white/60 transition-transform hover:-translate-y-2 duration-500">
            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🛡️</span>
            </div>
            <h3 className="font-heading font-bold text-lg mb-1">SOC 2 TYPE II</h3>
            <p className="text-xs font-bold text-primary uppercase tracking-widest">Enterprise Secure</p>
          </div>

          <div className="glass-morphism rounded-[2rem] p-8 text-center border-white/60 transition-transform hover:-translate-y-2 duration-500 scale-105 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">⭐</span>
            </div>
            <h3 className="font-heading font-bold text-lg mb-1">G2 LEADER</h3>
            <p className="text-xs font-bold text-primary uppercase tracking-widest">4.9/5 Rating</p>
          </div>

          <div className="glass-morphism rounded-[2rem] p-8 text-center border-white/60 transition-transform hover:-translate-y-2 duration-500">
            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🏆</span>
            </div>
            <h3 className="font-heading font-bold text-lg mb-1">PRODUCT HUB</h3>
            <p className="text-xs font-bold text-primary uppercase tracking-widest">#1 AI Tool</p>
          </div>

          <div className="glass-morphism rounded-[2rem] p-8 text-center border-white/60 transition-transform hover:-translate-y-2 duration-500">
            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✓</span>
            </div>
            <h3 className="font-heading font-bold text-lg mb-1">ISO 27001</h3>
            <p className="text-xs font-bold text-primary uppercase tracking-widest">Global Compliant</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
