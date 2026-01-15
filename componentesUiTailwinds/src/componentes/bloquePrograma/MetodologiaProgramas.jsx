// src/components/sections/ecosistema/MetodologiaProgramas.jsx
import { StepCard } from "./StepCard";
import { BotonVinietaDerechaP } from "./botonVinietaDerecha/BotonVinietaDerechaP";
import "./MetodologiaProgramas.css";

export function MetodologiaProgramas() {
  const row1 = [
    {
      id: 1,
      icon: "/img/iconosProgramas/icon1.webp",
      title: "Reunión inicial",
      subtitle: "Duración 1 hora",
    },
    {
      id: 2,
      icon: "/img/iconosProgramas/icon2.webp",
      title: "Propuesta de abordaje estratégico y metodológico",
      subtitle: "adaptado a tus necesidades.",
    },
    {
      id: 3,
      icon: "/img/iconosProgramas/icon3.webp",
      title: "Implementación",
      subtitle: "guiada.",
    },
  ];

  const row2 = [
    {
      id: 4,
      icon: "/img/iconosProgramas/icon4.webp",
      title: "Seguimiento y entrega",
      subtitle: "Duración: Según necesidad de la reunión, sin límite explícito.",
    },
    {
      id: 5,
      icon: "/img/iconosProgramas/icon5.webp",
      title: "Revisión del servicio y recomendaciones de continuidad",
      subtitle: "Duración 1 hora",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-10">

        <BotonVinietaDerechaP texto1="Metodología de" texto2="los programas" />
        {/* Título */}
        

        {/* ===== DESKTOP/TABLET (igual al mock) ===== */}
        <div className="mt-5 hidden md:block">
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-3 gap-6">
            {row1.map((s) => (
              <StepCard key={s.id} {...s} />
            ))}
          </div>

          {/* Row 2: 2 cards */}
          <div className="mt-6 grid grid-cols-2 gap-6">
            {row2.map((s) => (
              <StepCard key={s.id} {...s} />
            ))}
          </div>
        </div>

        {/* ===== MOBILE (apilado como el mock) ===== */}
        <div className="mt-10 grid gap-5 md:hidden">
          {[...row1, ...row2].map((s) => (
            <StepCard key={`m-${s.id}`} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}


