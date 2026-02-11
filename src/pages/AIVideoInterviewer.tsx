import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, Video, Mic, Eye, Globe, Shield, BarChart, ArrowRight, Sparkles, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import heroDashboard from "@/assets/hero-dashboard.png";

const AIVideoInterviewer = () => {
  const features = [
    {
      icon: Video,
      title: "Human-like Video Interviews",
      description: "Our AI conducts natural, conversational video interviews that feel authentic and professional to candidates.",
    },
    {
      icon: Mic,
      title: "Multilingual Support",
      description: "Conduct interviews in 50+ languages to reach a truly global talent pool without boundaries.",
    },
    {
      icon: Eye,
      title: "Proctoring & Cheat Detection",
      description: "Advanced AI detects cheating attempts, tab switches, and ensures complete interview integrity.",
    },
    {
      icon: Globe,
      title: "24/7 Availability",
      description: "Candidates can interview at their convenience, any time, anywhere in the world.",
    },
    {
      icon: Shield,
      title: "Identity Verification",
      description: "Built-in identity checks ensure the right candidate is being interviewed every time.",
    },
    {
      icon: BarChart,
      title: "Detailed Analytics",
      description: "Get comprehensive reports with skill ratings, engagement scores, and actionable insights.",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Upload Job Description",
      description: "Select from existing job posts, upload your document, or describe the role using AI prompts.",
    },
    {
      step: "02",
      title: "Configure Interview",
      description: "Choose interview format (one-way or two-way), set duration, competencies, and AI voice or avatar.",
    },
    {
      step: "03",
      title: "Invite Candidates",
      description: "Send interview invitations via email or bulk invite. Candidates join at their convenience.",
    },
    {
      step: "04",
      title: "Get Screening Report",
      description: "Receive detailed reports with fit scores, transcripts, engagement insights, and hiring recommendations.",
    },
  ];

  const benefits = [
    "Records and evaluates every interview automatically",
    "Detects cheating candidates with AI proctoring",
    "Provides detailed conversational intelligence",
    "Generates skill-based scoring and rankings",
    "Supports one-way and two-way interview modes",
    "Integrates with your existing ATS",
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
                <Video className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Video Interviews</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black mb-6 tracking-tight">
                <span className="text-gradient">AI Video</span>{" "}
                <span className="text-primary italic">Interviewer</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto font-medium leading-relaxed">
                YalHire's video interview software helps recruiters hire top talent faster and fairer.
                Records 🎥, Evaluates 📊, Detects cheating candidates 🕵️‍♂️ with detailed conversational intelligence 💬
              </p>
              <p className="text-sm text-primary font-bold mb-8">
                Pricing starts as low as $1.00 per interview
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="premium-gradient text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300 font-bold px-8 rounded-xl">
                  <Link to="/pricing">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-xl font-bold">
                  Try Demo
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
                <span className="font-bold text-sm">Enterprise-Grade Video Interview Software</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-bold text-sm">SOC 2 Type II Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <span className="font-bold text-sm">50+ Languages</span>
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
                  alt="AI Video Interviewer Dashboard"
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
                How It <span className="text-primary italic">Works</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Automate high-volume hiring through simple, secure, and bias-free video interviews.
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
                Why Choose YalHire's <span className="text-primary italic">Video Interview Software</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                With our virtual interview software you can automate high-volume hiring through simple, secure, and bias-free interviews that empower teams to make smarter, faster hiring decisions.
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
                  Actionable <span className="text-primary italic">Candidate Insights</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Trusted by 5,000+ HR teams worldwide to streamline their interview process and find the best candidates faster with AI-powered intelligence.
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
                  alt="AI Interview Analysis"
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
              Ready to transform your <span className="text-primary italic">hiring process</span>?
            </h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Join 5,000+ companies using YalHire to hire smarter and faster.
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

export default AIVideoInterviewer;
