import { Link } from "react-router"

export function Header() {
    return (
        <>
            <nav style={{ backgroundColor: '#d5d5d5', color: '#000',padding: '1.5rem', display: 'flex', justifyContent:'center' }}>

                <div style={{ width:'80%',display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                    <h2 style={{color:'#422727', textTransform:'uppercase', textDecoration:'underline'}}>Explorador de Personajes de Rick y Morty</h2>

                    <Link to={'https://rickandmortyapi.com/documentation'} style={{backgroundColor:'#422727', padding:'0.5rem', textDecoration:'none', color:'white', borderRadius:'16px'}}>Link a la Api</Link>
                </div>

            </nav>
        </>
    )
}