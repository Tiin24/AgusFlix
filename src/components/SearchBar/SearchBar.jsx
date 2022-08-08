import React from "react";
import swal from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";
function SearchBar() {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();
    
    if (keyword === "") {
        swal("Error", "Please fill all fields", "error");
    } else{
      e.currentTarget.keyword.value = "";
      navigate(`/resultados?keyword=${keyword}`);
      window.Location.reload();
    }
};

  return (
    <div className="relative mr-3 md:mr-0 hidden md:block">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          name="keyword"
        ></input>
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500"
        >
          buscar
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
