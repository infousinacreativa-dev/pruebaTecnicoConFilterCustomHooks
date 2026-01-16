import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const OPTIONS = [
  { value: "popularidad", label: "Popularidad" },
  { value: "externa", label: "Comunicación externa" },
  { value: "interna", label: "Comunicación interna" },
  { value: "mayor", label: "Mayor precio" },
  { value: "menor", label: "Menor precio" },
];

export function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const currentLabel = useMemo(() => {
    return OPTIONS.find((o) => o.value === value)?.label ?? "Popularidad";
  }, [value]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onClick = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const select = (val) => {
    onChange(val);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative inline-block z-50 min-w-[220px]">
      {/* HEADER */}
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className={[
          "w-full flex items-center justify-between gap-3",
          "px-4 py-2",
          "bg-[#8b84b8] text-white shadow-lg",
          "text-xs font-bold tracking-widest",
          "transition hover:bg-[#7d76aa] cursor-pointer",
          open ? "rounded-t-2xl rounded-b-none" : "rounded-2xl",
        ].join(" ")}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="truncate">{currentLabel}</span>
        <ChevronDown
          className={[
            "h-4 w-4 shrink-0 transition-transform duration-200",
            open ? "rotate-180" : "rotate-0",
          ].join(" ")}
        />
      </button>

      {/* PANEL: SIEMPRE MONTADO -> anima abrir/cerrar */}
      <div
        className={[
          "absolute left-0 right-0 top-full z-50 origin-top",
          "bg-[#8b84b8] text-white shadow-lg",
          "rounded-b-2xl overflow-hidden",
          "transform-gpu will-change-transform transition-[transform,opacity] duration-400 ease-in-out",
          open
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-0 opacity-0 pointer-events-none",
        ].join(" ")}
        role="listbox"
      >
        <div className="h-[1px] bg-white/20" />

        <ul className="py-1">
          {OPTIONS.map((opt) => {
            const active = opt.value === value;
            return (
              <li key={opt.value}>
                <button
                  type="button"
                  onClick={() => select(opt.value)}
                  className={[
                    "w-full text-left px-4 py-2",
                    "text-[11px] font-semibold tracking-wide",
                    "transition",
                    active ? "bg-[#7d76aa]" : "bg-transparent",
                    "hover:bg-[#6f679c] cursor-pointer hover:rounded-3xl",
                  ].join(" ")}
                  role="option"
                  aria-selected={active}
                >
                  {opt.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
