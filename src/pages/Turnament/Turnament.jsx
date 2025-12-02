import React from "react";

const Turnament= () => {
  const events = [
    { name: "PUBG Championship", date: "12 Jan 2025", prize: "$2000" },
    { name: "Valorant Clash", date: "25 Feb 2025", prize: "$1500" },
    { name: "Apex Legends Arena", date: "10 Mar 2025", prize: "$2500" },
  ];

  return (
    <div className="max-w-5xl mx-auto py-16 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">🎮 Tournaments</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((e, i) => (
          <div key={i} className="bg-black/40 p-6 rounded-xl shadow-md border border-amber-400">
            <h2 className="text-xl font-bold text-amber-400">{e.name}</h2>
            <p className="text-gray-300">📅 {e.date}</p>
            <p className="text-gray-300">🏆 Prize: {e.prize}</p>
            <button className="mt-3 btn bg-amber-400 text-black w-full">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Turnament;
