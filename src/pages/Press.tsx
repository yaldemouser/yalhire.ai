import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Newspaper, Calendar } from "lucide-react";

const Press = () => {
    const pressReleases = [
        {
            title: "YalHire Named Industry Leader in AI Recruiting",
            date: "December 2024",
            excerpt: "YalHire receives 13 badges in industry recognition for innovation in AI-powered recruitment."
        },
        {
            title: "YalHire Raises $50M Series B to Expand AI Recruiting Platform",
            date: "November 2024",
            excerpt: "Funding to accelerate product development and global expansion of enterprise solutions."
        },
        {
            title: "Fortune 500 Companies Adopt YalHire for Remote Hiring",
            date: "October 2024",
            excerpt: "Leading enterprises turn to YalHire for seamless remote candidate screening."
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-20 bg-gradient-hero">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            Press & <span className="text-gradient-lime">News</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Latest news and press releases from YalHire
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold mb-8">Press Releases</h2>
                        <div className="space-y-6">
                            {pressReleases.map((release) => (
                                <div key={release.title} className="glass rounded-2xl p-8 hover:border-primary/50 transition-all">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Newspaper className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                                <Calendar className="w-4 h-4" />
                                                {release.date}
                                            </div>
                                            <h3 className="text-xl font-heading font-bold mb-2">{release.title}</h3>
                                            <p className="text-muted-foreground">{release.excerpt}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 glass rounded-3xl p-8">
                            <h2 className="text-2xl font-heading font-bold mb-4">Media Inquiries</h2>
                            <p className="text-muted-foreground mb-4">
                                For press inquiries, interviews, or media kits, please contact our communications team:
                            </p>
                            <p className="text-lg font-semibold">press@yalhire.ai</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Press;
