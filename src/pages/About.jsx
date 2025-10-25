import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <motion.h1
        className="text-4xl font-bold text-amber-400 mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About GameHub 🎮
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Welcome to <span className="text-amber-400 font-semibold">GameHub</span> —  
        a digital universe where gamers, developers, and dreamers come together.
        We provide the best hand-picked games with detailed reviews, ratings, and
        developer insights — everything you need to explore the world of gaming.
      </motion.p>

      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {[
          { title: "500+ Games", icon: "🎮" },
          { title: "Global Community", icon: "🌍" },
          { title: "Trusted Reviews", icon: "⭐" },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-stone-800 rounded-xl shadow-md text-center"
          >
            <p className="text-5xl mb-3">{item.icon}</p>
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
