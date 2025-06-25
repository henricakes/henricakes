import { TypeAnimation } from "react-type-animation";

const HeroTypingAnimation = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center z-10 pt-20">
      <TypeAnimation
        sequence={["JACK OF ALL TRADES", 10000]}
        wrapper="span"
        speed={200}
        className="text-xl inline-block font-semibold font-poppins"
        repeat={Infinity}
      />
    </div>
  );
};

export default HeroTypingAnimation;
