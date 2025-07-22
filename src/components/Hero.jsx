import HeroCarousel from "./HeroCarousel";
import HeroTypingAnimation from "./HeroTypingAnimation";

const Hero = () => {
  return (
    <section
      id="herocakes"
      className="relative flex flex-col justify-center items-center px-4 py-2 h-[100vh] md:h-screen overflow-hidden"
    >
      <HeroCarousel />

      <h1>
        <span className="absolute inset-0 flex justify-center items-center text-4xl font-extrabold text-white z-10 drop-shadow-lg text-center md:text-6xl">
          HENRICAKES
        </span>
      </h1>

      <HeroTypingAnimation />

      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-charcoal via-charcoal to-transparent z-10" />
    </section>
  );
};

export default Hero;
