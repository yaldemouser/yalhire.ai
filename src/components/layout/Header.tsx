import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const aiAgentsLinks = [
    { name: "AI Video Interviewer", href: "/ai-video-interviewer" },
    { name: "AI Phone Screener", href: "/ai-phone-screener" },
    { name: "AI Resume Screener", href: "/ai-resume-screener" },
    { name: "AI Coding Interviewer", href: "/ai-coding-interviewer" },
  ];

  const resourcesLinks = [
    { name: "Blog", href: "/#blog" },
    { name: "Help Center", href: "/help" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "API Documentation", href: "/docs" },
  ];

  const useCasesLinks = [
    { name: "Enterprise", href: "/enterprise" },
    { name: "Startups", href: "/startups" },
    { name: "Recruitment Agencies", href: "/agencies" },
    { name: "Remote Hiring", href: "/remote-hiring" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top announcement bar - Refined with subtle gradient */}
      <div className="bg-gradient-to-r from-primary to-brand-accent text-primary-foreground py-2 px-4 text-center text-xs font-semibold tracking-wide uppercase">
        <span className="inline-flex items-center gap-2">
          🏆 YalHire Named Industry Leader 2025
        </span>
      </div>

      {/* Main navigation - Premium Glassmorphism */}
      <nav className="glass-morphism mx-auto mt-4 max-w-7xl rounded-2xl px-6 py-3 transition-all duration-300 hover:shadow-2xl">
        <div className="flex items-center justify-between">
          {/* Logo - Refined Size and Typography */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <img src={logo} alt="YalHire Logo" className="w-12 h-12 object-contain transition-transform duration-500 group-hover:scale-110" />
            </div>
            <span className="font-heading font-extrabold text-2xl tracking-tighter text-foreground">
              Y<span className="text-primary">'</span>alHire
            </span>
          </Link>

          {/* Desktop Navigation - Refined Spacing & Typography */}
          <div className="hidden lg:flex items-center gap-10">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 text-foreground/70 hover:text-primary transition-all font-semibold text-sm uppercase tracking-wider">
                AI Agents <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-morphism border-white/20 p-2 min-w-[200px]">
                {aiAgentsLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild className="rounded-lg focus:bg-primary/10 focus:text-primary">
                    <Link to={link.href} className="w-full px-3 py-2 text-sm font-medium">{link.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/pricing"
              className={`text-foreground/70 hover:text-primary transition-all font-semibold text-sm uppercase tracking-wider ${location.pathname === "/pricing" ? "text-primary border-b-2 border-primary" : ""
                }`}
            >
              Pricing
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 text-foreground/70 hover:text-primary transition-all font-semibold text-sm uppercase tracking-wider">
                Resources <ChevronDown className="w-3.5 h-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-morphism border-white/20 p-2 min-w-[200px]">
                {resourcesLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild className="rounded-lg focus:bg-primary/10 focus:text-primary">
                    <Link to={link.href} className="w-full px-3 py-2 text-sm font-medium">{link.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 text-foreground/70 hover:text-primary transition-all font-semibold text-sm uppercase tracking-wider">
                Use Cases <ChevronDown className="w-3.5 h-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-morphism border-white/20 p-2 min-w-[200px]">
                {useCasesLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild className="rounded-lg focus:bg-primary/10 focus:text-primary">
                    <Link to={link.href} className="w-full px-3 py-2 text-sm font-medium">{link.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Buttons - Premium Styles */}
          <div className="hidden lg:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground/70 hover:text-primary hover:bg-primary/5 font-semibold text-sm uppercase tracking-wider">
                  Login <ChevronDown className="w-3.5 h-3.5 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-morphism border-white/20 p-2 min-w-[180px]">
                <DropdownMenuItem asChild className="rounded-lg focus:bg-primary/10">
                  <a href="https://demo.yalhire.ai/" target="_blank" rel="noopener noreferrer" className="w-full px-3 py-2 text-sm font-medium">Employer Login</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg focus:bg-primary/10">
                  <a href="https://demo.yalhire.ai/" target="_blank" rel="noopener noreferrer" className="w-full px-3 py-2 text-sm font-medium">Job Seeker Login</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button asChild className="premium-gradient text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300 font-bold px-8 rounded-xl border-0 uppercase tracking-widest text-xs">
              <Link to="/pricing">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground/70 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu - Enhanced with better styling */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <p className="font-bold text-xs text-muted-foreground uppercase tracking-widest px-2">AI Agents</p>
                {aiAgentsLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-2 py-1 text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/pricing"
                className="px-2 text-lg font-bold text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <a
                href="/#blog"
                className="px-2 text-lg font-bold text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <div className="space-y-4 pt-2">
                <p className="font-bold text-xs text-muted-foreground uppercase tracking-widest px-2">Login</p>
                <a href="https://demo.yalhire.ai/" target="_blank" rel="noopener noreferrer" className="block px-2 py-1 text-lg font-medium text-foreground/80 hover:text-primary transition-colors">
                  Employer Login
                </a>
                <a href="https://demo.yalhire.ai/" target="_blank" rel="noopener noreferrer" className="block px-2 py-1 text-lg font-medium text-foreground/80 hover:text-primary transition-colors">
                  Job Seeker Login
                </a>
              </div>
              <div className="flex gap-4 pt-4">
                <Button asChild className="flex-1 premium-gradient text-white rounded-xl py-6 font-bold uppercase tracking-widest text-xs">
                  <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header >
  );
};

export default Header;
