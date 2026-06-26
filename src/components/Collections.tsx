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
      className="reveal relative overflow-hidden bg-[#12080b] py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(196,155,71,0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.45em] text-[#c49b47]">
            COLLECTIONS
          </span>

          <h2 className="font-serif text-4xl text-[#f5e8c8] md:text-5xl">
            Giải Pháp Quà Tặng Theo Từng Mục Tiêu
          </h2>

          <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-[#c49b47] to-transparent" />

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#bea98f]">
            Bốn bộ sưu tập được tuyển chọn nhằm giúp doanh nghiệp nâng tầm hình
            ảnh thương hiệu, tạo dấu ấn trong từng dịp tri ân và xây dựng trải
            nghiệm đáng nhớ cho khách hàng cũng như đội ngũ nội bộ.
          </p>
        </div>

        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {COLLECTIONS.map((col) => (
            <div
              key={col.id}
              onClick={() => onSelectCollection(col)}
              className="
                group
                flex
                h-full
                cursor-pointer
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-[#c49b47]/20
                bg-[#231116]/90
                backdrop-blur
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#c49b47]/60
                hover:shadow-[0_20px_60px_rgba(196,155,71,0.15)]
              "
            >
              {/* Image */}

              <div className="relative aspect-[4/3] overflow-hidden">

                <img
                  src={col.image}
                  alt={col.title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#12080b] via-[#12080b]/20 to-transparent" />

                {col.badge && (
                  <div className="absolute left-5 top-5">
                    <span className="
                      rounded-full
                      border
                      border-[#c49b47]/40
                      bg-[#12080b]/80
                      px-4
                      py-1.5
                      text-[10px]
                      font-semibold
                      tracking-[0.25em]
                      uppercase
                      text-[#c49b47]
                      backdrop-blur
                    ">
                      {col.badge}
                    </span>
                  </div>
                )}

                <div className="absolute bottom-6 left-6 right-6">

                  <h3 className="font-serif text-2xl text-[#f5e8c8]">
                    {col.title}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#c49b47]">
                    {col.tagline}
                  </p>

                </div>

              </div>

              {/* Content */}

              <div className="flex flex-1 flex-col p-7">

                <div
                  className="
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#c49b47]/25
                    bg-gradient-to-br
                    from-[#7c142b]
                    to-[#231116]
                    text-[#c49b47]
                    transition
                    duration-500
                    group-hover:rotate-6
                    group-hover:scale-110
                  "
                >
                  {getIcon(col.icon)}
                </div>

                <p className="leading-8 text-[#bea98f]">
                  {col.description}
                </p>

                {col.highlights && (
                  <ul className="mt-8 flex-1 space-y-4">
                    {col.highlights.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-[#d7c3aa]"
                      >
                        <span
                          className="
                            mt-1
                            flex
                            h-6
                            w-6
                            items-center
                            justify-center
                            rounded-full
                            bg-[#c49b47]/10
                            text-[#c49b47]
                          "
                        >
                          <Check className="h-3.5 w-3.5" />
                        </span>

                        <span className="text-sm leading-7">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-8 border-t border-[#c49b47]/15 pt-6">

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      text-[#c49b47]
                      transition-all
                      duration-300
                    "
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.3em]">
                      Khám Phá Bộ Sưu Tập
                    </span>

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
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
