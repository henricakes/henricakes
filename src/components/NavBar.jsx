import { navTab, herocakes } from "../constants";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 py-2 backdrop-blur-lg border-b border-white/10">
      <div className="px-7 mx-auto flex justify-between items-center text-sm">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 gap-2">
          <img
            className="h-10 w-10 mr-2"
            src={`${import.meta.env.BASE_URL}henricakes.svg`}
            alt="Logo"
          />
          <span className="text-xl tracking-tight font-semibold">
            <a href={herocakes}>Henricakes</a>
          </span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex space-x-12">
          {navTab.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon (placeholder for future) kaso di ko muna gagawin */}
        <button className="lg:hidden">
          {/* You can add an icon like <MenuIcon /> here later */}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
