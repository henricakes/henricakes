import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      {/* Separator Line
      <div className="flex items-center justify-center my-12">
        <div className="w-1/3 h-px bg-gray-700" />
        <span className="mx-4 text-gray-500">●</span>
        <div className="w-1/3 h-px bg-gray-700" />
      </div> */}
    </>
  );
};

export default App;
