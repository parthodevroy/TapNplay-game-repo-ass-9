import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newslatter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    toast.success(`Thanks for subscribing, ${email}!`);
    e.target.reset();
  };

  return (
    <div className="bg-gray-950 max-w-6xl mx-auto text-white pb-4 p-8 rounded-xl mt-4 mb-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
      <p className="mb-4 text-gray-400">
        Get the latest game updates, offers, and news right in your inbox.
      </p>
      <form onSubmit={handleSubscribe} className="flex justify-center gap-3">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="input input-bordered w-72 text-black"
        />
        <button className="btn btn-neutral hover:bg-gray-700">Subscribe</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Newslatter;
