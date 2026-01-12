import { useMemo, useState, useCallback } from "react";

export default function ValoresPuzzle() {
  const items = useMemo(
    () => [
      {
        key: "sentido",
        title: "SENTIDO ANTES\nQUE RUIDO",
        paragraph:
          "No hacemos nada sin entender primero el para qué. Creamos comunicación que importa. Priorizamos la claridad, la estrategia y el impacto real por sobre el volumen o la urgencia. Elegimos siempre lo que suma.",
        img: "/img/img1.png",
      },
      {
        key: "coherencia",
        title: "COHERENCIA\nQUE SOSTIENE",
        paragraph:
          "La comunicación externa e interna deben estar alineadas. Trabajamos para que lo que decís sea lo que hacés, actuamos alineados a lo que pensamos, decimos y hacemos. No prometemos sin respaldo, no improvisamos sin información y decidimos con criterio profesional. La coherencia es nuestra forma de generar vínculos con garantía de confianza.",
        img: "/img/img2.png",
      },
      {
        key: "pasion",
        title: "PASIÓN\nQUE IMPULSA",
        paragraph:
          "Nos mueve crear, proponer y empujar ideas con energía. La pasión sostiene el proceso y enciende la acción: buscamos elevar cada proyecto con intención y dedicación real.",
        img: "/img/img3.png",
      },
      {
        key: "crecimiento",
        title: "CRECIMIENTO\nCOMPARTIDO",
        paragraph:
          "La comunicación debe generar resultados. Diseñamos con objetivos claros y medimos el impacto real de cada acción. Crecemos como equipo, como personas, con nuestros clientes y en las comunidades en las que trabajamos.",
        img: "/img/img4.png",
      },
    ],
    []
  );

  // null => estado inicial sin texto
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

  const closeExpanded = useCallback(() => {
    setLockedKey(null);
    setActiveKey(null);
  }, []);

  return (
    <section className="w-full">
      <div className="relative overflow-hidden rounded-2xl bg-[#b9b0ea] px-6 py-10 sm:px-10">
        <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[340px] w-[340px] rounded-full border border-white/25" />

        {/* HEADER */}
        <div className="max-w-6xl">
          <p className="text-white/90 text-base sm:text-lg">Y lo hacemos desde</p>
          <h3 className="mt-1 text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
            Valores que nos mueven
          </h3>
        </div>

        {/* ===================== DESKTOP ===================== */}
        <div className="mt-10 hidden md:grid md:grid-cols-2 md:items-center md:gap-12">
          {/* IZQUIERDA: aparece solo si hay activo */}
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
              <div className="h-full" />
            )}
          </div>

          {/* DERECHA: PUZZLE */}
          <div className="relative flex justify-center md:justify-end">
            <div
              className="relative w-full max-w-[520px] aspect-square"
              onMouseLeave={clearHover}
            >
              {/* Marco general */}
              <div
                className="
                  absolute inset-0
                  rounded-[34px]
                  overflow-hidden
                  bg-white/10
                  shadow-[0_30px_70px_rgba(0,0,0,0.18)]
                "
              >
                {/* GRID ENCASTRADO (sin gap, sin padding, sin bordes por pieza) */}
                <div
                  className={[
                    "absolute inset-0 grid grid-cols-2 grid-rows-2",
                    active ? "opacity-0 pointer-events-none" : "opacity-100",
                    "transition-opacity duration-200",
                  ].join(" ")}
                >
                  {items.map((it) => (
                    <button
                      key={it.key}
                      type="button"
                      onMouseEnter={() => setHover(it.key)}
                      onFocus={() => setHover(it.key)}
                      onClick={() => setClick(it.key)}
                      className="relative outline-none focus-visible:ring-4 focus-visible:ring-white/60"
                      aria-label={it.title.replace("\n", " ")}
                      aria-pressed={currentKey === it.key}
                    >
                      <img
                        src={it.img}
                        alt={it.title.replace("\n", " ")}
                        draggable="false"
                        className="
                          h-full w-full select-none
                          object-cover
                        "
                      />
                    </button>
                  ))}
                </div>

                {/* EXPANDIDA: sin X, con object-contain, se ve completa */}
                {active && (
                  <div
                    className="absolute inset-0"
                    onClick={closeExpanded} // clic afuera para cerrar
                    role="button"
                    tabIndex={0}
                  >
                    <img
                      src={active.img}
                      alt={active.title.replace("\n", " ")}
                      draggable="false"
                      className="
                        absolute inset-0 h-full w-full
                        object-contain
                        p-6
                        drop-shadow-[0_50px_80px_rgba(0,0,0,0.24)]
                      "
                    />
                  </div>
                )}
              </div>

              {/* HOTSPOTS invisibles para mantener hover/click aunque el grid esté oculto */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                {items.map((it) => (
                  <button
                    key={`hot-${it.key}`}
                    type="button"
                    onMouseEnter={() => setHover(it.key)}
                    onFocus={() => setHover(it.key)}
                    onClick={() => setClick(it.key)}
                    className="outline-none"
                    aria-label={it.title.replace("\n", " ")}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===================== MOBILE (dejo tu base por ahora) ===================== */}
        <div className="mt-8 md:hidden">
          <div className="mx-auto max-w-[360px]">
            <div className="grid grid-cols-2 grid-rows-2 gap-3">
              {items.map((it) => (
                <button
                  key={it.key}
                  type="button"
                  onClick={() => setActiveKey(it.key)}
                  className="relative rounded-2xl outline-none transition focus-visible:ring-4 focus-visible:ring-white/50"
                >
                  <img
                    src={it.img}
                    alt={it.title.replace("\n", " ")}
                    className="h-full w-full object-contain"
                    draggable="false"
                  />
                </button>
              ))}
            </div>
          </div>

          {active && (
            <div className="mt-6 rounded-3xl bg-white/15 p-4 backdrop-blur">
              <h4 className="whitespace-pre-line text-center text-2xl font-extrabold uppercase leading-tight text-white">
                {active.title}
              </h4>
              <p className="mt-4 text-sm leading-relaxed text-white/90">
                {active.paragraph}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
