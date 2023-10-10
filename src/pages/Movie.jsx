import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsCaretRightSquare,
} from "react-icons/bs";

import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const urlParams = new URLSearchParams(window.location.search);
  const tipo = urlParams.get("tipo");

  const getMovie = async (url) => {
    if (tipo === "filme") {
      const res = await fetch(url);
      const data = await res.json();
      data.adult = true;
      console.log(data);

      setMovie(data);


    } else if (tipo === "serie") {
      const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?${apiKey}`);
      const data = await res.json();
      console.log(data);
      setMovie(data);
    }
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);

    
  }, []);

  return (
    <div>
      {movie && (
        <div className="movie-page">
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>

          <div className="info">
            <h3>
              <BsCaretRightSquare /> Gênero:
            </h3>
            <p>{movie.genres.map((genre) => genre.name).join(" / ")}</p>
          </div>  
          
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>

            {movie.runtime ? <p>{movie.runtime} min.</p>: <div> 
            <p>Número de temporadas: {movie.number_of_seasons}</p>
            <p>Número de episódios: {movie.number_of_episodes}</p>
          
          </div> }
          
          </div>
          <div className="info">
            <h3>
              <BsFillFileEarmarkTextFill /> Sinopse:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
      <Footer> </Footer>
    </div>
  );
};

export default Movie;
