import TechContainer from "./TechContainer";

/* Image Imports (for TechContainer) */
import HTML from "../assets/HTML.svg";
import CSS from "../assets/CSS.svg";
import JAVASCRIPT from "../assets/JAVASCRIPT.svg";
import REACT from "../assets/react.svg";
import VITE from "../assets/VITE.svg";
import TAILWIND from "../assets/TAILWIND.svg";
import EXPO from "../assets/EXPO.svg";
import GIT from "../assets/GIT.svg";
import GITHUB from "../assets/GITHUB.svg";
import FIGMA from "../assets/FIGMA.svg";

import PHOTOSHOP from "../assets/PHOTOSHOP.svg";
import CS6 from "../assets/PHOTOSHOP_CS6.svg";
import LIGHTROOM from "../assets/LIGHTROOM.svg";
import SNAPSEED from "../assets/SNAPSEED.svg";
import FILMORA from "../assets/FILMORA.svg";

const TechSkills = () => {
  return (
    <>
      {/* --- TECH STACK SECTION --- */}
      <section
        id="tech-skills"
        className="relative bg-licorice text-white min-h-screen scroll-mt-20 pt-20"
      >
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-charcoal to-transparent z-10" />

        <div className="relative z-20 flex flex-col justify-center items-center space-y-6 px-4">
          <h2 className="text-3xl font-bold text-center">TECH SKILLS</h2>
          <h2 className="text-xl font-poppins font-semibold text-center">
            Here's my technical stack.
          </h2>

          <section className="w-full flex justify-center px-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <TechContainer label={"HTML"} icon={HTML} />
              <TechContainer label={"CSS"} icon={CSS} />
              <TechContainer label={"Javascript"} icon={JAVASCRIPT} />
              <TechContainer label={"React"} icon={REACT} />
              <TechContainer label={"Vite"} icon={VITE} />
              <TechContainer label={"TailwindCSS"} icon={TAILWIND} />
              <TechContainer label={"Expo"} icon={EXPO} />
              <TechContainer label={"Git"} icon={GIT} />
              <TechContainer label={"Github"} icon={GITHUB} />
              <TechContainer label={"Figma"} icon={FIGMA} />
            </div>
          </section>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-charcoal via-charcoal to-transparent z-10" />
      </section>

      {/* --- CREATIVE STACK SECTION --- */}
      <section
        id="creative-skills"
        className="relative bg-licorice text-white min-h-screen scroll-mt-20 pt-20 pb-10"
      >
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-charcoal to-transparent z-10 " />

        <div className="relative z-20 flex flex-col justify-center items-center space-y-6 px-4">
          <h3 className="text-3xl font-bold text-center">CREATIVE STACK</h3>
          <h3 className="text-xl font-poppins font-semibold text-center">
            Here's my creative stack.
          </h3>

          <section className="w-full flex justify-center px-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Replace with creative tools later */}
              <TechContainer label={"Photoshop"} icon={PHOTOSHOP} />
              <TechContainer label={"CS6"} icon={CS6} />
              <TechContainer label={"Lightroom"} icon={LIGHTROOM} />
              <TechContainer label={"Snapseed"} icon={SNAPSEED} />
              <TechContainer label={"Filmora X"} icon={FILMORA} />
            </div>
          </section>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-charcoal via-charcoal to-transparent z-10 " />
      </section>
      {/* Latest Work: TInatamad for today (June 27, 2025) Bawi ako bukas. */}
      {/* Latest Work: TInatamad for today (June 28, 2025) Bawi ako bukas. */}
      {/* Latest Work: TInatamad for today (June 29, 2025) Bawi ako bukas. */}

      {/* Latest Work: WALA PA PERO MAY GAGAWIN AKO. (June 30, 2025)*/}
    </>
  );
};

export default TechSkills;
