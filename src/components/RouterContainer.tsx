import { BrowserRouter as Router } from "react-router-dom";
import { MainContainer } from "./MainContainer.tsx";
export const RouterContainer = () => {
  return (
    <div className="w-[95%] h-[93%] bg-primary m-auto thin-border relative overflow-hidden">
      <Router>
        <MainContainer></MainContainer>
      </Router>
    </div>
  );
};
