import Navbar from "./components/Navbar/Navbar";
import Main from "./components/main/Main";
import Project from "./components/projects/Project";
import Tools from "./components/tools/Tools";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div className="mainroot">
      <Navbar />
      <Main />
      <Project />
      <Tools />
      <Contact />
    </div>
  );
};

export default App;
