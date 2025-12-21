import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-20 bg-gradient-hero">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            Get in <span className="text-gradient-lime">Touch</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Have questions? We'd love to hear from you
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-heading font-bold mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Email</h3>
                                        <p className="text-muted-foreground">support@yalhire.ai</p>
                                        <p className="text-muted-foreground">sales@yalhire.ai</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Phone</h3>
                                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                        <p className="text-sm text-muted-foreground">Mon-Fri 9am-6pm EST</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Office</h3>
                                        <p className="text-muted-foreground">123 Innovation Drive</p>
                                        <p className="text-muted-foreground">San Francisco, CA 94105</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass rounded-3xl p-8">
                            <h2 className="text-2xl font-heading font-bold mb-6">Send us a Message</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name</label>
                                    <Input placeholder="Your name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <Input type="email" placeholder="your@email.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Subject</label>
                                    <Input placeholder="How can we help?" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-background min-h-[150px]"
                                        placeholder="Tell us more..."
                                    />
                                </div>
                                <Button className="w-full bg-primary text-primary-foreground hover:bg-lime-dark">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
