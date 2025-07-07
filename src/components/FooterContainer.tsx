import { motion } from "framer-motion";
import { slideFromRight } from "../utils/animations";

export const FooterContainer = () => {
  return (
    <motion.div
      variants={slideFromRight}
      initial="hidden"
      animate="show"
      exit="exit"
      className="text-default bottom-20 right-15 absolute w-[10vw] h-[40vh] flex flex-col justify-center align-center overflow-hidden"
    >
      <div className="m-auto text-description text-xl font-semibold text-white text-justify">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem recusandae
        eos incidunt placeat aliquam numquam quidem, unde assumenda dicta
        dolorum, fugit in dolores repellat quo vel qui nesciunt laboriosam ad.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odio
        alias ipsa blanditiis, labore dolor necessitatibus voluptas
        reprehenderit aperiam nostrum sunt assumenda laborum facilis
        consequuntur ipsam quae corporis mollitia quis.
      </div>
    </motion.div>
  );
};
