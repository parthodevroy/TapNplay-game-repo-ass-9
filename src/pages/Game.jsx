

// export default Game;
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Game = ({ games }) => {
  const { coverPhoto, title, description, id, ratings } = games;

  // Dynamic background color based on rating
  const getBgColor = (rating) => {
  if (rating >= 4.5)
    return "bg-gradient-to-b from-green-900 to-black";
  if (rating >= 3.5)
    return "bg-black";
  if (rating >= 2.5)
    return "bg-gradient-to-b from-yellow-900 to-black";
  
  return "bg-gradient-to-b from-red-900 to-black";
};


  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`card text-white bg-gray-950 w-60 h-[300px] shadow-lg rounded-2xl overflow-hidden bg-gray-950(
         ratings
        )}`}
      >
        <figure>
          <img
            src={coverPhoto}
            alt={title}
            className="h-[160px] w-full object-cover"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-gray-600 text-xl">{title}</h2>
          <p className="font-semibold text-xls text-gray-200">
            {description.slice(0, 30)}...
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
                className="btn btn-outline bg-black border-black hover:bg-red-600 text-white font-bold px-4 py-2 rounded-xl"
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

