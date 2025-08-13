import { motion } from "framer-motion";
import { slideFromRight } from "../utils/animations";

export const FooterContainer = () => {
  return (
    <motion.div
      variants={slideFromRight}
      initial="hidden"
      animate="show"
      exit="exit"
      className="text-default bottom-20 right-15 absolute w-[20vw] h-[40vh] flex flex-col justify-center align-center overflow-hidden"
    >
      <div className="m-auto text-default text-md font-semibold text-gray-300 text-justify">
        I am a Computer Science student at{" "}
        <span className="font-bold text-amber-400">UFPI</span>, focused on
        front-end and mobile development. Passionate about technology, I work
        with <span className="font-bold text-amber-400">React</span> and am
        expanding my skills. I have experience handling data, creating
        interactive tables, and building modern interfaces, always aiming for
        efficient and practical technical solutions.
      </div>
    </motion.div>
  );
};
