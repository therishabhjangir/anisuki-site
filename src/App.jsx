import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Subjects from "./components/Subjects";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// SUBJECT PAGES
import AnatomyPage from "./pages/subjects/anatomy";

export default function App() {
  // track hash reactively
  const [hash, setHash] = useState(
    typeof window !== "undefined" ? window.location.hash : ""
  );

  // listen for hash updates
  useEffect(() => {
    const updateHash = () => {
      const h = window.location.hash;
      console.log("HASH UPDATED:", h);
      setHash(h);
    };

    window.addEventListener("hashchange", updateHash);
    updateHash(); // also run once on first load

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  // normalize hash value (remove any trailing slashes or extra chars)
  const cleanHash = hash.trim().toLowerCase();

  // SUBJECT ROUTES (Add more here later)
  if (
    cleanHash === "#/subjects/veterinary-anatomy" ||
    cleanHash === "#/subjects/anatomy"
  ) {
    return <AnatomyPage />;
  }

  // DEFAULT: HOME PAGE
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
