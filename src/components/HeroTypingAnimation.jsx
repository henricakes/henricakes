import { TypeAnimation } from "react-type-animation";

const HeroTypingAnimation = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center z-10 pt-40">
      <TypeAnimation
        sequence={["JACK OF ALL TRADES", 10000]}
        wrapper="span"
        speed={500}
        style={{
          fontSize: "3em",
          display: "inline-block",
          fontFamily: "Poppins",
        }}
        repeat={Infinity}
      />
    </div>
  );
};

export default HeroTypingAnimation;
