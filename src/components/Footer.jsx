import { herocakes } from "../constants";

const Footer = () => {
  return (
    <footer className="flex-row bg-smoke-500 text-white py-4 text-center rounded-l-lg rounded-r-lg">
      <div className="flex ml-5 items-center flex-shrink-0 gap-2">
        <img className="h-10 w-10 mr-2" src="/henricakes.svg" alt="Logo" />
        <span className="text-2xl font-bold tracking-tight">
          <a href={herocakes}>Henricakes</a>
        </span>
      </div>

      <p className="flex justify-center text-sm">
        &copy; {new Date().getFullYear()}&nbsp;
        <a href={herocakes}>Henricakes.</a> {/* Sonar Warning */}
        &nbsp; All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
