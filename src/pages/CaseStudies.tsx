import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data/caseStudiesData";
import { TrendingUp, Users, Building } from "lucide-react";

const CaseStudies = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-20 bg-gradient-hero">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            Customer <span className="text-gradient-lime">Success Stories</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            See how leading companies are transforming their hiring with YalHire
                        </p>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="space-y-16">
                        {caseStudies.map((study, index) => (
                            <div key={study.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div>
                                    <div className="inline-flex items-center gap-3 mb-6">
                                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl">
                                            {study.logo}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-heading font-bold">{study.company}</h3>
                                            <p className="text-muted-foreground">{study.industry} • {study.size}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-heading font-bold text-lg mb-2">Challenge</h4>
                                            <p className="text-muted-foreground">{study.challenge}</p>
                                        </div>

                                        <div>
                                            <h4 className="font-heading font-bold text-lg mb-2">Solution</h4>
                                            <p className="text-muted-foreground">{study.solution}</p>
                                        </div>

                                        <div className="glass rounded-2xl p-6 border-l-4 border-primary">
                                            <p className="italic text-lg mb-4">"{study.testimonial.quote}"</p>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                                    👤
                                                </div>
                                                <div>
                                                    <div className="font-semibold">{study.testimonial.author}</div>
                                                    <div className="text-sm text-muted-foreground">{study.testimonial.role}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-6">
                                    {study.results.map((result, i) => (
                                        <div key={i} className="text-center">
                                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                                <TrendingUp className="w-8 h-8 text-primary" />
                                            </div>
                                            <div className="text-3xl font-heading font-bold text-primary mb-2">
                                                {result.value}
                                            </div>
                                            <div className="text-sm text-muted-foreground">{result.metric}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="glass rounded-3xl p-12 text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                            Ready to transform your hiring?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Join these leading companies and see results in weeks, not months
                        </p>
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-lime-dark">
                            Start Your Success Story
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CaseStudies;
