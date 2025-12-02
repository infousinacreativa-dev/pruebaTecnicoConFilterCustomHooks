import { Link } from "react-router-dom"
import {ArrowBigLeft, ArrowBigRight} from 'lucide-react'
import './Pagination.css'

export function Pagination({
    cardsPerPage,
    totalCards,
    setCurrentPage,
    currentPage,
    navPrev,
    navNext
}) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i)
    }

    const paginate = (pageNumber, e) => {
        e.preventDefault()
        setCurrentPage(pageNumber)
    }

    return (
        <nav>
            <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>          
                <Link onClick={()=> navPrev()} className="page-item"><ArrowBigLeft /></Link>
                {pageNumbers.map((number) => {
                    return (
                        <Link key={number} to={'!#'} onClick={(e) => paginate(number, e)} className={`page-item ${currentPage === number ? 'active' : ''}`}>{number}</Link>
                    )
                })}
                <Link className="page-item" onClick={()=> navNext()}><ArrowBigRight /></Link>

            </ul>
        </nav>
    )
}