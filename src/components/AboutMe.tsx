import { motion } from "framer-motion";
import { slideFromRight, containerStagger } from "../utils/animations";

const AboutMe = () => {
  return (
    <motion.div
      variants={containerStagger}
      initial="hidden"
      animate="show"
      exit="exit"
      className="text-white absolute right-20 top-[20%] w-[50%] h-[40%] flex flex-col justify-around align-center text-light"
    >
      <motion.h2
        variants={slideFromRight}
        className="p-3 text-title text-4xl border-b-[2px] border-gray-400 "
      >
        About me
      </motion.h2>
      <motion.p
        variants={slideFromRight}
        className=" p-3 text-default tracking-wide text-justify"
      >
        Hey, I’m Bernardo, born in Rio de Janeiro, Brazil. I’m passionate about
        technology, programming, and creative expression. Besides coding, I love
        reading and drawing — both help me develop creativity and attention to
        detail. I’m focused on building clean, efficient code and enjoy tackling
        projects that push me to grow. I value hard work, honesty, and constant
        self-improvement, always aiming to get better in everything I do.
      </motion.p>
    </motion.div>
  );
};

export default AboutMe;
