import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Subjects from "../components/Subjects";
import Gallery from "../components/Gallery";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Subjects />
      <Gallery />
      <Blog />
      <Contact />
    </>
  );
}
