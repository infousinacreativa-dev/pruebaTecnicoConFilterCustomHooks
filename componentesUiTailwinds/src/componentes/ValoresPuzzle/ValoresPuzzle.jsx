import { useMemo, useState, useCallback, useEffect } from "react";

export default function ValoresPuzzle() {
  const puzzleBase = "/img/puzle.png";

  const items = useMemo(
    () => [
      {
        key: "sentido",
        title: "SENTIDO ANTES\nQUE RUIDO",
        paragraph:
          "No hacemos nada sin entender primero el para qué. Creamos comunicación que importa. Priorizamos la claridad, la estrategia y el impacto real por sobre el volumen o la urgencia. Elegimos siempre lo que suma.",
        pieceLarge: "/img/img1.png",
      },
      {
        key: "coherencia",
        title: "COHERENCIA\nQUE SOSTIENE",
        paragraph:
          "La comunicación externa e interna deben estar alineadas. Trabajamos para que lo que decís sea lo que hacés, actuamos alineados a lo que pensamos, decimos y hacemos...",
        pieceLarge: "/img/img2.png",
      },
      {
        key: "pasion",
        title: "PASIÓN\nQUE IMPULSA",
        paragraph:
          "Nos mueve crear, proponer y empujar ideas con energía. La pasión sostiene el proceso y enciende la acción...",
        pieceLarge: "/img/img3.png",
      },
      {
        key: "crecimiento",
        title: "CRECIMIENTO\nCOMPARTIDO",
        paragraph:
          "La comunicación debe generar resultados. Diseñamos con objetivos claros y medimos el impacto real...",
        pieceLarge: "/img/img4.png",
      },
    ],
    []
  );

  const [activeKey, setActiveKey] = useState(null);
  const [lockedKey, setLockedKey] = useState(null);

  const currentKey = lockedKey ?? activeKey;
  const active = items.find((i) => i.key === currentKey) ?? null;

  // Cerrar con Escape (opcional)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setLockedKey(null);
        setActiveKey(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
            <div className="relative w-full max-w-[520px] aspect-square" onMouseLeave={clearHover}>
              {/* Base: se oculta cuando hay active */}
              <img
                src={puzzleBase}
                alt="Rompecabezas valores"
                draggable="false"
                className={[
                  "absolute inset-0 h-full w-full object-contain",
                  "drop-shadow-[0_30px_70px_rgba(0,0,0,0.18)]",
                  "transition-all duration-300 ease-out",
                  active ? "opacity-0 scale-[0.985]" : "opacity-100 scale-100",
                ].join(" ")}
              />

              {/* Hotspots invisibles */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                {items.map((it) => (
                  <button
                    key={it.key}
                    type="button"
                    onMouseEnter={() => setHover(it.key)}
                    onFocus={() => setHover(it.key)}
                    onClick={() => setClick(it.key)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setClick(it.key);
                    }}
                    className="outline-none"
                    aria-label={it.title.replace("\n", " ")}
                  />
                ))}
              </div>

              {/* Pieza expandida: entrada con animate-pop + salida suave */}
              <img
                src={active?.pieceLarge || ""}
                alt={active?.title?.replace("\n", " ") || ""}
                draggable="false"
                className={[
                  "absolute inset-0 h-full w-full object-contain origin-center",
                  "drop-shadow-[0_60px_90px_rgba(0,0,0,0.28)]",
                  "pointer-events-none",
                  // ✅ entrada: keyframes
                  active ? "animate-pop" : "",
                  // ✅ salida: cuando no hay active, dejamos un fade/scale mínimo
                  !active ? "opacity-0 scale-[0.2] blur-[2px]" : "",
                  // para que la salida no sea instantánea al quitar animate-pop
                  "transition-[opacity,transform,filter] duration-200 ease-out",
                ].join(" ")}
                style={{
                  visibility: active ? "visible" : "hidden",
                }}
              />
            </div>
          </div>
        </div>

        {/* MOBILE: lo hacemos después */}
      </div>
    </section>
  );
}
