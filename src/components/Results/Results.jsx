import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Results() {
  const query = new URLSearchParams(window.location.search);
  const keyword = query.get("keyword");

  const [results, setResults] = React.useState([]);
  const [genreList, setGenreList] = React.useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=bb7eca13b2c64392e4397ddbc4b6fb29&language=es-ES&query=${keyword}&page=1&include_adult=false`;
    axios.get(endPoint).then((res) => {
      const peliculas = res.data;
      setResults(peliculas.results);
    });

    const endPointGenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=bb7eca13b2c64392e4397ddbc4b6fb29&language=en-US`;
    axios.get(endPointGenre).then((res) => {
        const generos = res.data;
        setGenreList(generos.genres);
        }
    );
  }, [keyword]);

  return (
    <>
        <strong>Resultados para: {keyword}</strong>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {results.map((movie, id) => {
          return (
            <div className="rounded overflow-hidden shadow-lg" key={id}>
              <Link to={`/detail?movieID=${movie.id}`}>
                <span className="absolute text-sm text-white bg-blue-500 rounded-md">
                  {movie.release_date.substring(0, 4)}
                </span>
                <img
                  className="w-full hover:"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </Link>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {movie.title.substring(0, 50) + "..."}
                </div>
                <p className="text-gray-700 text-base">
                  {movie.overview.substring(0, 100) + "..."}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {movie.vote_average > 6 ? (
                  <span className="inline-block bg-green-500 text-white text-sm font-bold rounded-full px-3 py-1">
                    ☆{movie.vote_average} {}
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

export default Results;
