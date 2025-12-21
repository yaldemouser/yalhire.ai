import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustLogos from "@/components/sections/TrustLogos";
import AISuiteSection from "@/components/sections/AISuiteSection";
import CostComparisonSection from "@/components/sections/CostComparisonSection";
import PricingSection from "@/components/sections/PricingSection";
import StatsSection from "@/components/sections/StatsSection";
import FAQSection from "@/components/sections/FAQSection";
import BlogSection from "@/components/sections/BlogSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustLogos />
        <AISuiteSection />
        <CostComparisonSection />
        <PricingSection />
        <StatsSection />
        <BlogSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
