import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import Game from "./Game";

import Loading from "../authentication/Loading";
import Gamesbanner from "./detailspages/Gamebaner";


const Games = () => {
  const gamesdata = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (gamesdata && gamesdata.length > 0) {
      setGames(gamesdata);
      setLoading(false);
    }
  }, [gamesdata]);

  // ✅ যদি লোডিং হয়
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
        <div>
            <Gamesbanner/>
        </div>
     
      <h2 className="text-red-500 text-center text-2xl font-semibold my-4">
        Our Games
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {games.map((game) => (
          <Game key={game.id} games={game} />
        ))}
      </div>
    </div>
  );
};

export default Games;
