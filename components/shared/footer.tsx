import Link from "next/link";
import { footerSections, socialLinks } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap, ArrowRight } from "lucide-react";
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Helper to map string icon names to Lucide components
  const getSocialIcon = (name: string) => {
    switch (name) {
      case "Twitter": return <FaTwitter className="w-5 h-5" />;
      case "Instagram": return <FaInstagram className="w-5 h-5" />;
      case "Youtube": return <FaYoutube className="w-5 h-5" />;
      case "Linkedin": return <FaLinkedin className="w-5 h-5" />;
      default: return <ArrowRight className="w-5 h-5" />;
    }
  };

  return (
    <footer className="bg-card border-t border-border mt-auto pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand & Newsletter Section */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-md group-hover:scale-105 transition-transform duration-300">
                <Zap size={20} strokeWidth={2.5} />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">
                Nassets
              </span>
            </Link>

            <p className="text-muted-foreground max-w-sm">
              Discover the future of riding. Premium electric motorcycles designed for performance, sustainability, and unparalleled thrill.
            </p>

            <div className="space-y-3 pt-4">
              <h4 className="font-semibold text-sm">Join our newsletter</h4>
              <div className="flex items-center max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-10 rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0 border-r-0 bg-background"
                />
                <Button type="submit" className="h-10 rounded-l-none px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="font-heading font-semibold text-foreground">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Nassets. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-glow transition-all duration-300"
                aria-label={social.label}
              >
                {getSocialIcon(social.iconName)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
