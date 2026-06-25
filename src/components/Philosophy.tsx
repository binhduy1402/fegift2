export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="reveal relative overflow-hidden bg-[#12080b] py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-[#7c142b]/15 blur-[140px]" />
      <div className="absolute right-[-120px] bottom-[-120px] h-96 w-96 rounded-full bg-[#c49b47]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.45em] text-[#c49b47]">
            BRAND PHILOSOPHY
          </span>

          <h2 className="font-serif text-4xl leading-tight text-[#f5e8c8] md:text-6xl">
            Mỗi Món Quà Là Một
            <span className="mt-2 block bg-gradient-to-r from-[#c49b47] via-[#f5e8c8] to-[#c49b47] bg-clip-text text-transparent">
              Trải Nghiệm Thương Hiệu
            </span>
          </h2>

          <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-[#c49b47] to-transparent" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#bea98f]">
            FESGift không đơn thuần cung cấp quà tặng doanh nghiệp. Chúng tôi
            tạo nên những trải nghiệm thương hiệu được thiết kế riêng, chỉn chu
            và mang dấu ấn riêng trong từng khoảnh khắc trao tặng.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#9b8673]">
            Từ ý tưởng, thiết kế, sản xuất đến giao hàng, mọi chi tiết đều được
            chăm chút nhằm tạo nên giá trị cảm xúc, sự ghi nhớ và hình ảnh
            chuyên nghiệp cho doanh nghiệp.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-3">

          {/* Card 1 */}

          <div
            style={{ transitionDelay: "0ms" }}
            className="
              reveal
              group
              rounded-3xl
              border
              border-[#c49b47]/20
              bg-[#231116]/90
              p-10
              text-center
              backdrop-blur
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#c49b47]/50
              hover:shadow-[0_20px_60px_rgba(196,155,71,0.12)]
            "
          >
            <div className="mx-auto mb-8 flex h-18 w-18 items-center justify-center rounded-full border border-[#c49b47]/30 bg-gradient-to-br from-[#7c142b] to-[#231116] text-3xl transition-transform duration-500 group-hover:scale-110">
              🏛
            </div>

            <h3 className="font-serif text-2xl text-[#f5e8c8]">
              Câu Chuyện MARS
            </h3>

            <div className="mx-auto mt-5 h-px w-16 bg-[#c49b47]" />

            <p className="mt-8 leading-8 text-[#bea98f]">
              FESGift được phát triển từ nhiều năm kinh nghiệm trong lĩnh vực
              quà tặng doanh nghiệp, hướng đến việc xây dựng những giải pháp
              mang giá trị thương hiệu lâu dài.
            </p>
          </div>

          {/* Card 2 */}

          <div
            style={{ transitionDelay: "150ms" }}
            className="
              reveal
              group
              rounded-3xl
              border
              border-[#c49b47]/20
              bg-[#231116]/90
              p-10
              text-center
              backdrop-blur
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#c49b47]/50
              hover:shadow-[0_20px_60px_rgba(196,155,71,0.12)]
            "
          >
            <div className="mx-auto mb-8 flex h-18 w-18 items-center justify-center rounded-full border border-[#c49b47]/30 bg-gradient-to-br from-[#7c142b] to-[#231116] text-3xl transition-transform duration-500 group-hover:scale-110">
              ✨
            </div>

            <h3 className="font-serif text-2xl text-[#f5e8c8]">
              Điểm Khác Biệt
            </h3>

            <div className="mx-auto mt-5 h-px w-16 bg-[#c49b47]" />

            <p className="mt-8 leading-8 text-[#bea98f]">
              Tư vấn theo mục tiêu chiến dịch, thiết kế theo nhận diện thương
              hiệu, sản xuất linh hoạt và kiểm soát chất lượng trong toàn bộ quy
              trình.
            </p>
          </div>

          {/* Card 3 */}

          <div
            style={{ transitionDelay: "300ms" }}
            className="
              reveal
              group
              rounded-3xl
              border
              border-[#c49b47]/20
              bg-[#231116]/90
              p-10
              text-center
              backdrop-blur
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#c49b47]/50
              hover:shadow-[0_20px_60px_rgba(196,155,71,0.12)]
            "
          >
            <div className="mx-auto mb-8 flex h-18 w-18 items-center justify-center rounded-full border border-[#c49b47]/30 bg-gradient-to-br from-[#7c142b] to-[#231116] text-3xl transition-transform duration-500 group-hover:scale-110">
              ❤
            </div>

            <h3 className="font-serif text-2xl text-[#f5e8c8]">
              Lý Do Tồn Tại
            </h3>

            <div className="mx-auto mt-5 h-px w-16 bg-[#c49b47]" />

            <p className="mt-8 leading-8 text-[#bea98f]">
              Một món quà được chuẩn bị đúng cách không chỉ mang giá trị vật
              chất mà còn tạo nên kết nối, sự ghi nhớ và cảm xúc tích cực cho
              thương hiệu.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
