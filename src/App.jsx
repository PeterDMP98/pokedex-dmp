import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import ProtecteRoutes from './pages/ProtecteRoutes'
import PokeInfo from './pages/PokeInfo'


function App() {

  return (
    <div className='app'>

      <Routes>
        <Route element={<ProtecteRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:name' element={<PokeInfo/>}/>
        </Route>

        <Route path='/' element={<Home />} />
        <Route path='*' element={<h1>direccion errronea</h1>}/>
      </Routes>
    </div >
  )
}

export default App
