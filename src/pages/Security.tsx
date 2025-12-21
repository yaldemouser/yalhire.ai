import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Lock, Eye, Server } from "lucide-react";

const Security = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-20 bg-gradient-hero">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            Security & <span className="text-gradient-lime">Compliance</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Enterprise-grade security you can trust
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            {[
                                { icon: Shield, title: "SOC 2 Type II", desc: "Certified for security, availability, and confidentiality" },
                                { icon: Lock, title: "Encryption", desc: "All data encrypted in transit (TLS 1.3) and at rest (AES-256)" },
                                { icon: Eye, title: "Privacy", desc: "GDPR, CCPA, and SOC 2 compliant data handling" },
                                { icon: Server, title: "Infrastructure", desc: "Hosted on AWS with 99.9% uptime SLA" }
                            ].map((item) => (
                                <div key={item.title} className="text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <item.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="font-heading font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="max-w-4xl mx-auto space-y-8">
                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">Data Protection</h2>
                                <p className="text-muted-foreground">
                                    We employ multiple layers of security to protect your data. All candidate information is encrypted at rest using AES-256 encryption and in transit using TLS 1.3. Access to data is strictly controlled with role-based permissions and multi-factor authentication.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">Compliance Certifications</h2>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>SOC 2 Type II certified</li>
                                    <li>GDPR compliant</li>
                                    <li>CCPA compliant</li>
                                    <li>ISO 27001 certified</li>
                                    <li>HIPAA compliant (Enterprise plan)</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">Security Practices</h2>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Regular third-party security audits</li>
                                    <li>Penetration testing and vulnerability scanning</li>
                                    <li>24/7 security monitoring and incident response</li>
                                    <li>Regular employee security training</li>
                                    <li>Secure development lifecycle practices</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">Report a Security Issue</h2>
                                <p className="text-muted-foreground">
                                    If you discover a security vulnerability, please email us at security@yalhire.ai. We take all reports seriously and will respond within 24 hours.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Security;
