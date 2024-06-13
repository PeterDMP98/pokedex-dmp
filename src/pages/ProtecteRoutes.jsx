import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setTrainerName } from '../store/slices/trainerName.slice'

const ProtecteRoutes = () => {
    const dispatch =  useDispatch()
    
    const {trainerName} = useSelector(state => state)

    if (localStorage.getItem('entrenador')) {
        dispatch(setTrainerName(localStorage.getItem('entrenador')))
    }

    if (trainerName.length >= 3) {
        return <Outlet/>
    } else {
        return <Navigate to='/'/>        
    }
}

export default ProtecteRoutes