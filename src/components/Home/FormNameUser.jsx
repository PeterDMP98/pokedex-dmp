import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setTrainerName } from '../../store/slices/trainerName.slice'
import { useNavigate } from 'react-router-dom'
import './styles/homeForm.css'

const FormNameUser = () => {

  const navigate = useNavigate()

  const dispatch =  useDispatch()

  const inputName =  useRef()

  const hanldeSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerName(inputName.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <form className='home__form' onSubmit={hanldeSubmit}>
        <input className='home__input' ref={inputName} type="text" />
        <button className='home__btn'>Start</button>
    </form>
  )
}

export default FormNameUser