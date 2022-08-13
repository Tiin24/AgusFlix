import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Detail() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");

  const [movie, setMovie] = useState(null);

  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=bb7eca13b2c64392e4397ddbc4b6fb29&language=es-ES`;
    axios.get(endPoint).then((res) => {
      const peliculas = res.data;
      setMovie(peliculas);
      console.log(peliculas);
    });
    const endPointCast = `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=bb7eca13b2c64392e4397ddbc4b6fb29&language=es-ES`;
    axios.get(endPointCast).then((res) => {
      const peliculas = res.data;
      setCast(peliculas.cast);
      setCrew(peliculas.crew);
    });
  }, [movieID]);
  return (
    <>
      {/* {!token && navigate("/")} */}
      {movie && (
        <>
          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div className="w-full">
              <img
                className="rounded-xl"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.original_title}
              />
            </div>
            <div className="">
              <h1 className="text-2xl text-black text-">
                {movie.original_title}
              </h1>
              {movie.vote_average > 6 ? (
                <span className="inline-block bg-green-500 text-white text-sm font-bold rounded-full px-3 py-1">
                  ☆{movie.vote_average.toFixed(1)}  
                </span>
              ) : (
                <span className="inline-block bg-red-500 text-white text-sm font-bold rounded-full px-3 py-1">
                  ☆{movie.vote_average.toFixed(1)} 
                </span>
              )}
              <h1>{movie.vote_average}</h1>
              <p className="text-gray-700">{movie.overview}</p>
              <ul>
                <li>
                  <h1>{movie.release_date.substring(0, 4)}</h1>
                </li>
                <li>
                  <strong>Director:</strong>
                  
                    {crew.find((item, id) => item.job === "Director") ? (
                      <span>
                        {crew.find((item) => item.job === "Director").name}
                      </span>
                    ) : (
                      "No hay director"
                    )}
                </li>
                <li>
                  <strong>Cast:</strong>
                  {cast.slice(0, 5).map((cast, id) => (
                    <span key={id} className="text-gray-700">
                      {cast.name} ,
                    </span>
                  ))}
                </li>
                <li>
                  <strong>Genero:</strong>
                  {movie.genres.map((genre, id) => {
                    return <span key={id}>{genre.name}, </span>;
                  })}
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Detail;
