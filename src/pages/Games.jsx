import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Game from "./Game";
import Loading from "../authentication/Loading";
import Gamesbanner from "./detailspages/Gamebaner";
import useTitle from "../authentication/useTitle";


const Games = () => {
  useTitle("GameHub | Games"); // tab title

  const gamesdata = useLoaderData();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (gamesdata && gamesdata.length > 0) {
      setGames(gamesdata);
    }
    setLoading(false);
  }, [gamesdata]);

  if (loading) return <Loading />;

  return (
    <div>
      <Gamesbanner />
      <h2 className="text-red-500 text-center text-2xl font-semibold my-4">
        Our Games
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {games && games.length > 0 ? (
          games.map((game) => <Game key={game.id} games={game} />)
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

