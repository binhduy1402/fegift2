import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "../assets/hero01.jpg";

interface HeroProps {
  onDiscoverClick: () => void;
  onConsultClick: () => void;
}

export default function Hero({ onDiscoverClick, onConsultClick }: HeroProps) {
  return (
    <section className="gold-pattern relative overflow-hidden bg-cream-bg pt-24 pb-20 md:pt-36 md:pb-28">
      {/* Background Effects */}
      <div className="absolute left-[-10%] top-1/2 h-[35rem] w-[35rem] -translate-y-1/2 rounded-full bg-primary-brand/5 blur-3xl pointer-events-none" />
      <div className="absolute right-[-5%] top-0 h-[30rem] w-[30rem] rounded-full bg-muted-gold/10 blur-3xl pointer-events-none" />

      <div className="luxury-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-brand/10 bg-primary-brand/5 px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-primary-brand">
              <Sparkles className="h-3 w-3 fill-current text-muted-gold" />
              Quà Tặng Doanh Nghiệp Cao Cấp
            </div>

            <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-charcoal-text sm:text-5xl lg:text-6xl">
              Quà Tặng Doanh Nghiệp
              <span className="mt-2 block text-primary-brand italic font-normal">
                Nâng Tầm Thương Hiệu
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary-brand">
              FESGift đồng hành cùng doanh nghiệp tạo nên những bộ quà tặng mang
              dấu ấn thương hiệu riêng, từ ý tưởng, thiết kế đến sản xuất và bàn giao
              trên toàn quốc.
            </p>

            {/* USP */}
            <div className="mt-6 flex flex-wrap gap-3">
              {["Tư vấn miễn phí", "Sản xuất theo yêu cầu", "Giao hàng toàn quốc"].map((item) => (
                <span key={item} className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary-brand shadow-sm border border-primary-brand/10">
                  ✓ {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button onClick={onConsultClick} className="btn-primary">
                Nhận Báo Giá Ngay
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6">
            <div className="relative hero-float">
              <div className="overflow-hidden rounded-2xl border border-primary-brand/10 bg-white p-2 shadow-2xl">
                <img src={heroImage} alt="FESGift Gift Collection" className="h-full w-full rounded-xl object-cover" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 left-6 hero-card-float rounded-xl border border-muted-gold/20 bg-white/95 px-6 py-5 shadow-xl backdrop-blur-md">
                <div className="text-2xl font-serif font-bold text-primary-brand">TƯ VẤN MIỄN PHÍ</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-secondary-brand">THEO NHẬN DIỆN THƯƠNG HIỆU</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
