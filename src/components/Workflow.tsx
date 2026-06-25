
import { WORKFLOW_STEPS } from "../data";

export default function Workflow() {
  return (
        <section
          id="process"
          className="reveal relative overflow-hidden py-20 text-white"
          style={{
            background:
              "linear-gradient(135deg, #6b0d22 0%, #8f1231 50%, #7c142b 100%)",
          }}
        >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="workflow-glow absolute right-0 top-0 h-[20rem] w-[20rem] rounded-full bg-[#d4af37]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 block text-[11px] font-bold tracking-[0.35em] text-[#f1d58a] uppercase">
            QUY TRÌNH HỢP TÁC
          </span>

          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-5xl">
            3 Bước Triển Khai Nhanh Gọn
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#ffd7db]">
            Từ ý tưởng ban đầu đến sản phẩm hoàn thiện, FESGift đồng hành cùng
            doanh nghiệp qua quy trình đơn giản, minh bạch và tối ưu thời gian.
          </p>
        </div>

        {/* Workflow */}
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 md:flex-row">
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
                rounded-2xl
                border
                border-white/15
                bg-white/[0.06]
                p-8
                text-center
                backdrop-blur-sm
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-[#d4af37]/60
                hover:bg-white/[0.10]
                hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)]
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
                    right-[-50px]
                    top-14
                    hidden
                    h-[2px]
                    w-[50px]
                    bg-gradient-to-r
                    from-[#d4af37]
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
                  rounded-xl
                  border
                  border-[#d4af37]
                  bg-white/5
                  font-serif
                  text-lg
                  font-bold
                  text-[#f1d58a]
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:bg-[#d4af37]
                  group-hover:text-[#6b0d22]
                "
              >
                {step.num}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-lg font-bold uppercase tracking-wide text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-[#ffd7db]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
