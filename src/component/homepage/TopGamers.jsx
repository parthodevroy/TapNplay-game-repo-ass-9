import { motion } from "framer-motion";
export const TopGamers = () => {
const creators = [
{
id: 1,
name: "LunaByte Studios",
img: "https://assets1.ignimgs.com/2016/12/16/top100gamecreators-desktop-1481846953689.jpg",
},
{
id: 2,
name: "VectorForge",
img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/06/Game-Designers-Everyone-knows.jpg",
},
{
id: 3,
name: "DreamArc Games",
img: "https://news.northeastern.edu/wp-content/uploads/2022/08/ChrisMartens1400.jpg",
},
];


return (
<div className="max-w-6xl mx-auto py-4 px-4">
<h2 className="text-3xl text-gray-500 font-extrabold mb-10">Top Game Creators</h2>


<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
{creators.map((c) => (
<motion.div
key={c.id}
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
className="bg-[#F5F1EC] rounded-3xl shadow-lg p-4 text-center hover:scale-[1.03] transition-transform"
>
<img
src={c.img}
className="rounded-2xl w-full h-52 object-cover"
/>
<h3 className="text-xl font-semibold mt-3">{c.name}</h3>
</motion.div>
))}
</div>
</div>
);
};