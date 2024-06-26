import React, { useState } from 'react'
import './styles/paginacion.css'

const Pagination = ({ pokePerPage, pokePage, setPokePage, amoutPokemon }) => {

    const [PerPage, setPerPage] = useState(5)
    const [Page, setPage] = useState(0)

    const lastPage = Page + PerPage;
    const firstPage = lastPage - PerPage;

    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(amoutPokemon / pokePerPage); i++) {
        pageNumber.push(i)
    }

    const onPreviusPage = () => {
        setPokePage(pokePage - 1)
        setPage(Page - 1)
    }

    const onNextPage = () => {
        setPokePage(pokePage + 1)
        setPage(Page + 1)
    }

    const onSpecificPage = n => {
        setPokePage(n)
        setPage(n-1)
    }

    const onfirstPage = () => {
        setPokePage(1)
        setPage(1-1)
    }

    const onLastPage = () => {
        setPokePage(Math.ceil(amoutPokemon / pokePerPage))
        setPage(Math.ceil(amoutPokemon / pokePerPage)-1)
    }

    return (
        <nav className="pagination is-large"
            role="navigation"
            aria-label="pagination">

            <button onClick={onPreviusPage} className={`pagination-previous ${pokePage === 1 ? `is-disabled` : ``}`}>Previous</button>
            <button onClick={onfirstPage} className={`pagination-first ${pokePage === 1 ? `is-disabled` : ``}`}>first page</button>

            <ul className="pagination-list">

                {
                    pageNumber.map(noPage => (
                        <li onClick={() => onSpecificPage(noPage)} key={noPage} className='pagination_number-li'>
                            <a  className={`pagination-link ${noPage === pokePage ? `is-current` : ``}`}>{noPage}</a>
                        </li>
                    )).slice(firstPage, lastPage)
                }

            </ul>
            <button onClick={onLastPage} className={`pagination-last ${pokePage >= pageNumber.length ? `is-disabled` : ``}`}>last page</button>
            <button onClick={onNextPage} className={`pagination-next ${pokePage >= pageNumber.length ? `is-disabled` : ``}`}>Next page</button>
        </nav>
    )
}

export default Pagination