import React, { useCallback, useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import ReactSwitch from "react-switch";

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

import { Container, Navbar, Nav } from "react-bootstrap";

import "./App.css";
import Home from "./components/Home";
import About from "./components/About";

import "./styles/App.css";
import "./styles/App-light.css";
import "./styles/App-dark.css";

function App() {
  //  Particle effects
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  //  Toggle dark and light theme

  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  //  Hide navbar on scroll

  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollpos > currentScrollPos;

      setPrevScrollpos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollpos]);

  return (
    <div className={`App ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <div className="p-wrapper">
        <Particles
          options={particlesOptions}
          init={particlesInit}
          //   fullscreen={false}
        />
        <Container fluid className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </div>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="light"
          id="navbar"
          className={visible ? "navbar-visible" : "navbar-hidden"}
        >
          <Container fluid>
            <Navbar.Brand href="#home">Ethan Letourneau</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-between"
            >
              <Nav>
                <Nav.Link href="#features">
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link href="#features">
                  <span>Projects</span>{" "}
                </Nav.Link>
                <Nav.Link href="#pricing">
                  <Link to="/about">About</Link>
                </Nav.Link>
              </Nav>
              <div className="lg-px-3 d-flex align-items-center gap-2">
                <span>{isDarkTheme ? "dark" : "light"}</span>
                <ReactSwitch
                  onChange={handleToggleTheme}
                  checked={isDarkTheme}
                  onColor="#222"
                  offColor="#aaa"
                  checkedIcon={false}
                  uncheckedIcon={false}
                />
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default App;
