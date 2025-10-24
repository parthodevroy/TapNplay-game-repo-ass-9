
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const banners = [
    {
      id: 1,
      title: "PlayerUnknown's Battlegrounds",
      img: "https://wallpapers.com/images/high/pubg-team-of-four-4k-bh8ywj0ino06xl5b.webp",
    },
    {
      id: 2,
      title: "Valorant",
      img: "https://wallpapers.com/images/featured-full/valorant-305kescxw5dpup7y.jpg",
    },
    {
      id: 3,
      title: "Apex Legends",
      img: "https://wallpapers.com/images/hd/god-of-war-boss-encounter-e2ueu824n3g19qkh.webp",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full overflow-hidden mt-6">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="relative object-cover">
            <img
              src={banner.img}
              alt={banner.title}
              className="w-full h-[400px] object-cover object-fill object-center rounded-2xl"
            />
            <h2 className="absolute bottom-10 left-10 text-3xl font-bold bg-black/60 px-4 py-2 text-white rounded">
              {banner.title}
            </h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
