import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, Code, Terminal, Shield, Zap, BarChart, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import heroDashboard from "@/assets/hero-dashboard.png";

const AICodingInterviewer = () => {
  const features = [
    {
      icon: Code,
      title: "20+ Languages",
      description: "Support for Python, Java, JavaScript, TypeScript, Go, Rust, and more.",
    },
    {
      icon: Terminal,
      title: "Built-in IDE",
      description: "Full-featured code editor with syntax highlighting and auto-completion.",
    },
    {
      icon: Shield,
      title: "Anti-Cheat Detection",
      description: "Advanced plagiarism and cheating detection to ensure integrity.",
    },
    {
      icon: Zap,
      title: "Adaptive Problems",
      description: "AI adjusts problem difficulty based on candidate performance.",
    },
    {
      icon: BarChart,
      title: "Code Quality Analysis",
      description: "Evaluate code quality, logic, and problem-solving approach.",
    },
    {
      icon: Cpu,
      title: "Real-time Execution",
      description: "Run and test code in real-time with instant feedback.",
    },
  ];

  const benefits = [
    "Conduct debugging, full coding, and code completion tests",
    "Evaluate code quality and logic automatically",
    "Built-in plagiarism detection",
    "Support for 20+ programming languages",
    "Real-time code execution and testing",
    "Detailed technical assessment reports",
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
                <span className="text-gradient-lime">AI Coding</span> Interviewer
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our online coding interview tool conducts adaptive coding assessments to evaluate 
                technical skills and real-world problem-solving, delivering precise and unbiased reports.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-lime-dark">
                  <Link to="/pricing">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg">
                  Try Demo
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
                alt="AI Coding Interviewer Dashboard"
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
                Everything you need to assess technical skills accurately and at scale.
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
                  Why Choose Our <span className="text-gradient-lime">AI Coding Interviewer</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Evaluate technical candidates with precision and eliminate bias from your coding assessments.
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
                  alt="Coding Assessment"
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
              Ready to assess <span className="text-gradient-lime">technical talent</span>?
            </h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Conduct fair, unbiased coding assessments with AI precision.
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

export default AICodingInterviewer;
