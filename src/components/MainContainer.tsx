import { NavContainer } from "./NavContainer";
import { HeaderContainer } from "./HeaderContainer";
import { FooterContainer } from "./FooterContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProjectsList } from "./ProjectsList";
import AboutMe from "./AboutMe";
import { Contact } from "./Contact";
export const MainContainer = () => {
  return (
    <div className="w-[95%] h-[93%] bg-primary m-auto thin-border relative overflow-hidden">
      <Router>
        <HeaderContainer></HeaderContainer>
        <NavContainer></NavContainer>

        <Routes>
          <Route path="/" element={<FooterContainer></FooterContainer>} />
          <Route path="/projects" element={<ProjectsList></ProjectsList>} />
          <Route path="/about" element={<AboutMe></AboutMe>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
      </Router>
    </div>
  );
};
