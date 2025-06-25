import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import TechSkills from "./components/TechSkills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <TechSkills />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
};

export default App;
