import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Cpu, Database, Lock, Zap, Network, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Technology = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-20 bg-gradient-hero">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            Our <span className="text-gradient-lime">Technology</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Built on advanced AI architecture to deliver human-like recruiting experiences at scale.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                            <div>
                                <h2 className="text-3xl font-heading font-bold mb-6">System Architecture</h2>
                                <p className="text-lg text-muted-foreground mb-6">
                                    YalHire's platform is built on a microservices architecture designed for high availability, scalability, and security. We leverage state-of-the-art Large Language Models (LLMs) orchestrated through our proprietary AI engine to conduct interviews that feel natural and context-aware.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Microservices-based generic architecture",
                                        "Real-time video and audio processing pipeline",
                                        "Event-driven design for immediate feedback",
                                        "Global CDN for low-latency interviews"
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-primary" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="glass rounded-3xl p-8 bg-secondary/20">
                                {/* Placeholder for Architecture Diagram */}
                                <div className="aspect-video rounded-2xl bg-dark/50 flex items-center justify-center border border-white/10">
                                    <Network className="w-16 h-16 text-primary/50" />
                                    <span className="sr-only">Architecture Diagram</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-20">
                            <div className="glass rounded-2xl p-8 hover:border-primary/50 transition-all">
                                <Cpu className="w-10 h-10 text-primary mb-6" />
                                <h3 className="text-xl font-heading font-bold mb-3">AI Engine</h3>
                                <p className="text-muted-foreground">
                                    Our proprietary AI engine combines multiple LLMs to understand context, nuance, and technical depth in candidate responses.
                                </p>
                            </div>
                            <div className="glass rounded-2xl p-8 hover:border-primary/50 transition-all">
                                <Database className="w-10 h-10 text-primary mb-6" />
                                <h3 className="text-xl font-heading font-bold mb-3">Data Pipeline</h3>
                                <p className="text-muted-foreground">
                                    Secure, real-time data processing ensure instant analysis of video interviews and coding assessments.
                                </p>
                            </div>
                            <div className="glass rounded-2xl p-8 hover:border-primary/50 transition-all">
                                <Lock className="w-10 h-10 text-primary mb-6" />
                                <h3 className="text-xl font-heading font-bold mb-3">Enterprise Security</h3>
                                <p className="text-muted-foreground">
                                    SOC 2 Type II compliant infrastructure with end-to-end encryption for all candidate data and video streams.
                                </p>
                            </div>
                        </div>

                        <div className="text-center bg-dark rounded-3xl p-12 relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                                    Scalable by <span className="text-gradient-lime">Design</span>
                                </h2>
                                <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                                    Our infrastructure handles millions of concurrent interviews with <Zap className="inline w-5 h-5 text-primary" /> 99.99% uptime.
                                </p>
                                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-lime-dark">
                                    <Link to="/contact">Talk to our Solutions Architect</Link>
                                </Button>
                            </div>
                            <Globe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-white/5" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Technology;
