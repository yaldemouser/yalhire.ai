import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Globe, Video, Clock, Users } from "lucide-react";

const RemoteHiring = () => {
    const features = [
        "Asynchronous video interviews",
        "Global timezone scheduling",
        "Multi-language support",
        "Remote culture fit assessment",
        "Digital onboarding workflows",
        "Collaboration across time zones",
        "Automated interview scheduling",
        "Cloud-based candidate portal"
    ];

    const benefits = [
        {
            icon: Globe,
            title: "Hire Globally",
            description: "Access talent from anywhere in the world with location-agnostic hiring"
        },
        {
            icon: Video,
            title: "Video First",
            description: "AI-powered video interviews that feel natural and human-like"
        },
        {
            icon: Clock,
            title: "Any Time Zone",
            description: "Asynchronous interviews let candidates respond on their own schedule"
        },
        {
            icon: Users,
            title: "Remote Culture",
            description: "Assess remote work skills and cultural fit for distributed teams"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-20 bg-gradient-hero">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                                <Globe className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">For Remote & Distributed Teams</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                                Hire the Best Talent, <span className="text-gradient-lime">Anywhere</span>
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                                Build world-class remote teams with YalHire's AI-powered hiring platform designed for distributed workforces across all time zones.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-lime-dark">
                                    Start Hiring Remotely
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                                <Button size="lg" variant="outline">
                                    See How It Works
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
                            Built for Remote-First Companies
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefits.map((benefit) => (
                                <div key={benefit.title} className="text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <benefit.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="font-heading font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-12 flex items-center justify-center aspect-square">
                                <div className="text-9xl">🌍</div>
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                                    Seamless Remote Hiring Experience
                                </h2>
                                <p className="text-muted-foreground mb-8">
                                    No more scheduling nightmares or timezone confusion. YalHire makes remote hiring effortless.
                                </p>
                                <div className="grid gap-4">
                                    {features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-4 h-4 text-primary" />
                                            </div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
                            <div>
                                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">150+</div>
                                <div className="text-muted-foreground">Countries Supported</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">24/7</div>
                                <div className="text-muted-foreground">Candidate Access</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">0</div>
                                <div className="text-muted-foreground">Timezone Conflicts</div>
                            </div>
                        </div>

                        <div className="glass rounded-3xl p-12 text-center">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                                Ready to Build Your Global Team?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Start hiring remote talent from anywhere in the world, on any schedule
                            </p>
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-lime-dark">
                                Get Started Today
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default RemoteHiring;
