import "./App.css";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Proficiencies } from "./Components/Proficiencies";
import { Contact } from "./Components/Contact";
function App() {
  return (
    <div className="App">
      <Home />
      {/* <About /> */}
      <Proficiencies />
      <Contact />
    </div>
  );
}

export default App;
