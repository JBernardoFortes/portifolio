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
    desc: "An interactive Eight Puzzle solver that demonstrates various search algorithms including Breadth-First Search (BFS), Depth-First Search (DFS), Greedy Search, and A* (A-Star). The application visualizes the step-by-step solving process, allowing users to understand and compare algorithm behaviors in real-time. Built using React and TypeScript, it emphasizes clarity, modularity, and algorithm visualization.",
  },
  {
    name: "Binary Tree",
    repUrl: "https://github.com/JBernardoFortes/BinaryTree",
    pageUrl: "https://jbernardofortes.github.io/BinaryTree/",
    desc: "A binary tree visualization tool built entirely with Vue.js. Users can dynamically insert nodes and visualize the resulting binary tree structure in real time. This project aims to help learners and developers better understand tree-based data structures through an intuitive graphical interface. The UI is clean and minimalistic, focused solely on the visualization of operations like insertion.",
  },
  {
    name: "Sample Text Generator",
    repUrl: "https://github.com/JBernardoFortes/sampleTextGenerator",
    pageUrl: "https://jbernardofortes.github.io/sampleTextGenerator/",
    desc: "A simple web application that fetches and displays sample text using the Hipster Ipsum API. This tool can be used by designers and developers to quickly generate placeholder text for layouts and content mockups. The interface is user-friendly, with options to customize the number of paragraphs. Built using React and TypeScript, it showcases basic API consumption and functional UI design.",
  },
  {
    name: "Tic Tac Toe",
    repUrl: "https://github.com/JBernardoFortes/TicTacToe",
    pageUrl: "https://jbernardofortes.github.io/TicTacToe/",
    desc: "A classic Tic Tac Toe game with a clean and responsive design. Players can enjoy a two-player match on the same screen, with real-time updates and win condition detection. The application is developed using React and TypeScript, highlighting the use of state management and basic game logic in a modern frontend framework.",
  },
  {
    name: "Stopwatch and Timer",
    repUrl: "https://github.com/JBernardoFortes/stopwatchAndTimer",
    pageUrl: "https://jbernardofortes.github.io/stopwatchAndTimer/",
    desc: "A dual-function application providing both stopwatch and timer capabilities. Users can start, stop, reset, and configure time durations through an intuitive interface. Built with React, React Router, and TypeScript, the project emphasizes component reusability, route-based navigation, and precise time-based operations.",
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
