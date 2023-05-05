import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import PokeInfoCard from '../components/pokeInfo/PokeInfoCard'
import HeaderPokeAll from '../components/HeaderPokeAll'

const PokeInfo = () => {
  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  const [getPokemonByName, pokemon, hasError] = useFetch(url)

  useEffect(() => {
    getPokemonByName()
  }, [name])

  return (
    <div className='poke-info'>
      <header>
        <HeaderPokeAll/>
      </header>
      
      {
        hasError
          ? <h1>Este pokemon no existe. X</h1>
          : <PokeInfoCard pokemon={pokemon}/>
      }
    </div>
  )
}

export default PokeInfo