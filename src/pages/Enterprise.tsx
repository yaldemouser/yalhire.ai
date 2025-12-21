import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Building2, Users, Shield, Zap } from "lucide-react";

const Enterprise = () => {
    const features = [
        "Unlimited AI interviews and assessments",
        "Dedicated account manager",
        "Custom integration with your ATS",
        "Advanced analytics and reporting",
        "SOC 2 Type II compliance",
        "24/7 priority support",
        "Custom branding and white-labeling",
        "API access and webhooks",
        "SAML/SSO authentication",
        "Bulk candidate processing"
    ];

    const benefits = [
        {
            icon: Building2,
            title: "Enterprise-Grade Scale",
            description: "Handle thousands of candidates simultaneously with 99.9% uptime SLA"
        },
        {
            icon: Shield,
            title: "Security & Compliance",
            description: "SOC 2, GDPR, and ISO 27001 compliant with enterprise-grade encryption"
        },
        {
            icon: Users,
            title: "Team Collaboration",
            description: "Unlimited team members with advanced permission controls and workflows"
        },
        {
            icon: Zap,
            title: "Custom Integration",
            description: "Seamless integration with your existing HR tech stack and ATS"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-hero">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                                <Building2 className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">For Large Organizations</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                                Enterprise <span className="text-gradient-lime">AI Recruiting</span>
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                                Scale your hiring with enterprise-grade AI recruiting solutions. Trusted by Fortune 500 companies to hire faster, smarter, and more efficiently.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-lime-dark">
                                    Request Enterprise Demo
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                                <Button size="lg" variant="outline">
                                    Talk to Sales
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
                            Built for Enterprise Scale
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

            {/* Features */}
            <section className="py-16 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                                    Everything You Need at Enterprise Scale
                                </h2>
                                <p className="text-muted-foreground mb-8">
                                    YalHire Enterprise provides the security, scalability, and support that large organizations require.
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
                                <div className="text-9xl">🏢</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">500+</div>
                                <div className="text-muted-foreground">Enterprise Customers</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">1M+</div>
                                <div className="text-muted-foreground">Candidates Screened</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">99.9%</div>
                                <div className="text-muted-foreground">Uptime SLA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="glass rounded-3xl p-12 text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                            Ready to Transform Your Enterprise Hiring?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Schedule a demo with our enterprise team to see how YalHire can scale with your organization
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-lime-dark">
                                Request Demo
                            </Button>
                            <Button size="lg" variant="outline">
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Enterprise;
