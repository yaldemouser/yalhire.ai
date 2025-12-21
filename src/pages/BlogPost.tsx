import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogData";
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from "lucide-react";

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        return (
            <div className="min-h-screen bg-background">
                <Header />
                <div className="container mx-auto px-4 py-32 text-center">
                    <h1 className="text-4xl font-heading font-bold mb-4">Post Not Found</h1>
                    <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
                    <Button asChild>
                        <Link to="/blog">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Link>
                    </Button>
                </div>
                <Footer />
            </div>
        );
    }

    const relatedPosts = blogPosts
        .filter((p) => p.category === post.category && p.id !== post.id)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <article className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    {/* Back Button */}
                    <Button variant="ghost" asChild className="mb-8">
                        <Link to="/blog">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Link>
                    </Button>

                    {/* Article Header */}
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-6">
                            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-6 mb-8 text-muted-foreground">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                                    {post.author.avatar}
                                </div>
                                <div>
                                    <div className="font-medium text-foreground">{post.author.name}</div>
                                    <div className="text-sm">Author</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(post.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric"
                                    })}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl mb-12 flex items-center justify-center">
                            <div className="text-8xl">{post.author.avatar}</div>
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none mb-12">
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                {post.excerpt}
                            </p>

                            <div className="text-foreground space-y-6">
                                <p>{post.content}</p>

                                <h2 className="text-3xl font-heading font-bold mt-12 mb-4">Key Takeaways</h2>
                                <ul className="space-y-3">
                                    <li>AI-powered recruiting tools are transforming how companies find and hire talent</li>
                                    <li>Automation reduces time-to-hire while improving candidate quality</li>
                                    <li>Video interviews and AI assessments provide deeper insights into candidates</li>
                                    <li>The future of recruiting combines human judgment with AI efficiency</li>
                                </ul>

                                <h2 className="text-3xl font-heading font-bold mt-12 mb-4">Looking Forward</h2>
                                <p>
                                    As we continue to see rapid advancements in AI technology, the recruitment industry
                                    will keep evolving. Organizations that embrace these tools while maintaining a
                                    human-centric approach will be best positioned to attract and retain top talent.
                                </p>

                                <p>
                                    At YalHire, we're committed to building AI solutions that empower recruiters
                                    and create better experiences for candidates. Our platform combines the best of
                                    both worlds: the efficiency of AI with the empathy and judgment of human recruiters.
                                </p>
                            </div>
                        </div>

                        {/* Share Buttons */}
                        <div className="border-t border-b border-border py-8">
                            <div className="flex items-center justify-between">
                                <span className="font-medium">Share this article</span>
                                <div className="flex items-center gap-3">
                                    <Button variant="outline" size="icon">
                                        <Twitter className="w-4 h-4" />
                                    </Button>
                                    <Button variant="outline" size="icon">
                                        <Linkedin className="w-4 h-4" />
                                    </Button>
                                    <Button variant="outline" size="icon">
                                        <Facebook className="w-4 h-4" />
                                    </Button>
                                    <Button variant="outline" size="icon">
                                        <Share2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="max-w-6xl mx-auto mt-20">
                            <h2 className="text-3xl font-heading font-bold mb-8">Related Articles</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        key={relatedPost.id}
                                        to={`/blog/${relatedPost.id}`}
                                        className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-card-hover"
                                    >
                                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                            <div className="text-5xl">{relatedPost.author.avatar}</div>
                                        </div>
                                        <div className="p-6">
                                            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                                                {relatedPost.category}
                                            </span>
                                            <h3 className="text-lg font-heading font-bold mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                {relatedPost.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </article>

            <Footer />
        </div>
    );
};

export default BlogPost;
