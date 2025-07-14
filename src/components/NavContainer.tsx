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
            {" "}
            {(location.pathname === "/" || location.pathname === "") && (
              <motion.span
                variants={slideFromLeft}
                initial="hidden"
                animate="show"
                exit="exit"
                className="absolute left-5 items-center"
              >
                {" "}
                ◆{" "}
              </motion.span>
            )}
            <span>Home</span>
          </Link>
        </motion.li>
        <motion.li className="" variants={slideFromLeft}>
          <Link
            className={`w-[5vw] hover:text-white transition-colors duration-300 ${
              location.pathname.startsWith("/projects")
                ? "text-highlight-primary"
                : ""
            }`}
            to="/projects"
          >
            {location.pathname.startsWith("/projects") && (
              <motion.span
                className="absolute left-5 items-center"
                variants={slideFromLeft}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                {" "}
                ◆{" "}
              </motion.span>
            )}

            <span>Projects</span>
          </Link>
        </motion.li>
        <motion.li className="" variants={slideFromLeft}>
          <Link
            className={`w-[5vw] hover:text-white transition-colors duration-300 ${
              location.pathname === "/about" ? "text-highlight-primary" : ""
            }`}
            to="/about"
          >
            {location.pathname === "/about" && (
              <motion.span
                className="absolute left-5 items-center"
                variants={slideFromLeft}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                {" "}
                ◆{" "}
              </motion.span>
            )}
            <span>About me</span>
          </Link>
        </motion.li>
        <motion.li className="" variants={slideFromLeft}>
          <Link
            className={`w-[5vw] hover:text-white transition-colors duration-300 ${
              location.pathname === "/contact" ? "text-highlight-primary" : ""
            }`}
            to="/contact"
          >
            {location.pathname === "/contact" && (
              <motion.span
                className="absolute left-5 items-center"
                variants={slideFromLeft}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                {" "}
                ◆{" "}
              </motion.span>
            )}
            <span>How to contact me</span>
          </Link>
        </motion.li>
      </motion.ul>
    </nav>
  );
};
