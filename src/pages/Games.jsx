
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Game from "./Game";
import Loading from "../authentication/Loading";
import Gamesbanner from "./detailspages/Gamebaner";
import useTitle from "../authentication/useTitle";

const Games = () => {
  useTitle("GameHub | Games"); // 🧠 Dynamic Tab Title

  const gamesdata = useLoaderData();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortType, setSortType] = useState("high"); // default sort

  useEffect(() => {
    if (gamesdata && gamesdata.length > 0) {
      setGames(gamesdata);
    }
    setLoading(false);
  }, [gamesdata]);

  // 🧮 Sorting logic
  const sortedGames = [...games].sort((a, b) => {
    if (sortType === "high") return b.ratings - a.ratings;
    if (sortType === "low") return a.ratings - b.ratings;
    if (sortType === "az") return a.title.localeCompare(b.title);
    if (sortType === "za") return b.title.localeCompare(a.title);
    return 0;
  });

  if (loading) return <Loading />;

  return (
    <div>
      <Gamesbanner />

      <h2 className="text-amber-400 text-center text-3xl font-semibold mt-6 mb-4">
        🎮 Explore And Download Our Games
      </h2>

      {/*Sorting Dropdown */}
      <div className="flex justify-center mb-6">
        <select
          onChange={(e) => setSortType(e.target.value)}
          value={sortType}
          className="select select-bordered bg-stone-800 text-white px-4 py-2 rounded-md"
        >
          <option value="high">* Highest Rated</option>
          <option value="low">⬇ Lowest Rated</option>
          <option value="az">A → Z (Title)</option>
          <option value="za">Z → A (Title)</option>
        </select>
      </div>

      {/*Games  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 justify-items-center">
        {sortedGames && sortedGames.length > 0 ? (
          sortedGames.map((game) => <Game key={game.id} games={game} />)
        ) : (
          <p className="text-center text-gray-300 col-span-full mt-10">
            No games found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Games;

