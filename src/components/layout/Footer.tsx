import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

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
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">T</span>
              </div>
              <span className="font-heading font-bold text-2xl">YalHire</span>
            </Link>
            <p className="text-white/60 text-sm mb-6 max-w-xs">
              AI-powered recruiting software that helps you find the right talent faster and smarter.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2025 YalHire. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=40&fit=crop"
              alt="SOC2 Certified"
              className="h-8 opacity-60 hover:opacity-100 transition-opacity rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=100&h=40&fit=crop"
              alt="ISO Certified"
              className="h-8 opacity-60 hover:opacity-100 transition-opacity rounded"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
