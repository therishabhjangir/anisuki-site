import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Subjects from "./components/Subjects";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Subject page imports (ensure this file exists: src/pages/subjects/anatomy.jsx)
import AnatomyPage from "./pages/subjects/anatomy";

export default function App() {
  // reactive hash state
  const [hash, setHash] = useState(
    typeof window !== "undefined" ? window.location.hash : ""
  );

  useEffect(() => {
    const updateHash = () => {
      const h = window.location.hash || "";
      console.log("[App] hashchange ->", h);
      setHash(h);
    };

    // listen for hash changes and also run once on mount
    window.addEventListener("hashchange", updateHash);
    updateHash();

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const cleanHash = String(hash).trim().toLowerCase();

  console.log("[App] render; cleanHash =", cleanHash);

  // Robust matching: use includes so minor slug differences won't block rendering
  if (cleanHash.includes("/subjects/veterinary-anatomy") || cleanHash.includes("/subjects/anatomy")) {
    console.log("[App] Rendering AnatomyPage because hash matched");
    return <AnatomyPage />;
  }

  // If there is some other hash that looks like a subject, show debug so we can see it
  const looksLikeSubject = cleanHash.startsWith("#/subjects/");

  return (
    <div className="min-h-screen antialiased">
      <Header />
      <main className="py-6">
        {looksLikeSubject && (
          <div className="max-w-4xl mx-auto px-4 mb-6">
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
              Debug: App detected a subject-like hash: <strong>{cleanHash || "(empty)"}</strong>
              <div className="mt-2">
                If you expected a subject page to appear, confirm the subject page file exists at{" "}
                <code>src/pages/subjects/</code> and has a default export.
              </div>
              <div className="mt-2">
                Quick manual test: <button className="ml-2 underline" onClick={() => { window.location.hash = "#/subjects/veterinary-anatomy"; }}>Force Anatomy hash</button>
              </div>
            </div>
          </div>
        )}

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
