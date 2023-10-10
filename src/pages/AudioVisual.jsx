import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [tipoAtual, setTipoAtual] = useState("filme");

  const [audioVisuais, setAudioVisuais] = useState([]);

  const fetchAudioVisual = async () => {
    if(tipoAtual === "filme") {
      const res = await fetch(`${moviesURL}popular?${apiKey}`);
      const data = await res.json();

      setAudioVisuais(data.results);

    }  else if (tipoAtual === "serie") {
      const res = await fetch(`https://api.themoviedb.org/3/tv/top_rated?${apiKey}`);

      const data = await res.json();

      setAudioVisuais(data.results);

  }
};

  useEffect(() => {

    fetchAudioVisual();
  }, [tipoAtual]);

  return (
    <div className="container">
      <div className="button"> 
      <button className="button-fs" onClick={() => setTipoAtual("filme")}> Filmes </button>
      <button className="button-fs" onClick={() => setTipoAtual("serie")}> Séries </button>
      </div>
      <h2 className="title"> Em alta:</h2>
      <div className="movies-container">
        {audioVisuais.length === 0 && <p> Carregando... </p>}
        {audioVisuais.length > 0 &&
          audioVisuais.map((movie) => <MovieCard tipo={tipoAtual} key={movie.id} movie={movie} />)}
      </div>
      <Footer> </Footer>
    </div>
  );
};

export default Home;
