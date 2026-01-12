import { useMemo, useState, useCallback } from "react";

/**
 * ExperiencePillars.jsx
 * React + Tailwind (Vite)
 */
export default function ExperiencePillars() {
  const pillars = useMemo(
    () => [
      {
        key: "agilidad",
        label: "Agilidad",
        description:
          "Sabemos que la comunicación acompaña decisiones, y las decisiones necesitan ritmo. Trabajamos dando visibilidad y aprendiendo de cada feedback.",
      },
      {
        key: "cercania",
        label: "Cercanía profesional",
        description:
          "Nos involucramos con tu equipo, entendemos el contexto y proponemos soluciones con criterio. Cercanía real, sin perder profesionalismo.",
      },
      {
        key: "calidad",
        label: "Calidad estratégica",
        description:
          "Diseñamos y ejecutamos con intención: objetivos claros, foco en resultados y consistencia en cada entrega para que todo tenga sentido.",
      },
      {
        key: "mejora",
        label: "Mejora continua",
        description:
          "Iteramos, medimos y optimizamos. Buscamos que cada versión sea mejor que la anterior y que el proceso sea cada vez más eficiente.",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + pillars.length) % pillars.length);
  }, [pillars.length]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % pillars.length);
  }, [pillars.length]);

  const active = pillars[activeIndex];

  const Purple = {
    text: "text-[#9284BF]",
    line: "bg-[#9284BF]",
    dot: "bg-[#9284BF]",
    dotRing: "ring-[#9284BF]/30",
  };

  const Red = {
    text: "text-[#D92E1D]",
    line: "bg-[#9284BF]",
    dot: "bg-[#D92E1D]",
    dotRing: "ring-[#D92E1D]/30",
  };

  return (
    <section className="w-full">
      <h3 className="text-center text-base font-semibold text-[#9284BF] sm:text-lg">
        Nuestra experiencia cliente se basa en cuatro pilares:
      </h3>

      {/* ===================== DESKTOP (md+) ===================== */}
      <div className="relative mx-auto mt-8 hidden w-full md:block">
        {/* Línea */}
        <div className={`absolute left-0 right-0 top-[37px] h-[2px] ${Purple.line}`} />

        {/* Items */}
        <div className="relative flex items-start justify-between gap-6">
          {pillars.map((p, idx) => {
            const isActive = idx === activeIndex;

            return (
              <button
                key={p.key}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className="group relative flex min-w-[140px] flex-col items-center gap-2 outline-none"
                aria-pressed={isActive}
              >
                {/* Label */}
                <span
                  className={[
                    "text-sm font-semibold transition",
                    isActive ? Red.text : Purple.text,
                    "group-hover:opacity-90",
                  ].join(" ")}
                >
                  {p.label}
                </span>

                {/* Dot */}
                <span
                  className={[
                    "mt-1 h-3 w-3 rounded-full ring-1 transition",
                    isActive ? `${Red.dot} ${Red.dotRing}` : `${Purple.dot} ${Purple.dotRing}`,
                  ].join(" ")}
                />
              </button>
            );
          })}
        </div>

        {/* Descripción */}
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <h4 className={`text-lg font-bold ${Red.text}`}>{active.label}</h4>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            {active.description}
          </p>
        </div>
      </div>

      {/* ===================== MOBILE (carousel <md) ===================== */}
      <div className="mx-auto mt-8 w-full max-w-md md:hidden">
        {/* Header del item + flechas */}
        <div className="flex items-center justify-between gap-3 px-2">
          <ArrowButton direction="left" onClick={goPrev} />
          <button
            type="button"
            onClick={() => setActiveIndex(activeIndex)}
            className={`text-center text-base font-extrabold ${isActiveColor(true) ? Red.text : Purple.text}`}
            aria-label={`Pilar activo: ${active.label}`}
          >
            {active.label}
          </button>
          <ArrowButton direction="right" onClick={goNext} />
        </div>

        {/* Línea + dot centrado */}
        <div className="relative mt-4">
          <div className={`h-[2px] w-full ${Purple.line}`} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <button
              type="button"
              onClick={() => setActiveIndex(activeIndex)}
              className="outline-none"
              aria-label="Seleccionar pilar"
            >
              <span className={`block h-4 w-4 rounded-full ${Red.dot} ring-1 ${Red.dotRing}`} />
            </button>
          </div>
        </div>

        {/* Descripción abajo */}
        <div className="mt-6 px-2 text-center">
          <p className="text-sm leading-relaxed text-neutral-700">
            {active.description}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */
function ArrowButton({ direction = "left", onClick }) {
  const isLeft = direction === "left";

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#9284BF]/0 bg-white text-[#ff1100] transition hover:bg-[#9284BF]/10 active:scale-[0.98]"
      aria-label={isLeft ? "Anterior" : "Siguiente"}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        className={isLeft ? "" : "rotate-180"}
        aria-hidden="true"
      >
        <path
          d="M15 18l-6-6 6-6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

// Solo para evitar warning si querés reutilizar lógica de color en mobile
function isActiveColor(v) {
  return v === true;
}
