import { useState, useEffect } from "react";
import { TESTIMONIALS } from "../data";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play reviews slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeReview = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-cream-bg/65 relative overflow-hidden">
      <div className="absolute top-10 left-10 text-primary-brand/5 pointer-events-none">
        <Quote className="w-48 h-48 fill-current rotate-180" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Quote slide wrapper */}
        <div className="min-h-[220px] sm:min-h-[180px] flex flex-col justify-center transition-all duration-500 transform animate-fadeIn">
          
          {/* Big elegant Quote icon */}
          <div className="flex justify-center mb-6">
            <div className="w-10 h-10 rounded-full bg-primary-brand/5 border border-primary-brand/10 flex items-center justify-center text-[#7c142b]">
              <Quote className="w-4.5 h-4.5 fill-current" />
            </div>
          </div>

          {/* Testimonial Quote body text */}
          <blockquote className="font-serif text-lg sm:text-2xl italic font-normal text-charcoal-text leading-relaxed tracking-wide max-w-3xl mx-auto">
            "{activeReview.content}"
          </blockquote>

          {/* Speaker credentials */}
          <div className="mt-8 flex flex-col items-center">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#7c142b] uppercase">
              {activeReview.author}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-charcoal-text/50 uppercase mt-1">
              {activeReview.role}, {activeReview.company}
            </span>
          </div>

        </div>

        {/* Carousel indicator Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 bg-[#7c142b]"
                  : "w-2.5 bg-[#7c142b]/20 hover:bg-[#7c142b]/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
