
import { ProductCard } from '../../componentes/ecommerceCard/ProductCard'
import ExperiencePillars from '../../componentes/lineTime/ExperiencePillars'
import ValoresPuzzle from '../../componentes/ValoresPuzzle/ValoresPuzzle'

import { MetodologiaProgramas } from '../../componentes/bloquePrograma/MetodologiaProgramas'

import './Home.css'


const product = [
    { id: 1, titulo: 'producto ', miniatura: 'https://flowbite-react.com/images/products/apple-watch.png', descripcion: 'descripcion del producto', precio: 1000 },
    { id: 2, titulo: 'producto ', miniatura: 'https://flowbite-react.com/images/products/apple-watch.png', descripcion: 'descripcion del producto', precio: 1000 },
    { id: 3, titulo: 'producto ', miniatura: 'https://flowbite-react.com/images/products/apple-watch.png', descripcion: 'descripcion del producto', precio: 1000 },
    { id: 4, titulo: 'producto ', miniatura: 'https://flowbite-react.com/images/products/apple-watch.png', descripcion: 'descripcion del producto', precio: 1000 },
    { id: 5, titulo: 'producto ', miniatura: 'https://flowbite-react.com/images/products/apple-watch.png', descripcion: 'descripcion del producto', precio: 1000 },
    { id: 6, titulo: 'producto ', miniatura: 'https://flowbite-react.com/images/products/apple-watch.png', descripcion: 'descripcion del producto', precio: 1000 },
    { id: 7, titulo: 'producto ', miniatura: 'https://flowbite-react.com/images/products/apple-watch.png', descripcion: 'descripcion del producto', precio: 1000 },
    { id: 8, titulo: 'producto ', miniatura: 'https://flowbite-react.com/images/products/apple-watch.png', descripcion: 'descripcion del producto', precio: 1000 },
]

export function Home() {

    return (
        <div className="py-16">
                {/* <ExperiencePillars />
                <ValoresPuzzle /> */}
                <MetodologiaProgramas />


            </div>
    )
}