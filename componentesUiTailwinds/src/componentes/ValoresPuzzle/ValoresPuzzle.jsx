import { useMemo, useState, useCallback } from "react";

export default function ValoresPuzzle() {
  // ✅ Cambiá estas rutas por tus assets reales
  const items = useMemo(
    () => [
      {
        key: "sentido",
        title: "SENTIDO ANTES\nQUE RUIDO",
        paragraph:
          "No hacemos nada sin entender primero el para qué. Creamos comunicación que importa. Priorizamos la claridad, la estrategia y el impacto real por sobre el volumen o la urgencia. Elegimos siempre lo que suma.",
        imgSmall: "/img/faviCon.png",
        imgLarge: "/img/faviCon.png",
      },
      {
        key: "coherencia",
        title: "COHERENCIA\nQUE SOSTIENE",
        paragraph:
          "La comunicación externa e interna deben estar alineadas. Trabajamos para que lo que decís sea lo que hacés, actuamos alineados a lo que pensamos, decimos y hacemos. No prometemos sin respaldo, no improvisamos sin información y decidimos con criterio profesional. La coherencia es nuestra forma de generar vínculos con garantía de confianza.",
        imgSmall: "/img/faviCon.png",
        imgLarge: "/img/faviCon.png",
      },
      {
        key: "pasion",
        title: "PASIÓN\nQUE IMPULSA",
        paragraph:
          "Nos mueve crear, proponer y empujar ideas con energía. La pasión sostiene el proceso y enciende la acción: buscamos elevar cada proyecto con intención y dedicación real.",
        imgSmall: "/img/faviCon.png",
        imgLarge: "/img/faviCon.png",
      },
      {
        key: "crecimiento",
        title: "CRECIMIENTO\nCOMPARTIDO",
        paragraph:
          "La comunicación debe generar resultados. Diseñamos con objetivos claros y medimos el impacto real de cada acción. Crecemos como equipo, como personas, con nuestros clientes y en las comunidades en las que trabajamos.",
        imgSmall: "/img/faviCon.png",
        imgLarge: "/img/faviCon.png",
      },
    ],
    []
  );

  const [activeKey, setActiveKey] = useState(items[0].key);
  const [mobileDetail, setMobileDetail] = useState(false);

  const active = items.find((i) => i.key === activeKey) ?? items[0];

  const setActive = useCallback(
    (key) => {
      setActiveKey(key);
    },
    [setActiveKey]
  );

  return (
    <section className="w-full">
      {/* Fondo / layout general (similar al mock) */}
      <div className="relative overflow-hidden rounded-2xl bg-[#b9b0ea] px-6 py-10 sm:px-10">
        {/* Decoración circular opcional (como en mock) */}
        <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[340px] w-[340px] rounded-full border border-white/25" />

        {/* Título */}
        <div className="max-w-6xl">
          <p className="text-white/90 text-base sm:text-lg">Y lo hacemos desde</p>
          <h3 className="mt-1 text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
            Valores que nos mueven
          </h3>
        </div>

        {/* ===================== DESKTOP ===================== */}
        <div className="mt-10 hidden md:grid md:grid-cols-2 md:items-center md:gap-10">
          {/* Texto izquierdo */}
          <div className="max-w-xl">
            <h4 className="whitespace-pre-line text-3xl font-extrabold uppercase leading-tight text-white">
              {active.title}
            </h4>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/90">
              {active.paragraph}
            </p>
          </div>

          {/* Puzzle derecho */}
          <div className="relative">
            {/* Contenedor: mismo “bloque” para small + large */}
            <div className="relative mx-auto w-full max-w-[520px]">
              {/* Large (pieza expandida) */}
              <div className="relative aspect-[1/1] w-full">
                <img
                  src={active.imgLarge}
                  alt={active.title.replace("\n", " ")}
                  className="absolute inset-0 h-full w-full object-contain transition-opacity duration-300"
                  draggable="false"
                />
              </div>

              {/* Small grid “por arriba” (rompecabezas 2x2) */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 p-3">
                {items.map((it) => {
                  const isActive = it.key === activeKey;

                  return (
                    <button
                      key={it.key}
                      type="button"
                      onClick={() => setActive(it.key)}
                      onMouseEnter={() => setActive(it.key)}
                      className={[
                        "group relative rounded-2xl outline-none transition",
                        "focus-visible:ring-4 focus-visible:ring-white/50",
                        isActive ? "z-10" : "opacity-90 hover:opacity-100",
                      ].join(" ")}
                      aria-pressed={isActive}
                    >
                      <img
                        src={it.imgSmall}
                        alt={it.title.replace("\n", " ")}
                        className={[
                          "h-full w-full object-contain",
                          "transition-transform duration-300",
                          isActive ? "scale-[1.02]" : "group-hover:scale-[1.02]",
                        ].join(" ")}
                        draggable="false"
                      />

                      {/* Overlay activo sutil */}
                      <span
                        className={[
                          "pointer-events-none absolute inset-0 rounded-2xl transition",
                          isActive ? "bg-white/10" : "bg-transparent group-hover:bg-white/5",
                        ].join(" ")}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ===================== MOBILE ===================== */}
        <div className="mt-8 md:hidden">
          {/* Vista puzzle (como 4ta foto) */}
          {!mobileDetail && (
            <div className="mx-auto max-w-[360px]">
              <div className="grid grid-cols-2 grid-rows-2 gap-3">
                {items.map((it) => {
                  const isActive = it.key === activeKey;

                  return (
                    <button
                      key={it.key}
                      type="button"
                      onClick={() => {
                        setActive(it.key);
                        setMobileDetail(true);
                      }}
                      className={[
                        "relative rounded-2xl outline-none transition",
                        "focus-visible:ring-4 focus-visible:ring-white/50",
                        isActive ? "bg-white/10" : "bg-white/0",
                      ].join(" ")}
                      aria-pressed={isActive}
                    >
                      <img
                        src={it.imgSmall}
                        alt={it.title.replace("\n", " ")}
                        className="h-full w-full object-contain"
                        draggable="false"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Vista detalle (como 5ta foto) */}
          {mobileDetail && (
            <div className="mx-auto max-w-[420px]">
              <button
                type="button"
                onClick={() => setMobileDetail(false)}
                className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/25"
              >
                <span className="text-lg leading-none">‹</span> Volver
              </button>

              <div className="rounded-3xl bg-white/15 p-4 backdrop-blur">
                <img
                  src={active.imgLarge}
                  alt={active.title.replace("\n", " ")}
                  className="mx-auto w-full max-w-[340px] object-contain"
                  draggable="false"
                />

                <h4 className="mt-5 whitespace-pre-line text-center text-2xl font-extrabold uppercase leading-tight text-white">
                  {active.title}
                </h4>

                <p className="mt-4 text-sm leading-relaxed text-white/90">
                  {active.paragraph}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
