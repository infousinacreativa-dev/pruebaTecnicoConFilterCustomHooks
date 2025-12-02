import {Routes, Route} from 'react-router'
import { Home } from './pages/Home.jsx'

export function Router(){

    return(
        <Routes>

            {/* home  */}
            <Route path='/' element={<Home />} />

            {/* not found  */}
            <Route path='*' element={<><h1 style={{textAlign:'center'}}>404 Not Found</h1></>} />
        </Routes>
    )
}