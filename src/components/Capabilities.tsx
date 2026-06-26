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

          <p className="mx-auto mt-8 max-w-3xl text-base sm:text-lg leading-8 sm:leading-9 text-[#bea98f]">
            Hơn cả những dự án quà tặng, FESGift đồng hành cùng doanh nghiệp
            trong việc xây dựng trải nghiệm thương hiệu chuyên nghiệp và tạo dấu
            ấn lâu dài với khách hàng, đối tác và đội ngũ nội bộ.
          </p>

        </div>

          {/* Logo Marquee */}
          
          <div className="relative mb-24 overflow-hidden">
          
              <div className="absolute left-0 top-0 z-20 h-px w-full bg-gradient-to-r from-transparent via-[#c49b47]/20 to-transparent" />

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
                  min-w-[220px]
                  items-center
                  justify-center
                  py-5
                  transition-all
                  duration-500
                "
              >

                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="
                      max-h-14
                      w-auto
                      object-contain
                      opacity-45
                      grayscale
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:opacity-100
                      group-hover:grayscale-0
                  "
                />

              </div>

            ))}

          </div>
        <div className="absolute bottom-0 left-0 z-20 h-px w-full bg-gradient-to-r from-transparent via-[#c49b47]/20 to-transparent" />

        </div>

          {/* Featured Case Study */}

        <div
          className="
            group
            mb-24
            overflow-hidden
            rounded-[32px]
            border
            border-[#c49b47]/20
            bg-[#231116]/90
            backdrop-blur
            transition-all
            duration-700
            hover:border-[#c49b47]/45
            hover:shadow-[0_30px_80px_rgba(196,155,71,0.12)]
          "
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Image */}

           <div
                className="
                  relative
                  h-[220px]
                  sm:h-[320px]
                  lg:min-h-[420px]
                  overflow-hidden
                "
              >

              <img
                src="https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1400&auto=format&fit=crop"
                alt="Case Study"
                loading="lazy"
                decoding="async"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1600ms]
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#12080b]/80 via-[#12080b]/35 to-transparent" />

              <div className="absolute bottom-8 left-8">

                <span
                  className="
                    rounded-full
                    border
                    border-[#c49b47]/40
                    bg-[#12080b]/70
                    px-4
                    py-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.35em]
                    text-[#c49b47]
                    backdrop-blur
                  "
                >
                  FEATURED PROJECT
                </span>

              </div>

            </div>

            {/* Content */}

            <div
                  className="
                    flex
                    flex-col
                    justify-center
                    p-5
                    sm:p-8
                    lg:p-10
                  "
                >

              <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#c49b47]">
                CASE STUDY
              </span>

              <h3 className="mt-4 font-serif text-3xl sm:text-4xl leading-tight text-[#f5e8c8]">
                Dự Án Quà Tặng Tết
                <span className="block">
                  Cho Doanh Nghiệp
                </span>
              </h3>

              <div className="mt-6 h-px w-20 bg-gradient-to-r from-[#c49b47] to-transparent" />

              <p className="mt-8 leading-8 text-[#bea98f]">
                Triển khai hơn 20.000 bộ quà tặng được thiết kế riêng theo
                nhận diện thương hiệu, sản xuất đồng bộ và giao đến nhiều
                tỉnh thành trên toàn quốc trong mùa cao điểm cuối năm.
              </p>

              {/* Stats */}

              <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-5">

                <div className="rounded-2xl border border-[#c49b47]/15 bg-[#12080b]/45 p-3 sm:p-5 text-center">

                  <div className="font-serif text-2xl sm:text-4xl text-[#c49b47]">
                    20K+
                  </div>

                  <div className="mt-2 text-[11px] uppercase tracking-[0.3em] text-[#9b8673]">
                    Bộ Quà
                  </div>

                </div>

                <div className="rounded-2xl border border-[#c49b47]/15 bg-[#12080b]/45 p-5 text-center">

                  <div className="font-serif text-4xl text-[#c49b47]">
                    45
                  </div>

                  <div className="mt-2 text-[11px] uppercase tracking-[0.3em] text-[#9b8673]">
                    Ngày
                  </div>

                </div>

                <div className="rounded-2xl border border-[#c49b47]/15 bg-[#12080b]/45 p-5 text-center">

                  <div className="font-serif text-4xl text-[#c49b47]">
                    100%
                  </div>

                  <div className="mt-2 text-[11px] uppercase tracking-[0.3em] text-[#9b8673]">
                    Đúng Tiến Độ
                  </div>

                </div>

              </div>

              {/* Highlights */}

              <div className="mt-10 space-y-4">

                {[
                  "Thiết kế riêng theo nhận diện thương hiệu",
                  "Sản xuất số lượng lớn với chất lượng đồng nhất",
                  "Đóng gói cao cấp theo từng đối tượng nhận quà",
                  "Giao hàng toàn quốc đúng cam kết",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >

                    <div
                      className="
                        mt-1
                        flex
                        h-6
                        w-6
                        sm:h-7
                        sm:w-7
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#c49b47]/30
                        bg-[#c49b47]/10
                        text-sm
                        text-[#c49b47]
                      "
                    >
                      ✓
                    </div>

                    <span className="leading-7 text-[#d8c6ad]">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              {/* CTA */}

              <button
                onClick={scrollToContact}
                className="
                  mt-12
                  inline-flex
                  w-fit
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#c49b47]/35
                  bg-gradient-to-r
                  from-[#7c142b]
                  to-[#5a1022]
                  px-6
                  sm:px-8
                  py-3
                  sm:py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#f5e8c8]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#c49b47]
                  hover:shadow-[0_0_35px_rgba(196,155,71,0.18)]
                "
              >
                Khám Phá Giải Pháp

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

              </button>

            </div>

          </div>

        </div>
        {/* Testimonials */}

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#c49b47]/20
                bg-[#231116]/90
                p-8
                backdrop-blur
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#c49b47]/50
                hover:shadow-[0_20px_60px_rgba(196,155,71,0.12)]
              "
            >

              {/* Top Glow */}

              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#c49b47] to-transparent" />

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#c49b47]/25
                  bg-[#c49b47]/10
                  text-[#c49b47]
                  transition-transform
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                <Quote className="h-6 w-6" />
              </div>

              <p className="mt-8 leading-8 text-[#bea98f]">
                “{item.content}”
              </p>

              <div className="mt-10 h-px w-20 bg-gradient-to-r from-[#c49b47] to-transparent" />

              <div className="mt-6">

                <div className="font-serif text-2xl text-[#f5e8c8]">
                  {item.name}
                </div>

                <div className="mt-2 text-sm text-[#bea98f]">
                  {item.role}
                </div>

                <div className="mt-2 text-[11px] uppercase tracking-[0.35em] text-[#c49b47]">
                  {item.company}
                </div>

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div
          className="
            relative
            mt-24
            overflow-hidden
            rounded-[36px]
            border
            border-[#c49b47]/20
            bg-gradient-to-br
            from-[#231116]
            via-[#1a0d11]
            to-[#12080b]
            px-8
            py-16
            text-center
          "
        >

          <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-[#c49b47]/10 blur-[100px]" />

          <div className="relative z-10">

            <span className="text-[11px] font-semibold uppercase tracking-[0.45em] text-[#c49b47]">
              START YOUR PROJECT
            </span>

            <h3 className="mt-5 font-serif text-4xl leading-tight text-[#f5e8c8] md:text-5xl">
              Sẵn Sàng Tạo Nên
              <span className="mt-2 block">
                Một Món Quà Đáng Nhớ?
              </span>
            </h3>

            <div className="mx-auto mt-8 h-px w-28 bg-gradient-to-r from-transparent via-[#c49b47] to-transparent" />

            <p className="mx-auto mt-8 max-w-3xl leading-8 text-[#bea98f]">
              Chia sẻ nhu cầu của doanh nghiệp, đội ngũ FESGift sẽ tư vấn giải
              pháp quà tặng phù hợp với ngân sách, mục tiêu thương hiệu và thời
              gian triển khai của bạn.
            </p>

            <button
              onClick={scrollToContact}
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#c49b47]/35
                bg-gradient-to-r
                from-[#7c142b]
                to-[#5a1022]
                px-9
                py-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#f5e8c8]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#c49b47]
                hover:shadow-[0_0_35px_rgba(196,155,71,0.18)]
              "
            >
              Nhận Tư Vấn Ngay
            
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
            
            </div>      {/* relative z-10 */}
            
            </div>      {/* CTA */}
            
            </div>      {/* max-w-7xl */}
            
            </section>
            
            );
            }
