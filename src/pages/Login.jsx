import React, { useState } from "react";
import { Link } from "react-router-dom";
const VITE_API_URL = import.meta.env.VITE_API_URL;
const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const googleAuth = () => {
    window.open(`${VITE_API_URL}/auth/google/callback`, "_self");
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("login clicked");
    try {
      const url = `${VITE_API_URL}/user/login`;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      const token = await res.json();
      localStorage.setItem("token", token.data);
      window.location = "/home";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={(e) => handleLogin(e)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                {/* <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-secondary hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mb-2s">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md mb-2 px-3 py-1.5 text-sm font-semibold bg-primary hover:bg-secondary leading-6 text-white shadow-s focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                  onSubmit={(e) => handleLogin(e)}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
          <div className="flex justify-center mb-2">
            <span className="block text-sm font-medium leading-6 text-gray-900">
              Or
            </span>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="px-3 py-1.5 border flex gap-2 border-slate-200 rounded-lg text-gray-900 text-sm font-semibold leading-6 hover:border-secondary hover:shadow transition duration-150"
              onClick={googleAuth}
            >
              <img
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span>Login with Google</span>
            </button>
          </div>

          <p className="mt-5 text-center text-sm text-gray-500">
            No account? No problem. {"  "}
            <a
              href="/register"
              className="font-semibold leading-6 text-primary hover:text-secondary"
            >
              Create one!
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
