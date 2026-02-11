import { useState } from "react";
import { FileText, Search, Phone, Languages, Video, Code, Users, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WorkflowSection = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            icon: FileText,
            title: "AI Recruiter Workflow",
            shortTitle: "Workflow",
            description: "Create and configure your job in minutes.",
            points: [
                "Upload job description or use a smart JD prompt",
                "Choose avatar, digital twin, or AI voice",
                "Define experience, salary, perks, and role details",
                "Configure interview context and competencies",
                "Launch the end-to-end AI recruiter workflow",
            ],
            href: "/pricing",
        },
        {
            icon: Search,
            title: "AI Resume Screener",
            shortTitle: "Resume",
            description: "Automatically filter and rank candidates.",
            points: [
                "Parses resumes via bulk or individual uploads",
                "Matches profiles to must-have and nice-to-have skills",
                "Analyzes skill depth and role relevance",
                "Identifies career gaps, tenure, and company tier",
                "Classifies candidates as qualified or not qualified",
            ],
            href: "/ai-resume-screener",
        },
        {
            icon: Phone,
            title: "AI Phone Screener",
            shortTitle: "Phone",
            description: "Conduct automated phone screenings.",
            points: [
                "Launches human-like AI phone interviews at scale",
                "Asks structured, role-specific qualifying questions",
                "Captures call audio, transcripts, and intent signals",
                "Scores responses with objective evaluation logic",
                "Auto-classifies candidates as qualified or rejected",
            ],
            href: "/ai-phone-screener",
        },
        {
            icon: Languages,
            title: "English Proficiency Test",
            shortTitle: "English",
            description: "Assess candidates' language skills.",
            points: [
                "Assesses English proficiency using CEFR levels A1–C2",
                "Evaluates fluency, grammar, pronunciation, vocabulary",
                "Measures accent and native language influence",
                "Generates cognitive insights like confidence and clarity",
                "Delivers role readiness as qualified or not qualified",
            ],
            href: "/english-proficiency-test",
        },
        {
            icon: Video,
            title: "AI Video Interviewer",
            shortTitle: "Video",
            description: "AI-powered video interview analysis.",
            points: [
                "Runs one-way and two-way AI video interviews",
                "Evaluates communication and domain understanding",
                "Tracks integrity signals for interview authenticity",
                "Analyzes engagement and behavioral indicators",
                "Generates fit scores with hiring recommendations",
            ],
            href: "/ai-video-interviewer",
        },
        {
            icon: Code,
            title: "AI Coding Interview",
            shortTitle: "Coding",
            description: "Evaluate technical coding skills.",
            points: [
                "Conducts live coding interviews across multiple languages",
                "Evaluates problem-solving and code quality",
                "Scores candidates with role-based benchmarks",
                "Tracks integrity and proctoring signals",
                "Records video, screen, and code playback",
            ],
            href: "/ai-coding-interviewer",
        },
        {
            icon: Users,
            title: "Human Handover",
            shortTitle: "Handover",
            description: "Seamlessly transition to human review.",
            points: [
                "Delivers a shortlist of AI-qualified candidates",
                "Shares scores, recordings, transcripts, and insights",
                "Removes manual resume and early screening effort",
                "Reduces time-to-hire cycle time significantly",
                "Keeps final hiring decisions fully human-led",
            ],
            href: "/pricing",
        },
    ];

    const activeStepData = steps[activeStep];

    return (
        <section className="py-32 relative overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6 backdrop-blur-sm">
                        <Check className="w-3 h-3 text-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">END-TO-END AI RECRUITING</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 tracking-tighter text-gradient leading-tight">
                        VIBE RECRUITING{" "}
                        <span className="text-primary italic">PLATFORM</span>
                    </h2>
                    <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                        From job creation to human handover — automate your entire hiring pipeline with intelligent AI agents.
                    </p>
                </div>

                {/* Step Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-16">
                    {steps.map((step, index) => (
                        <button
                            key={step.title}
                            onClick={() => setActiveStep(index)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${activeStep === index
                                    ? "premium-gradient text-white shadow-lg shadow-primary/20 scale-105"
                                    : "glass-morphism border-white/40 text-foreground/70 hover:text-primary hover:border-primary/30"
                                }`}
                        >
                            <step.icon className="w-4 h-4" />
                            <span className="hidden sm:inline">{step.shortTitle}</span>
                        </button>
                    ))}
                </div>

                {/* Active Step Content */}
                <div className="max-w-5xl mx-auto">
                    <div className="glass-morphism rounded-[2.5rem] p-8 md:p-12 border-white/60 premium-shadow">
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            {/* Left: Content */}
                            <div className="animate-in fade-in slide-in-from-left-4 duration-500" key={activeStep}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl premium-gradient flex items-center justify-center shadow-lg shadow-primary/30">
                                        <activeStepData.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Step {activeStep + 1} of {steps.length}</span>
                                        <h3 className="font-heading font-bold text-2xl">{activeStepData.title}</h3>
                                    </div>
                                </div>

                                <p className="text-lg text-muted-foreground font-medium mb-8 leading-relaxed">
                                    {activeStepData.description}
                                </p>

                                <ul className="space-y-4 mb-8">
                                    {activeStepData.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3 animate-in fade-in slide-in-from-left-2 duration-300" style={{ animationDelay: `${i * 80}ms` }}>
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-3.5 h-3.5 text-primary" />
                                            </div>
                                            <span className="font-medium text-foreground/80">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button asChild className="premium-gradient text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all">
                                    <Link to={activeStepData.href}>
                                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>

                            {/* Right: Visual Step Indicator */}
                            <div className="hidden lg:flex flex-col items-center justify-center" key={`visual-${activeStep}`}>
                                <div className="relative w-full max-w-sm">
                                    {/* Step Progress Circle */}
                                    <div className="relative w-72 h-72 mx-auto">
                                        <svg className="w-full h-full -rotate-90" viewBox="0 0 288 288">
                                            <circle cx="144" cy="144" r="130" fill="none" stroke="currentColor" strokeWidth="4" className="text-primary/10" />
                                            <circle
                                                cx="144"
                                                cy="144"
                                                r="130"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="6"
                                                strokeLinecap="round"
                                                className="text-primary transition-all duration-700"
                                                strokeDasharray={`${2 * Math.PI * 130}`}
                                                strokeDashoffset={`${2 * Math.PI * 130 * (1 - (activeStep + 1) / steps.length)}`}
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <div className="w-20 h-20 rounded-2xl premium-gradient flex items-center justify-center shadow-xl shadow-primary/30 mb-4">
                                                <activeStepData.icon className="w-10 h-10 text-white" />
                                            </div>
                                            <span className="text-4xl font-black font-heading text-primary">{activeStep + 1}/{steps.length}</span>
                                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Steps</span>
                                        </div>
                                    </div>

                                    {/* Mini Step Dots */}
                                    <div className="flex justify-center gap-2 mt-8">
                                        {steps.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setActiveStep(i)}
                                                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeStep ? "bg-primary scale-125 shadow-lg shadow-primary/30" : i < activeStep ? "bg-primary/40" : "bg-primary/15"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkflowSection;
