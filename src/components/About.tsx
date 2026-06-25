import { COMPANY_STATS } from "../data";
import { useEffect, useRef, useState } from "react";
import CountUp from "./CountUp";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="our-story"
      className="relative overflow-hidden bg-transparent py-28"
    >
      {/* Decorative Frame */}
      <div className="pointer-events-none absolute inset-6 border border-[#c49b47]/10" />

      <div className="pointer-events-none absolute left-6 top-6 h-8 w-8 border-l border-t border-[#c49b47]/40" />
      <div className="pointer-events-none absolute right-6 top-6 h-8 w-8 border-r border-t border-[#c49b47]/40" />
      <div className="pointer-events-none absolute left-6 bottom-6 h-8 w-8 border-l border-b border-[#c49b47]/40" />
      <div className="pointer-events-none absolute right-6 bottom-6 h-8 w-8 border-r border-b border-[#c49b47]/40" />

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,20,43,.18),transparent_65%)]" />

      <div className="luxury-container relative z-10">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="section-badge">
            NĂNG LỰC THỰC TẾ
          </span>

          <h2 className="mt-6 font-serif text-4xl font-bold text-[#f5e8c8] sm:text-5xl lg:text-6xl">
            FESGift Qua Những Con Số
          </h2>

          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-20 bg-[#c49b47]/70" />
            <div className="h-2 w-2 rotate-45 bg-[#c49b47]" />
            <div className="h-px w-20 bg-[#c49b47]/70" />
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#bea98f]">
            Những con số tiêu biểu phản ánh năng lực triển khai,
            kinh nghiệm vận hành và mức độ tin tưởng của khách hàng
            doanh nghiệp trên toàn quốc.
          </p>

        </div>

        {/* Stats */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {COMPANY_STATS.map((item, index) => (
            <div
              key={item.label}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
              className="
                reveal
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-[#c49b47]/15
                bg-gradient-to-b
                from-[#2b1519]
                to-[#1a0b0f]
                p-8
                text-center
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-[#c49b47]/50
                hover:shadow-[0_25px_50px_rgba(0,0,0,.45)]
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(196,155,71,.12),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Top Gold Line */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-[#c49b47] transition-all duration-500 group-hover:w-full" />

              {/* Number */}
              <div className="relative font-serif text-5xl font-bold text-[#d8b86b] drop-shadow-[0_0_12px_rgba(196,155,71,.25)]">
                <CountUp
                  value={item.value}
                  start={startCount}
                />
              </div>

              {/* Label */}
              <div className="relative mt-5 text-xs uppercase tracking-[0.22em] text-[#bea98f]">
                {item.label}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
