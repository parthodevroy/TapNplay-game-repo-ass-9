import React from "react";
import { motion } from "framer-motion";

const newsData = [
  {
    id: 1,
    title: "Getting your start in the gaming industry",
    category: "Announcements",
    date: "December 16, 2023",
    image:
      "https://cdn.pixabay.com/photo/2020/01/12/00/12/star-4758999_1280.jpg",
  },
  {
    id: 2,
    title: "Vengeance is coming soon to the Epic Store",
    category: "Company",
    date: "December 16, 2023",
    image:
      "https://cdn.pixabay.com/photo/2023/10/14/20/58/ai-generated-8315752_1280.jpg",
  },
  {
    id: 3,
    title: "Junkworld is now available on Apple Arcade",
    category: "Events",
    date: "December 16, 2023",
    image:
      "https://cdn.pixabay.com/photo/2025/09/30/16/04/robot-9864760_1280.jpg",
  },
  {
    id: 4,
    title: "VR headset improvements coming soon",
    category: "Extras",
    date: "December 16, 2023",
    image:
      "https://cdn.pixabay.com/photo/2024/02/21/17/47/ai-generated-8588226_1280.jpg",
  },
];

const NewsSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-6 px-4 md:px-0">

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT BIG ARTICLE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="col-span-2 bg-[#F6F1EC] p-4 rounded-3xl shadow-lg"
        >
          <img
            src={newsData[0].image}
            alt="main"
            className="w-full h-[380px] object-cover rounded-3xl"
          />

          <p className="mt-3 text-gray-600 text-sm">
            {newsData[0].category} · {newsData[0].date}
          </p>

          <h2 className="text-3xl font-extrabold mt-2 tracking-wide">
            {newsData[0].title}
          </h2>
        </motion.div>

        {/* RIGHT SIDE ARTICLES */}
        <div className="flex flex-col gap-6">

          {newsData.slice(1).map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-4 bg-[#F6F1EC] p-3 rounded-2xl shadow"
            >
              <img
                src={item.image}
                alt="thumb"
                className="w-28 h-24 object-cover rounded-2xl"
              />

              <div>
                <p className="text-gray-600 text-sm">
                  {item.category} · {item.date}
                </p>
                <h3 className="font-bold text-lg leading-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default NewsSection;
