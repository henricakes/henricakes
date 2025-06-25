const About = () => {
  return (
    <section
      id="about"
      className="relative bg-licorice text-white min-h-screen scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-charcoal to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center justify-center">ABOUT</h2>
        <h3 className="text-xl font-poppins text-center justify-center">
          {"(a little story as well)"}
        </h3>
        <section>
          <p>
            Hi there! Name's John, a graduate of EARIST - Cavite Campus, and I
            took a Bachelor of Science in Computer Science. Feel free to know me
            by viewing this portfolio that I've created.
          </p>
          <p>
            Feel free to know me by viewing this portfolio that I've created.
          </p>
        </section>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-charcoal via-charcoal to-transparent z-10" />
    </section>
  );
};

export default About;
