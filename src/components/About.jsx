import React from "react"
import { SITE } from "../siteConfig"

export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-3">About {SITE.name}</h2>
        <p className="text-gray-700 leading-relaxed">
          AniSuki is a student-led veterinary brand focused on sharing knowledge, photos, and veterinary student life. This simple site is made so you can update content directly on GitHub and publish instantly via Vercel.
        </p>
      </div>
    </section>
  )
}
