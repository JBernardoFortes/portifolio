import { motion } from "framer-motion";
import { slideFromTop, containerStagger } from "../utils/animations";

`use client`;

const nomesDeProjetos = [
  "LumenTrack",
  "NovaSync",
  "OrbitFlow",
  "PixelNest",
  "CodePulse",
  "ZenPanel",
  "EchoBoard",
  "ClarityDesk",
  "StreamlineX",
  "NebulaDash",
  "DataRipple",
  "QuantumVault",
  "TaskForge",
  "BrightCore",
  "FusionCanvas",
];

const chunkArray = (array: any[], chunkSize: number) => {
  let chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

export const ProjectsList = () => {
  const chunks = chunkArray(nomesDeProjetos, 3);

  return (
    <motion.div
      variants={containerStagger}
      initial="hidden"
      animate="show"
      exit="exit"
      className="text-white w-[40%] absolute right-0 h-[100vh] top-0 flex overflow-auto flex-col hide-scroll"
    >
      {/* {nomesDeProjetos.map((projeto, index) => (
        <motion.div
          variants={slideFromTop}
          className="text-4xl tracking-widest text-title self-end mr-30 mt-10 mb-10"
          key={index}
        >
          {" "}
          {projeto}
        </motion.div>
      ))} */}
      {chunks.map((chunk, ChunkIndex) => {
        return (
          <motion.div
            variants={slideFromTop}
            key={ChunkIndex}
            className="mt-10 mb-10 flex flex-col mr-30 gap-15"
          >
            {chunk.map((projectName, index) => {
              return (
                <motion.div
                  className="text-4xl tracking-widest text-title self-end"
                  key={index}
                >
                  {" "}
                  {projectName}
                </motion.div>
              );
            })}
          </motion.div>
        );
      })}
    </motion.div>
  );
};
