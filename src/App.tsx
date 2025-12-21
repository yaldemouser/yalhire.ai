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
          <Route path="/enterprise" element={<ComingSoon />} />
          <Route path="/startups" element={<ComingSoon />} />
          <Route path="/agencies" element={<ComingSoon />} />
          <Route path="/remote-hiring" element={<ComingSoon />} />
          <Route path="/blog/:id" element={<ComingSoon />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
