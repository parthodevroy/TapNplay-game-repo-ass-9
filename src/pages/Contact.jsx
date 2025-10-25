import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("✅ Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <motion.h1
        className="text-4xl font-bold text-amber-400 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us 📬
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-stone-800 p-8 rounded-xl shadow-lg w-full max-w-md space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="input input-bordered w-full bg-gray-700 text-white"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="input input-bordered w-full bg-gray-700 text-white"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="textarea textarea-bordered w-full bg-gray-700 text-white"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#f59e0b" }}
          className="btn bg-amber-500 w-full text-black font-semibold"
        >
          Send Message 🚀
        </motion.button>
      </motion.form>

      <ToastContainer position="bottom-center" autoClose={2000} />
    </div>
  );
};

export default Contact;
