import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from 'framer-motion';
const PopularGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/populergames.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => b.ratings - a.ratings);
        setGames(sorted.slice(0,6));
      });
  }, []);

  return (
    <div className="p-2 max-w-6xl mx-auto text-gray-500 ">
      <h2 className="text-3xl font-extrabold mb-6">Popular Games</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {games.map((g) => (
          <div key={g.id} className="card bg-gray-950 rounded-xl shadow-lg">
            <img src={g.coverPhoto} className="h-40 w-full rounded-xl object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{g.title}</h3>
              <p className="text-sm">{g.category}</p>
              <p className="text-amber-400 font-bold">⭐{g.ratings}</p>
              <Link to={`/details/${g.id}`}>
                {/* <button className="btn btn-sm mt-2 bg-amber-400 border-none">
                  View Details */}
                {/* </button> */}

                <div className="card-actions justify-center mt-4">
                          
                            <motion.button
                              whileHover={{ scale: 1.1,  }}
                              whileTap={{ scale: 0.9 }}
                              transition={{ duration: 0.3 }}
                              className="btn btn-outline bg-black border-black hover:bg-red-600 text-white font-bold px-4 py-2 rounded-xl"
                            >
                              View Details 
                            </motion.button>
                         
                        </div>





              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PopularGames;
