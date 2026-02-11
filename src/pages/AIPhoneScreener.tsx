import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, Phone, Clock, Globe, Brain, BarChart, Zap, Shield, Sparkles, ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import heroDashboard from "@/assets/hero-dashboard.png";

const AIPhoneScreener = () => {
  const features = [
    {
      icon: Phone,
      title: "AI Voice Calls",
      description: "Natural-sounding AI voice conducts phone screenings that feel like real human conversations.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Screen candidates around the clock without scheduling constraints or hiring delays.",
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Conduct screenings in multiple languages to access global talent pools.",
    },
    {
      icon: Brain,
      title: "Adaptive Questions",
      description: "AI asks follow-up questions based on candidate responses for deeper qualification insights.",
    },
    {
      icon: BarChart,
      title: "Scoring & Analytics",
      description: "Get detailed screening scores and candidate rankings with objective evaluation logic.",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Receive transcripts, voice recordings, and AI summaries immediately after each screening.",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Upload Job Description",
      description: "Select from existing job posts or describe the role. AI generates structured screening questions automatically.",
    },
    {
      step: "02",
      title: "Configure Screening",
      description: "Set question limits, choose AI voice, and define qualifying criteria for your ideal candidate profile.",
    },
    {
      step: "03",
      title: "Launch AI Calls",
      description: "Invite candidates via bulk invite. AI conducts phone interviews at scale with human-like conversations.",
    },
    {
      step: "04",
      title: "Get Screening Report",
      description: "Receive call recordings, transcripts, screening scores, and auto-classification as qualified or rejected.",
    },
  ];

  const benefits = [
    "Launches human-like AI phone interviews at scale",
    "Asks structured, role-specific qualifying questions",
    "Captures call audio, transcripts, and intent signals",
    "Scores responses with objective evaluation logic",
    "Auto-classifies candidates as qualified or rejected",
    "Seamless integration with your existing workflow",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden mesh-gradient">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-pulse" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Phone Screening</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black mb-6 tracking-tight">
                <span className="text-gradient">AI Phone</span>{" "}
                <span className="text-primary italic">Screener</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto font-medium leading-relaxed">
                Automate initial candidate screening with AI phone interviews. The AI phone screener calls, records, scores, and shortlists candidates instantly for you.
              </p>
              <p className="text-sm text-primary font-bold mb-8">
                Pricing starts as low as $0.50 per screening
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="premium-gradient text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300 font-bold px-8 rounded-xl">
                  <Link to="/pricing">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-xl font-bold">
                  Listen to Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Badge */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto glass-morphism rounded-2xl p-6 flex flex-wrap items-center justify-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-bold text-sm">Enterprise-Grade AI Phone Screener</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-bold text-sm">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <span className="font-bold text-sm">Multi-language</span>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Image */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-brand-accent/10 rounded-[3rem] blur-3xl opacity-50" />
              <div className="glass-morphism rounded-[2.5rem] p-4 border-white/60 premium-shadow">
                <img
                  src={heroDashboard}
                  alt="AI Phone Screener Dashboard"
                  className="w-full rounded-[2rem] shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                How the Phone Interview <span className="text-primary italic">Software Works</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Make first-round interviews effortless with automated candidate screening software that runs the call and shortlists top applicants for you.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {howItWorks.map((item) => (
                <div key={item.step} className="glass-morphism rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative group">
                  <span className="text-5xl font-black text-primary/10 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">{item.step}</span>
                  <div className="w-12 h-12 rounded-2xl premium-gradient flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                Benefits of <span className="text-primary italic">AI Phone Screener</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                With AI phone interviews, teams can automate first-stage candidate screening in minutes and speed up the selection process.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="glass-morphism rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl premium-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Why Choose Our <span className="text-primary italic">AI Phone Screener</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Screen hundreds of candidates simultaneously while maintaining consistent quality, reducing bias, and eliminating scheduling bottlenecks.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="mt-8 premium-gradient text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all">
                  <Link to="/pricing">Start Free Trial <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl" />
                <img
                  src={heroDashboard}
                  alt="Phone Screening Analytics"
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 neural-bg">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to automate your <span className="text-primary italic">phone screenings</span>?
            </h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Screen 10x more candidates in a fraction of the time with AI-powered phone interviews.
            </p>
            <Button asChild size="lg" className="premium-gradient text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all">
              <Link to="/pricing">Get Started Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIPhoneScreener;
