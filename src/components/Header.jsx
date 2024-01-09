import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <Navbar setMenuOpen={setMenuOpen} />
    </div>
  );
};

const Navbar = ({ setMenuOpen }) => {
  return (
    <>
      <div>
        <a onClick={() => setMenuOpen(false)} href="#home">
          Home
        </a>
        <a onClick={() => setMenuOpen(false)} href="#skill">
          Skills
        </a>
        <a onClick={() => setMenuOpen(false)} href="#project">
          Projects
        </a>
        <a onClick={() => setMenuOpen(false)} href="#about">
          About Me
        </a>
        <a onClick={() => setMenuOpen(false)} href="#contact">
          Contact
        </a>
      </div>
      <a
        onClick={() => setMenuOpen(false)}
        href="mailto:abhinavmaurya476@gmail.com"
      >
        <button>Email</button>
      </a>
    </>
  );
};

export default Header;
