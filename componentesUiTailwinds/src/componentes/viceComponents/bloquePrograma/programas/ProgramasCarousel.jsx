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
  const [sort, setSort] = useState("popularidad");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const data = useMemo(() => {
    const copy = [...programas];
    if (sort === "externa") return copy.filter((p) => p.categoria?.includes("externa"));
    if (sort === "interna") return copy.filter((p) => p.categoria?.includes("interna"));
    return copy;
  }, [programas, sort]);

  const onMore = (p) => {
    setSelected(p);
    setOpen(true);
  };

  return (
    <section className="w-full bg-[#f2f0ff] py-10">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-5 flex items-center justify-end">
          <SortDropdown value={sort} onChange={setSort} />
        </div>

        <Swiper
          modules={[Pagination]}
          className="prog-swiper pb-2"
          spaceBetween={22}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          loop={data.length > 2} // opcional, pero ayuda a que “se sienta” más carrusel
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} prog-bullet"></span>`,
          }}
        >
          {data.map((p) => (
            <SwiperSlide key={p.id} className="h-auto">
              <ProgramaCard programa={p} onMore={() => onMore(p)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ProgramaModal open={open} onClose={() => setOpen(false)} programa={selected} />
    </section>
  );
}
