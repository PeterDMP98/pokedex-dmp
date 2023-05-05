import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/pokedex/FormPoke'
import PokeContainer from '../components/pokedex/PokeContainer'
import '../components/pokedex/styles/pokedex.css'
import HeaderPokeAll from '../components/HeaderPokeAll'

const Pokedex = () => {

  const { trainerName } = useSelector(state => state)

  const urlBase = `https://pokeapi.co/api/v2/pokemon?limit=1000000&offset=0`
  const [formUrl, setFormUrl] = useState(urlBase)

  return (
    <div className='pokedex'>

      <header className='pokedex__header'>
        <HeaderPokeAll/>
      </header>

      <main className='pokedex__main'>

        <div className='pokedex__welcon'>
          <p><span className='pokedex__name'>Welcome {trainerName}, </span>aqui podras encontrar a tu pokemon favorito</p>
          <FormPoke urlBase={urlBase} setFormUrl={setFormUrl} />
        </div>
        
        <PokeContainer formUrl={formUrl} />
      </main>
    </div>
  )
}

export default Pokedex