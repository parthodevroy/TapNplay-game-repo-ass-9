

// export default Game;
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Game = ({ games }) => {
  const { coverPhoto, title, description, id, ratings } = games;

  // Dynamic background color based on rating
  const getBgColor = (rating) => {
    if (rating >= 4.5) return "bg-gradient-to-b from-green-700 to-green-900";
    if (rating >= 3.5) return "bg-gradient-to-b from-blue-700 to-blue-900";
    if (rating >= 2.5) return "bg-gradient-to-b from-yellow-700 to-yellow-900";
    return "bg-gradient-to-b from-red-700 to-red-900";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`card text-white w-96 h-[400px] shadow-lg rounded-2xl overflow-hidden ${getBgColor(
         ratings
        )}`}
      >
        <figure>
          <img
            src={coverPhoto}
            alt={title}
            className="h-[260px] w-full object-cover"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-yellow-300 text-2xl">{title}</h2>
          <p className="font-semibold text-lg text-gray-200">
            {description.slice(0, 100)}...
          </p>

          <div className="card-actions flex justify-between items-center mt-4">
            {/*  Ratings */}
            <div className="text-yellow-400 flex items-center gap-1 text-lg font-semibold">
             ⭐{ratings}
            </div>

            {/*  View Details Button */}
            <Link to={`/details/${id}`}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="btn bg-black/40 backdrop-blur-md text-white font-semibold px-4 py-2 rounded-xl"
              >
                View Details...
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Game;

