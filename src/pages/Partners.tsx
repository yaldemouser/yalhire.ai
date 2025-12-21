import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Handshake, ArrowRight } from "lucide-react";

const Partners = () => {
    const partners = [
        { name: "TechPartner Inc", category: "Technology" },
        { name: "HR Solutions Pro", category: "HR Tech" },
        { name: "Global Recruiters", category: "Recruiting" },
        { name: "Talent Networks", category: "Staffing" }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-20 bg-gradient-hero">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            Our <span className="text-gradient-lime">Partners</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Building the future of recruiting together
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-heading font-bold mb-4">Partner Program Benefits</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Join our partner network and grow your business while delivering cutting-edge AI recruiting solutions to your clients
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            <div className="glass rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-4">🤝</div>
                                <h3 className="font-heading font-bold mb-2">Reseller Program</h3>
                                <p className="text-sm text-muted-foreground">Earn competitive margins by reselling YalHire</p>
                            </div>
                            <div className="glass rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-4">🔧</div>
                                <h3 className="font-heading font-bold mb-2">Integration Partners</h3>
                                <p className="text-sm text-muted-foreground">Build powerful integrations with our API</p>
                            </div>
                            <div className="glass rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-4">💼</div>
                                <h3 className="font-heading font-bold mb-2">Referral Program</h3>
                                <p className="text-sm text-muted-foreground">Earn rewards for successful referrals</p>
                            </div>
                        </div>

                        <div className="mb-16">
                            <h2 className="text-3xl font-heading font-bold mb-8">Our Partners</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {partners.map((partner) => (
                                    <div key={partner.name} className="glass rounded-2xl p-6">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                            <Handshake className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="font-heading font-bold mb-1">{partner.name}</h3>
                                        <p className="text-sm text-muted-foreground">{partner.category}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="glass rounded-3xl p-12 text-center">
                            <h2 className="text-3xl font-heading font-bold mb-4">Become a Partner</h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Join our growing partner ecosystem and help transform recruiting with AI
                            </p>
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-lime-dark">
                                Apply to Partner Program
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Partners;
