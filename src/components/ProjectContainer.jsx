import PropTypes from "prop-types";

const ProjectContainer = ({ image, name, description }) => {
  return (
    <div className="group max-w-40 aspect-square flex flex-col justify-center items-center bg-gray-600 rounded-lg p-7 transition duration-500 hover:bg-blue-500 hover:ring-4 hover:ring-blue-400 hover:ring-offset-4 hover:shadow-lg">
      <div className="flex justify-center items-center mb-6 h-12 w-12">
        <img src={image} alt={label} className="h-full w-full object-contain" />
      </div>
      <div className="flex justify-center items-center">
        <h2 className="text-xs font-semibold text-center group-hover:text-white transition duration-500">
          {name}
        </h2>
        <h3 className="text-xs font-semibold text-center group-hover:text-white transition duration-500">
          {description}
        </h3>
      </div>
    </div>
  );
};

TechContainer.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectContainer;
