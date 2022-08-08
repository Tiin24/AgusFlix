import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Favoritos(props) {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  

  return (
    <>
      {!token && navigate("/")}
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 h-screen">
        {props.favoritos.map((movie, id) => {
          return (
            <div className="rounded overflow-hidden shadow-lg " key={id}>
              <div className="relative">
                <span className="year">
                  {movie.date.substring(0, 4)}
                </span>
                <Link to={`/detail?movieID=${movie.id}`}>
                  <img
                    className="w-full"
                    src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
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
                  {movie.description.substring(0, 100) + "..."}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Favoritos