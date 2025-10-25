import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Game = ({ games }) => {
  const { coverPhoto, title, description, id } = games;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card bg-stone-900 text-white w-96 h-[400px] object-cover shadow-sm">
        <figure>
          <img src={coverPhoto} alt={title} className="h-[300px] w-full object-cover" />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-yellow-400 text-2xl">{title}</h2>
          <p className="font-semibold text-lg text-gray-300">
            {description.slice(0, 100)}...
          </p>

          <div className="card-actions justify-center mt-4">
            <Link to={`/details/${id}`}>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#f59e0b" }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="btn bg-red-600 text-white font-semibold px-4 py-2 rounded-xl"
              >
                View Details 🚀
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Game;
