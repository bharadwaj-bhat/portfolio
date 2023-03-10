import "./App.css";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Proficiencies } from "./Components/Proficiencies";
import { Contact } from "./Components/Contact";
import { Projects } from "./Components/Projects";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    document.title = "Bharadwaj Bhat";
  }, []);
  return (
    <div className="App">
      <Home />
      <About />
      <Proficiencies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
