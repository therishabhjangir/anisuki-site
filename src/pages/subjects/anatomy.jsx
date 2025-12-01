import React from "react";
import UnitAccordion from "../../components/UnitAccordion";
import units from "../../data/subjects/anatomy/units";

export default function AnatomyPage() {
  console.log("DEBUG: AnatomyPage render (final) - units length", Array.isArray(units) ? units.length : typeof units);

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <a
            href="#subjects"
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-800 rounded-md hover:bg-slate-200 transition"
            aria-label="Back to subjects"
          >
            ← Back
          </a>
          <h1 className="text-3xl font-bold mt-3">Veterinary Anatomy — Units</h1>
          <p className="text-sm text-slate-500 mt-1">Units list — click to expand for details.</p>
        </div>

        {/* optional quick stats on the right */}
        <div className="text-sm text-slate-600 hidden sm:block">
          {Array.isArray(units) ? `${units.length} units` : "Units unavailable"}
        </div>
      </div>

      {Array.isArray(units) && units.length > 0 ? (
        <UnitAccordion units={units} />
      ) : (
        <div className="p-4 border rounded bg-yellow-50 text-yellow-800">
          Units not found. Confirm file exists at <code>src/data/subjects/anatomy/units.js</code>.
        </div>
      )}
    </main>
  );
}
