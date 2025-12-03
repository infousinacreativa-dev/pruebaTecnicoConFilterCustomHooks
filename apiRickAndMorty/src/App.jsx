import { Header } from './components/shareds/Header/Header'
import { Footer } from './components/shareds/Footer/Footer'
import { Router } from './Router.jsx'


import './App.css'

function App() {

  return (
    <section className='contenedorGlobalApp'>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </section>
  )
}

export default App
