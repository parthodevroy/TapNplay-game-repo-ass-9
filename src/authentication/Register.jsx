import React, { useContext, useState } from "react";

import { Link } from "react-router";
import Authcontext from "../contextprovider/Authcontext";

const Register = () => {
  const { registation } = useContext(Authcontext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    setError("");
    setSuccess("");

    if (!terms) {
      setError("❌ Please accept the Terms and Conditions");
      return;
    }

    registation(email, password,name,photoURL)
      .then(() => {
        setSuccess("✅ Registration successful! Please login now.");
        e.target.reset();
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
            Register
          </h2>

          <form onSubmit={handleRegister} className="space-y-3">
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              placeholder="Full Name"
              required
            />
            <input
              type="text"
              name="photo"
              className="input input-bordered w-full"
              placeholder="Photo URL"
              required
            />
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

            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" name="terms" />
              <span>
                I agree to the{" "}
                <Link to="/terms" className="text-blue-600 underline">
                  Terms and Conditions
                </Link>
              </span>
            </label>

            <button className="btn bg-amber-500 text-white w-full mt-3">
              Register
            </button>
          </form>

          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-600 mt-2">{success}</p>}

          <p className="text-sm mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
