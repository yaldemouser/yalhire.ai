import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            Terms of <span className="text-gradient-lime">Service</span>
                        </h1>
                        <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

                        <div className="prose prose-lg max-w-none space-y-8">
                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">1. Acceptance of Terms</h2>
                                <p className="text-muted-foreground">
                                    By accessing or using YalHire's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">2. Use of Service</h2>
                                <p className="text-muted-foreground mb-4">
                                    You may use our service only for lawful purposes and in accordance with these Terms. You agree not to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Use the service in any way that violates applicable laws or regulations</li>
                                    <li>Attempt to gain unauthorized access to any part of the service</li>
                                    <li>Interfere with or disrupt the service or servers</li>
                                    <li>Use the service to discriminate against protected classes</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">3. Account Responsibilities</h2>
                                <p className="text-muted-foreground">
                                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">4. Intellectual Property</h2>
                                <p className="text-muted-foreground">
                                    The service and its original content, features, and functionality are owned by YalHire and are protected by international copyright, trademark, and other intellectual property laws.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">5. Limitation of Liability</h2>
                                <p className="text-muted-foreground">
                                    YalHire shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">6. Changes to Terms</h2>
                                <p className="text-muted-foreground">
                                    We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the service.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">7. Contact Information</h2>
                                <p className="text-muted-foreground">
                                    For questions about these Terms, please contact us at legal@yalhire.ai
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

export default TermsOfService;
