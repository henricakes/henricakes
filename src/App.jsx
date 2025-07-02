import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import TechSkills from "./components/TechSkills";
import Projects from "./components/Projects";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <TechSkills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
