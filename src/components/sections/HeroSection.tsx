import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Video, Phone, FileText, ArrowDown, Sparkles, Loader2, Send } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard-new.png";
import aiAvatar from "@/assets/_.png";
import { aiService, AIResponse } from "@/services/aiService";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<AIResponse | null>(null);

  const handleSearch = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setAiResponse(null);

    try {
      const response = await aiService.query(searchQuery);
      setAiResponse(response);
    } catch (error) {
      console.error("AI Service Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const quickActions = [
    { icon: Video, label: "AI Interviewer", href: "/ai-video-interviewer" },
    { icon: Phone, label: "AI Phone Screener", href: "/ai-phone-screener" },
    { icon: FileText, label: "AI Resume Screener", href: "/ai-resume-screener" },
  ];

  return (
    <section className="relative min-h-screen pt-44 pb-32 overflow-hidden mesh-gradient">
      {/* Background Orbs - Refined for premium look */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* AI Chat Interface - ChatGPT-like Premium Look */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-2xl glass-morphism border-white/40">
            <img src={aiAvatar} alt="AI Assistant" className="w-10 h-10 rounded-full ring-2 ring-primary/20" />
            <span className="text-sm font-bold tracking-widest uppercase text-primary">YalHire AI v2.0</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-12 tracking-tighter">
            Hire <span className="text-primary italic">Faster</span>. Hire <span className="text-primary italic">Smarter</span>.
          </h2>

          {/* Premium Chat Input */}
          <div className="relative max-w-3xl mx-auto mb-8 group">
            <form
              onSubmit={handleSearch}
              className="glass-morphism rounded-[2rem] p-4 premium-shadow border-white/60 transition-all duration-500 group-hover:shadow-primary/10 group-focus-within:ring-2 group-focus-within:ring-primary/20"
            >
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Ask YalHire to schedule a video interview..."
                    className="border-0 bg-transparent focus-visible:ring-0 text-xl font-medium px-4 h-14"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-14 h-14 rounded-2xl premium-gradient text-white shadow-lg transition-transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <ArrowDown className="w-6 h-6 rotate-[-135deg]" />
                  )}
                </Button>
              </div>
            </form>

            {/* AI Response Area */}
            {aiResponse && (
              <div className="mt-6 text-left animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="glass-morphism rounded-3xl p-6 border-primary/20 bg-primary/5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-brand-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-medium text-foreground/90 leading-relaxed mb-4">
                        {aiResponse.text}
                      </p>

                      {aiResponse.actions && aiResponse.actions.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                          {aiResponse.actions.map((action, idx) => (
                            <Link
                              key={idx}
                              to={action.href}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/50 hover:bg-white/80 text-primary font-bold text-sm transition-colors border border-primary/10 hover:border-primary/30"
                            >
                              {action.label} <Send className="w-3 h-3" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Action Chips - Modernized */}
            {!aiResponse && (
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {quickActions.map((action) => (
                  <Link
                    key={action.label}
                    to={action.href}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl glass-morphism border-white/40 hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <action.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold text-foreground/80 group-hover:text-primary">{action.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Hero Content - Impactful Headline */}
        <div className="max-w-6xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">END-TO-END AI RECRUITING</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black mb-8 leading-[0.9] tracking-tight text-gradient">
            VIBE RECRUITING <br />
            <span className="text-primary">PLATFORM</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
            From job creation to human handover — automate your entire hiring pipeline with intelligent AI agents that interview, screen, and rank candidates globally.
          </p>

          {/* Visual Divider / Dashboard Preview */}
          <div className="relative max-w-6xl mx-auto animate-float">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-brand-accent/20 rounded-[3rem] blur-3xl opacity-50 -z-10" />
            <div className="glass-morphism rounded-[2.5rem] p-4 border-white/60 premium-shadow">
              <img
                src={heroDashboard}
                alt="AI Recruiting Dashboard"
                className="w-full rounded-[2rem] shadow-2xl transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>

            {/* Floating Card Overlays for depth */}
            <div className="absolute -top-10 -right-10 w-64 glass-morphism rounded-3xl p-6 border-white-40 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Video className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-muted-foreground">Video AI</p>
                  <p className="text-sm font-bold">Interviewing...</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-primary rounded-full" />
                </div>
                <p className="text-[10px] font-bold text-primary">87% CONFIDENCE SCORE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
