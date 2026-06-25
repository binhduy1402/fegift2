import { ArrowRight, Quote } from "lucide-react";

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
      className="reveal relative overflow-hidden bg-[#1a0d11] py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-[-150px] top-[-150px] h-[420px] w-[420px] rounded-full bg-[#7c142b]/15 blur-[140px]" />
      <div className="absolute right-[-150px] bottom-[-150px] h-[420px] w-[420px] rounded-full bg-[#c49b47]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto mb-20 max-w-4xl text-center">

          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.45em] text-[#c49b47]">
            TRUSTED BY LEADING BRANDS
          </span>

          <h2 className="font-serif text-4xl leading-tight text-[#f5e8c8] md:text-6xl">
            Đồng Hành Cùng
            <span className="mt-2 block bg-gradient-to-r from-[#c49b47] via-[#f5e8c8] to-[#c49b47] bg-clip-text text-transparent">
              Những Thương Hiệu Hàng Đầu
            </span>
          </h2>

          <div className="mx-auto mt-8 h-px w-28 bg-gradient-to-r from-transparent via-[#c49b47] to-transparent" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#bea98f]">
            Hơn cả những dự án quà tặng, FESGift đồng hành cùng doanh nghiệp
            trong việc xây dựng trải nghiệm thương hiệu chuyên nghiệp và tạo dấu
            ấn lâu dài với khách hàng, đối tác và đội ngũ nội bộ.
          </p>

        </div>

        {/* Logo Marquee */}

        <div className="relative mb-24 overflow-hidden">

          {/* Fade Left */}

          <div className="absolute left-0 top-0 z-20 h-full w-28 bg-gradient-to-r from-[#1a0d11] to-transparent" />

          {/* Fade Right */}

          <div className="absolute right-0 top-0 z-20 h-full w-28 bg-gradient-to-l from-[#1a0d11] to-transparent" />

          <div className="marquee-track flex w-max gap-8">

            {[...clients, ...clients].map((logo, index) => (

              <div
                key={index}
                className="
                  group
                  flex
                  h-32
                  min-w-[210px]
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#c49b47]/15
                  bg-[#231116]/90
                  px-10
                  backdrop-blur
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#c49b47]/45
                  hover:bg-[#2b151b]
                  hover:shadow-[0_0_35px_rgba(196,155,71,0.18)]
                "
              >

                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="
                    max-h-14
                    w-auto
                    object-contain
                    opacity-55
                    grayscale
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:opacity-100
                    group-hover:grayscale-0
                    group-hover:drop-shadow-[0_0_18px_rgba(196,155,71,0.35)]
                  "
                />

              </div>

            ))}

          </div>

        </div>

        {/* ===== CASE STUDY BẮT ĐẦU Ở PHẦN 1B ===== */}
