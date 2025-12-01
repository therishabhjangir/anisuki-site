// src/pages/subjects/anatomy.jsx
import React from "react";

// Minimal test Anatomy page — lists units if available or shows simple text.
// This avoids any absolute import issues and will always render something.
export default function AnatomyPage() {
  // quick runtime info for debugging
  console.log("DEBUG: AnatomyPage mounted");

  // Try to safely load units with a relative path first (if your units.js exists there)
  let units = [];
  try {
    // relative path from this file to data file
    units = require("../../data/subjects/anatomy/units").default || [];
  } catch (e) {
    // fall back: attempt absolute import style (only for debug)
    try {
      units = require("src/data/subjects/anatomy/units").default || [];
    } catch (err) {
      console.log("DEBUG: units import failed (expected in debug).", e, err);
    }
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">DEBUG — Veterinary Anatomy (test)</h1>

      <div className="mb-4">
        <strong>Detected hash:</strong> {typeof window !== "undefined" ? window.location.hash : "(no window)"}<br />
        <strong>Units loaded:</strong> {Array.isArray(units) ? units.length : "not an array"}
      </div>

      <div className="space-y-3">
        {Array.isArray(units) && units.length > 0 ? (
          units.map((u) => (
            <div key={u.id} className="border rounded p-3 bg-white">
              <div className="font-semibold">{u.title}</div>
              <div className="text-sm text-gray-600">{u.short}</div>
            </div>
          ))
        ) : (
          <div className="p-3 border rounded bg-red-50 text-red-800">
            No units found via relative import. This is expected only for the debug page.
            <div className="mt-2 text-sm text-gray-600">If you see this, the Anatomy page is rendering — which confirms routing works. Next step: fix imports or restore your original content.</div>
          </div>
        )}
      </div>
    </main>
  );
}
