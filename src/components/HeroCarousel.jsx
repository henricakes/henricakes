// src/components/HeroCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import hero1 from "../assets/HERO_1.png";
import hero2 from "../assets/HERO_2.png";
const HeroCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 4000 }}
      loop={true}
      className="mt-10 h-full w-full"
    >
      <SwiperSlide>
        <div className="w-full h-full flex items-center justify-center">
          <img
            loading="lazy"
            src={hero1}
            alt="Slide 1"
            className="w-full h-screen object-contain max-h-screen"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full flex items-center justify-center">
          <img
            loading="lazy"
            src={hero2}
            alt="Slide 2"
            className="w-full h-screen object-contain max-h-screen"
          />
        </div>
      </SwiperSlide>
      {/* Add more <SwiperSlide> blocks as needed */}
    </Swiper>
  );
};

export default HeroCarousel;
