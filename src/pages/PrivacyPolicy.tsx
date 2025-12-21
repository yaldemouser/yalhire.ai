import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            Privacy <span className="text-gradient-lime">Policy</span>
                        </h1>
                        <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

                        <div className="prose prose-lg max-w-none space-y-8">
                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">Introduction</h2>
                                <p className="text-muted-foreground">
                                    YalHire ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI recruiting platform.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">Information We Collect</h2>
                                <p className="text-muted-foreground mb-4">
                                    We collect information that you provide directly to us, including:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Account information (name, email, company details)</li>
                                    <li>Candidate information (resumes, interview responses, assessments)</li>
                                    <li>Usage data and analytics</li>
                                    <li>Communication preferences</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">How We Use Your Information</h2>
                                <p className="text-muted-foreground mb-4">
                                    We use the information we collect to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Provide, maintain, and improve our services</li>
                                    <li>Process and analyze candidate interviews and assessments</li>
                                    <li>Send you technical notices and support messages</li>
                                    <li>Respond to your comments and questions</li>
                                    <li>Protect against fraudulent or illegal activity</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">Data Security</h2>
                                <p className="text-muted-foreground">
                                    We implement appropriate technical and organizational measures to protect your personal information. All data is encrypted in transit and at rest. We are SOC 2 Type II compliant and follow industry best practices for data security.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">Your Rights</h2>
                                <p className="text-muted-foreground mb-4">
                                    You have the right to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Access your personal data</li>
                                    <li>Correct inaccurate data</li>
                                    <li>Request deletion of your data</li>
                                    <li>Object to processing of your data</li>
                                    <li>Export your data</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">Contact Us</h2>
                                <p className="text-muted-foreground">
                                    If you have questions about this Privacy Policy, please contact us at privacy@yalhire.ai
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

export default PrivacyPolicy;
