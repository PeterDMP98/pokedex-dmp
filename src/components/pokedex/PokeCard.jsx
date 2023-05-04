import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/pokeCard.css'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({ url }) => {
    const navigate = useNavigate()

    const [getPokemonById, pokemon] = useFetch(url)

    useEffect(() => {
        getPokemonById()
    }, [])

    const handleClick = () => {
        navigate(`/pokedex/${pokemon?.name}`)
    }

    return (
        <article onClick={handleClick} className={`pokemon border-${pokemon?.types[0].type.name}`}>
            <div>
                <header className={`pokemon__header bg-${pokemon?.types[0].type.name}`}>

                    <img className='pokemon__sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />

                </header>

                <section className='pokemon__body'>
                    <h3 className={`pokemon__name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>

                    <ul className='pokemon__types'>
                        {
                            pokemon?.types.map(type => (
                                <li className='pokemon__type-specific' key={type.type.url}>{type.type.name}</li>
                            ))
                        }
                    </ul>

                    <ul className='pokemon__stats'>
                        {
                            pokemon?.stats.map(stat => (
                                <li className='pokemon__stats-specific' key={stat.stat.url}>
                                    <span className='pokemon__stats-label'>{stat.stat.name}</span>
                                    <span className={`pokemon__stats-value color-${pokemon?.types[0].type.name}`}>{stat.base_stat}</span>
                                </li>
                            ))
                        }
                    </ul>
                </section>
            </div>
        </article>
    )
}

export default PokeCard