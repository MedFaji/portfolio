import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
