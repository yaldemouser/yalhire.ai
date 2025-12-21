import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import AIVideoInterviewer from "./pages/AIVideoInterviewer";
import AIPhoneScreener from "./pages/AIPhoneScreener";
import AIResumeScreener from "./pages/AIResumeScreener";
import AICodingInterviewer from "./pages/AICodingInterviewer";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import HelpCenter from "./pages/HelpCenter";
import CaseStudies from "./pages/CaseStudies";
import APIDocs from "./pages/APIDocs";
import Enterprise from "./pages/Enterprise";
import Startups from "./pages/Startups";
import Agencies from "./pages/Agencies";
import RemoteHiring from "./pages/RemoteHiring";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Press from "./pages/Press";
import Partners from "./pages/Partners";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Security from "./pages/Security";
import GDPR from "./pages/GDPR";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/ai-video-interviewer" element={<AIVideoInterviewer />} />
          <Route path="/ai-phone-screener" element={<AIPhoneScreener />} />
          <Route path="/ai-resume-screener" element={<AIResumeScreener />} />
          <Route path="/ai-coding-interviewer" element={<AICodingInterviewer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/docs" element={<APIDocs />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/agencies" element={<Agencies />} />
          <Route path="/remote-hiring" element={<RemoteHiring />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/press" element={<Press />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/security" element={<Security />} />
          <Route path="/gdpr" element={<GDPR />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
