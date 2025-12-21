import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, Video, Mic, Eye, Globe, Shield, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import heroDashboard from "@/assets/hero-dashboard.png";

const AIVideoInterviewer = () => {
  const features = [
    {
      icon: Video,
      title: "Human-like Video Interviews",
      description: "Our AI conducts natural, conversational video interviews that feel authentic to candidates.",
    },
    {
      icon: Mic,
      title: "Multilingual Support",
      description: "Conduct interviews in 50+ languages to reach a global talent pool.",
    },
    {
      icon: Eye,
      title: "Proctoring & Cheat Detection",
      description: "Advanced AI detects cheating attempts, tab switches, and ensures interview integrity.",
    },
    {
      icon: Globe,
      title: "24/7 Availability",
      description: "Candidates can interview at their convenience, any time, anywhere.",
    },
    {
      icon: Shield,
      title: "Identity Verification",
      description: "Built-in identity checks ensure the right candidate is being interviewed.",
    },
    {
      icon: BarChart,
      title: "Detailed Analytics",
      description: "Get comprehensive reports with skill ratings, engagement scores, and insights.",
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="text-gradient-lime">AI Video</span> Interviewer
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                YalHire's video interview software helps recruiters hire top talent faster and fairer.
                Records 🎥, Evaluates 📊, Detects cheating candidates 🕵️‍♂️ with detailed conversational intelligence 💬
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-lime-dark">
                  <Link to="/pricing">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg">
                  Prepare Simulation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Image */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <img
                src={heroDashboard}
                alt="AI Video Interviewer Dashboard"
                className="w-full rounded-3xl shadow-glow"
              />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                Powerful <span className="text-gradient-lime">Features</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to conduct professional AI-powered video interviews at scale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="glass rounded-2xl p-6 hover:shadow-card-hover transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Why Choose Our <span className="text-gradient-lime">AI Video Interviewer</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Trusted by 5,000+ HR teams worldwide to streamline their interview process and find the best candidates faster.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-lime-dark">
                  <Link to="/pricing">Start Free Trial</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl" />
                <img
                  src={heroDashboard}
                  alt="AI Interview Analysis"
                  className="relative rounded-3xl shadow-card"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to transform your <span className="text-gradient-lime">hiring process</span>?
            </h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Join 5,000+ companies using YalHire to hire smarter and faster.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-lime-dark">
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
