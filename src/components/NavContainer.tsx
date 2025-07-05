import { Link, useLocation } from "react-router-dom";

export const NavContainer = () => {
  const location = useLocation();
  return (
    <nav className="text-default flex flex-col text-light ml-10 mt-20 w-[10vw]">
      <ul className="text-title flex flex-col gap-5">
        <li className="">
          <Link
            className={`w-[5vw] hover:text-white transition-colors duration-300 ${
              location.pathname === "/" || location.pathname === ""
                ? "text-highlight-primary"
                : ""
            }`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="">
          <Link
            className={`w-[5vw] hover:text-white transition-colors duration-300 ${
              location.pathname === "/projects" ? "text-highlight-primary" : ""
            }`}
            to="/projects"
          >
            Projects
          </Link>
        </li>
        <li className="">
          <Link
            className={`w-[5vw] hover:text-white transition-colors duration-300 ${
              location.pathname === "/about" ? "text-highlight-primary" : ""
            }`}
            to="/about"
          >
            About me
          </Link>
        </li>
        <li className="">
          <Link
            className={`w-[5vw] hover:text-white transition-colors duration-300 ${
              location.pathname === "/contact" ? "text-highlight-primary" : ""
            }`}
            to="/contact"
          >
            How to contact me
          </Link>
        </li>
      </ul>
    </nav>
  );
};
