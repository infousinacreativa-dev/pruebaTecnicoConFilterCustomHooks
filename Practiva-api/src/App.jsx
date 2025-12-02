import { useState, useEffect } from 'react'
import './App.css'

const api_url = 'https://jsonplaceholder.typicode.com/users'

function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('') // ✅ estado para el buscador

  useEffect(() => {
    fetch(api_url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setUsers(data)
        setIsLoading(false)
      })
      .catch((error) => {
        setError(error)
        setIsLoading(false)
      })
  }, [])

  // ✅ filtrar usuarios según lo que escriba el usuario
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="appContainer">
      <header>
        <h1>Listado de usuarios</h1>
      </header>

      <main >
        <h2>Aca va renderizance los usuarios</h2>

        {/* ✅ buscador */}
        <div className="buscador">
          <label htmlFor="search">Buscar por nombre: </label>
          <input
            id="search"
            type="text"
            placeholder="Escribí un nombre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="contenedorUsuarios" style={{padding:'2rem'}}>
          {isLoading && <p>Cargando usuarios...</p>}
          {error && <p>Error al cargar usuarios: {error.message}</p>}

          {!isLoading && !error && (
            <>
              {filteredUsers.length === 0 ? (
                <p>No se encontraron usuarios.</p>
              ) : (
                filteredUsers.map((user) => (
                  <div key={user.id} className="cardUser">
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Teléfono: {user.phone}</p>
                    <p>Ciudad: {user.address.city}</p>
                  </div>
                ))
              )}
            </>
          )}
        </div>
      </main>

      <footer>
        <p>Practica API - React</p>
      </footer>
    </section>
  )
}

export default App
