import { motion } from "framer-motion";
export const NewsLatterSection = () => {
return (
<motion.div
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
transition={{ duration: 0.7 }}
viewport={{ once: true }}
className="bg-black text-white py-20 px-4 mt-20 rounded-t-3xl"
>
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl font-bold mb-4">Join Our Gamer Newsletter</h2>
<p className="text-gray-300 mb-6">
Get updates on new releases, events, creator highlights and exclusive
content.
</p>


<div className="flex flex-col sm:flex-row gap-4 justify-center">
<input
type="email"
placeholder="Enter your email"
className="w-full sm:w-96 px-4 py-3 rounded-xl text-black"
/>
<button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold">
Subscribe
</button>
</div>
</div>
</motion.div>
);
};