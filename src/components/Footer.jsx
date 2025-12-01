import React from "react"
import { SITE } from "../siteConfig"

export default function Footer() {
  return (
    <footer className="py-6 mt-12 border-t">
      <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-600">

        © {new Date().getFullYear()} {SITE.name} • Built by {SITE.name}

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://instagram.com/anisukidotin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500"
          >
            Instagram
          </a>

          <a
            href="https://twitter.com/anisukidotin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500"
          >
            Twitter
          </a>
        </div>

      </div>
    </footer>
  )
}
