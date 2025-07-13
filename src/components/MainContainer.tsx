import { NavContainer } from "./NavContainer";
import { HeaderContainer } from "./HeaderContainer";
import { FooterContainer } from "./FooterContainer";
import { Routes, Route, useLocation } from "react-router-dom";
import { ProjectsList } from "./ProjectsList";
import AboutMe from "./AboutMe";
import { Contact } from "./Contact";
import { AnimatePresence } from "framer-motion";
import { Project } from "./Project";

export const MainContainer = () => {
  const location = useLocation();

  return (
    <div>
      <HeaderContainer></HeaderContainer>
      <NavContainer></NavContainer>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<FooterContainer></FooterContainer>} />
          <Route path="/projects" element={<ProjectsList></ProjectsList>} />
          <Route path="/about" element={<AboutMe></AboutMe>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/projects/:id" element={<Project></Project>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
