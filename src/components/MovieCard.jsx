import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'


const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({movie, tipo, showLink = true}) => {
  return (
    <div className='movie-card'>
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <h2>{movie.title || movie.name} </h2>
        <p> 
           Avaliação:  <FaStar /> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}?tipo=${tipo}`} className='details' >Detalhes</Link>}

    </div>
  )
}

export default MovieCard;