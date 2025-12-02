import React from "react";

const LeaderBoard = () => {
  const players = [
    { id: 1, name: "ShadowHunter", score: 9800, rank: 1 },
    { id: 2, name: "PhoenixRider", score: 8700, rank: 2 },
    { id: 3, name: "CyberWolf", score: 8200, rank: 3 },
  ];

  return (
    <div className="max-w-5xl mx-auto py-20 text-gray-200">
      <h1 className="text-4xl font-bold text-center mb-10">🏆 Leaderboard</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full bg-black/40 text-gray-300">
          <thead>
            <tr className="text-amber-400 text-lg">
              <th>Rank</th>
              <th>Player Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {players.map((p) => (
              <tr key={p.id}>
                <td className="font-bold text-amber-300">{p.rank}</td>
                <td>{p.name}</td>
                <td>{p.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoard;
