import HeroCarousel from "./HeroCarousel";
import HeroTypingAnimation from "./HeroTypingAnimation";

const Hero = () => {
  return (
    <div
      id="herocakes"
      className="relative flex flex-col justify-center items-center px-4 py-2 h-[100vh] md:h-screen overflow-hidden"
    >
      <HeroCarousel />

      <span className="absolute inset-0 flex justify-center items-center text-4xl font-extrabold text-white z-10 drop-shadow-lg text-center">
        HENRICAKES
      </span>

      <HeroTypingAnimation />

      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-charcoal via-charcoal to-transparent z-10" />
    </div>
  );
};

export default Hero;
