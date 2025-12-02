import { Header } from "./components/shareds/Header/Header"
import { Footer } from "./components/shareds/Footer/Footer"
import { Router } from "./Router"

import './App.css'

function App() {


  return (
    <>
      <div className="containerGeneralApp">
        <Header />
        <main>
          <Router />
        </main>
        <Footer />
      </div>

    </>
  )
}

export default App
