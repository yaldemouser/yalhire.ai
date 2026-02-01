import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const productLinks = [
    { name: "AI Video Interviewer", href: "/ai-video-interviewer" },
    { name: "AI Phone Screener", href: "/ai-phone-screener" },
    { name: "AI Resume Screener", href: "/ai-resume-screener" },
    { name: "AI Coding Interviewer", href: "/ai-coding-interviewer" },
    { name: "Pricing", href: "/pricing" },
  ];

  const resourceLinks = [
    { name: "Blog", href: "/#blog" },
    { name: "Help Center", href: "/help" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "API Documentation", href: "/docs" },
    { name: "Integrations", href: "/coming-soon" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Press", href: "/press" },
    { name: "Partners", href: "/partners" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Security", href: "/security" },
    { name: "GDPR", href: "/gdpr" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#0c121e] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-8 group">
              <div className="bg-white rounded-2xl p-2 w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110">
                <img src={logo} alt="YalHire Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="font-heading font-black text-3xl tracking-tighter">
                Y<span className="text-primary">'</span>alHire
              </span>
            </Link>
            <p className="text-white/50 text-base mb-8 max-w-sm leading-relaxed font-medium">
              Transforming Global Recruitment with Autonomous AI Agents. Hire faster, smarter, and without bias.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-xl bg-white/5 hover:bg-primary hover:scale-110 flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:pl-8">
            <h4 className="font-heading font-bold text-sm uppercase tracking-[0.2em] text-primary mb-8">Product</h4>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/40 hover:text-white transition-colors text-sm font-semibold"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Company */}
          <div className="lg:pl-8">
            <h4 className="font-heading font-bold text-sm uppercase tracking-[0.2em] text-primary mb-8">Company</h4>
            <ul className="space-y-4">
              {[...companyLinks, ...resourceLinks.slice(0, 1)].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/40 hover:text-white transition-colors text-sm font-semibold"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:pl-8">
            <h4 className="font-heading font-bold text-sm uppercase tracking-[0.2em] text-primary mb-8">Legal</h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/40 hover:text-white transition-colors text-sm font-semibold"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Premium Polish */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-white/30 text-xs font-bold tracking-widest uppercase">
              © 2026 YalHire AI. All rights reserved.
            </p>
            <p className="text-white/20 text-[10px] font-medium tracking-tight">
              Designed for World-Class Recruitment Teams.
            </p>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=40&fit=crop"
                alt="SOC2 Certified"
                className="h-6 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer"
              />
              <span className="text-[8px] text-white/20 mt-1 font-bold">SOC 2 TYPE II</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=100&h=40&fit=crop"
                alt="ISO Certified"
                className="h-6 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer"
              />
              <span className="text-[8px] text-white/20 mt-1 font-bold">ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
