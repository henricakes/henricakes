import hero1 from "../assets/HERO_1.png";

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center px-4 py-10 h-[80vh] md:h-screen">
      {/* Hero Image */}
      <img
        className="max-h-screen w-auto object-contain z-0"
        src={hero1}
        alt="Hero 1"
      />

      {/* Centered Text */}
      <span className="absolute inset-0 flex justify-center items-center text-4xl md:text-6xl lg:text-8xl font-extrabold text-white z-10 drop-shadow-lg text-center">
        HENRICAKES
      </span>

      {/* Gradient Fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
};

export default Hero;
