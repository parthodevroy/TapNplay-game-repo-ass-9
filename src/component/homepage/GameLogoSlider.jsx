import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const GameLogoSlider = () => {
  const brandlogos = [
    {
      img: "https://cdn.pixabay.com/photo/2024/01/25/06/56/ai-generated-8531099_1280.png",
      title: "Booking Pick & Drop",
      desc: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
      img: "https://cdn.pixabay.com/photo/2024/04/05/18/25/ai-generated-8677987_1280.jpg",
      title: "Cash On Delivery",
      desc: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
      img: "https://cdn.pixabay.com/photo/2024/02/02/04/20/ai-generated-8547230_1280.png",
      title: "Delivery Hub",
      desc: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
      img: "https://cdn.pixabay.com/photo/2024/10/12/07/11/ai-generated-9114555_1280.jpg",
      title: "Active Volunteers",
      desc: "From personal packages to business shipments — we deliver on time, every time."
    },
  ];

  return (
    <div className="py-10 max-w-6xl mx-auto">
      <Swiper
             slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
        pagination={{
          clickable: true,
        }}
       
        className="mySwiper"
            
            >
        {brandlogos.map((logo, index) => (
          <SwiperSlide
            key={index}
            className="!w-[380px]" 
          >
            <div className="bg-[#1a1a1a] rounded-2xl shadow-lg p-5 text-center hover:scale-105 duration-300">
              <img
                src={logo.img}
                className="h-20 w-full rounded-xl object-contain"
                alt={logo.title}
              />
              <h3 className="text-xl font-bold text-white mb-2">{logo.title}</h3>
              <p className="text-gray-400 text-sm">{logo.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GameLogoSlider;
