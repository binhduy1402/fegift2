
import { WORKFLOW_STEPS } from "../data";

export default function Workflow() {
  return (
        <section
          id="process"
            className="
            reveal
            relative
            overflow-hidden
            bg-[#12080b]
            py-28
            "
        >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-[#7c142b]/15 blur-[140px]" />
        <div className="absolute right-[-120px] bottom-0 h-[360px] w-[360px] rounded-full bg-[#c49b47]/10 blur-[120px]" />
        <div className="workflow-glow absolute right-0 top-0 h-[20rem] w-[20rem] rounded-full bg-[#d4af37]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 block text-[11px] font-bold tracking-[0.35em] text-[#c49b47] uppercase">
            QUY TRÌNH HỢP TÁC
          </span>

          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-[#f5e8c8]">
            3 Bước Triển Khai Nhanh Gọn
          </h2>
          <div className="mx-auto mt-8 h-px w-28 bg-gradient-to-r from-transparent via-[#c49b47] to-transparent" />

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#bea98f]">
            Từ ý tưởng ban đầu đến sản phẩm hoàn thiện, FESGift đồng hành cùng
            doanh nghiệp qua quy trình đơn giản, minh bạch và tối ưu thời gian.
          </p>
        </div>

        {/* Workflow */}
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-10 md:flex-row">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={step.id}
              className="
                stagger-item
                group
                relative
                flex
                w-full
                max-w-[320px]
                flex-col
                rounded-[28px]
                border
                border-[#c49b47]/15
                bg-[#231116]/85
                p-8
                text-center
                backdrop-blur-md
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-[#d4af37]/60
                hover:bg-[#2b171c]
                hover:shadow-[0_25px_70px_rgba(196,155,71,0.12)]
              "
              style={{
                transitionDelay: `${idx * 150}ms`,
              }}
            >
              {/* Connector */}
              {idx < WORKFLOW_STEPS.length - 1 && (
                <div
                  className="
                    absolute
                    right-[-60px]
                    top-14
                    hidden
                    h-px
                    w-[60px]
                    bg-gradient-to-r
                    from-[#c49b47]
                    opacity-70
                    to-transparent
                    md:block
                  "
                />
              )}

              {/* Number */}
              <div
                className="
                  mx-auto
                  mb-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#d4af37]
                  bg-[#12080b]
                  font-serif
                  text-lg
                  font-bold
                  text-[#f1d58a]
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:bg-[#c49b47]
                  group-hover:text-[#12080b]
                "
              >
                {step.num}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-lg font-bold uppercase tracking-wide text-[#f5e8c8]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-[#bea98f]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
