import './styles/pokeInfoCard.css'
const PokeInfoCard = ({ pokemon }) => {

    return (
        <section className={`poke-info__section`}>

            <div className='poke-info__content'>

                <header className={`poke-info__header`}>
                    <img className='poke-info__sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />

                    <div className={`bg-header bg-${pokemon?.types[0].type.name}`}></div>

                </header>


                <section className='poke-info__body'>


                    <section className='poke-info-about'>

                        <h3 className='poke-info__about-id'>#{pokemon?.id}</h3>

                        <div className='poke-info__decoration-name'>
                            <div className='line'></div>
                            <h3 className={`poke-info__name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
                            <div className='line'></div>
                        </div>

                        <div className='weight-height'>
                            <p className='length-pokemon'><span className='length__label'>weight</span> <span className='length__value'>{pokemon?.weight}</span></p>
                            <p className='length-pokemon'><span className='length__label'>height</span> <span className='length__value'>{pokemon?.height}</span></p>
                        </div>

                    </section>

                    <section className='poke-info_types-habilities'>
                        <article className='poke-info__types'>
                            <h3>Types</h3>
                            <ul className='poke-info__types-list'>
                                {
                                    pokemon?.types.map(type => (
                                        <li className={`poke-info__type-specific bg-${pokemon?.types[0].type.name}`} key={type.type.url}>{type.type.name}</li>
                                    ))
                                    
                                }
                            </ul>
                        </article>

                        <article className='poke-info__abilities '>
                            <h3>abilities</h3>
                            <ul className='poke-info__abilities-list'>
                                {
                                    pokemon?.abilities.map(ability => (
                                        <li className='poke-info__abilities-specific' key={ability.ability.url}>{ability.ability.name}</li>
                                    ))
                                }
                            </ul>
                        </article>

                    </section>

                    <section className='poke-info__content-stats'>

                        <div className='content_title-stat'>
                            <h3 className='title'>Stats</h3>
                            <div className='line__stat'></div>
                            <img className='stat_imagen' src='/images/ball.png' alt="" />
                        </div>
                        <ul className='poke-info__stats'>
                            {
                                pokemon?.stats.map(stat => (
                                    <li className='poke-info__stats-specific' key={stat.stat.url}>
                                        <div className='poke-info__stats-info'>
                                            <span className='poke-info__stats-label'>{stat.stat.name}:</span>
                                            <span className={`poke-info__stats-value `}>{stat.base_stat} / 150</span>
                                        </div>
                                        <div className='poke-info__stats-bar'>
                                            <div className='porsentaje' style={{ width: `${stat.base_stat}%` }} ></div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </section>

                    <article className='poke-info__moves'>
                        {
                            <ul className='poke-info__moves-list'>
                                {
                                    pokemon?.moves.map(move => (
                                        <li className='poke-info__moves-specific' key={move.move.url}>{move.move.name}</li>
                                    ))
                                }
                            </ul>
                        }

                    </article>


                </section>
            </div>

        </section>
    )
}

export default PokeInfoCard