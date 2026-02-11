import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, Languages, Mic, BookOpen, PenTool, Ear, Globe, Shield, BarChart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EnglishProficiencyTest = () => {
    const skills = [
        {
            icon: Mic,
            title: "Fluency",
            description: "Assesses how smoothly candidates speak without unnecessary pauses, filler words, or broken sentences. Identifies those who communicate naturally and confidently.",
        },
        {
            icon: BookOpen,
            title: "Grammar",
            description: "Evaluates sentence construction, tense accuracy, and grammatical precision to ensure candidates can communicate professionally in global work environments.",
        },
        {
            icon: Ear,
            title: "Pronunciation",
            description: "Measures clarity of speech and accuracy of word pronunciation. Helps identify candidates whose spoken English is easily understood by global teams.",
        },
        {
            icon: PenTool,
            title: "Vocabulary",
            description: "Analyzes depth and breadth of word usage, ensuring candidates can articulate ideas effectively with role-appropriate language and terminology.",
        },
        {
            icon: Globe,
            title: "Accent & Native Influence",
            description: "Detects accent patterns and mother tongue influence to gauge communication clarity for customer-facing and collaborative roles.",
        },
    ];

    const cefrLevels = [
        { level: "A1", name: "Beginner", color: "bg-red-500/20 text-red-600 border-red-500/30", description: "Basic phrases and simple expressions" },
        { level: "A2", name: "Elementary", color: "bg-orange-500/20 text-orange-600 border-orange-500/30", description: "Routine tasks and direct exchanges" },
        { level: "B1", name: "Intermediate", color: "bg-yellow-500/20 text-yellow-600 border-yellow-500/30", description: "Main points on familiar matters" },
        { level: "B2", name: "Upper Intermediate", color: "bg-blue-500/20 text-blue-600 border-blue-500/30", description: "Complex text and technical discussions" },
        { level: "C1", name: "Advanced", color: "bg-indigo-500/20 text-indigo-600 border-indigo-500/30", description: "Fluent and spontaneous expression" },
        { level: "C2", name: "Proficient", color: "bg-primary/20 text-primary border-primary/30", description: "Near-native mastery of English" },
    ];

    const benefits = [
        "Quickly identify candidates with strong English communication skills",
        "Standardize language assessment across your hiring pipeline",
        "Reduce bias with objective, AI-driven English evaluation",
        "Assess role-readiness for customer-facing and collaborative positions",
        "Get CEFR-standardized proficiency levels for every candidate",
        "Scale English screening across geographies and teams",
    ];

    const enterpriseFeatures = [
        { icon: Shield, label: "SOC 2 Compliant" },
        { icon: Globe, label: "CEFR Standardized" },
        { icon: BarChart, label: "Cognitive Insights" },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-32">
                {/* Hero Section */}
                <section className="py-20 relative overflow-hidden mesh-gradient">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-pulse" />
                        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
                                <Languages className="w-4 h-4 text-primary" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Language Assessment</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black mb-6 tracking-tight">
                                <span className="text-gradient">English</span>{" "}
                                <span className="text-primary italic">Proficiency</span> Test
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto font-medium leading-relaxed">
                                Assess English communication skills with AI to identify interview-ready
                                talent instantly. Screen candidates faster with CEFR-standardized evaluation.
                            </p>
                            <p className="text-sm text-primary font-bold mb-8">
                                Pricing starts as low as $1.00 per assessment
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

                {/* Key Skills Assessed */}
                <section className="py-24 bg-secondary/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                                Key Skills <span className="text-primary italic">Assessed</span>
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Our English proficiency assessment focuses on five core factors that directly impact job performance.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {skills.map((skill) => (
                                <div
                                    key={skill.title}
                                    className="glass-morphism rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                                >
                                    <div className="w-14 h-14 rounded-2xl premium-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                                        <skill.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="font-heading font-bold text-xl mb-3">{skill.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CEFR Levels */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                                    Measuring Proficiency Across <span className="text-primary italic">CEFR Levels</span>
                                </h2>
                                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                    YalHire uses CEFR (Common European Framework of Reference for Languages), a globally standardized guideline for measuring English proficiency levels across different roles, teams, and geographies.
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {cefrLevels.map((item) => (
                                    <div key={item.level} className={`rounded-2xl border-2 p-6 ${item.color} transition-all hover:scale-105 duration-300`}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-3xl font-black font-heading">{item.level}</span>
                                            <span className="text-sm font-bold uppercase tracking-wider">{item.name}</span>
                                        </div>
                                        <p className="text-sm opacity-80 font-medium">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Test English Proficiency */}
                <section className="py-24 bg-secondary/30">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                                    Why Test <span className="text-primary italic">English Proficiency</span>?
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    Strong English communication is essential for workplace success, especially in customer-facing and collaborative roles. YalHire's English screening test helps you identify candidates who can communicate clearly and ensures every shortlisted candidate is ready for real interviews.
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
                                <div className="relative glass-morphism rounded-3xl p-8 border-white/60">
                                    <div className="space-y-6">
                                        <div className="text-center mb-8">
                                            <div className="w-20 h-20 rounded-full premium-gradient mx-auto flex items-center justify-center mb-4 shadow-xl shadow-primary/30">
                                                <Languages className="w-10 h-10 text-white" />
                                            </div>
                                            <h3 className="font-heading font-bold text-xl">Sample Report</h3>
                                            <p className="text-sm text-muted-foreground">AI-Generated Assessment</p>
                                        </div>
                                        {["Fluency", "Grammar", "Pronunciation", "Vocabulary"].map((skill, i) => (
                                            <div key={skill} className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm font-bold">{skill}</span>
                                                    <span className="text-sm font-bold text-primary">{[92, 88, 85, 90][i]}%</span>
                                                </div>
                                                <div className="h-2.5 w-full bg-primary/10 rounded-full overflow-hidden">
                                                    <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${[92, 88, 85, 90][i]}%` }} />
                                                </div>
                                            </div>
                                        ))}
                                        <div className="flex items-center justify-between pt-4 border-t border-white/20">
                                            <span className="font-bold">CEFR Level</span>
                                            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary font-black text-lg">C1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Enterprise Grade */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto glass-morphism rounded-3xl p-12 text-center border-primary/10">
                            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                                Enterprise-Grade Interview Automation
                            </h2>
                            <div className="flex flex-wrap justify-center gap-8 mb-8">
                                {enterpriseFeatures.map((feat) => (
                                    <div key={feat.label} className="flex items-center gap-2">
                                        <feat.icon className="w-5 h-5 text-primary" />
                                        <span className="font-bold text-sm">{feat.label}</span>
                                    </div>
                                ))}
                            </div>
                            <Button asChild size="lg" className="premium-gradient text-white rounded-xl font-bold shadow-lg shadow-primary/20">
                                <Link to="/pricing">View Pricing Plans</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 neural-bg">
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                            Ready to assess <span className="text-primary italic">English proficiency</span> at scale?
                        </h2>
                        <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                            Join 5,000+ HR teams using YalHire to screen and shortlist candidates with strong communication skills.
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

export default EnglishProficiencyTest;
