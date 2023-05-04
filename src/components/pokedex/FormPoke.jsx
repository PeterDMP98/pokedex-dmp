import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './styles/formPoke.css'


const FormPoke = ({setFormUrl, urlBase}) => {

    const url = `https://pokeapi.co/api/v2/type/`

    const [getAllTypes, types, hasError] = useFetch(url)

    useEffect(() => {
        getAllTypes()
    }, [])


    const navigate = useNavigate()

    const inputPoke = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`
        navigate(path)
    }

    const handleChange = e => {
        setFormUrl(e.target.value)
    }

    /*Busqueda en tiempo real */

    return (
        <div className='pokedex__form'>

            <form className='pokedex__form-search' onSubmit={handleSubmit}>
                <input className='pokedex__form-input' ref={inputPoke} type="text" placeholder='Buscar un Pokemon' />
                <button className='pokedex__form-btn' >Search</button>
            </form>

            <select className='pokedex__type'  onChange={handleChange} id="">
                <option className='pokedex__option' value={urlBase}>All Pokemon</option>
                {
                    types?.results.map(type => (
                        <option className='pokedex__option' key={type.url} value={type.url}>{type.name}</option>
                    ))
                }
                {/* 
                <option value="allPokemons">All Pokemon</option>
                <option value="hola">hola</option> */}
            </select>
        </div>
    )
}

export default FormPoke