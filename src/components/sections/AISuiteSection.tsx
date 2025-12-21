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
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Recruitment <span className="text-gradient-lime">Automation</span> Software Suite
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of AI tools for recruitment to speed up your hiring 
            process and deliver the talent your business needs to grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tab Navigation */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeTab === index
                    ? "bg-primary text-primary-foreground shadow-glow-sm"
                    : "bg-card border border-border hover:border-primary/30"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    activeTab === index ? "bg-primary-foreground/20" : "bg-primary/10"
                  }`}>
                    <feature.icon className={`w-6 h-6 ${
                      activeTab === index ? "text-primary-foreground" : "text-primary"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    {activeTab === index && (
                      <div className="animate-slide-up">
                        <p className={`text-sm mb-4 ${
                          activeTab === index ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}>
                          {feature.description}
                        </p>
                        <ul className="space-y-2">
                          {feature.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                activeTab === index ? "text-primary-foreground" : "text-primary"
                              }`} />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Feature Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl" />
            <img
              src={activeFeature.image}
              alt={activeFeature.title}
              className="relative rounded-3xl shadow-card w-full animate-fade-in"
              key={activeTab}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISuiteSection;
