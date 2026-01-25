import { useState } from "react";
import { Video, Phone, FileText, Code, Check } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";
import aiVideoImg from "@/assets/ai-video-interview.png";
import aiPhoneImg from "@/assets/ai-phone-screen.png";
import aiResumeImg from "@/assets/ai-resume-screen.png";
import aiCodingImg from "@/assets/ai-coding-interview.png";

const AISuiteSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 0,
      icon: Video,
      title: "AI Video Interviewer",
      description: "AI video interview software conducts structured, human-like video interviews. It saves recruiters hours and delivers clear interview evaluation insights.",
      points: [
        "Multilingual, conversational interviews with follow-up questions",
        "Built-in proctoring and identity checks for candidate authenticity",
        "Detailed reports with skill ratings and interview insights",
      ],
      image: aiVideoImg,
    },
    {
      id: 1,
      icon: Phone,
      title: "AI Phone Screener",
      description: "Automate candidate screenings with an AI recruiting software that engages, qualifies, and scores candidates to identify top talent efficiently.",
      points: [
        "24/7 availability with flexible scheduling",
        "AI voice customization and multilingual support",
        "Smart, adaptive questions for deeper candidate insights",
      ],
      image: aiPhoneImg,
    },
    {
      id: 2,
      icon: FileText,
      title: "AI Resume Screener",
      description: "Our resume screening software instantly filters, analyzes and ranks the resumes with detailed insights, enabling you to shortlist the right candidates quickly.",
      points: [
        "Instantly screens resumes against job requirements",
        "Generates detailed, easy-to-share reports",
        "Identifies top candidates for the next round",
      ],
      image: aiResumeImg,
    },
    {
      id: 3,
      icon: Code,
      title: "AI Coding Interviewer",
      description: "Our online coding interview tool conducts adaptive coding assessments to evaluate technical skills and real-world problem-solving.",
      points: [
        "Built-in IDE with support for 20+ coding languages",
        "Quality and logic-oriented coding evaluation",
        "Built-in plagiarism and anti-cheat flag detectors",
      ],
      image: aiCodingImg,
    },
  ];

  const activeFeature = features[activeTab];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Premium Background Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6 backdrop-blur-sm">
            <Check className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">All-IN-ONE PLATFORM</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 tracking-tighter text-gradient leading-tight">
            THE WORLD'S MOST ADVANCED <br />
            <span className="text-primary italic">AI RECRUITING SUITE</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            Every tool you need to find, interview, and hire the best talent on the planet, powered by autonomous AI agents.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Tab Navigation - Premium Vertical Style */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-8 rounded-3xl transition-all duration-500 group relative overflow-hidden ${activeTab === index
                    ? "glass-morphism border-primary/20 shadow-2xl shadow-primary/5"
                    : "bg-transparent border border-transparent hover:border-white/40 hover:glass-morphism"
                  }`}
              >
                {activeTab === index && (
                  <div className="absolute inset-y-0 left-0 w-1.5 bg-primary rounded-r-full" />
                )}

                <div className="flex items-start gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${activeTab === index
                      ? "premium-gradient text-white shadow-lg shadow-primary/20 scale-110"
                      : "bg-white/40 glass-morphism text-primary group-hover:scale-105"
                    }`}>
                    <feature.icon className="w-7 h-7" />
                  </div>

                  <div className="flex-1">
                    <h3 className={`font-heading font-bold text-xl mb-3 transition-colors ${activeTab === index ? "text-foreground" : "text-foreground/60 group-hover:text-foreground"
                      }`}>
                      {feature.title}
                    </h3>

                    {activeTab === index && (
                      <div className="animate-in fade-in slide-in-from-top-4 duration-700">
                        <p className="text-muted-foreground font-medium mb-6 leading-relaxed">
                          {feature.description}
                        </p>
                        <div className="grid grid-cols-1 gap-3">
                          {feature.points.map((point, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Check className="w-3 h-3 text-primary" />
                              </div>
                              <span className="text-sm font-semibold text-foreground/80">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Feature Image - High-end Frame */}
          <div className="sticky top-40">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-brand-accent/10 rounded-[3rem] blur-3xl opacity-50 transition-opacity group-hover:opacity-70" />
              <div className="glass-morphism rounded-[2.5rem] p-4 border-white/60 premium-shadow">
                <img
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  className="relative rounded-[2rem] shadow-2xl w-full transition-all duration-700 animate-in fade-in zoom-in-95"
                  key={activeTab}
                />
              </div>

              {/* Contextual Floating Stats */}
              <div className="absolute -bottom-8 -left-8 glass-morphism rounded-2xl p-6 border-white/40 shadow-xl animate-float">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Efficiency Boost</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-primary">85%</span>
                  <span className="text-xs font-bold text-foreground">TIME SAVED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISuiteSection;
