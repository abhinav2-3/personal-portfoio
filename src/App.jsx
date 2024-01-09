import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import "./styles/app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Skills />
      <Project />
      <Timeline />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
