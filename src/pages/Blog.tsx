import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogPosts, categories } from "@/data/blogData";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = blogPosts.filter((post) => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPosts = blogPosts.filter((post) => post.featured);

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-hero">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            YalHire <span className="text-gradient-lime">Blog</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Insights, trends, and best practices in AI-powered recruitment
                        </p>

                        {/* Search */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <Input
                                    placeholder="Search articles..."
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
                        {categories.map((category) => (
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

            {/* Featured Posts */}
            {selectedCategory === "All" && searchQuery === "" && featuredPosts.length > 0 && (
                <section className="py-16 bg-secondary/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-heading font-bold mb-8">Featured Articles</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {featuredPosts.map((post) => (
                                <Link
                                    key={post.id}
                                    to={`/blog/${post.id}`}
                                    className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-card-hover"
                                >
                                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                        <div className="text-6xl">{post.author.avatar}</div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                                                {post.category}
                                            </span>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{new Date(post.date).toLocaleDateString()}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl">
                                                    {post.author.avatar}
                                                </div>
                                                <span className="font-medium">{post.author.name}</span>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* All Posts */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-heading font-bold">
                            {selectedCategory === "All" ? "All Articles" : selectedCategory}
                        </h2>
                        <p className="text-muted-foreground">
                            {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
                        </p>
                    </div>

                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-lg text-muted-foreground">No articles found matching your criteria.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <Link
                                    key={post.id}
                                    to={`/blog/${post.id}`}
                                    className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-card-hover"
                                >
                                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                        <div className="text-5xl">{post.author.avatar}</div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                                            <span className="px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                                                {post.category}
                                            </span>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                                        <div className="flex items-center gap-2 text-sm">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                {post.author.avatar}
                                            </div>
                                            <span className="font-medium">{post.author.name}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;
