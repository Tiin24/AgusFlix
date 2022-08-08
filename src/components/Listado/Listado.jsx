import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "@sweetalert/with-react";

function Listado(props) {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  
  const [movieList, setMovieList] = useState([]);

  const [genreList, setGenreList] = useState([]);

  console.log(props)

  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=bb7eca13b2c64392e4397ddbc4b6fb29&language=es-ES&page=1";

    axios
      .get(endPoint)
      .then((res) => {
        const peliculas = res.data;
        setMovieList(peliculas.results);
      })
      .catch((err) => {
        swal("Error", "Error al cargar las peliculas", "error");
      });

    const endPointGenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=bb7eca13b2c64392e4397ddbc4b6fb29&language=en-US`;
    axios.get(endPointGenre).then((res) => {
      const generos = res.data;
      setGenreList(generos.genres);
    });
  }, [setMovieList]);

  console.log(movieList);

  return (
    <>
      {!token && navigate("/")}
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {movieList.map((movie, id) => {
          return (
            <div className="rounded overflow-hidden shadow-lg" key={id}>
              <div className="relative">
                <span className="year">
                  {movie.release_date.substring(0, 4)}
                </span>
                <Link to={`/detail?movieID=${movie.id}`}>
                  <img
                    className="w-full hover:"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.original_title}
                  />
                </Link>
                <button
                  className="absolute top-5 right-3 px-1  bg-white text-white border-none rounded-full"
                  onClick={props.addOrRemoveFavorite}
                  data-movie-id={movie.id}
                  >
                  🖤
                </button>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  <h1>{movie.title.substring(0, 50) + "..."}</h1>
                </div>
                <p className="text-gray-700 text-base">
                  {movie.overview.substring(0, 100) + "..."}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 vote" >
                {movie.vote_average > 6 ? (
                  <span className="inline-block bg-green-500 text-white text-sm font-bold rounded-full px-3 py-1">
                    ☆{movie.vote_average}
                  </span>
                ) : (
                  <span className="inline-block bg-red-500 text-white text-sm font-bold rounded-full px-3 py-1">
                    ☆{movie.vote_average}
                  </span>
                )}
                {movie.vote_count > 0 ? (
                  <span className="inline-block text-sm text-gray-700 ml-2">
                    {movie.vote_count} votos
                  </span>
                ) : (
                  <span className="inline-block text-sm text-gray-700 ml-2">
                    Sin votos
                  </span>
                )}
              </div>
              <div className="px-6 py-4">
                {movie.genre_ids.map((genre, id) => {
                  return (
                    <span
                      key={id}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 gap-5 "
                    >
                      #{genreList.find((item) => item.id === genre).name}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Listado;
