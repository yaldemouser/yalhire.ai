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
        <section id="blog" className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 max-w-7xl mx-auto">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6 backdrop-blur-sm">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Insights</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 tracking-tighter text-gradient leading-tight text-foreground">
                            LATEST FROM <br />
                            <span className="text-primary italic">OUR BLOG</span>
                        </h2>
                        <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                            Stay updated with the latest insights, trends, and best practices in
                            the world of autonomous AI recruitment.
                        </p>
                    </div>
                    <Button variant="outline" className="hidden md:flex rounded-2xl px-8 py-7 font-black uppercase tracking-[0.2em] text-[10px] group bg-white/40 glass-morphism border-white/60 text-foreground hover:bg-primary hover:text-white transition-all duration-500 border-0 shadow-xl">
                        EXPLORE ALL INSIGHTS <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                    </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="group flex flex-col glass-morphism rounded-[2.5rem] overflow-hidden border-white/60 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-1.5 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-10 flex-1 flex flex-col">
                                <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-6">
                                    <span className="flex items-center gap-2">
                                        <Calendar className="w-3 h-3 text-primary" /> {post.date}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <User className="w-3 h-3 text-primary" /> {post.author}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-heading font-black mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight text-foreground">
                                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                </h3>

                                <p className="text-muted-foreground font-medium text-sm mb-8 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto">
                                    <Link
                                        to={`/blog/${post.id}`}
                                        className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:gap-5 transition-all"
                                    >
                                        Read Article <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <Button variant="outline" className="w-full rounded-2xl py-8 font-black uppercase tracking-[0.2em] text-xs">
                        EXPLORE ALL <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
