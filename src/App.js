import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Listado from "./components/Listado/Listado";
import NavBar from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Detail from "./components/Detail/Detail";
import Results from "./components/Results/Results";
import Favoritos from "./components/Favoritos/Favoritos";
import swal from "@sweetalert/with-react";

function App(props) {
  const [favoritos, setFavoritos] = React.useState([]);

  useEffect(() => {
    const favsMoviesInLocals = JSON.parse(localStorage.getItem("favs"));

    if (favsMoviesInLocals) {
      setFavoritos(favsMoviesInLocals);
    }
  }, []);

  console.log(favoritos);

  const addOrRemoveFavorite = (e) => {
    const favsMovies = JSON.parse(localStorage.getItem("favs"));
    let tempsFavs;
    if (favsMovies === null) {
      tempsFavs = [];
    } else {
      tempsFavs = JSON.parse(localStorage.getItem("favs"));
    }
    const btn = e.currentTarget;
    const padre = btn.parentNode; // soy el primer hijo del padre
    const date = padre.querySelector("span").innerText;
    const padreSupremo = padre.parentNode; // soy el padre de todos los hijos
    const image = padreSupremo.querySelector("img").src;
    const title = padreSupremo.querySelector("h1").innerText;
    const description = padreSupremo.querySelector("p").innerText;
    const id = btn.dataset.movieId;
    console.log(id);
    const movieData = {
      image,
      title,
      description,
      date,
      id,
    };
    const index = tempsFavs.find((movie) => movie.id === id);
    if (index === undefined) {
      tempsFavs.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempsFavs));
      setFavoritos(tempsFavs);
      swal("Agregado a favoritos", "", "success");
    } else {
      let remove = tempsFavs.filter((movie) => movie.id !== id);
      localStorage.setItem("favs", JSON.stringify(remove));
      setFavoritos(remove);
      swal("Eliminado de favoritos", "", "success");
    }
  };

  return (
    <BrowserRouter>
      <NavBar favoritos={favoritos}/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/listado"
          element={<Listado addOrRemoveFavorite={addOrRemoveFavorite} />}
        />
        <Route path="/detail" element={<Detail />} />
        <Route
          path="/favorites"
          element={<Favoritos favoritos={favoritos} addOrRemoveFavorite={addOrRemoveFavorite} />}
        />
        <Route path="/resultados" element={<Results />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
