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
      {/* Top announcement bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          🏆 YalHire Named Industry Leader, wins 13 Badges for 2025
        </span>
      </div>

      {/* Main navigation */}
      <nav className="glass mx-4 mt-3 rounded-2xl px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="YalHire Logo" className="w-10 h-10 object-contain" />
            <span className="font-heading font-bold text-xl text-foreground">Y'alHire</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors font-medium">
                AI Agents <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass">
                {aiAgentsLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link to={link.href}>{link.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/pricing"
              className={`text-foreground/80 hover:text-foreground transition-colors font-medium ${location.pathname === "/pricing" ? "text-primary" : ""
                }`}
            >
              Pricing
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors font-medium">
                Resources <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass">
                {resourcesLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link to={link.href}>{link.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors font-medium">
                Use Cases <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass">
                {useCasesLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link to={link.href}>{link.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                  Login <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass">
                <DropdownMenuItem>
                  Employer Login
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Job Seeker Login
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="bg-primary text-primary-foreground hover:bg-lime-dark font-semibold px-6">
              Buy Now
            </Button>
          </div>


          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <p className="font-semibold text-sm text-muted-foreground">AI Agents</p>
                {aiAgentsLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block py-2 text-foreground/80 hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/pricing"
                className="py-2 text-foreground/80 hover:text-foreground font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <a
                href="/#blog"
                className="py-2 text-foreground/80 hover:text-foreground font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <div className="space-y-2 pt-2">
                <p className="font-semibold text-sm text-muted-foreground">Login</p>
                <button className="block py-2 text-foreground/80 hover:text-foreground w-full text-left">
                  Employer Login
                </button>
                <button className="block py-2 text-foreground/80 hover:text-foreground w-full text-left">
                  Job Seeker Login
                </button>
              </div>
              <div className="flex gap-3 pt-4">
                <Button className="flex-1 bg-primary text-primary-foreground">Buy Now</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header >
  );
};

export default Header;
