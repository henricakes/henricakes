import { projects } from "../constants"; // Ensure your constants file exports `projects`
import ProjectContainer from "../components/ProjectContainer";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-licorice text-white min-h-screen scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-charcoal to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center space-y-6">
        <h2 className="text-3xl font-bold text-center">PROJECTS</h2>

        <section className="w-full flex justify-center px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectContainer
                key={index}
                title={project.title}
                imageUrl={project.imageUrl}
                description={project.description}
                githubUrl={project.githubUrl}
                className="text-black"
              />
            ))}
          </div>
        </section>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-charcoal via-charcoal to-transparent z-10" />
    </section>
  );
};

export default Projects;
