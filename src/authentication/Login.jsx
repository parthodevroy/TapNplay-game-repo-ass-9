
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Authcontext from "../contextprovider/Authcontext";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const Login = () => {
  const { loginuser, googlelogin } = useContext(Authcontext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");
    setSuccess("");

    loginuser(email, password)
      .then((result) => {
        setSuccess("🎉 Login successful!");
        e.target.reset();
        navigate(`${location.state ? location.state : "/games"}`);
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogleLogin = () => {
    googlelogin()
      .then(() => navigate("/games"))
      .catch((error) => console.log(error));
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

            {/* password show/hide */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input input-bordered w-full pr-10"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-600"
              >
                {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
              </button>
            </div>

            <Link to="/forgetpassword" className="text-sm text-blue-600 underline">
              Forgot password?
            </Link>

            <button className="btn bg-amber-500 text-white w-full mt-3">
              Login
            </button>
          </form>

          {/* Google login */}
          <button
            onClick={handleGoogleLogin}
            className="btn bg-white w-full text-black border-[#e5e5e5]"
          >
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" 
            d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4"
             d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" 
             d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>

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

