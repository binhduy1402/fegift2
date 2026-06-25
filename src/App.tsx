
import { useState, useEffect } from "react";

import LuxuryBackground from "./components/LuxuryBackground";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Collections from "./components/Collections";
import Workflow from "./components/Workflow";
import Capabilities from "./components/Capabilities";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import { Collection } from "./types";
import { X, Check, ArrowRight, ShieldCheck } from "lucide-react";

export default function App() {
  const [selectedCollection, setSelectedCollection] =
    useState<Collection | null>(null);

  const [prefilledProduct, setPrefilledProduct] = useState("");
  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);

  const scrollToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleCollectionInquire = (title: string) => {
    setPrefilledProduct(`Báo giá sỉ bộ sản phẩm: ${title}`);
    setSelectedCollection(null);
    scrollToContact();
  };

return (
  <div className="relative min-h-screen overflow-hidden bg-cream-bg text-charcoal-text selection:bg-primary-brand selection:text-white">

    <LuxuryBackground />

    <Navbar onInquireClick={scrollToContact} />

      <Hero
        onDiscoverClick={() => {
          const section = document.getElementById("collections");

          if (section) {
            section.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}
        onConsultClick={scrollToContact}
      />

      <About />

      <Collections
        onSelectCollection={setSelectedCollection}
      />

      <Philosophy />

      <Capabilities />

      <Workflow />

      <ContactForm
        prefilledProduct={prefilledProduct}
        onClearPrefill={() => setPrefilledProduct("")}
      />

      <Footer />

      {/* Collection Modal */}
      {selectedCollection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4">
          <div
            className="fixed inset-0 bg-charcoal-text/70 backdrop-blur-md"
            onClick={() => setSelectedCollection(null)}
          />

          <div
            className="
              relative
              z-10
              w-full
              max-w-3xl
              overflow-hidden
              rounded-2xl
              border
              border-[#7c142b]/10
              bg-white
              shadow-2xl
            "
          >
            <button
              onClick={() => setSelectedCollection(null)}
              className="
                absolute
                right-4
                top-4
                z-20
                rounded-full
                bg-white/90
                p-2
                transition-colors
                hover:bg-white
              "
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={selectedCollection.image}
                alt={selectedCollection.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <span
                  className="
                    mb-3
                    inline-block
                    rounded-full
                    bg-[#7c142b]
                    px-3
                    py-1
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-widest
                    text-white
                  "
                >
                  Bộ Sưu Tập Nổi Bật
                </span>

                <h3 className="font-serif text-3xl font-bold text-white">
                  {selectedCollection.title}
                </h3>
              </div>
            </div>

            <div className="space-y-6 p-8">
              <p className="text-sm leading-relaxed text-charcoal-text/75">
                {selectedCollection.description}
              </p>

              {selectedCollection.highlights && (
                <div>
                  <h4
                    className="
                      mb-4
                      text-xs
                      font-bold
                      uppercase
                      tracking-widest
                      text-[#7c142b]
                    "
                  >
                    Điểm Nổi Bật
                  </h4>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {selectedCollection.highlights.map(
                      (item, index) => (
                        <div
                          key={index}
                          className="
                            flex
                            items-center
                            gap-2
                            text-sm
                            text-charcoal-text/80
                          "
                        >
                          <Check className="h-4 w-4 text-[#7c142b]" />
                          {item}
                        </div>
                      )
                    )}

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-charcoal-text/80
                      "
                    >
                      <ShieldCheck className="h-4 w-4 text-[#7c142b]" />
                      Kiểm soát chất lượng đầu ra
                    </div>
                  </div>
                </div>
              )}

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  border-t
                  border-[#7c142b]/10
                  pt-6
                  sm:flex-row
                "
              >
                <button
                  onClick={() =>
                    handleCollectionInquire(
                      selectedCollection.title
                    )
                  }
                  className="
                    inline-flex
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-primary-brand
                    px-6
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-white
                    transition-all
                    hover:-translate-y-1
                  "
                >
                  Yêu Cầu Báo Giá

                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() =>
                    setSelectedCollection(null)
                  }
                  className="
                    rounded-xl
                    border
                    border-[#7c142b]/15
                    px-6
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                  "
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
