import './styles/headerPokeAll.css'

const HeaderPokeAll = () => {

    return (
        <header className='header'>

            <div className='header_decoration'>

                <div className='header__decoration'>
                    <div className='header__circle'>
                        <div className='header__circle-interno'></div>
                    </div>
                </div>

            </div>

            
            <div className='pokedex__logo'>
                <img className='logo__img' src='/images/titulo.png' alt="" />
            </div>


        </header>
    )
}

export default HeaderPokeAll