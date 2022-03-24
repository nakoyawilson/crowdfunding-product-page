import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const App = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  const closeNav = () => {
    setNavIsOpen(false);
  };

  return (
    <>
      <Header toggleNav={toggleNav} navIsOpen={navIsOpen} closeNav={closeNav} />
      <MainContent />
    </>
  );
};

export default App;
