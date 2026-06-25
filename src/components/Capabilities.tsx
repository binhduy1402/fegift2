import {
  ArrowRight,
  Quote,
} from "lucide-react";

import logoAIA from "../assets/logo_aia.png";
import logoFubon from "../assets/logo_fubon.png";
import logoFWD from "../assets/logo_fwd.jpg";
import logoGEN from "../assets/logo_gen.jpg";
import logoSUN from "../assets/logo_sun.png";

const testimonials = [
  {
    name: "Nguyễn Minh Anh",
    role: "Giám đốc Marketing",
    company: "ABC Corporation",
    content:
      "FESGift giúp chúng tôi triển khai hơn 20.000 phần quà khách hàng trong thời gian ngắn với chất lượng đồng đều và chuyên nghiệp.",
  },
  {
    name: "Trần Hoàng Nam",
    role: "Trưởng phòng Nhân sự",
    company: "XYZ Group",
    content:
      "Đội ngũ tư vấn nhanh, thiết kế chỉn chu và hiểu rõ cách truyền tải hình ảnh thương hiệu qua từng sản phẩm.",
  },
  {
    name: "Lê Thanh Hương",
    role: "Giám đốc Kinh doanh",
    company: "Future Holdings",
    content:
      "Quà tặng cao cấp, đóng gói đẹp và đúng tiến độ. Đối tác của chúng tôi đánh giá rất cao trải nghiệm nhận quà.",
  },
];

const clients = [
  logoAIA,
  logoFubon,
  logoFWD,
  logoGEN,
  logoSUN,
];


export default function Capabilities() {
const scrollToContact = () => {
const section = document.getElementById("contact");

if (section) {
  section.scrollIntoView({
    behavior: "smooth",
  });
}

};

return (
<section
  id="capabilities"
  className="reveal relative overflow-hidden bg-[#fffdf9] py-24"
>
<div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#7c142b]/5 blur-3xl" />
<div
  className="
    absolute
    left-1/2
    top-1/3
    h-96
    w-96
    -translate-x-1/2
    rounded-full
    bg-[#d4af37]/5
    blur-3xl
    animate-pulse
  "
/>
<div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#c9a227]/10 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="mb-2 block text-[11px] font-bold tracking-[0.3em] uppercase text-[#7c142b]">
        KHÁCH HÀNG TIN TƯỞNG
      </span>

      <h2 className="font-serif text-4xl font-bold text-[#1f1f1f]">
        Đồng Hành Cùng Doanh Nghiệp
      </h2>

      <p className="mt-4 text-sm leading-relaxed text-gray-600">
        FESGift mang đến giải pháp quà tặng được thiết kế riêng,
        giúp doanh nghiệp tạo dấu ấn chuyên nghiệp với khách hàng,
        đối tác và nhân viên.
      </p>
    </div>

<div className="relative mb-16 overflow-hidden">

  {/* Fade trái */}
  <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#fffdf9] to-transparent" />

  {/* Fade phải */}
  <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#fffdf9] to-transparent" />

  <div className="flex w-max animate-marquee gap-6">

          {[...clients, ...clients].map((logo, index) => (
            <div
              key={index}
              className="
                flex
                h-28
                min-w-[180px]
                items-center
                justify-center
                px-10
                transition-all
                duration-300
                hover:scale-105
              "
            >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="
                    max-h-16
                    w-auto
                    object-contain
                    opacity-70
                    grayscale
                    transition-all
                    duration-300
                    hover:opacity-100
                    hover:grayscale-0
                  "
                />
            </div>
          ))}
    
  </div>

</div>

    <div
        className="
          premium-card
          mb-16
          overflow-hidden
          rounded-3xl
          transition-all
          duration-700
          hover:-translate-y-1
          hover:shadow-[0_30px_80px_rgba(124,20,43,0.12)]
        "
      >
  <div className="grid lg:grid-cols-2">

    {/* Image */}
      <div className="group relative min-h-[320px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1200&auto=format&fit=crop"
          alt="Case Study"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-1000
            group-hover:scale-105
          "
        />
      
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
      </div>

    {/* Content */}
    <div className="flex flex-col justify-center p-10">
      <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#7c142b]">
        CASE STUDY TIÊU BIỂU
      </span>

      <h3 className="mt-3 font-serif text-3xl font-bold text-[#1f1f1f]">
        Dự Án Quà Tặng Tết Doanh Nghiệp
      </h3>

<p className="mt-4 text-gray-600 leading-relaxed">
  Triển khai hơn 20.000 bộ quà tặng được thiết kế riêng theo
  nhận diện thương hiệu cho chương trình tri ân khách hàng cuối năm.
</p>

<div className="mt-6 grid grid-cols-3 gap-4">
  <div>
    <div className="text-2xl font-bold text-[#7c142b]">
      20.000+
    </div>
    <div className="text-xs text-gray-500">
      Bộ quà tặng
    </div>
  </div>

  <div>
    <div className="text-2xl font-bold text-[#7c142b]">
      45
    </div>
    <div className="text-xs text-gray-500">
      Ngày triển khai
    </div>
  </div>

  <div>
    <div className="text-2xl font-bold text-[#7c142b]">
      100%
    </div>
    <div className="text-xs text-gray-500">
      Đúng tiến độ
    </div>
  </div>
</div>

<div className="mt-6 space-y-3">
  <div>✓ Thiết kế riêng theo thương hiệu</div>
  <div>✓ Sản xuất số lượng lớn</div>
  <div>✓ Giao hàng toàn quốc</div>
  <div>✓ Hoàn thành đúng tiến độ</div>
</div>
      
</div>
</div>
  </div>

    <div className="grid gap-6 lg:grid-cols-3">
      {testimonials.map((item, index) => (
        <div
          key={index}
          className="
            premium-card
            relative
            overflow-hidden
            p-8
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-[0_20px_50px_rgba(124,20,43,0.12)]
          "
        >
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#d4af37] to-[#f3d77a]" />
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4af37]/10">
            <Quote className="h-6 w-6 text-[#d4af37]" />
          </div>

          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            {item.content}
          </p>

          <div className="mt-6 border-t border-[#7c142b]/10 pt-4">
              <div className="font-semibold text-[#2c2c2c]">
                {item.name}
              </div>
            
              <div className="mt-1 text-sm text-gray-500">
                {item.role}
              </div>
            
              <div className="mt-1 text-xs font-bold tracking-widest uppercase text-[#7c142b]">
                {item.company}
              </div>
            </div>
          </div>
      ))}
    </div>

    <div className="mt-16 rounded-3xl luxury-gradient p-10 text-center text-white">
      <h3 className="font-serif text-3xl font-bold">
        Nhận Tư Vấn Giải Pháp Quà Tặng
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80">
        Chia sẻ nhu cầu của doanh nghiệp, FESGift sẽ đề xuất giải pháp phù hợp và báo giá hoàn toàn miễn phí.
      </p>

      <button
        onClick={scrollToContact}
        className="
          mt-8
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-white
          px-8
          py-4
          text-xs
          font-bold
          uppercase
          tracking-widest
          text-[#7c142b]
          transition-all
          hover:-translate-y-1
        "
      >
        Nhận Tư Vấn Ngay
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>

  </div>
</section>
);
}
