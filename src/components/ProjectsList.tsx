import { motion } from "framer-motion";
import { slideFromTop, containerStagger } from "../utils/animations";
import { Link } from "react-router-dom";

`use client`;

// class Project {
//   name: string;
//   repUrl: string;
//   pageUrl: string;
//   desc: string;
//   constructor(name: string, repUrl: string, pageUrl: string, desc: string) {
//     this.name = name;
//     this.repUrl = repUrl;
//     this.pageUrl = pageUrl;
//     this.desc = desc;
//   }
// }
type project = {
  name: string;
  repUrl: string;
  pageUrl: string;
  desc: string;
};

const projects = [
  {
    name: "Eight Puzzle Solver",
    repUrl: "https://github.com/JBernardoFortes/EightPuzzleSolver",
    pageUrl: "https://jbernardofortes.github.io/EightPuzzleSolver/",
    desc: "Eight puzzle solver using different kinds of algorithms ( BFS, DFS, Greedy, A* ) ",
  },
  {
    name: "Binary Tree",
    repUrl: "https://github.com/JBernardoFortes/BinaryTree",
    pageUrl: "https://jbernardofortes.github.io/BinaryTree/",
    desc: "Binary Tree visualization application built using vueJS",
  },
  {
    name: "Sample Text Generator",
    repUrl: "https://github.com/JBernardoFortes/sampleTextGenerator",
    pageUrl: "https://jbernardofortes.github.io/sampleTextGenerator/",
    desc: "Simple useful sample text generator using Hipster Ipsum API",
  },
  {
    name: "Tic Tac Toe",
    repUrl: "https://github.com/JBernardoFortes/TicTacToe",
    pageUrl: "https://jbernardofortes.github.io/TicTacToe/",
    desc: "Simple Tic Tac Toe game",
  },
  {
    name: "Stopwatch and Timer",
    repUrl: "https://github.com/JBernardoFortes/stopwatchAndTimer",
    pageUrl: "https://jbernardofortes.github.io/stopwatchAndTimer/",
    desc: "Stopwatch and timer application using built using React Router",
  },
];

export function getProject(id: string | undefined): project {
  let projectName;
  for (let i = 0; i < projects.length; i++) {
    projectName = projects[i].name.toLowerCase().replace(/\s/g, "-");
    if (projectName === id) {
      return projects[i];
    }
  }
  return { name: "Project not exist", repUrl: "", pageUrl: "", desc: "" };
}

const chunkArray = (array: project[], chunkSize: number) => {
  let chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

export const ProjectsList = () => {
  const chunkSize = 1;
  const chunks = chunkArray(projects, chunkSize);
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
      {chunks.map((chunk, chunkIndex) => {
        return (
          <motion.div
            variants={slideFromTop}
            key={chunkIndex}
            className="mt-10 mb-10 flex flex-col mr-30 gap-15"
          >
            {chunk.map((project, projectIndex) => {
              return (
                <motion.div
                  className="text-2xl tracking-widest text-title self-end"
                  key={projectIndex}
                >
                  {" "}
                  <Link
                    to={`/projects/${project.name
                      .toLowerCase()
                      .replace(/\s/g, `-`)}`}
                    className=" hover:text-amber-300 transition-colors duration-200 cursor-pointer"
                  >
                    {project.name}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        );
      })}
    </motion.div>
  );
};
