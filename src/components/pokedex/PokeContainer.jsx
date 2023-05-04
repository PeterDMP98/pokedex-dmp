import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import PokeCard from './PokeCard'
import Pagination from './Pagination'
import './styles/pokeContainer.css'

const PokeContainer = ({ formUrl }) => {

  const [getAllPokemons, pokemons] = useFetch(formUrl)

  useEffect(() => {
    getAllPokemons()

  }, [formUrl])

  const amoutPokemon = (pokemons?.results ? pokemons?.results.length : pokemons?.pokemon.length)


  const [pokePerPage, setPokePerPage] = useState(10)
  const [pokePage, setPokePage] = useState(1)

  const lastIndex = pokePage * pokePerPage;
  const firstIndex = lastIndex - pokePerPage;


  return (
    <div className='poke-container'>
      <div className='pokemons'>
        {
          pokemons?.results
            ? (
              pokemons?.results.map(pokemon => (
                <PokeCard
                  key={pokemon.url}
                  url={pokemon.url}
                />
              )).slice(firstIndex, lastIndex)
            )
            :
            pokemons?.pokemon.map(objPoke => (
              <PokeCard
                key={objPoke.pokemon.url}
                url={objPoke.pokemon.url}
              />
            )).slice(firstIndex, lastIndex)
        }

      </div>

      <Pagination
        pokePerPage={pokePerPage}
        pokePage={pokePage}
        setPokePage={setPokePage}
        amoutPokemon={amoutPokemon}
      />
    </div>
  )
}

export default PokeContainer