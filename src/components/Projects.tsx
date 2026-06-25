import { useState } from "react";
import { FEATURED_PROJECTS } from "../data";
import { Project } from "../types";
import { Plus, X, Calendar, User, ArrowRight } from "lucide-react";

interface ProjectsProps {
  onInquireWithProject: (projectTitle: string) => void;
}

export default function Projects({ onInquireWithProject }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất Cả");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["Tất Cả", "Doanh Nghiệp", "Sự Kiện", "Cá Nhân Hóa"];

  const filteredProjects = selectedCategory === "Tất Cả"
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="projects" className="py-20 bg-cream-bg/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-bold tracking-widest text-[#7c142b] uppercase block mb-1">
            THƯ VIỆN CHẾ TÁC
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-text">
            Dự Án Tiêu Biểu
          </h2>
          <p className="text-sm text-charcoal-text/60 mt-3 font-light max-w-xl mx-auto">
            Nơi những giá tinh hoa di sản lâu đời giao thoa hoàn hảo cùng tư duy mỹ thuật thiết kế đương đại bản sắc.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs font-bold tracking-wider uppercase rounded-sm border transition-all ${
                selectedCategory === cat
                  ? "bg-primary-brand text-white border-primary-brand shadow-md"
                  : "bg-white text-charcoal-text border-secondary-brand/10 hover:border-primary-brand/35"
              }`}
              style={selectedCategory === cat ? { backgroundColor: "#7c142b" } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid Catalog */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group bg-white rounded-sm overflow-hidden border border-secondary-brand/5 shadow-sm hover:shadow-xl transition-all duration-350 cursor-pointer"
            >
              {/* Image box frame */}
              <div className="relative aspect-square overflow-hidden bg-charcoal-text">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Elegant overlay blur on hover */}
                <div className="absolute inset-0 bg-primary-brand/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 shadow-md flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Plus className="w-5 h-5 text-primary-brand" />
                  </div>
                </div>

                {/* Floating category tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase bg-white/95 text-primary-brand rounded-sm shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Text Frame info */}
              <div className="p-6 text-left space-y-2">
                <div className="flex items-center gap-4 text-[10px] text-charcoal-text/50 font-semibold tracking-wider uppercase">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3 text-muted-gold" />
                    {project.client}
                  </span>
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal-text group-hover:text-primary-brand transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs text-charcoal-text/60 font-light line-clamp-2">
                  {project.longDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Project details markup popup */}
        {activeProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            {/* Backdrop overlay filter */}
            <div
              className="fixed inset-0 bg-charcoal-text/60 backdrop-blur-md transition-opacity"
              onClick={() => setActiveProject(null)}
            />

            {/* Modal Box Frame */}
            <div className="relative bg-white max-w-3xl w-full rounded-sm shadow-2xl border border-secondary-brand/10 overflow-hidden z-10 animate-scaleUp">
              
              {/* Close Button badge */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/85 shadow-md hover:bg-white text-charcoal-text transition-all"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Left Side: Product Shot */}
                <div className="md:col-span-5 relative aspect-[4/5] bg-charcoal-text">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-text/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Right Side: Specifications details */}
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between text-left h-full">
                  <div className="space-y-4">
                    <div>
                      <span className="inline-block px-2.5 py-1 text-[9px] font-bold tracking-widest text-[#7c142b] uppercase bg-primary-brand/5 rounded-sm mb-2">
                        {activeProject.category}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-text">
                        {activeProject.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-charcoal-text/75 leading-relaxed font-light">
                      {activeProject.longDescription}
                    </p>

                    <div className="grid grid-cols-2 gap-4 py-3 border-y border-secondary-brand/10 text-xs text-charcoal-text/70">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-gold" strokeWidth={1.5} />
                        <div>
                          <p className="text-[9px] font-bold text-charcoal-text/40 tracking-wider uppercase leading-none">Đối tác</p>
                          <p className="font-medium mt-0.5">{activeProject.client}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-gold" strokeWidth={1.5} />
                        <div>
                          <p className="text-[9px] font-bold text-charcoal-text/40 tracking-wider uppercase leading-none">Năm chế tác</p>
                          <p className="font-medium mt-0.5">{activeProject.year}</p>
                        </div>
                      </div>
                    </div>

                    {/* Components inside */}
                    {activeProject.components && activeProject.components.length > 0 && (
                      <div>
                        <h4 className="text-[10px] font-bold tracking-widest text-charcoal-text/55 uppercase mb-2">
                          Sản phẩm đi kèm set quà:
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {activeProject.components.map((comp, idx) => (
                            <span
                              key={idx}
                              className="inline-block px-2.5 py-1 rounded-sm bg-cream-bg border border-secondary-brand/10 text-[11px] font-light text-charcoal-text/80"
                            >
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Call to action inside form */}
                  <div className="pt-6 sm:pt-8 flex flex-col gap-2">
                    <button
                      onClick={() => {
                        onInquireWithProject(activeProject.title);
                        setActiveProject(null);
                      }}
                      className="w-full inline-flex items-center justify-center px-5 py-3 bg-primary-brand text-white text-xs font-bold tracking-widest rounded-sm transition-all uppercase gap-2 hover:brightness-110 shadow-lg"
                      style={{ backgroundColor: "#7c142b" }}
                    >
                      Báo giá cho set quà này
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <p className="text-[10px] text-charcoal-text/40 text-center font-light italic">
                      * Nhận hỗ trợ in dập logo thương hiệu miễn phí khi đặt sỉ từ 20 bộ.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
