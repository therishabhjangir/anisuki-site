import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import SubjectPage from "./pages/SubjectPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen antialiased">
      <Header />
      <main className="py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subjects/:slug" element={<SubjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
