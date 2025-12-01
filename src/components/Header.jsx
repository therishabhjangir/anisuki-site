import React from "react"
import { SITE } from "../siteConfig"

export default function Header() {
  const logoPng = "/logo.png"
  const logoJpg = "/logo.jpg"

  return (
    <header className="w-full p-6 shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
{/* logo container — responsive, keeps aspect ratio, uses object-fit and fallback */}
<div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
  <picture>
    {/* prefer vector if available */}
    <source srcSet="/logo.svg" type="image/svg+xml" />
    <img
      src={logoPng}
      alt={`${SITE.name} logo`}
      className="w-full h-full object-cover object-center"
      onError={(e) => {
        // fallback order: jpg then svg removed to avoid infinite loop
        e.target.onerror = null;
        e.target.src = logoJpg;
      }}
    />
  </picture>
</div>

          <div>
            <h1 className="text-xl font-semibold">{SITE.name}</h1>
            <p className="text-sm text-gray-600">{SITE.tagline}</p>
          </div>
        </div>
<nav className="space-x-4 text-sm flex items-center">
  <a href="#about" className="hover:underline">About</a>
  <a href="#subjects" className="hover:underline">Subjects</a>
  <a href="#gallery" className="hover:underline">Gallery</a>
  <a href="#news" className="hover:underline">News</a>
  <a href="#contact" className="hover:underline">Contact</a>

  {/* social links */}
  <a
    href="https://instagram.com/anisukidotin"
    target="_blank"
    rel="noopener noreferrer"
    className="ml-4 hover:underline"
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
  )
}
