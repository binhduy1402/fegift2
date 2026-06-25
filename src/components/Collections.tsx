
import { COLLECTIONS } from "../data";
import {
  ArrowRight,
  Check,
  Users,
  CalendarDays,
  Crown,
  UsersRound,
} from "lucide-react";
import { Collection } from "../types";

interface CollectionsProps {
  onSelectCollection: (collection: Collection) => void;
}

export default function Collections({
  onSelectCollection,
}: CollectionsProps) {
    const getIcon = (icon?: string) => {
    switch (icon) {
      case "Users":
        return <Users className="h-5 w-5" />;
      case "CalendarDays":
        return <CalendarDays className="h-5 w-5" />;
      case "Crown":
        return <Crown className="h-5 w-5" />;
      case "UsersRound":
        return <UsersRound className="h-5 w-5" />;
      default:
        return <Users className="h-5 w-5" />;
    }
  };
  return (
    <section
        id="collections"
        className="reveal bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-2 block text-[11px] font-bold tracking-[0.25em] uppercase text-[#7c142b]">
              4 NHÓM SẢN PHẨM
            </span>

            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#2c2c2c] sm:text-4xl">
              Giải Pháp Quà Tặng Theo Từng Mục Tiêu
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
            4 nhóm sản phẩm chủ lực giúp doanh nghiệp xây dựng hình ảnh thương hiệu, tri ân khách hàng và nâng cao trải nghiệm đội ngũ.
            </p>
          </div>

        </div>

        {/* Collections Grid */}
       <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {COLLECTIONS.map((col) => (
            <div
              key={col.id}
              onClick={() => onSelectCollection(col)}
                className="
                  group
                  h-full
                  flex
                  flex-col
                  cursor-pointer
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#7c142b]/10
                  bg-white
                  shadow-sm
                "
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={col.image}
                  alt={col.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                  referrerPolicy="no-referrer"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Badge */}
                {col.badge && (
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold tracking-widest text-[#7c142b] shadow-sm">
                      {col.badge}
                    </span>
                  </div>
                )}

                {/* Title */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-serif text-xl font-bold text-white">
                    {col.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold tracking-[0.15em] uppercase text-[#d4af37]">{col.tagline}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#7c142b]/10 text-[#7c142b]">{getIcon(col.icon)}
                </div>
               <p className="text-sm leading-relaxed text-gray-600">
                  {col.description}
                </p>

                {/* Highlights */}
                  {col.highlights && (
                    <ul className="mt-6 flex-1 space-y-3">
                    {col.highlights.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-sm text-gray-700"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#7c142b]/10 text-[#7c142b]">
                          <Check className="h-3 w-3" />
                        </span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Footer */}
               <div className="mt-auto border-t border-gray-100 pt-5">
                  <div className="flex items-center justify-between text-[#7c142b] transition-colors group-hover:text-[#d4af37]">
                    <span className="text-xs font-bold tracking-widest uppercase">
                      Nhận Báo Giá 
                    </span>

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
