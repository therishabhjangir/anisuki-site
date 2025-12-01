import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { SITE } from "../siteConfig";

export default function Header() {
  const logoPng = "/logo.png";
  const logoJpg = "/logo.jpg";
  const navigate = useNavigate();
  const location = useLocation();

  const goToSubjects = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const el = document.getElementById("subjects");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("subjects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  return (
    <header className="w-full p-4 md:p-6 shadow-sm bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex items-center justify-center bg-gray-50 border">
            <picture>
              <source srcSet="/logo.svg" type="image/svg+xml" />
              <img
                src={logoPng}
                alt={`${SITE.name} logo`}
                className="w-full h-full object-contain object-center"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = logoJpg;
                }}
              />
            </picture>
          </div>

          <div>
            <h1 className="text-lg md:text-xl font-semibold leading-tight">{SITE.name}</h1>
            <p className="text-xs md:text-sm text-slate-500">{SITE.tagline}</p>
          </div>
        </div>

        <nav className="space-x-4 text-sm flex items-center">
          <button onClick={() => navigate("/")} className="hover:underline">Home</button>
          <button onClick={goToSubjects} className="hover:underline">Subjects</button>

          <Link to="/#gallery" className="hover:underline">Gallery</Link>
          <Link to="/#news" className="hover:underline">News</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>

          <a
            href="https://instagram.com/anisukidotin"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 hover:underline"
          >
            Instagram
          </a>

          <a
            href="https://twitter.com/anisukidotin"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hover:underline"
          >
            Twitter
          </a>
        </nav>
      </div>
    </header>
  );
}