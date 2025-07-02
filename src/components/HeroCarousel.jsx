import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

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
      className="w-full h-screen"
    >
      {[hero1, hero2, hero3].map((img, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-screen">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
