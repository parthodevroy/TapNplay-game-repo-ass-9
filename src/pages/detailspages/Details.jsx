import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams(); // dynamic id পাবে
  const [game, setGame] = useState(null);

  useEffect(() => {
    // games.json থেকে ডেটা লোড করবো
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        const singleGame = data.find((item) => item.id === id);
        setGame(singleGame);
      });
  }, [id]);

  if (!game) {
    return <p className="text-center text-white mt-10">Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center text-white p-8">
      <img
        src={game.coverPhoto}
        alt={game.title}
        className="w-[600px] h-[350px] object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{game.title}</h1>
      <p className="text-gray-300 mt-2 w-[70%] text-center">
        {game.description}
      </p>
      <p className="mt-3">🎮 Developer: {game.developer}</p>
      <p className="mt-1">⭐ Rating: {game.ratings}</p>
      <a
        href={game.downloadLink}
        target="_blank"
        rel="noreferrer"
        className="btn btn-neutral mt-5 hover:bg-gray-500"
      >
        Download Now
      </a>
    </div>
  );
};

export default Details;
