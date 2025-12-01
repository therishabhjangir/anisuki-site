// in src/pages/subjects/Anatomy.jsx (or equivalent)
import React from "react";
import units from "src/data/subjects/anatomy/units";
import UnitAccordion from "src/components/UnitAccordion";

export default function AnatomyPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Veterinary Anatomy — Units</h1>
      <UnitAccordion units={units} />
    </main>
  );
}
