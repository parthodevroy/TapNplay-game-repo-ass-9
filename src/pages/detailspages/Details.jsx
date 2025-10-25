// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";

// const Details = () => {
//   const { id } = useParams(); // dynamic id পাবে
//   const [game, setGame] = useState(null);

//   useEffect(() => {
//     // games.json থেকে ডেটা লোড করবো
//     fetch("/games.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const singleGame = data.find((item) => item.id === id);
//         setGame(singleGame);
//       });
//   }, [id]);

//   // dynamic 
//   useEffect(() => {
//     if (game) {
//       document.title = `GameHub | ${game.title} Details`;
//     }
//   }, [game]);

//   // ✅ Loading state handle
//   if (!game) {
//     return <p className="text-center text-white mt-10">Loading...</p>;
//   }

//   // main funtion

//   return (
//     <div className="flex flex-col items-center text-white p-8">
//       <img
//         src={game.coverPhoto}
//         alt={game.title}
//         className="w-[600px] h-[350px] object-cover rounded-lg"
//       />
//       <h1 className="text-3xl font-bold mt-4">{game.title}</h1>
//       <p className="text-gray-300 mt-2 w-[70%] text-center">
//         {game.description}
//       </p>
//       <p className="mt-3">🎮 Developer: {game.developer}</p>
//       <p className="mt-1">⭐ Rating: {game.ratings}</p>
//       <a
//         href={game.downloadLink}
//         target="_blank"
//         rel="noreferrer"
//         className="btn btn-neutral mt-5 hover:bg-gray-500"
//       >
//         Download Now
//       </a>
//     </div>
//   );
// };

// export default Details;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import Loading from "../../authentication/Loading";


const Details = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Load data
  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        const singleGame = data.find((item) => String(item.id) === id);
        setGame(singleGame);
        setLoading(false);
      });
  }, [id]);

  // ✅ Title change
  useEffect(() => {
    if (game) {
      document.title = `GameHub | ${game.title} Details`;
    }
  }, [game]);

  // ✅ Show spinner while loading
  if (loading) {
    return <Loading/>;
  }

  if (!game) {
    return (
      <p className="text-center text-red-400 mt-10">
        Game not found ❌
      </p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-white p-8"
    >
      <motion.img
        src={game.coverPhoto}
        alt={game.title}
        className="w-[600px] h-[350px] object-cover rounded-lg shadow-lg"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.h1
        className="text-3xl font-bold mt-4 text-yellow-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {game.title}
      </motion.h1>

      <motion.p
        className="text-gray-300 mt-2 w-[70%] text-center leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {game.description}
      </motion.p>

      <motion.p className="mt-3 text-lg">🎮 Developer: {game.developer}</motion.p>
      <motion.p className="mt-1 text-lg">⭐ Rating: {game.ratings}</motion.p>

      <motion.a
        href={game.downloadLink}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1, backgroundColor: "#f59e0b" }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="btn btn-neutral mt-5 hover:bg-gray-500"
      >
        Download Now 🚀
      </motion.a>
    </motion.div>
  );
};

export default Details;
