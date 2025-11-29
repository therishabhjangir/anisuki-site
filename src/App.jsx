import React from "react"
import Header from "./components/Header"
import About from "./components/About"
import Gallery from "./components/Gallery"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen antialiased">
      <Header />
      <main className="py-6">
        <About />
        <Gallery />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
