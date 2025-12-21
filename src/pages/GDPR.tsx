import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const GDPR = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            GDPR <span className="text-gradient-lime">Compliance</span>
                        </h1>
                        <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

                        <div className="prose prose-lg max-w-none space-y-8">
                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">Our Commitment to GDPR</h2>
                                <p className="text-muted-foreground">
                                    YalHire is fully committed to compliance with the General Data Protection Regulation (GDPR). We ensure that all personal data is processed lawfully, fairly, and transparently.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">Your Rights Under GDPR</h2>
                                <p className="text-muted-foreground mb-4">
                                    As a data subject, you have the following rights:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li><strong>Right to Access:</strong> Request copies of your personal data</li>
                                    <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                                    <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                                    <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing</li>
                                    <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                                    <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">How We Process Data</h2>
                                <p className="text-muted-foreground">
                                    We process personal data only when we have a lawful basis, such as:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Performance of a contract</li>
                                    <li>Compliance with legal obligations</li>
                                    <li>Legitimate interests of our business</li>
                                    <li>Your explicit consent</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">Data Protection Officer</h2>
                                <p className="text-muted-foreground">
                                    Our Data Protection Officer can be reached at dpo@yalhire.ai for any GDPR-related inquiries or to exercise your rights.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">Data Transfers</h2>
                                <p className="text-muted-foreground">
                                    We use Standard Contractual Clauses (SCCs) approved by the European Commission for any transfers of personal data outside the EU/EEA.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-4">Contact Information</h2>
                                <p className="text-muted-foreground">
                                    For GDPR-related requests or questions, please contact: dpo@yalhire.ai
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

export default GDPR;
