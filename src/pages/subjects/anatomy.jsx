import React from "react";
import UnitAccordion from "../../components/UnitAccordion";
import units from "../../data/subjects/anatomy/units";

export default function AnatomyPage() {
  console.log("DEBUG: AnatomyPage render (final) - units length", Array.isArray(units) ? units.length : typeof units);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Veterinary Anatomy — Units</h1>

      <div className="mb-4 text-sm text-gray-600">
        This page uses relative imports (correct for Vite). If you see the units below, everything is working.
      </div>

      {Array.isArray(units) && units.length > 0 ? (
        <UnitAccordion units={units} />
      ) : (
        <div className="p-3 border rounded bg-yellow-50 text-yellow-800">
          Units not found. Confirm file exists at <code>src/data/subjects/anatomy/units.js</code>.
        </div>
      )}
    </main>
  );
}
