import { useEffect, useState, useMemo } from "react"
import { CardList } from "../components/Card/CardList"
import { getCards } from "../services/CardServices"
import { Pagination } from "../components/utils/Pagination/Pagination"
import { usePagination } from "../hooks/usePagination"
import { useFilters } from "../hooks/useFilters"
import './Home.css'


export function Home() {

    const [cards, setCards] = useState([])
    const { filteredData, nameFilter, genderFilter, setNameFilter, setGenderFilter } = useFilters(cards);
    const { currentItems, currentPage, totalPages, goTo, next, prev } = usePagination(filteredData, 8);

    useEffect(() => {
        getCards().then(data => setCards(data))
    }, [])

    return (
        <section className="contenedorHome">
            <div className="dividorDeContenido">
                <div className="bloqueFiltros" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderTop: '1px solid #000', borderBottom: '1px solid #000', marginBottom: '1rem', backgroundColor: '#f0f0f0' }}>
                    <label style={{ display: 'flex', gap: '10px' }}>
                        <strong>Filtrar por nombre:</strong>
                        <input value={nameFilter}  onChange={(e) => { setNameFilter(e.target.value) }}></input>
                    </label>

                    <select value={genderFilter} name="gender" onChange={(e) => { setGenderFilter(e.target.value) }} >
                        <option value="">Todos los generos</option>
                        <option value="Male">Masculino </option>
                        <option value="Female">Femenino </option>
                        <option value="Genderless">Sin genero </option>
                        <option value="unknown">Genero desconocido </option>
                    </select>
                </div>
                <section className="listadoCards">

                    {filteredData.length >=1 ? <CardList cards={currentItems} /> : <> <p style={{textAlign:'center', fontWeight:'bold', border:' 1px solid  red', padding:'1rem', backgroundColor:'rgba(167, 65, 65, 0.322)', borderRadius:'16px', color:'#050505', boxShadow:'0px 0px 2px 0px'}}>No se encontro concidencia con tu busqueda</p></> }
                    
                </section>
                <Pagination
                    currentPage={currentPage}
                    totalCards={filteredData.length}
                    cardsPerPage={8}
                    setCurrentPage={goTo}
                    totalPages={totalPages}
                    navPrev={prev}
                    navNext={next}
                />
            </div>

        </section>
    )
}