// src/components/programas/ProgramaModal.jsx
import { createPortal } from "react-dom";
import { useEffect } from "react";
import { ShoppingCart, ArrowDownFromLine } from "lucide-react";


import './ProgramasModal.css'

export function ProgramaModal({ open, onClose, programa }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !programa) return null;

  return createPortal(
    <div className="fixed inset-0 z-50">
      {/* overlay */}
      <button
        aria-label="Cerrar modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/35"
      />

      {/* dialog */}
      <div className="absolute left-1/2 top-1/2 w-[92vw] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl md:w-[980px] md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-extrabold text-neutral-900 md:text-3xl">
              {programa.titulo}
            </h3>
            {programa.subtitulo ? (
              <p className="mt-1 font-semibold text-neutral-700">
                {programa.subtitulo}
              </p>
            ) : null}
          </div>

          <button
            onClick={onClose}
            className="cursor-pointer grid h-10 w-10 place-items-center rounded-full bg-neutral-100 text-neutral-600 transition hover:bg-neutral-200"
            aria-label="Cerrar"
            title="Cerrar"
          >
            ✕
          </button>
        </div>

        <div className="mt-4">
          <p className="text-[15px] leading-relaxed text-neutral-700">
            {programa.descripcion}
          </p>
        </div>

        {/* módulos en “píldoras” como captura */}
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {programa.modulos?.map((m, i) => (
            <div
              key={i}
              className="rounded-xl bg-neutral-100 px-4 py-3 text-sm"
            >
              <span className="font-bold text-[#b21b12]">{m.titulo}</span>{" "}
              <span className="text-neutral-700">{m.texto}</span>
            </div>
          ))}
        </div>

        {programa.extraNota ? (
          <p className="mt-4 text-sm text-neutral-700">{programa.extraNota}</p>
        ) : null}

        {/* CTA descarga */}
        <a
          href={programa.descargaHref || "#"}
          className="mt-6 flex items-center justify-between gap-3 rounded-xl bg-[#b21b12] pl-4 py-1 text-sm font-semibold text-white transition hover:opacity-90"
        >
          <span className="text-left">{programa.descargaLabel}</span>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#b21b12] posicionFlecha">
            <ArrowDownFromLine />
          </span>
        </a>

        {/* CTA carrito */}
        <button
          type="button"
          className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl border-2 border-[#b21b12] bg-white px-4 py-1 cursor-pointer font-bold text-[#b21b12] transition hover:bg-[#b21b12] hover:text-white"
        >
          <span className="text-lg"><ShoppingCart className="h-5 w-5" /></span>
          Añadir este programa al carrito
        </button>
      </div>
    </div>,
    document.body
  );
}
