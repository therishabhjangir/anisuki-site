import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Subjects from "./components/Subjects";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AnatomyPage from "./pages/subjects/anatomy";

export default function App() {
  // reactive hash state so clicking hash-links re-renders accordingly
  const [hash, setHash] = useState(
    typeof window !== "undefined" ? window.location.hash : ""
  );

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || "");
    // listen for manual hash changes (clicking links, back/forward)
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Subject page routes (hash-based). Extend this as you add more subject pages.
  if (hash === "#/subjects/veterinary-anatomy" || hash === "#/subjects/anatomy") {
    return <AnatomyPage />;
  }

  return (
    <div className="min-h-screen antialiased">
      <Header />
      <main className="py-6">
        <Hero />
        <About />
        <Subjects />
        <Gallery />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
