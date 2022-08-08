/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React from "react";
import swal from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-useless-escape
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = e.target.email;
    const password = e.target.password;
    if (email.value === "" || password.value === "") {
      swal("Error", "Please fill all fields", "error");
    }
    if (!regexEmail.test(email.value)) {
      swal("Error", "Please enter a valid email", "error");
    }
    axios
      .post("http://challenge-react.alkemy.org", {
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        swal("Success", "You are logged in", "success");
        const tokenRecivido = res.data.token;
        localStorage.setItem("token", tokenRecivido);
        history("/listado");
      });
  };

  return (
    <>
      <div className="bg-white flex items-center justify-center h-screen w-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800  shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Username"
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            ></input>
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
