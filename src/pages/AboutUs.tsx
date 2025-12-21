import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Globe, Award } from "lucide-react";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-20 bg-gradient-hero">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            About <span className="text-gradient-lime">YalHire</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            We're on a mission to transform recruiting with AI that feels human
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                            <p>
                                Founded in 2023, YalHire emerged from a simple observation: recruiting was broken.
                                Traditional hiring processes were slow, expensive, and often biased. We knew AI could help,
                                but only if it felt natural and human.
                            </p>
                            <p>
                                Our founders, experienced recruiters and AI researchers, came together with a vision:
                                create AI recruiting tools that candidates actually enjoy using. Not robotic chatbots,
                                but intelligent assistants that conduct conversations as naturally as any human interviewer.
                            </p>
                            <p>
                                Today, YalHire serves over 5,000 companies worldwide, from startups to Fortune 500 enterprises.
                                We've helped conduct over 1 million interviews, screen countless resumes, and connect talented
                                people with their dream jobs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Values</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: Target, title: "Mission-Driven", desc: "Every feature we build serves our mission to make hiring fair and efficient" },
                                { icon: Users, title: "People-First", desc: "We design for candidates and recruiters, not just systems" },
                                { icon: Globe, title: "Inclusive", desc: "Building tools that reduce bias and expand opportunity" },
                                { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards of quality" }
                            ].map((value) => (
                                <div key={value.title} className="text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <value.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="font-heading font-bold mb-2">{value.title}</h3>
                                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="glass rounded-3xl p-12 text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                            Join Us on Our Mission
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            We're always looking for talented people who share our vision
                        </p>
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-lime-dark">
                            View Open Positions
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;
