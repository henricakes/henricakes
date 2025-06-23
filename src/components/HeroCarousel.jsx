// src/components/HeroCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import hero1 from "../assets/HERO_1.png";
// Add more images if needed

const HeroCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 4000 }}
      loop={true}
      pagination={{ clickable: true }}
      className="h-full w-full"
    >
      <SwiperSlide>
        <img
          src={hero1}
          alt="Slide 1"
          className="w-full h-full object-contain max-h-screen"
        />
      </SwiperSlide>
      {/* Add more <SwiperSlide> blocks as needed */}
    </Swiper>
  );
};

export default HeroCarousel;
