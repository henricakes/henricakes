import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center px-4 py-10 h-[80vh] md:h-screen overflow-hidden">
      <HeroCarousel />

      <span className="absolute inset-0 flex justify-center items-center text-4xl md:text-6xl lg:text-8xl font-extrabold text-white z-10 drop-shadow-lg text-center">
        HENRICAKES
      </span>

      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
};

export default Hero;
