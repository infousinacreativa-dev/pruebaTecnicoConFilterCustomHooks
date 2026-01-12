import { useMemo, useState, useCallback } from "react";

export default function ValoresPuzzle() {
  const puzzleBase = "/img/puzle.png"; // ✅ rompecabezas completo (1 sola imagen)

  const items = useMemo(
    () => [
      {
        key: "sentido",
        title: "SENTIDO ANTES\nQUE RUIDO",
        paragraph:
          "No hacemos nada sin entender primero el para qué. Creamos comunicación que importa. Priorizamos la claridad, la estrategia y el impacto real por sobre el volumen o la urgencia. Elegimos siempre lo que suma.",
        pieceLarge: "/img/img1.png",
        // posición del hotspot: 2x2 => tl, tr, bl, br
        cell: "tl",
      },
      {
        key: "coherencia",
        title: "COHERENCIA\nQUE SOSTIENE",
        paragraph:
          "La comunicación externa e interna deben estar alineadas. Trabajamos para que lo que decís sea lo que hacés, actuamos alineados a lo que pensamos, decimos y hacemos...",
        pieceLarge: "/img/img2.png",
        cell: "tr",
      },
      {
        key: "pasion",
        title: "PASIÓN\nQUE IMPULSA",
        paragraph:
          "Nos mueve crear, proponer y empujar ideas con energía. La pasión sostiene el proceso y enciende la acción...",
        pieceLarge: "/img/img3.png",
        cell: "bl",
      },
      {
        key: "crecimiento",
        title: "CRECIMIENTO\nCOMPARTIDO",
        paragraph:
          "La comunicación debe generar resultados. Diseñamos con objetivos claros y medimos el impacto real...",
        pieceLarge: "/img/img4.png",
        cell: "br",
      },
    ],
    []
  );

  const [activeKey, setActiveKey] = useState(null);
  const [lockedKey, setLockedKey] = useState(null);

  const currentKey = lockedKey ?? activeKey;
  const active = items.find((i) => i.key === currentKey) ?? null;

  const setHover = useCallback(
    (key) => {
      if (lockedKey) return;
      setActiveKey(key);
    },
    [lockedKey]
  );

  const setClick = useCallback((key) => {
    setLockedKey((prev) => (prev === key ? null : key));
    setActiveKey(key);
  }, []);

  const clearHover = useCallback(() => {
    if (lockedKey) return;
    setActiveKey(null);
  }, [lockedKey]);

  return (
    <section className="w-full">
      <div className="relative overflow-hidden rounded-2xl bg-[#b9b0ea] px-6 py-10 sm:px-10">
        <div className="max-w-6xl">
          <p className="text-white/90 text-base sm:text-lg">Y lo hacemos desde</p>
          <h3 className="mt-1 text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
            Valores que nos mueven
          </h3>
        </div>

        {/* DESKTOP */}
        <div className="mt-10 hidden md:grid md:grid-cols-2 md:items-center md:gap-12">
          {/* Texto izquierda */}
          <div className="min-h-[240px]">
            {active ? (
              <>
                <h4 className="whitespace-pre-line text-3xl font-extrabold uppercase leading-tight text-white">
                  {active.title}
                </h4>
                <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/90">
                  {active.paragraph}
                </p>
              </>
            ) : (
              <div />
            )}
          </div>

          {/* Puzzle derecha */}
          <div className="relative flex justify-center md:justify-end">
            <div
              className="relative w-full max-w-[520px] aspect-square"
              onMouseLeave={clearHover}
            >
              {/* Imagen base (encastre perfecto) */}
              <img
                src={puzzleBase}
                alt="Rompecabezas valores"
                className="
                  absolute inset-0 h-full w-full object-contain
                  drop-shadow-[0_30px_70px_rgba(0,0,0,0.18)]
                "
                draggable="false"
              />

              {/* Hotspots invisibles (4 cuadrantes) */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                {items.map((it) => (
                  <button
                    key={it.key}
                    type="button"
                    onMouseEnter={() => setHover(it.key)}
                    onFocus={() => setHover(it.key)}
                    onClick={() => setClick(it.key)}
                    className="outline-none"
                    aria-label={it.title.replace("\n", " ")}
                  />
                ))}
              </div>

              {/* Pieza expandida: protagonista */}
              {active && (
                <img
                  src={active.pieceLarge}
                  alt={active.title.replace("\n", " ")}
                  className="
                    absolute inset-0 h-full w-full object-contain
                    scale-[1.06]
                    drop-shadow-[0_60px_90px_rgba(0,0,0,0.28)]
                    transition-transform duration-300
                    pointer-events-none
                  "
                  draggable="false"
                />
              )}
            </div>
          </div>
        </div>

        {/* MOBILE (lo armamos después como tu mock con “detalle”) */}
      </div>
    </section>
  );
}
