import {Routes, Route} from 'react-router'

// pages 
import { Home } from './pages/home/Home'

export function Router (){

    return(
        <Routes>

            <Route path='/' element={<Home/>} />            

            <Route path='*' element={<><h1>Not Found 404</h1></>} />

        </Routes>
    )
}