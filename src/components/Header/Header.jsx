import React from "react";
import { Link } from "react-router-dom";
import swal from "@sweetalert/with-react";
import SearchBar from "../SearchBar/SearchBar";

function NavBar(props) {
  const token = localStorage.getItem("token");

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  const logout = () => {
    localStorage.removeItem("token");
    swal("Logout", "Logout correcto", "success");
    window.location.reload("/");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <nav className="border-gray-200 px-2 mb-10">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="flex md:order-2">
            <SearchBar />
            <button
              data-collapse-toggle="mobile-menu-3"
              type="button"
              className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
              aria-controls="mobile-menu-3"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
            id="mobile-menu-3"
          >
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                {token ? (
                  <label
                    onClick={logout}
                    className="text-blue-500 hover:text-blue-800 cursor-pointer"
                  >
                    Logout
                  </label>
                ) : (
                  <Link to="/">
                    <label
                      className="cursor-pointer bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded"
                      aria-current="page"
                    >
                      Login
                    </label>
                  </Link>
                )}
              </li>
              <li>
                <Link to="/listado">
                  <label
                    className="cursor-pointer text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                    aria-current="page"
                  >
                    List
                  </label>
                </Link>
              </li>
              <li>
                  {props.favoritos.length > 0 ? (
                    <p className="bg-blue-300 text-black border-none rounded-full absolute fav-list">
                      {props.favoritos.length}
                    </p>
                  ) : null}
                <Link to="/favorites">
                  <label
                    className="cursor-pointer text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                    aria-current="page"
                  >
                    Favorites
                  </label>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
