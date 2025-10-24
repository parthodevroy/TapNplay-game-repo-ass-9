import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router";
import Authcontext from "../contextprovider/Authcontext";

const Login = () => {
  const { loginuser } = useContext(Authcontext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");
    setSuccess("");

    loginuser(email, password)
      .then((result) => {
        console.log("User logged in:", result.user);
        setSuccess("🎉 Login successful!");
        e.target.reset();
        navigate("/games"); // ✅ login হলে user profile page এ যাবে
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="card bg-white text-black w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center text-amber-600 mb-3">
            Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-3">
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              className="input input-bordered w-full"
              placeholder="Password"
              required
            />

            <button className="btn bg-amber-500 text-white w-full mt-3">
              Login
            </button>
          </form>

          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-600 mt-2">{success}</p>}

          <p className="text-sm mt-3">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
