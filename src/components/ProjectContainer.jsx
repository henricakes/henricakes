import React, { useState } from "react";

const ProjectContainer = React.memo(
  ({
    title = "Project Title",
    description = "A brief description of the project.",
    imageUrl = "/default.jpg", // default image if none provided
  }) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
      <button
        onClick={() => setShowInfo(!showInfo)}
        className="relative w-56 h-36 sm:w-64 sm:h-40 md:w-72 md:h-48 rounded-xl overflow-hidden border border-white/10 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 will-change-transform"
      >
        {/* Background Image */}
        <div
          className={`absolute inset-0 bg-contain bg-center bg-no-repeat transition duration-300 ${
            showInfo ? "blur-lg scale-105" : ""
          }`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        {/* Overlay info */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-white px-3 sm:px-4 text-center transition-opacity duration-300 ${
            showInfo ? "opacity-100 bg-black/50" : "opacity-0"
          } z-10`}
        >
          <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm">{description}</p>
        </div>

        {/* Title (only when not clicked) */}
        {!showInfo && (
          <div className="absolute inset-0 flex items-center justify-center text-white text-xs sm:text-sm z-10">
            {title}
          </div>
        )}
      </button>
    );
  }
);

export default ProjectContainer;
