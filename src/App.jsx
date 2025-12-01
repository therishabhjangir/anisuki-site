import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Subjects from "./components/Subjects"
import AnatomyPage from "./pages/subjects/anatomy";
import Gallery from "./components/Gallery"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  const hash = typeof window !== "undefined" ? window.location.hash : "";

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
