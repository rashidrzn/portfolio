import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Hero from "./Hero";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const Layout = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      {/* <Outlet /> */}
    </>
  );
};

export default Layout;
