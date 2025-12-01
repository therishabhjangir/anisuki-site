import React from "react"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-white via-slate-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block rounded-2xl px-4 py-2 mb-6 bg-anisuki/5 border border-anisuki/20">
          <span className="text-sm font-medium text-anisuki">AniSuki — Veterinary Study Hub</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          AniSuki — Practical Veterinary Notes & Guides
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Curated B.V.Sc. & A.H. notes, concise summaries, and study resources — by Rishabh Jangir. Build confidence, not confusion.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#subjects"
            className="inline-block px-6 py-3 rounded-lg bg-anisuki text-white font-medium shadow hover:brightness-95"
          >
            Explore Subjects
          </a>

          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
          >
            Contact AniSuki
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          AniSuki is a student-run resource — notes will be added progressively; perfect for IVRI learners.
        </p>
      </div>
    </section>
  )
}
