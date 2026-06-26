import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "../assets/hero01.jpg";

interface HeroProps {
  onDiscoverClick: () => void;
  onConsultClick: () => void;
}

export default function Hero({ onDiscoverClick, onConsultClick }: HeroProps) {
  return (
    <section className="gold-pattern relative overflow-hidden bg-transparent pt-24 pb-20 md:pt-36 md:pb-28">
      <div className="pointer-events-none absolute inset-6 hidden border border-[#c49b47]/20 md:block" />
      <div className="pointer-events-none absolute left-6 top-6 h-10 w-10 border-l border-t border-[#c49b47]/40" />
      <div className="pointer-events-none absolute right-6 top-6 h-10 w-10 border-r border-t border-[#c49b47]/40" />
      <div className="pointer-events-none absolute left-6 bottom-6 h-10 w-10 border-l border-b border-[#c49b47]/40" />
      <div className="pointer-events-none absolute right-6 bottom-6 h-10 w-10 border-r border-b border-[#c49b47]/40" />
      {/* Background Effects */}
      <div className="absolute left-[-10%] top-1/2 h-[35rem] w-[35rem] -translate-y-1/2 rounded-full bg-[#7c142b]/30 blur-3xl pointer-events-none" />
      <div className="absolute right-[-5%] top-0 h-[30rem] w-[30rem] rounded-full bg-[#c49b47]/10 blur-3xl pointer-events-none" />
      <div className="luxury-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
          
          {/* Left Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c49b47]/40 bg-[#7c142b]/30 px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#d8b86b] backdrop-blur-sm">
             <div className="h-2 w-2 rounded-full bg-[#c49b47]" />
              Quà Tặng Doanh Nghiệp Cao Cấp
            </div>

            <p className="mt-6 text-xs tracking-[0.45em] uppercase text-[#c49b47]/80">
                FES GIFT — PREMIUM COLLECTION
            </p>

            <h1 className="mt-6 font-serif text-5xl font-bold leading-tight text-[#f5e8c8] sm:text-6xl lg:text-7xl">
              Quà Tặng Doanh Nghiệp
              <span className="mt-2 block font-semibold text-[#d8b86b]">
                Nâng Tầm Thương Hiệu
              </span>
            </h1>

            <div className="mt-6 flex items-center gap-3">
                <div className="h-px w-16 bg-[#c49b47]/70" />
                <div className="h-2 w-2 rotate-45 bg-[#c49b47]" />
                <div className="h-px w-16 bg-[#c49b47]/70" />
            </div>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#bea98f]">
              FESGift đồng hành cùng doanh nghiệp tạo nên những bộ quà tặng mang
              dấu ấn thương hiệu riêng, từ ý tưởng, thiết kế đến sản xuất và bàn giao
              trên toàn quốc.
            </p>

            {/* USP */}
            <div className="mt-6 flex flex-wrap gap-3">
              {["Tư vấn miễn phí", "Sản xuất theo yêu cầu", "Giao hàng toàn quốc"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#c49b47]/20 bg-[#231116] px-4 py-2 text-xs font-semibold text-[#f2ead3]"
                  >
                    ✓ {item}
                  </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button
                  onClick={onConsultClick}
                  className="btn-primary group tracking-[0.18em]"
              >
                  Nhận Báo Giá Ngay
              
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"/>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6">
            <div className="relative hero-float group">
              <div className="overflow-hidden transition duration-700 group-hover:scale-[1.015] rounded-md border border-[#c49b47]/20 bg-[#231116] p-[6px] shadow-[0_30px_60px_rgba(0,0,0,.55)]">
                <img src={heroImage} alt="FESGift Gift Collection" loading="eager" fetchPriority="high" decoding="async" className="h-full w-full rounded-sm object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12080b]/30 via-transparent to-transparent rounded-sm" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 left-6 hero-card-float rounded-lg border border-[#c49b47]/20 bg-[#231116]/95 px-6 py-5 shadow-2xl backdrop-blur-md">
                <div className="text-2xl font-serif font-bold text-[#d8b86b]">TƯ VẤN MIỄN PHÍ</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#bea98f]">THEO NHẬN DIỆN THƯƠNG HIỆU</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
