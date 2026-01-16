// src/components/programas/ProgramaCard.jsx
import { ArrowUpRight } from "lucide-react";

export function ProgramaCard({ programa, onMore }) {
  return (
    <article className="h-full rounded-2xl bg-white p-6 shadow-[0_14px_40px_-30px_rgba(0,0,0,0.25)] md:p-8">
      <h4 className="text-xl font-extrabold text-neutral-900 md:text-2xl">
        {programa.titulo}
      </h4>

      {programa.subtitulo ? (
        <p className="mt-1 font-semibold text-neutral-700">
          {programa.subtitulo}
        </p>
      ) : null}

      <div className="mt-3 h-[2px] w-full bg-[#d32b22]/80" />

      {/* faja roja */}
      <div className="mt-3 w-full inline-block rounded-lg bg-[#d32b22] px-3 py-2 text-sm font-semibold text-white">
        {programa.resumen}
      </div>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700">
        {programa.bullets?.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      {/* Botón: default outline / hover filled + icon */}
      <button
        type="button"
        onClick={onMore}
        className="cursor-pointer group mt-6 flex w-full items-center justify-between gap-3 rounded-xl border-2 border-[#d32b22] bg-white px-4 py-1 font-bold text-[#d32b22] transition hover:border-[#8c1207] hover:bg-[#8c1207] hover:text-white"
      >
        Más información
        <span className="grid h-8 w-8 place-items-center rounded-full bg-transparent text-[#d32b22] transition group-hover:bg-[#d32b22] group-hover:text-white">
           <ArrowUpRight className="h-5 w-5 text-white" />
        </span>
      </button>
    </article>
  );
}
