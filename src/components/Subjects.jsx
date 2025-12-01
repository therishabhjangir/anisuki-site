import React, { useState } from "react";

const CURRICULUM = [
  {
    year: "First Professional (Year 1)",
    subjects: [
      { slug: "veterinary-anatomy", name: "Veterinary Anatomy" },
      { slug: "veterinary-physiology", name: "Veterinary Physiology" },
      { slug: "livestock-production-management", name: "Livestock Production Management (LPM)" }
    ]
  },
  {
    year: "Second Professional (Year 2)",
    subjects: [
      { slug: "veterinary-pathology", name: "Veterinary Pathology" },
      { slug: "veterinary-microbiology", name: "Veterinary Microbiology" },
      { slug: "animal-genetics-breeding", name: "Animal Genetics & Breeding (AGB)" },
      { slug: "animal-nutrition", name: "Animal Nutrition" },
      { slug: "veterinary-biochemistry", name: "Veterinary Biochemistry" }
    ]
  },
  {
    year: "Third Professional (Year 3)",
    subjects: [
      { slug: "veterinary-parasitology", name: "Veterinary Parasitology" },
      { slug: "veterinary-pharmacology-toxicology", name: "Veterinary Pharmacology & Toxicology" },
      { slug: "veterinary-public-health", name: "Veterinary Public Health & Epidemiology (VPH)" },
      { slug: "extension-education", name: "Veterinary & Animal Husbandry Extension Education" },
      { slug: "livestock-products-technology", name: "Livestock Products Technology (LPT)" },
      { slug: "veterinary-clinical-practice-1", name: "Veterinary Clinical Practice - I (VCP-I)" },
      { slug: "livestock-farm-practice", name: "Livestock Farm Practices (LFP)" }
    ]
  },
  {
    year: "Fourth Professional (Final Years)",
    subjects: [
      { slug: "veterinary-medicine", name: "Veterinary Medicine" },
      { slug: "veterinary-surgery-radiology", name: "Veterinary Surgery & Radiology" },
      { slug: "veterinary-gynecology-obstetrics", name: "Veterinary Gynaecology & Obstetrics (Theriogenology)" },
      { slug: "veterinary-clinical-practice-2", name: "Veterinary Clinical Practice - II (VCP-II)" }
    ]
  }
];

export default function Subjects() {
  return (
    <section id="subjects" className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Subjects (MSVE-aligned)</h2>
        <p className="text-sm text-gray-600 mb-6">
          Complete list of subjects year-wise. Units & topics will be added later.
        </p>

        <div className="space-y-8">
          {CURRICULUM.map((block) => (
            <div key={block.year}>
              <h3 className="text-xl font-semibold mb-3">{block.year}</h3>

              <div className="grid md:grid-cols-2 gap-6">
                {block.subjects.map((subj) => (
                  <div key={subj.slug} className="border rounded-lg p-4 bg-white shadow-sm">
                    <h4 className="text-lg font-semibold">{subj.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-8">
          Next: we will add unit headings and downloadable notes.
        </p>
      </div>
    </section>
  );
}
