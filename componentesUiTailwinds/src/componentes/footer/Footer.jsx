import { Link } from 'react-router-dom'
import { NavigationLinks } from '../navigationLinks/NavigationLinks'
import { RedSocialNav } from '../redSocialNav/RedSocialNav'

const links = [
    { label: 'Inicio', to: '/' },
    { label: 'Nosotros', to: '/nosotros' },
    { label: 'Servicios', to: '/servicios' },
    { label: 'Productos', to: '/productos' },
    { label: 'Contacto', to: '/contacto' },
    { label: 'Iniciar sesion', to: '/login' },
]

export function Footer() {

    return (
        <>
            <footer className="flex flex-col md:items-center  bg-black py-4 px-2">
                <section className="w-full md:w-7xl flex md:flex-row text-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        <div className='text-center md:text-left'>
                            <Link to={'/'} aria-label="Ir a página de inicio">
                                {/* <img src='/img/logoSenestrariDev.webp' alt="logo de senestrari dev" loading="lazy" className="max-h-10" /> */}
                                <h1 className="text-white font-black text-2xl">LOGO</h1>
                            </Link>
                            <p>
                                Desarrollo web moderno, enfocado en rendimiento, accesibilidad y escalabilidad.Experiencia en soluciones Full-Stack (MERN, React/Vite, Node/Express, PHP, WordPress), con manejo de SQL, MariaDB, AWS y entornos Ubuntu.Aplico buenas prácticas de arquitectura, optimización SEO y analítica avanzada, desarrollando proyectos digitales eficientes, seguros y sostenibles.
                            </p>
                        </div>
                        <div className='text-center'>
                            <h2 className="text-white font-medium text-2xl">Links útiles</h2>

                            <ul className='w-auto'>
                                <NavigationLinks links={links} action={false} />
                            </ul>
                        </div>
                        <div >
                            <h2 className="pb-2 text-white text-center md:text-right font-medium text-2xl">Seguinos en:</h2>
                            <ul className='flex  justify-center md:justify-end'>
                                <RedSocialNav />
                            </ul>
                        </div>
                    </div>
                </section>
            </footer>
            <div className="bg-stone-900 w-full text-center text-white">
                <p className="flex flex-row flex-wrap justify-center items-center gap-2 py-4">&copy; Todos los derechos reservados - Powered By <a href="">
                    {/* <img src='/img/logoSenestrariDev.webp' alt="logo de senestrari dev" loading="lazy" className="max-h-5" />  */}
                    <h4 className="text-white font-medium text-2xl">LOGO</h4>
                    </a>
                    </p>
            </div>
        </>
    )
}