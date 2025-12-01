import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { SITE } from "../siteConfig";

export default function Hero() {
  const navigate = useNavigate();
  const heroBg = "/images/home/hero-art.jpg";

  return (
    <section id="hero" className="relative w-full overflow-hidden" aria-label="AniSuki hero">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          filter: "saturate(1.02) contrast(0.98)",
        }}
        role="img"
        aria-hidden
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/72 via-white/40 to-white/60 -z-5" />

      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-800"
            >
              AniSuki — Veterinary learning, made gentle.
            </motion.h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-xl">
              Concise MSVE-aligned notes, clear diagrams, and a student community — all in one calm place.
            </p>

            <div className="flex items-center gap-4">
              <Link
                to="/subjects/veterinary-anatomy"
                className="inline-block px-5 py-3 rounded-full bg-rose-400 hover:bg-rose-500 text-white font-semibold shadow-md flex items-center gap-2"
                aria-label="Open Veterinary Anatomy"
              >
                <span>Start Anatomy</span>
              </Link>

              <button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    const el = document.getElementById("subjects");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }, 120);
                }}
                className="inline-block px-4 py-3 rounded-full border border-slate-200 bg-white text-slate-700 font-medium shadow-sm"
              >
                Explore Subjects
              </button>
            </div>

            <div className="text-sm text-slate-500 mt-2">Free, MSVE-aligned notes — curated for exam clarity.</div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white border">
              <img src="/images/home/feature-study.png" alt="Student studying - illustration" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-slate-800">Organized Notes</h4>
                <p className="text-sm text-slate-500">Units → Topics → Drive notes. Clean and quick.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg bg-white border">
              <img src="/images/home/feature-notes.png" alt="Stack of study notes - illustration" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-slate-800">Exam-Focused</h4>
                <p className="text-sm text-slate-500">Short tricky Qs, high-yield summaries and diagrams.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Quick subjects</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            <Link className="min-w-[220px] shrink-0 block rounded-xl border bg-white shadow-sm" to="/subjects/veterinary-anatomy">
              <img src="/images/home/subject-anatomy-thumb.jpg" alt="Veterinary Anatomy thumbnail" className="w-full h-32 object-cover rounded-t-xl" />
              <div className="p-3">
                <div className="font-semibold text-slate-800">Veterinary Anatomy</div>
                <div className="text-xs text-slate-500">Units, clinical sites & diagrams</div>
              </div>
            </Link>

            <Link className="min-w-[220px] shrink-0 block rounded-xl border bg-white shadow-sm" to="/subjects/veterinary-physiology">
              <img src="/images/home/subject-generic-thumb.jpg" alt="Veterinary Physiology thumbnail" className="w-full h-32 object-cover rounded-t-xl" />
              <div className="p-3">
                <div className="font-semibold text-slate-800">Veterinary Physiology</div>
                <div className="text-xs text-slate-500">Mechanisms and pathways</div>
              </div>
            </Link>

            <Link className="min-w-[220px] shrink-0 block rounded-xl border bg-white shadow-sm" to="/subjects/veterinary-parasitology">
              <img src="/images/home/subject-generic-thumb.jpg" alt="Veterinary Parasitology thumbnail" className="w-full h-32 object-cover rounded-t-xl" />
              <div className="p-3">
                <div className="font-semibold text-slate-800">Veterinary Parasitology</div>
                <div className="text-xs text-slate-500">Parasites, life cycles & images</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}