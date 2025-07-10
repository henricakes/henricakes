import { herocakes } from "../constants";
import GITHUB_SOLID from "../assets/GITHUB_SOLID.svg";
import LINKEDIN from "../assets/LINKEDIN.svg";

const Footer = () => {
  return (
    <footer className="bg-smoke-500 text-white py-4 px-6 rounded-full border-t border-t-slate-500">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        {/* LEFT: Logo and Name */}
        <div className="flex items-center gap-2">
          <img
            className="h-10 w-10 mr-2"
            src={`${import.meta.env.BASE_URL}henricakes.svg`}
            alt="Logo"
          />
          <span className="text-2xl font-bold tracking-tight">
            <a href={herocakes}>Henricakes</a>
          </span>
          <div></div>
        </div>
        <div>
          <p className="font-bold md:hidden">Connect with me</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/henricakes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LINKEDIN} alt="GitHub" className="w-10 h-10" />
          </a>
          <a
            href="https://github.com/henricakes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GITHUB_SOLID} alt="GitHub" className="w-7 h-7" />
          </a>
        </div>
      </div>

      {/* BOTTOM: Copyright */}
      <p className="mt-2 text-sm text-center">
        &copy; {new Date().getFullYear()}&nbsp;
        <a href={herocakes}>Henricakes.</a>&nbsp; All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
