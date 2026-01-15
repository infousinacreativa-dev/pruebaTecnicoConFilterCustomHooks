import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export function CustomSelect({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // cerrar al clickear afuera
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      {/* LABEL flotante */}
      {value && (
        <span className="mb-1 block text-xs font-semibold text-[#f1f1f1]">
          {label}
        </span>
      )}

      {/* BOTÓN */}
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={`
          flex w-full items-center justify-between
          rounded-xl px-4 py-3
          bg-[#f1f1f1]
          text-sm font-light text-[#C6BDF2]
          shadow-md
          transition
          hover:brightness-105
          cursor-pointer
        `}
      >
        <span className={value ? "text-[#A99FE3]" : "text-[#A99FE3]"}>
          {value || label}
        </span>

        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* LISTA */}
      {open && (
        <ul
          className="
            absolute z-20 mt-2 w-full overflow-hidden
            rounded-xl bg-[#C6BDF2]
            shadow-xl
          "
        >
          {options.map((opt) => (
            <li key={opt}>
              <button
                type="button"
                onClick={() => {
                  onChange({
                    target: { name: "programa", value: opt },
                  });
                  setOpen(false);
                }}
                className={`
                  w-full px-4 py-3 text-left
                  text-sm font-semibold text-white
                  transition
                  cursor-pointer
                  hover:bg-[#A99FE3]
                  ${
                    opt === value
                      ? "bg-[#A99FE3]"
                      : ""
                  }
                `}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
