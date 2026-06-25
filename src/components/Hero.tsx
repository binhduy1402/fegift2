import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "../assets/hero01.jpg";

interface HeroProps {
  onDiscoverClick: () => void;
  onConsultClick: () => void;
}

export default function Hero({
  onDiscoverClick,
  onConsultClick,
}: HeroProps) {
  return (
    <section className="gold-pattern relative overflow-hidden bg-gradient-to-b from-[#faf7f2] via-[#faf7f2] to-white pt-24 pb-20 md:pt-36 md:pb-28">
      
      {/* Background Effects */}
      <div className="absolute left-[-10%] top-1/2 h-[35rem] w-[35rem] -translate-y-1/2 rounded-full bg-[#7c142b]/5 blur-3xl pointer-events-none" />
      <div className="absolute right-[-5%] top-0 h-[30rem] w-[30rem] rounded-full bg-[#d4af37]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">

          {/* Left Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7c142b]/10 bg-[#7c142b]/5 px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#7c142b]">
              <Sparkles className="h-3 w-3 fill-current text-[#d4af37]" />
              Quà Tặng Doanh Nghiệp Cao Cấp
            </div>

              <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-[#2c2c2c] sm:text-5xl lg:text-6xl">
                Quà Tặng Doanh Nghiệp
              
                <span className="mt-2 block text-[#7c142b] italic font-normal">
                  Nâng Tầm Thương Hiệu
                </span>
              </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#555]">
              FESGift đồng hành cùng doanh nghiệp tạo nên những bộ quà tặng mang
              dấu ấn thương hiệu riêng, từ ý tưởng, thiết kế đến sản xuất và bàn giao
              trên toàn quốc.
            </p>

            {/* USP */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#7c142b] shadow-sm border border-[#7c142b]/10">
                ✓ Tư vấn miễn phí
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#7c142b] shadow-sm border border-[#7c142b]/10">
                ✓ Sản xuất theo yêu cầu
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#7c142b] shadow-sm border border-[#7c142b]/10">
                ✓ Giao hàng toàn quốc
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={onConsultClick}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-md
                  bg-[#7c142b]
                  px-7
                  py-3
                  text-xs
                  font-bold
                  tracking-widest
                  uppercase
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                Nhận Báo Giá Ngay
                <ArrowRight className="h-4 w-4" />
              </button>

              {/*<button
                onClick={onDiscoverClick}
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-[#d4af37]
                  px-7
                  py-3
                  text-xs
                  font-bold
                  tracking-widest
                  uppercase
                  text-[#7c142b]
                  transition-all
                  duration-300
                  hover:bg-[#d4af37]
                  hover:text-[#6b0d22]
                "
              >
                Xem Bộ Sưu Tập
              </button>*/}
            </div>
          </div>

              {/* Right Image */}
            <div className="lg:col-span-6">
              <div className="relative hero-float">
            
                <div className="overflow-hidden rounded-2xl border border-[#7c142b]/10 bg-white p-2 shadow-2xl">
                  <img
                    src={heroImage}
                    alt="FESGift Gift Collection"
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
            
                {/* Floating Card */}
                <div className="absolute -bottom-6 left-6 hero-card-float rounded-xl border border-[#d4af37]/20 bg-white/95 px-6 py-5 shadow-xl backdrop-blur-md">
                  <div className="text-2xl font-serif font-bold text-[#7c142b]">
                    TƯ VẤN MIỄN PHÍ
                  </div>
            
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    THEO NHẬN DIỆN THƯƠNG HIỆU
                  </div>
                </div>
            
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
