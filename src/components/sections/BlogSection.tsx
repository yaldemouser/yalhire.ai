import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const blogPosts = [
    {
        id: 1,
        title: "The Future of AI in Recruitment: Trends to Watch in 2025",
        excerpt: "From hyper-personalized candidate experiences to advanced predictive analytics, discover the key AI trends shaping the recruitment landscape.",
        author: "Sarah Johnson",
        date: "Dec 15, 2024",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60",
        category: "AI Trends",
    },
    {
        id: 2,
        title: "How AI Video Interviews are Reducing Hiring Bias",
        excerpt: "Learn how structured AI-led interviews provide objetive evaluations and create a more equitable hiring process for all candidates.",
        author: "David Chen",
        date: "Dec 12, 2024",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60",
        category: "Inclusivity",
    },
    {
        id: 3,
        title: "Maximizing Efficiency with AI-Powered Resume Screening",
        excerpt: "Discover how automating the initial screening process allows recruiters to focus on building relationships with top talent.",
        author: "Emily Rodriguez",
        date: "Dec 10, 2024",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
        category: "Productivity",
    },
];

const BlogSection = () => {
    return (
        <section id="blog" className="py-24 bg-card/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                            Latest from our <span className="text-gradient-lime">Blog</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Stay updated with the latest insights, trends, and best practices in
                            AI-powered recruitment and talent management.
                        </p>
                    </div>
                    <Button variant="outline" className="hidden md:flex gap-2 group border-primary/20 hover:border-primary/50">
                        View All Posts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <User className="w-3 h-3" /> {post.author}
                                    </span>
                                </div>

                                <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                </h3>

                                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <Link
                                    to={`/blog/${post.id}`}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                                >
                                    Read More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Button variant="outline" className="w-full gap-2">
                        View All Posts <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
