// src/components/HeroCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade"; // ✅ Required for fade effect

import hero1 from "../assets/HERO_1.png";
import hero2 from "../assets/HERO_2.png";
import hero3 from "../assets/HERO_3.png";
const HeroCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      className="h-screen w-full"
    >
      <SwiperSlide>
        <img
          src={hero1}
          alt="Slide 1"
          className="w-full h-full object-contain"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={hero2}
          alt="Slide 2"
          className="w-full h-full object-contain"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={hero3}
          alt="Slide 3"
          className="w-full h-full object-contain"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;
