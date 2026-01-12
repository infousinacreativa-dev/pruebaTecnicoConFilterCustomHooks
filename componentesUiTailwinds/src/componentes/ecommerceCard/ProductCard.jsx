import { ShoppingCart } from 'lucide-react'


export function ProductCard({product}) {

    return (
        <>
        {product.map((producto)=>{
            return(
                <article>
                <header className=''>
                    <img src={producto.miniatura} alt={producto.titulo} className='w-full' />
                </header>
                <div>

                </div>
                <footer>
                    <button className='flex gap-2'><ShoppingCart /> Agregar al carrito</button>
                </footer>
            </article>
            )
        })}
        </>
    )
}