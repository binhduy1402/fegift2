
import logo from "../assets/logo.png";
import { Globe, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-text text-white/80 border-t border-white/5 relative z-10 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Upper grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">

          {/* Logo */}
          <div className="md:col-span-4 space-y-4">
            <a href="#" className="inline-flex items-center">
              <img
                src={logo}
                alt="FESGift"
                className="h-16 w-auto"
              />
            </a>

            <p className="text-xs text-white/55 leading-relaxed font-light max-w-sm">
              FESGift chuyên cung cấp giải pháp quà tặng doanh nghiệp,
              quà tặng sự kiện và giftset cao cấp mang đậm bản sắc Việt.
            </p>

            <div className="flex items-center gap-4 pt-1 text-white/45 text-[10px]">
              <span className="flex items-center gap-1.5 font-semibold tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4 text-muted-gold" />
                Nâng tầm trải nghiệm quà tặng
              </span>
            </div>
          </div>

          {/* About */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">
              VỀ FESGIFT
            </h4>

            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#our-story" className="text-white/60 hover:text-white transition-colors">
                  Câu chuyện thương hiệu
                </a>
              </li>

              <li>
                <a href="#collections" className="text-white/60 hover:text-white transition-colors">
                  Bộ sưu tập
                </a>
              </li>

              <li>
                <a href="#projects" className="text-white/60 hover:text-white transition-colors">
                  Dự án tiêu biểu
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">
              HỖ TRỢ
            </h4>

            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#contact" className="text-white/60 hover:text-white transition-colors">
                  Liên hệ
                </a>
              </li>

              <li>
                <a href="#contact" className="text-white/60 hover:text-white transition-colors">
                  Chính sách
                </a>
              </li>

              <li>
                <a href="#contact" className="text-white/60 hover:text-white transition-colors">
                  Vận chuyển
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">
              LIÊN HỆ
            </h4>

            <div className="space-y-3 text-xs">
              <div>
                <p className="text-white/40 uppercase tracking-wider mb-1">
                  Email
                </p>
                <p className="text-white/80">
                  contact@fesgift.com
                </p>
              </div>

              <div>
                <p className="text-white/40 uppercase tracking-wider mb-1">
                  Website
                </p>
                <p className="text-white/80">
                  www.fesgift.com
                </p>
              </div>

              <div>
                <p className="text-white/40 uppercase tracking-wider mb-1">
                  Hotline
                </p>
                <p className="text-white/80">
                  090x xxx xxx
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/45">
          <p>
            © {currentYear} FESGift. All Rights Reserved.
          </p>

          <a
            href="#"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Globe className="w-3.5 h-3.5 text-muted-gold" />
            Tiếng Việt
          </a>
        </div>

      </div>
    </footer>
  );
}
