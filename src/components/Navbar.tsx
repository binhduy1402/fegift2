import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { NAVIGATION_LINKS } from "../data";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onInquireClick: () => void;
}

export default function Navbar({ onInquireClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-cream-bg/95 backdrop-blur-md shadow-sm border-b border-border py-3" : "bg-transparent py-5"}`}>
      <div className="luxury-container flex items-center justify-between h-14">
        <a href="#" className="flex items-center">
          <img src={logo} alt="FESGift" className="h-12 w-auto" />
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {NAVIGATION_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-xs font-semibold tracking-wider text-charcoal-text/80 hover:text-primary-brand transition-colors uppercase">
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button onClick={onInquireClick} className="btn-primary py-2.5 px-5">
            Yêu Cầu Báo Giá
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-charcoal-text">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream-bg border-b border-border animate-fadeIn">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {NAVIGATION_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-semibold text-charcoal-text uppercase">
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <button onClick={() => { setIsOpen(false); onInquireClick(); }} className="btn-primary w-full">
                Yêu Cầu Báo Giá
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
