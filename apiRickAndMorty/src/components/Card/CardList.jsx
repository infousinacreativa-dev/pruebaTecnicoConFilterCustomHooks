
export function CardList({ cards }) {

    return (
        <>
            {cards.map((character) => {
                return (
                    <article key={character.id} style={{ border: '1px solid #000', borderRadius: '8px',maxWidth:'250px', display: 'grid', gridTemplateRows: 'auto 1fr auto', overflow:'hidden' }}>
                        <header style={{ objectFit: 'cover' }}>
                            <img src={character.image} alt={character.name + ' ' + character.species} style={{ width: '100%', maxHeight: 'auto', maxWidth:'250px' }} />
                        </header>
                        <section>
                            <ul style={{ listStyle: 'none'}}>
                                <li>Nombre: {character.name}</li>
                                <li>Estado: {character.status}</li>
                                <li>Genero: {character.gender}</li>
                                <li>Origen: {character.origin.name}</li>
                            </ul>
                        </section>
                        <footer>
                            
                        </footer>
                    </article>

                )
            })}
        </>
    )
}