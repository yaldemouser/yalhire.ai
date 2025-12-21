import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Enterprise - Grade{" "}
            <span className="text-gradient-lime">Vibe Recruiting</span> Platform
          </h2>
          
          <p className="text-xl text-white/60 mb-4">
            Pricing starts as low as <span className="text-primary font-semibold">$1.00</span> per interview
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-lime-dark font-semibold px-8 py-6 text-lg"
            >
              <Link to="/pricing" className="inline-flex items-center gap-2">
                Purchase Credits
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Chat with Sales
            </Button>
          </div>

          {/* Rating */}
          <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-primary text-lg">★</span>
              ))}
            </div>
            <span className="text-white/80 text-sm font-medium">
              Leader of customer satisfaction • Rated 5/5
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
