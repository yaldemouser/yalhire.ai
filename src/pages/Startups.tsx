import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Rocket, TrendingUp, Zap, DollarSign } from "lucide-react";

const Startups = () => {
    const features = [
        "Pay only for what you use",
        "No long-term contracts required",
        "Free trial to get started",
        "Scale as you grow",
        "Startup-friendly pricing",
        "Quick 10-minute setup",
        "Dedicated startup support",
        "Integration with popular tools"
    ];

    const benefits = [
        {
            icon: Rocket,
            title: "Move Fast",
            description: "Hire your first 10 employees faster with AI-powered screening and interviews"
        },
        {
            icon: DollarSign,
            title: "Save Budget",
            description: "Reduce hiring costs by 70% compared to traditional recruiting methods"
        },
        {
            icon: Zap,
            title: "Easy Setup",
            description: "Get up and running in 10 minutes. No technical knowledge required"
        },
        {
            icon: TrendingUp,
            title: "Scale Seamlessly",
            description: "Start free, upgrade as you grow. Our platform scales with your team"
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
                                <Rocket className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">For Startups & Scale-ups</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                                Hire Fast, <span className="text-gradient-lime">Scale Faster</span>
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                                Build your dream team without breaking the bank. YalHire helps startups hire top talent 3x faster at a fraction of the cost.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-lime-dark">
                                    Start Free Trial
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                                <Button size="lg" variant="outline">
                                    View Pricing
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
                            Why Startups Choose YalHire
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
                                <div className="text-9xl">🚀</div>
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                                    Everything You Need to Build Your Team
                                </h2>
                                <p className="text-muted-foreground mb-8">
                                    Focus on building your product. Let YalHire handle the hiring.
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
                    <div className="glass rounded-3xl p-12 text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                            Ready to Accelerate Your Hiring?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Join hundreds of startups using YalHire to build world-class teams
                        </p>
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-lime-dark">
                            Start Free Trial
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Startups;
