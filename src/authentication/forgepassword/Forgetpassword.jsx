// src/authentication/forgetpassword/Forgetpassword.jsx
import React, { useContext, useState } from "react";
import Authcontext from "../../contextprovider/Authcontext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forgetpassword = () => {
  const { resetemail } = useContext(Authcontext);
  const [email, setEmail] = useState("");

  const handleReset = () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    resetemail(email)
      .then(() => {
        toast.success("✅ Password reset email sent! Check your inbox.");
        setTimeout(() => {
          window.location.href = "https://mail.google.com";
        }, 2500);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-slate-800">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Reset Password
        </h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your registered email"
          className="w-full border p-2 rounded mb-3 focus:outline-blue-400"
        />
        <button
          onClick={handleReset}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          Send Reset Email
        </button>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Forgetpassword;
