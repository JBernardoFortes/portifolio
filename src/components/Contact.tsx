import { MdArrowOutward } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { motion } from "framer-motion";
import { slideFromRight, containerStagger } from "../utils/animations";
export const Contact = () => {
  return (
    <motion.div
      variants={containerStagger}
      initial="hidden"
      animate="show"
      exit="exit"
      className="text-white absolute w-[50%] h-[40%] flex flex-col justify-around  align-center text-light right-30 top-[20%] font-semibold"
    >
      <motion.h2
        variants={slideFromRight}
        className="p-3 text-title text-4xl text-light border-b-[2px] border-gray-400 font-medium"
      >
        Contact me
      </motion.h2>
      <motion.ul
        variants={containerStagger}
        initial="hidden"
        animate="show"
        exit="exit"
        className="flex flex-row justify-between"
      >
        <motion.li
          variants={slideFromRight}
          className="flex flex-row gap-5 items-center"
        >
          <span> Mail: </span>
          <div className="flex flex-row gap-2 items-center m-auto ">
            <a href="/" className="flex flex-row gap-2">
              <MdArrowOutward className="w-full h-7" />
              <span>sampleEmail@email.com</span>
            </a>
          </div>
        </motion.li>
        <motion.li
          variants={slideFromRight}
          className="flex flex-row gap-10 relative"
        >
          <h3>Social Medias</h3>
          <motion.ul
            variants={slideFromRight}
            className="ml-4 flex flex-col gap-4 border-l-[2px] border-gray-400 pl-4"
          >
            <li className="flex flex-row gap-2 items-center">
              <a href="" className="flex flex-row gap-2">
                <FaInstagram className="w-6 h-6 text-gray-300" />
                <span>Instagram</span>
              </a>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <a href="" className="flex flex-row gap-2">
                <BsDiscord className="w-6 h-6 text-gray-300" />
                <span>Discord</span>
              </a>
            </li>
          </motion.ul>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};
