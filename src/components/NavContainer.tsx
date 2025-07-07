import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { slideFromLeft, containerStagger } from "../utils/animations";

export const NavContainer = () => {
  const location = useLocation();
  return (
    <nav className="text-default flex flex-col text-light ml-10 mt-20 w-[10vw]">
      <motion.ul
        variants={containerStagger}
        initial="hidden"
        animate="show"
        className="text-title flex flex-col gap-5"
      >
        <motion.li className="" variants={slideFromLeft}>
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
        </motion.li>
        <motion.li className="" variants={slideFromLeft}>
          <Link
            className={`w-[5vw] hover:text-white transition-colors duration-300 ${
              location.pathname === "/projects" ? "text-highlight-primary" : ""
            }`}
            to="/projects"
          >
            Projects
          </Link>
        </motion.li>
        <motion.li className="" variants={slideFromLeft}>
          <Link
            className={`w-[5vw] hover:text-white transition-colors duration-300 ${
              location.pathname === "/about" ? "text-highlight-primary" : ""
            }`}
            to="/about"
          >
            About me
          </Link>
        </motion.li>
        <motion.li className="" variants={slideFromLeft}>
          <Link
            className={`w-[5vw] hover:text-white transition-colors duration-300 ${
              location.pathname === "/contact" ? "text-highlight-primary" : ""
            }`}
            to="/contact"
          >
            How to contact me
          </Link>
        </motion.li>
      </motion.ul>
    </nav>
  );
};
