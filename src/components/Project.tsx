import { useParams, useNavigate } from "react-router-dom";
import { getProject } from "./ProjectsList";
import { motion } from "framer-motion";
import { containerStagger, slideFromRight } from "../utils/animations";
import { ArrowLeft } from "lucide-react";
export const Project = () => {
  const params = useParams();
  const currentProject = getProject(params.id);
  const navigate = useNavigate();

  return (
    <motion.div
      variants={containerStagger}
      initial="hidden"
      animate="show"
      exit="exit"
      className="absolute flex flex-col gap-20 justify-around right-15 top-15 w-[50%]"
    >
      <motion.div
        variants={slideFromRight}
        className="flex flex-row items-center gap-4 border-b border-gray-300 pb-3 text-gray-300"
      >
        <ArrowLeft
          className="w-10 h-10 cursor-pointer hover:text-amber-300 transition-colors duration-300"
          onClick={() => navigate("/projects")}
        ></ArrowLeft>
        <h1 className="text-title  text-3xl capitalize">
          {params.id?.replace(/-/g, " ")}
        </h1>
      </motion.div>
      <motion.div
        variants={slideFromRight}
        className="text-gray-300 flex flex-col gap-20"
      >
        <motion.ul variants={slideFromRight} className="flex flex-col gap-5">
          <li className="flex flex-row w-full justify-between items-center">
            <span className="text-default">Repository URL : </span>
            <a
              href={`${currentProject.repUrl}`}
              className="text-title text-sm text-amber-400 hover:text-white transition-colors duration-200"
              target="_blank"
            >
              {currentProject.repUrl}
            </a>
          </li>
          <li className="flex flex-row w-full justify-between items-center">
            <span className="text-default">Page URL : </span>
            <a
              href={`${currentProject.pageUrl}`}
              className="text-title text-sm text-amber-400 hover:text-white transition-colors duration-200"
              target="_blank"
            >
              {currentProject.pageUrl}
            </a>
          </li>
        </motion.ul>
        <motion.div
          variants={slideFromRight}
          className="max-w-[600px] text-justify tracking-widest leading-relaxed"
        >
          {/* <p>{currentProject.desc}</p> */}
          <ul className="flex flex-col gap-4 list-disc">
            {currentProject.desc.split(". ").map((paragraph, index) => {
              return (
                <>
                  <li key={index}>{paragraph}</li>
                </>
              );
            })}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
