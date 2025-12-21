import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Video, Phone, FileText, ArrowDown, Sparkles } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";
import aiAvatar from "@/assets/ai-avatar.png";

const HeroSection = () => {
  const quickActions = [
    { icon: Video, label: "AI Interviewer" },
    { icon: Phone, label: "AI Phone Screener" },
    { icon: FileText, label: "AI Resume Screener" },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* AI Chat Interface */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <img src={aiAvatar} alt="AI Assistant" className="w-12 h-12 rounded-full" />
            <span className="text-lg text-muted-foreground">Hello 👋</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-heading text-muted-foreground mb-8">
            What can I do for you?
          </h2>

          {/* Chat Input */}
          <div className="relative max-w-2xl mx-auto mb-6">
            <div className="glass rounded-2xl p-2 shadow-card">
              <div className="flex items-center gap-3">
                <Input
                  placeholder="Send message to YalHire..."
                  className="flex-1 border-0 bg-transparent focus-visible:ring-0 text-lg py-6 px-4"
                />
                <Button size="icon" className="w-12 h-12 rounded-xl bg-primary text-primary-foreground hover:bg-lime-dark">
                  <ArrowDown className="w-5 h-5 rotate-[225deg]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Action Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {quickActions.map((action) => (
              <button
                key={action.label}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
              >
                <action.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium">{action.label}</span>
              </button>
            ))}
          </div>

          {/* Explore Button */}
          <button className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span>Explore YalHire</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>

        {/* Hero Content */}
        <div className="max-w-5xl mx-auto text-center mt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Recruiting</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            <span className="text-gradient-lime">AI Recruiting</span> Software
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our AI recruiting software empowers scaling teams and enterprises to streamline
            the hiring process with intelligent AI agents.
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="glass rounded-2xl p-6 text-left hover:shadow-card-hover transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Video className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Human-like Interviews</h3>
              <p className="text-sm text-muted-foreground">
                AI conducts human-like video interviews, coding assessments, and screenings.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 text-left hover:shadow-card-hover transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Data-driven Reports</h3>
              <p className="text-sm text-muted-foreground">
                Make hiring smarter with detailed data-driven reports and insights.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 text-left hover:shadow-card-hover transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Interview Intelligence</h3>
              <p className="text-sm text-muted-foreground">
                Built-in cheat detection and proctoring ensures fair assessments.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Dashboard Image */}
        <div className="max-w-6xl mx-auto relative animate-float">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none h-40 bottom-0 top-auto" />
          <img
            src={heroDashboard}
            alt="AI Recruiting Dashboard"
            className="w-full rounded-3xl shadow-glow"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
