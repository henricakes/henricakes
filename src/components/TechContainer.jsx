import PropTypes from "prop-types";

const TechContainer = ({ icon, label }) => {
  return (
    <div className="group w-28 sm:w-32 md:w-36 aspect-square flex flex-col items-center justify-center bg-gray-700 rounded-lg p-5 transition duration-300 hover:scale-105">
      <div className="flex items-center justify-center mb-4 h-12 w-12">
        <img
          src={icon}
          alt={label}
          className="h-full w-full object-contain transition duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)]"
        />
      </div>
      <h2 className="text-xs sm:text-sm font-medium text-center text-white group-hover:text-white transition duration-300">
        {label}
      </h2>
    </div>
  );
};

TechContainer.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TechContainer;
