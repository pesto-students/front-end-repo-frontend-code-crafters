import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from 'js-cookie';
const VITE_API_URL = import.meta.env.VITE_API_URL;

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { user, status, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${VITE_API_URL}/user/register`;
      const { data: res } = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      const token = await res.json();
      localStorage.setItem("token", token.data);
      dispatch(loginSuccess(token));
      navigate("/home");
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

  const googleAuth = () => {
    window.open(`${VITE_API_URL}/auth/google/callback`, "_self");
    let cookieValue = Cookies.get('token');
    sessionStorage.setItem("token", cookieValue);
    dispatch(loginSuccess(true)).then(() => navigate("/shop"))
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            onSubmit={handleSubmit}
            method="POST"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              ></label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="email"
                  placeholder="Name"
                  required
                  onChange={handleChange}
                  value={data.name}
                  className="block w-full rounded-md border-0 px-2 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-secondary  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              ></label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  value={data.email}
                  className="block w-full rounded-md border-0 px-2 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  value={data.password}
                  className="block w-full rounded-md border-0 px-2 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mb-2s">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md mb-2 bg-primary hover:bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus:ring-secondary  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                >
                  Sign Up
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
              <span>Sign up with Google</span>
            </button>
          </div>

          <p className="mt-5 text-center text-sm text-black">
            Already registered? {"  "}
            <a
              href="/login"
              className="font-semibold leading-6 text-primary hover:text-secondary"
            >
              Login here!
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
