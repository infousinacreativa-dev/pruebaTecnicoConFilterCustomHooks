import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

import { NavigationLinks } from "../navigationLinks/NavigationLinks"

const links = [
    { label: 'Inicio', to: '/' },
    { label: 'Nosotros', to: '/nosotros' },
    { label: 'Servicios', to: '/servicios' },
    { label: 'Productos', to: '/productos' },
    { label: 'Contacto', to: '/contacto' },
    { label: 'Iniciar sesion', to: '/login' },
]

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    function actionBurger() {
        if (isOpen === false) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }

    return (
        <header className="flex flex-col md:items-center  bg-black py-4 px-2 sticky">
            <div className="w-full md:w-6xl flex md:flex-row justify-between items-center">
                <Link to={'/'} aria-label="Ir a página de inicio">
                    {/* <img src='/img/logoSenestrariDev.webp' alt="logo de senestrari dev" loading="lazy" className="max-h-10" /> */}
                    <h1 className="text-white font-black text-2xl">LOGO</h1>
                </Link>

                <nav aria-label="Navegación principal" className="hidden md:flex  text-white">
                    <ul className="flex gap-7">                       
                        <NavigationLinks links={links} action={false} />
                    </ul>
                </nav>

                <button type="button" className="md:hidden pointer text-white" aria-expanded={isOpen} aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"} onClick={actionBurger}>{isOpen ? <X /> : <Menu />}</button>
            </div>
            <div
                className={`
                        md:hidden 
                        overflow-hidden 
                        transition-all duration-600 
                        ${isOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"}
                    `}
            >
                <nav id="menu-mobile"
                    aria-label="Navegación móvil"
                    className="flex flex-col gap-2 text-white text-left px-2 py-2">
                    <ul>                        
                        <NavigationLinks links={links} action={true} handleClick={actionBurger}/>
                    </ul>
                </nav>
            </div>

        </header>
    )
}