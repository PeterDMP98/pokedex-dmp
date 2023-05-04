import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const ProtecteRoutes = () => {
    
    const {trainerName} = useSelector(state => state)

    if (trainerName.length >= 3) {
        return <Outlet/>
    } else {
        return <Navigate to='/'/>        
    }
}

export default ProtecteRoutes