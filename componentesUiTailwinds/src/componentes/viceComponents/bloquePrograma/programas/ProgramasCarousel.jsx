// src/components/programas/ProgramasCarousel.jsx
import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ProgramaCard } from "./ProgramaCard";
import { ProgramaModal } from "./ProgramaModal";
import { SortDropdown } from "./SortDropdown";

export function ProgramasCarousel({ programas = [] }) {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState(null);

  const activeProgramas = useMemo(
    () => programas.filter((programa) => programa.active !== false),
    [programas]
  );

  const data = useMemo(() => {
    if (filter === "all") return activeProgramas;
    return activeProgramas.filter((programa) => programa.filtros?.includes(filter));
  }, [activeProgramas, filter]);

  const selected = useMemo(
    () => activeProgramas.find((programa) => programa.slug === selectedSlug) ?? null,
    [activeProgramas, selectedSlug]
  );

  const onMore = (slug) => {
    setSelectedSlug(slug);
    setOpen(true);
  };

  return (
    <section className="w-full bg-[#f2f0ff] py-10">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-5 flex items-center justify-end">
          <SortDropdown value={filter} onChange={setFilter} />
        </div>

        <Swiper
          modules={[Pagination]}
          className="prog-swiper pb-2"
          spaceBetween={22}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          loop={data.length > 2}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} prog-bullet"></span>`,
          }}
        >
          {data.map((programa) => (
            <SwiperSlide key={programa.slug} className="h-auto">
              <ProgramaCard
                programa={programa}
                onMore={() => onMore(programa.slug)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ProgramaModal
        open={open}
        onClose={() => setOpen(false)}
        programa={selected}
      />
    </section>
  );
}
