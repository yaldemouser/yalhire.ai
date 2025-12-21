import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, ArrowRight } from "lucide-react";

const Careers = () => {
    const openings = [
        {
            title: "Senior Full Stack Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time"
        },
        {
            title: "Product Designer",
            department: "Design",
            location: "San Francisco, CA",
            type: "Full-time"
        },
        {
            title: "AI/ML Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time"
        },
        {
            title: "Customer Success Manager",
            department: "Customer Success",
            location: "Remote",
            type: "Full-time"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-20 bg-gradient-hero">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            Join the <span className="text-gradient-lime">YalHire</span> Team
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Help us build the future of AI-powered recruiting
                        </p>
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-lime-dark">
                            View Open Positions
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl font-heading font-bold mb-6">Why Work at YalHire?</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="glass rounded-2xl p-6">
                                <div className="text-4xl mb-4">🚀</div>
                                <h3 className="font-heading font-bold mb-2">Fast Growth</h3>
                                <p className="text-sm text-muted-foreground">Join a rapidly scaling startup with endless opportunities</p>
                            </div>
                            <div className="glass rounded-2xl p-6">
                                <div className="text-4xl mb-4">💰</div>
                                <h3 className="font-heading font-bold mb-2">Competitive Pay</h3>
                                <p className="text-sm text-muted-foreground">Top-tier compensation and equity packages</p>
                            </div>
                            <div className="glass rounded-2xl p-6">
                                <div className="text-4xl mb-4">🌍</div>
                                <h3 className="font-heading font-bold mb-2">Remote First</h3>
                                <p className="text-sm text-muted-foreground">Work from anywhere with flexible hours</p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold mb-8">Open Positions</h2>
                        <div className="space-y-4">
                            {openings.map((job) => (
                                <div key={job.title} className="glass rounded-2xl p-6 hover:border-primary/50 transition-all cursor-pointer">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <Briefcase className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-heading font-bold mb-2">{job.title}</h3>
                                                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                                    <span>{job.department}</span>
                                                    <span>•</span>
                                                    <span>{job.location}</span>
                                                    <span>•</span>
                                                    <span>{job.type}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-muted-foreground" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Careers;
