import { Header } from './componentes/header/Header.jsx'
import { Footer } from './componentes/footer/Footer.jsx'
import { Router } from './Router.jsx'

// estilos css 
import './App.css'

function App() {

  return (
    <>
      <section className='AppGridRow'>
        <Header />
        <main>
          <Router />
        </main>
        <Footer />
      </section>

    </>
  )
}

export default App
