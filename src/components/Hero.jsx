import hero1 from "../assets/HERO_1.png";

const Hero = () => {
  return (
    <div className="flex justify-center items-center border-4">
      <img className="max-h-screen" src={hero1} alt="Hero 1" />
    </div>
  );
};

export default Hero;
