import React from 'react'
import FormNameUser from '../components/Home/FormNameUser'
import '../components/Home/styles/home.css'


const Home = () => {

  return (
    <div className='home'>
      <header className='home__header'>

        <div className='home__img-title'>
          <img src='/images/titulo.png' alt="title" />
        </div>

        <div className='home__welcon'>
          <h2>¡hi trainer!</h2>
          <p>Please give us your name to start</p>
        </div>

      </header>

      <main>
        <FormNameUser />
      </main>

      <footer className='home__footer'>
        <div className='home__decoration'>

          <div className='home__content-decoration'>
            <div className='home__decoration-circle'>
              <div className='home_circle-interno'></div>
            </div>
          </div>

        </div>
      </footer>

    </div>
  )
}

export default Home