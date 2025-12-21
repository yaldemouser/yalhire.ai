import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Users2, Target, BarChart, Headphones } from "lucide-react";

const Agencies = () => {
    const features = [
        "Multi-client management dashboard",
        "White-label branding options",
        "Bulk candidate processing",
        "Custom reporting for clients",
        "Agency-specific pricing tiers",
        "Dedicated account manager",
        "Priority support",
        "API access for integration"
    ];

    const benefits = [
        {
            icon: Users2,
            title: "Multiple Clients",
            description: "Manage unlimited clients and job requisitions in one centralized platform"
        },
        {
            icon: Target,
            title: "Better Placements",
            description: "AI-powered matching ensures better candidate-client fit rates"
        },
        {
            icon: BarChart,
            title: "Client Reporting",
            description: "Impress clients with detailed analytics and insights on every candidate"
        },
        {
            icon: Headphones,
            title: "Agency Support",
            description: "Dedicated support team that understands the agency business model"
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
                                <Users2 className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">For Recruitment Agencies</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                                Scale Your <span className="text-gradient-lime">Recruitment Agency</span>
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                                Serve more clients, place more candidates, and grow your revenue with AI-powered recruiting technology built for agencies.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-lime-dark">
                                    Request Agency Demo
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                                <Button size="lg" variant="outline">
                                    View Agency Pricing
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
                            Built for Recruitment Agencies
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
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                                    Everything Your Agency Needs
                                </h2>
                                <p className="text-muted-foreground mb-8">
                                    From initial screening to final placement, YalHire streamlines your entire recruitment workflow.
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
                            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-12 flex items-center justify-center aspect-square">
                                <div className="text-9xl">👥</div>
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
                                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">3x</div>
                                <div className="text-muted-foreground">More Placements</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">60%</div>
                                <div className="text-muted-foreground">Cost Reduction</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">50+</div>
                                <div className="text-muted-foreground">Agencies Trust Us</div>
                            </div>
                        </div>

                        <div className="glass rounded-3xl p-12 text-center">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                                Ready to Transform Your Agency?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                See how YalHire can help you serve more clients and increase placements
                            </p>
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-lime-dark">
                                Schedule Agency Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Agencies;
