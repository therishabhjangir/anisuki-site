import React from "react"
import { SITE } from "../siteConfig"

export default function Header() {
  const logoPng = "/logo.png"
  const logoJpg = "/logo.jpg"

  return (
    <header className="w-full p-6 shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
            <img src={logoPng} alt={`${SITE.name} logo`} className="w-full h-full object-cover" onError={(e)=>{ e.target.onerror=null; e.target.src=logoJpg }} />
          </div>

          <div>
            <h1 className="text-xl font-semibold">{SITE.name}</h1>
            <p className="text-sm text-gray-600">{SITE.tagline}</p>
          </div>
        </div>
        <nav className="space-x-4 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#news" className="hover:underline">News</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  )
}
