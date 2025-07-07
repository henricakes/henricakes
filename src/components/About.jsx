const About = () => {
  return (
    <section
      id="about"
      className="relative bg-licorice text-white min-h-screen scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-charcoal to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center px-4 py-10 max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">ABOUT</h2>
        <h3 className="text-base md:text-xl font-poppins text-neutral-300">
          (a little story as well)
        </h3>
        <section className="space-y-4 text-sm md:text-base leading-relaxed text-neutral-200 m-4">
          <p className="text-justify">
            Hi! I'm John Henry Angas, a Computer Science graduate from{" "}
            <strong>EARIST – Cavite Campus</strong>. My interest in tech began
            when my father introduced me to computer games, which sparked my
            curiosity about what computers and technology can really do.
          </p>
          <p className="text-justify">
            I enjoy both the technical and creative sides of digital work—from
            building frontend design using React, TailwindCSS, to editing photos
            and videos using tools like Photoshop, Filmora, and Lightroom. I’m
            passionate about learning, experimenting, and creating things that
            reflect both skill and personality.
          </p>
          <p className="text-justify">
            I built this portfolio to showcase what I’ve learned so far and to
            grow from here. I may not always feel confident, but I always give
            my best—and I’m excited to see where this journey takes me.
          </p>
        </section>
        <section className="flex-col">
          <strong className="text-lg ">I GUESS THAT'S IT!</strong>
          <p>Feel free to know me more by exploring this portfolio.</p>
        </section>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-charcoal via-charcoal to-transparent z-10" />
    </section>
  );
};

export default About;
