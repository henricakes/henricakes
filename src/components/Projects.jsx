const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-licorice text-white min-h-screen scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-charcoal to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center space-y-6">
        <h2 className="text-3xl font-bold text-center justify-center">
          PROJECTS
        </h2>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-charcoal via-charcoal to-transparent z-10" />
    </section>
  );
};

export default Projects;
