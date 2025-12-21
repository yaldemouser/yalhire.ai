import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Key, Shield, Zap } from "lucide-react";

const APIDocs = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-20 bg-gradient-hero">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            API <span className="text-gradient-lime">Documentation</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Integrate YalHire's AI recruiting capabilities into your applications
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Start */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            <div className="glass rounded-2xl p-6 text-center">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <Key className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-heading font-bold mb-2">Authentication</h3>
                                <p className="text-sm text-muted-foreground">Secure API key-based auth</p>
                            </div>
                            <div className="glass rounded-2xl p-6 text-center">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <Zap className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-heading font-bold mb-2">RESTful API</h3>
                                <p className="text-sm text-muted-foreground">Standard HTTP methods</p>
                            </div>
                            <div className="glass rounded-2xl p-6 text-center">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <Code className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-heading font-bold mb-2">JSON Format</h3>
                                <p className="text-sm text-muted-foreground">Easy to parse responses</p>
                            </div>
                            <div className="glass rounded-2xl p-6 text-center">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-heading font-bold mb-2">Rate Limits</h3>
                                <p className="text-sm text-muted-foreground">1000 req/hour standard</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-heading font-bold mb-8">Getting Started</h2>

                        <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                            <h3 className="text-xl font-heading font-bold mb-4">Authentication</h3>
                            <p className="text-muted-foreground mb-4">
                                All API requests require an API key. Include your key in the Authorization header:
                            </p>
                            <div className="bg-dark rounded-xl p-4 font-mono text-sm overflow-x-auto">
                                <code className="text-green-400">
                                    curl https://api.yalhire.ai/v1/interviews \<br />
                                    &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY"
                                </code>
                            </div>
                        </div>

                        <Tabs defaultValue="interviews" className="mb-16">
                            <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger value="interviews">Interviews</TabsTrigger>
                                <TabsTrigger value="candidates">Candidates</TabsTrigger>
                                <TabsTrigger value="assessments">Assessments</TabsTrigger>
                                <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
                            </TabsList>

                            <TabsContent value="interviews" className="space-y-6">
                                <div className="bg-card rounded-2xl p-8 border border-border">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-heading font-bold">Create Interview</h3>
                                        <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-mono">POST</span>
                                    </div>
                                    <p className="text-muted-foreground mb-4">
                                        <code className="bg-dark px-2 py-1 rounded">/v1/interviews</code>
                                    </p>
                                    <div className="bg-dark rounded-xl p-4 font-mono text-sm overflow-x-auto">
                                        <pre className="text-gray-300">{`{
  "candidate_id": "cand_123",
  "type": "video",
  "questions": [
    "Tell me about yourself",
    "Why do you want this role?"
  ],
  "duration": 30
}`}</pre>
                                    </div>
                                </div>

                                <div className="bg-card rounded-2xl p-8 border border-border">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-heading font-bold">Get Interview Results</h3>
                                        <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-mono">GET</span>
                                    </div>
                                    <p className="text-muted-foreground mb-4">
                                        <code className="bg-dark px-2 py-1 rounded">/v1/interviews/:id/results</code>
                                    </p>
                                    <div className="bg-dark rounded-xl p-4 font-mono text-sm overflow-x-auto">
                                        <pre className="text-gray-300">{`{
  "interview_id": "int_456",
  "score": 85,
  "sentiment": "positive",
  "key_insights": [
    "Strong communication skills",
    "Relevant experience"
  ],
  "transcript": "..."
}`}</pre>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="candidates" className="space-y-6">
                                <div className="bg-card rounded-2xl p-8 border border-border">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-heading font-bold">Screen Resume</h3>
                                        <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-mono">POST</span>
                                    </div>
                                    <p className="text-muted-foreground mb-4">
                                        <code className="bg-dark px-2 py-1 rounded">/v1/candidates/screen</code>
                                    </p>
                                    <div className="bg-dark rounded-xl p-4 font-mono text-sm overflow-x-auto">
                                        <pre className="text-gray-300">{`{
  "resume_url": "https://...",
  "job_requirements": {
    "skills": ["Python", "React"],
    "experience_years": 3
  }
}`}</pre>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="assessments" className="space-y-6">
                                <div className="bg-card rounded-2xl p-8 border border-border">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-heading font-bold">Create Coding Assessment</h3>
                                        <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-mono">POST</span>
                                    </div>
                                    <p className="text-muted-foreground mb-4">
                                        <code className="bg-dark px-2 py-1 rounded">/v1/assessments/coding</code>
                                    </p>
                                    <div className="bg-dark rounded-xl p-4 font-mono text-sm overflow-x-auto">
                                        <pre className="text-gray-300">{`{
  "language": "python",
  "difficulty": "medium",
  "type": "code_completion",
  "time_limit": 60
}`}</pre>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="webhooks" className="space-y-6">
                                <div className="bg-card rounded-2xl p-8 border border-border">
                                    <h3 className="text-xl font-heading font-bold mb-4">Configure Webhooks</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Receive real-time notifications when interviews are completed, candidates are screened, or assessments are submitted.
                                    </p>
                                    <div className="bg-dark rounded-xl p-4 font-mono text-sm overflow-x-auto">
                                        <pre className="text-gray-300">{`{
  "url": "https://your-app.com/webhooks",
  "events": [
    "interview.completed",
    "candidate.screened",
    "assessment.submitted"
  ]
}`}</pre>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>

                        <div className="glass rounded-3xl p-8 text-center">
                            <h3 className="text-2xl font-heading font-bold mb-4">Need Help Getting Started?</h3>
                            <p className="text-muted-foreground mb-6">
                                Our developer support team is here to help you integrate YalHire's API
                            </p>
                            <Button size="lg" className="bg-primary text-primary-foreground">
                                Contact Developer Support
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default APIDocs;
