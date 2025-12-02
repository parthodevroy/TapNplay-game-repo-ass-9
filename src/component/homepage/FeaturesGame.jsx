import React from "react";
import { motion } from "framer-motion";


// ---------- FEATURED GAMES SECTION ----------
export const FeaturesGame = () => {
const games = [
{
id: 1,
title: "Neon Drift",
img: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
desc: "Futuristic racing with neon-lit tracks.",
},
{
id: 2,
title: "Shadow Ops",
img: "https://images.pexels.com/photos/7915356/pexels-photo-7915356.jpeg",
desc: "Stealth action game with cinematic missions.",
},
{
id: 3,
title: "Galactic Run",
img: "https://cdn.pixabay.com/photo/2017/06/13/22/32/gas-2400340_1280.jpg",
desc: "Endless runner across alien planets.",
},
];
return (
<div className="max-w-6xl mx-auto py-6 px-4">
<h2 className="text-3xl text-gray-500 font-extrabold mb-8">Featured Games</h2>


<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{games.map((g) => (
<motion.div
key={g.id}
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
className="bg-[#F5F1EC] p-4 rounded-3xl shadow-lg hover:scale-[1.02] transition-transform"
>
<img
src={g.img}
className="rounded-2xl w-full h-52 object-cover"
/>
<h3 className="text-xl font-bold mt-3">{g.title}</h3>
<p className="text-gray-600 text-sm mt-1">{g.desc}</p>
</motion.div>
))}
</div>
</div>
);
};