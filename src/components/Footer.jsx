import React from "react"
import { SITE } from "../siteConfig"

export default function Footer() {
  return (
    <footer className="py-6 mt-12 border-t">
      <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} {SITE.name} • Built by {SITE.name}
      </div>
    </footer>
  )
}
