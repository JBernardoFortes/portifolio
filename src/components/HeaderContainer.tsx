import { motion } from "framer-motion";
import { slideFromLeft, containerStagger } from "../utils/animations";

export const HeaderContainer = () => {
  return (
    <motion.div
      variants={containerStagger}
      initial="hidden"
      animate="show"
      className="text-title text-light flex flex-col flex-nowrap justify-evenly w-full gap-3 mt-5 ml-10"
    >
      <motion.h1 variants={slideFromLeft} className="text-3xl">
        J. Bernardo A. Fortes
      </motion.h1>
      <motion.p
        variants={slideFromLeft}
        className="text-sm italic text-opacity-10"
      >
        Front-end developer
      </motion.p>
    </motion.div>
  );
};
