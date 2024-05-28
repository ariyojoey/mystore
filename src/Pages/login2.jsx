import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ApiService from "../restApi/rest_Api";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isPassword, setisPassword] = useState(false);

  const showPassword = () => {
    setisPassword((isPassword) => !isPassword);
    console.log(isPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email.trim() !== "" && password.trim() !== "") {
      try {
        const response = await ApiService.getUserCredentials(email, password);

        if (response.success) {
          const myToken = response.data.token;
          console.log("Token is", myToken);

          // Storing token in localStorage
          localStorage.setItem("token", myToken);

          // Redirecting to another page
          navigate("/home");
        } else {
          setError("Invalid email or password");
        }
      } catch (error) {
        console.error("Error:", error.message);
        setError("Error: Connection timeout");
      }
    } else {
      setError("Email and password are required");
    }
  };

  return (
    <div className="bg-gray-900 flex justify-center items-center h-screen w-screen">
      <div className="border-t-8 rounded-sm border-indigo-900 bg-white p-12 shadow-2xl w-96">
        <h1 className="font-bold text-center block text-2xl">Log In</h1>
        <form onSubmit={handleLogin}>
          <label className="text-gray-500 block mt-3">
            Email Address
            <input
              autoFocus={true}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-900 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </label>
          <label className="text-gray-500 block mt-3">
            Password
            <input
              type={isPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-900 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
            />
            <div
              onClick={showPassword}
              className="absolute top-[345px] right-[550px] hover:cursor-pointer"
            >
              {isPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </div>
          </label>
          <button
            type="submit"
            className="mt-6 transition-all block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-gray-800 to-purple-400 hover:from-gray-700 hover:to-purple-900 focus:bg-gray-900 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Submit
          </button>
          {error && <div className="text-red-500 mt-2 text-sm">{error}</div>}
          <div className="flex justify-center text-sm mt-2">
            <p>Don't have an account?</p>
            <NavLink to="/signup">
              <p className="text-indigo-900 text-sm">SignUp</p>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
