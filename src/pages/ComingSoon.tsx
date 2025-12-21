import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Construction } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ComingSoon = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 flex items-center justify-center p-4 pt-32">
                <div className="max-w-md w-full text-center space-y-8 animate-fade-in">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
                        <Construction className="w-24 h-24 text-primary relative z-10 mx-auto" />
                    </div>

                    <div className="space-y-4 relative z-10">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold">Coming Soon</h1>
                        <p className="text-lg text-muted-foreground">
                            We're working hard to bring you this feature. Stay tuned for updates!
                        </p>
                    </div>

                    <div className="pt-8 relative z-10">
                        <Button
                            onClick={() => navigate(-1)}
                            variant="outline"
                            className="gap-2 group transition-all"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Go Back
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ComingSoon;
