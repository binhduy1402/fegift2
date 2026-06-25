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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#14090d]/92 supports-[backdrop-filter]:backdrop-blur-sm border-b border-[#c49b47]/15 shadow-[0_10px_35px_rgba(0,0,0,.45)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="luxury-container flex h-16 items-center justify-between">

        {/* Logo */}
        <a href="#" className="group flex items-center">
          <img
            src={logo}
            alt="FESGift"
            className="h-14 w-auto transition-all duration-500 group-hover:scale-105"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-xs font-semibold uppercase tracking-[0.18em] text-[#bea98f] transition-colors duration-300 hover:text-[#d8b86b]"
            >
              {link.label}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#c49b47] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={onInquireClick}
            className="btn-primary px-6 py-3 tracking-[0.18em]"
          >
            Yêu Cầu Báo Giá

            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-[#f5e8c8]"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Gold Line */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#c49b47]/60 to-transparent" />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="animate-fadeIn border-t border-[#c49b47]/15 bg-[#14090d] md:hidden">
          <div className="space-y-2 px-5 py-6">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block border-b border-[#c49b47]/10 py-3 text-sm font-semibold uppercase tracking-wider text-[#f2ead3] transition-colors hover:text-[#d8b86b]"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                setIsOpen(false);
                onInquireClick();
              }}
              className="btn-primary mt-5 w-full justify-center"
            >
              Yêu Cầu Báo Giá
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
