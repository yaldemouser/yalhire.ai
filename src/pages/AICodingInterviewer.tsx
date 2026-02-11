import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, Code, Terminal, Shield, Zap, BarChart, Cpu, Sparkles, Globe, ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import heroDashboard from "@/assets/hero-dashboard.png";

const AICodingInterviewer = () => {
  const features = [
    {
      icon: Code,
      title: "20+ Languages",
      description: "Support for Python, Java, JavaScript, TypeScript, Go, Rust, C++, and many more.",
    },
    {
      icon: Terminal,
      title: "Built-in IDE",
      description: "Full-featured code editor with syntax highlighting, auto-completion, and real-time execution.",
    },
    {
      icon: Shield,
      title: "Anti-Cheat Detection",
      description: "Advanced plagiarism and cheating detection with integrity tracking to ensure fair assessments.",
    },
    {
      icon: Zap,
      title: "Adaptive Problems",
      description: "AI adjusts problem difficulty based on candidate performance and role-based benchmarks.",
    },
    {
      icon: BarChart,
      title: "Code Quality Analysis",
      description: "Evaluate code quality, logic, problem-solving approach, and performance optimization.",
    },
    {
      icon: Cpu,
      title: "Real-time Execution",
      description: "Run and test code in real-time with instant feedback and video/screen playback recording.",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Upload Job Description",
      description: "Select from existing job posts, upload your document, or describe the role using AI prompts to generate a JD instantly.",
    },
    {
      step: "02",
      title: "Configure Assessment",
      description: "Choose programming languages, set difficulty levels, define time limits, and configure proctoring and integrity checks.",
    },
    {
      step: "03",
      title: "Invite Candidates",
      description: "Send coding interview invitations via email or bulk invite. Candidates start at their convenience.",
    },
    {
      step: "04",
      title: "Get Assessment Report",
      description: "Receive detailed reports with code quality scores, problem-solving analysis, integrity signals, and video playback.",
    },
  ];

  const benefits = [
    "Conducts live coding interviews across multiple languages",
    "Evaluates problem-solving and code quality automatically",
    "Scores candidates with role-based benchmarks",
    "Tracks integrity and proctoring signals in real-time",
    "Records video, screen, and code playback for review",
    "Generates detailed technical assessment reports",
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
                <Code className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Coding Interviews</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black mb-6 tracking-tight">
                <span className="text-gradient">AI Coding</span>{" "}
                <span className="text-primary italic">Interviewer</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto font-medium leading-relaxed">
                Run live coding interviews with YalHire's coding interview platform. Automate assessments, get instant scores, and hire developers faster.
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
                <span className="font-bold text-sm">Enterprise-Grade Coding Interview Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-bold text-sm">Anti-Cheat Proctoring</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <span className="font-bold text-sm">20+ Languages</span>
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
                  alt="AI Coding Interviewer Dashboard"
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
                How Our Coding Interview <span className="text-primary italic">Tool Works</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Automate your technical hiring with an online coding interview platform. Saves time and makes your recruiting process smarter and faster.
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
                Why Choose YalHire's <span className="text-primary italic">Coding Interview Platform</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Transform your technical hiring process with AI-powered coding interviews. Conduct live assessments, evaluate candidates, and get detailed reports for smarter recruitment.
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
                  Why Choose Our <span className="text-primary italic">AI Coding Interviewer</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Evaluate technical candidates with precision and eliminate bias from your coding assessments with AI-powered intelligence.
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
                  alt="Coding Assessment"
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
              Ready to assess <span className="text-primary italic">technical talent</span>?
            </h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Conduct fair, unbiased coding assessments with AI precision and comprehensive reports.
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

export default AICodingInterviewer;
