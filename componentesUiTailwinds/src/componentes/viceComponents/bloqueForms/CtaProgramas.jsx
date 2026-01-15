// src/components/sections/programas/CtaProgramas.jsx
import { useMemo, useState } from "react";
import { CustomSelect } from "./ui/CustomSelect";

export function CtaProgramas() {
    const programas = useMemo(
        () => [
            "Programa de interés",
            "Programas estratégicos",
            "Kits de impacto",
            "Acompañamiento a largo plazo",
            "Consultoría",
            "Otro",
        ],
        []
    );

    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        email: "",
        empresa: "",
        cargo: "",
        telefono: "",
        programa: "",
        desafio: "",
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm((p) => ({ ...p, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submit", form);
    };

    return (
        <section className="w-full">
            <div className="w-full bg-gradient-to-b from-[#8C1207] to-[#D92E1D]">
                <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:py-20">
                    <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
                        {/* LEFT */}
                        <div className="text-white">
                            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                                ¿No sabés qué <br className="hidden sm:block" />
                                programa es el ideal <br className="hidden sm:block" />
                                para vos?
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-3xl">
                                Completá este formulario, <br className="hidden sm:block" />
                                agendá una reunión gratuita de <br className="hidden sm:block" />
                                30 minutos y te asesoramos.
                            </p>
                        </div>

                        {/* RIGHT */}
                        <form
                            onSubmit={onSubmit}
                            className="w-full max-w-[560px] lg:justify-self-end"
                        >
                            <div className="grid gap-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <FloatingInput
                                        label="Nombre"
                                        name="nombre"
                                        value={form.nombre}
                                        onChange={onChange}
                                    />
                                    <FloatingInput
                                        label="Apellido"
                                        name="apellido"
                                        value={form.apellido}
                                        onChange={onChange}
                                    />
                                </div>

                                <FloatingInput
                                    label="Email"
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={onChange}
                                />

                                <FloatingInput
                                    label="Empresa"
                                    name="empresa"
                                    value={form.empresa}
                                    onChange={onChange}
                                />

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <FloatingInput
                                        label="Cargo"
                                        name="cargo"
                                        value={form.cargo}
                                        onChange={onChange}
                                    />
                                    <FloatingInput
                                        label="Teléfono"
                                        name="telefono"
                                        value={form.telefono}
                                        onChange={onChange}
                                    />
                                </div>

                                <CustomSelect
                                    label="Programa de interés"
                                    options={programas.slice(1)}
                                    value={form.programa}
                                    onChange={onChange}
                                />


                                <p className="mt-1 text-lg font-semibold text-white">
                                    Contanos: ¿cuál es hoy el principal desafío o dolor
                                    de la comunicación de tu organización?
                                </p>

                                <FloatingTextarea
                                    label="Escribí tu mensaje"
                                    name="desafio"
                                    value={form.desafio}
                                    onChange={onChange}
                                />

                                <button
                                    type="submit"
                                    className="mt-2 w-full rounded-xl bg-[#B9B0EA] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95 active:scale-[0.99] cursor-pointer"
                                >
                                    Enviar formulario
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ================= FLOATING INPUT ================= */

function FloatingInput({ label, type = "text", ...props }) {
    return (
        <div className="relative">
            <input
                type={type}
                placeholder=" "
                className={[
                    "peer w-full rounded-xl bg-white px-4 py-3 text-sm text-black/90",
                    "outline-none ring-1 ring-white/30",
                    "focus:ring-2 focus:ring-[#9284BF]/70",
                ].join(" ")}
                {...props}
            />
            <label
                className={[
                    "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2",
                    "text-sm text-[#9284BF]/70 transition-all",
                    "peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm ",
                    "peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#9284BF] ",
                    "peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs",
                ].join(" ")}
            >
                {label}
            </label>
        </div>
    );
}

/* ================= FLOATING SELECT ================= */

function FloatingSelect({ label, options = [], ...props }) {
    return (
        <div className="relative">
            <select
                className={[
                    "peer w-full rounded-xl bg-white px-4 py-3 text-sm text-black/90",
                    "outline-none ring-1 ring-white/30",
                    "focus:ring-2 focus:ring-[#9284BF]/70",
                ].join(" ")}
                {...props}
            >
                <option value="" disabled hidden />
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>

            <label
                className={[
                    "pointer-events-none absolute left-4 top-2 text-xs text-[#9284BF]",
                    props.value ? "opacity-100" : "opacity-0",
                    "transition-opacity",
                ].join(" ")}
            >
                {label}
            </label>
        </div>
    );
}

/* ================= FLOATING TEXTAREA ================= */

function FloatingTextarea({ label, ...props }) {
    return (
        <div className="relative">
            <textarea
                placeholder=" "
                className={[
                    "peer h-36 w-full resize-none rounded-xl bg-white px-4 py-3 text-sm text-black/90",
                    "outline-none ring-1 ring-white/30",
                    "focus:ring-2 focus:ring-[#9284BF]/70",
                ].join(" ")}
                {...props}
            />
            <label
                className={[
                    "pointer-events-none absolute left-4 top-3",
                    "text-sm text-[#9284BF]/70 transition-all",
                    "peer-focus:text-xs peer-focus:top-0 peer-focus:text-[#9284BF]",
                    "peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:top-1",
                ].join(" ")}
            >
                {label}
            </label>
        </div>
    );
}
