import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { helpArticles, helpCategories } from "@/data/helpData";
import { Search, Book, MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const HelpCenter = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredArticles = helpArticles.filter((article) => {
        const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const popularArticles = helpArticles.filter((article) => article.popular);

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-20 bg-gradient-hero">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            How can we <span className="text-gradient-lime">help you?</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Search our knowledge base or browse articles by category
                        </p>

                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <Input
                                    placeholder="Search for help..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-12 h-14 text-lg border-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-8 border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-3">
                        {helpCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary hover:bg-secondary/80"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Articles */}
            {selectedCategory === "All" && searchQuery === "" && (
                <section className="py-16 bg-secondary/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-heading font-bold mb-8">Popular Articles</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {popularArticles.map((article) => (
                                <div key={article.id} className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all">
                                    <Book className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="text-xl font-heading font-bold mb-2">{article.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{article.content.substring(0, 100)}...</p>
                                    <Button variant="link" className="p-0 h-auto">Read More →</Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* All Articles */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold mb-8">
                        {selectedCategory === "All" ? "All Help Articles" : selectedCategory}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
                        {filteredArticles.map((article) => (
                            <div key={article.id} className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Book className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-bold mb-1">{article.title}</h3>
                                        <p className="text-sm text-muted-foreground">{article.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Support */}
            <section className="py-16 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="glass rounded-3xl p-12 text-center">
                            <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                            <h2 className="text-3xl font-heading font-bold mb-4">Still need help?</h2>
                            <p className="text-muted-foreground mb-8">Our support team is here to assist you</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button size="lg" className="bg-primary text-primary-foreground">
                                    <Mail className="w-4 h-4 mr-2" />
                                    Contact Support
                                </Button>
                                <Button size="lg" variant="outline">
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    Live Chat
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HelpCenter;
