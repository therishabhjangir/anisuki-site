import React, { useState } from "react"

/**
 * Interactive Subjects component (MSVE-aligned)
 * - Subject -> Units -> Topics (comma-separated)
 * - Click subject to expand units; click unit to show topics.
 *
 * Fill the `DATA` object with actual unit and topic strings from MSVE.
 * This file is intentionally data-driven.
 */

const DATA = [
  {
    year: "First Professional (Year 1)",
    subjects: [
      {
        slug: "veterinary-anatomy",
        name: "Veterinary Anatomy",
        units: [
          {
            unitName: "Unit I — General Anatomy & Osteology",
            topics: "Terminology, Cells and tissues, Bones of axial and appendicular skeleton, Joints, Developmental anatomy"
          },
          {
            unitName: "Unit II — Myology & Angiology",
            topics: "Muscle groups, Muscle actions, Arterial supply and venous drainage, Lymphatics"
          },
          {
            unitName: "Unit III — Nervous System & Sense Organs",
            topics: "Peripheral nerves, Spinal cord segments, Cranial nerves, Eye anatomy, Ear anatomy"
          }
        ]
      },
      {
        slug: "veterinary-physiology",
        name: "Veterinary Physiology",
        units: [
          {
            unitName: "Unit I — Cell physiology & Homeostasis",
            topics: "Membrane potential, Transport, Hormone basics"
          },
          {
            unitName: "Unit II — Cardiovascular system",
            topics: "Cardiac cycle, ECG basics, Hemodynamics"
          }
        ]
      },
      // Livestock Production Management etc. can be added here
    ]
  },
  {
    year: "Second Professional (Year 2)",
    subjects: [
      {
        slug: "veterinary-microbiology",
        name: "Veterinary Microbiology",
        units: [
          {
            unitName: "Unit I — Bacteriology",
            topics: "Staining, Culture methods, Basics of pathogenic bacteria"
          }
        ]
      },
      {
        slug: "veterinary-pathology",
        name: "Veterinary Pathology",
        units: [
          {
            unitName: "Unit I — General Pathology",
            topics: "Cell injury, Inflammation, Repair, Hemodynamic disorders"
          }
        ]
      },
      {
        slug: "veterinary-biochemistry",
        name: "Veterinary Biochemistry",
        units: [
          {
            unitName: "Unit I — Biomolecules & Metabolism basics",
            topics: "Carbohydrates, Proteins, Lipids, Enzymes, Vitamins"
          },
          {
            unitName: "Unit II — Clinical Biochemistry",
            topics: "Liver function tests, Renal function tests, Electrolytes, Acid-base"
          }
        ]
      }
    ]
  },
  {
    year: "Third Professional (Year 3)",
    subjects: [
      {
        slug: "veterinary-pharmacology",
        name: "Veterinary Pharmacology & Toxicology",
        units: [
          { unitName: "Unit I — Pharmacokinetics", topics: "Absorption, Distribution, Metabolism, Excretion" },
          { unitName: "Unit II — Drug classes", topics: "Antibiotics, Anthelmintics, NSAIDs" }
        ]
      },
      {
        slug: "veterinary-parasitology",
        name: "Veterinary Parasitology",
        units: [
          { unitName: "Unit I — Helminths", topics: "Nematodes, Trematodes, Cestodes" }
        ]
      }
    ]
  },
  {
    year: "Fourth Professional (Final Years)",
    subjects: [
      {
        slug: "veterinary-medicine",
        name: "Veterinary Medicine",
        units: [
          { unitName: "Unit I — Infectious diseases", topics: "Clinical signs, Diagnosis, Case management" }
        ]
      },
      {
        slug: "veterinary-surgery",
        name: "Veterinary Surgery & Radiology",
        units: [
          { unitName: "Unit I — Surgical principles", topics: "Asepsis, Suturing, Wound healing" }
        ]
      }
    ]
  },
  {
    year: "Supporting / Essential",
    subjects: [
      {
        slug: "awej",
        name: "Animal Welfare, Ethics & Jurisprudence (AWEJ)",
        units: [
          { unitName: "Unit I — Animal welfare principles", topics: "Five freedoms, Ethics, Legal framework" }
        ]
      }
    ]
  }
]

function SubjectCard({ subject, onToggle, expandedUnits, toggleUnit }) {
  return (
    <div className="p-4 border rounded bg-white shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-lg font-semibold">{subject.name}</h4>
          <p className="text-sm text-gray-500">Units: {subject.units.length}</p>
        </div>
        <div>
          <button
            onClick={() => onToggle(subject.slug)}
            className="px-3 py-1 text-sm border rounded bg-anisuki text-white"
          >
            {expandedUnits[subject.slug] ? "Hide units" : "View units"}
          </button>
        </div>
      </div>

      {expandedUnits[subject.slug] && (
        <div className="mt-3 space-y-2">
          {subject.units.map((u, idx) => (
            <div key={idx} className="p-2 border rounded">
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">{u.unitName}</div>
                <button
                  onClick={() => toggleUnit(subject.slug, idx)}
                  className="text-sm text-anisuki hover:underline"
                >
                  {u.showTopics ? "Hide topics" : "Show topics"}
                </button>
              </div>

              {u.showTopics && (
                <div className="mt-2 text-sm text-gray-700">
                  {u.topics}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Subjects() {
  // expandedUnits: { [slug]: true/false }
  const [expandedUnits, setExpandedUnits] = useState({})
  const [data, setData] = useState(DATA) // allows editing showTopics state locally

  const toggleSubject = (slug) => {
    setExpandedUnits((s) => ({ ...s, [slug]: !s[slug] }))
  }

  const toggleUnit = (subjectSlug, unitIndex) => {
    // toggle showTopics for the specific unit in our data state
    setData((prev) =>
      prev.map((block) => ({
        ...block,
        subjects: block.subjects.map((sub) =>
          sub.slug === subjectSlug
            ? {
                ...sub,
                units: sub.units.map((u, i) =>
                  i === unitIndex ? { ...u, showTopics: !u.showTopics } : u
                )
              }
            : sub
        )
      }))
    )
  }

  return (
    <section id="subjects" className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Subjects (MSVE 2016 aligned)</h2>
        <p className="text-sm text-gray-600 mb-6">
          Click a subject to expand its units. Then click a unit to show comma-separated topics.
        </p>

        <div className="space-y-6">
          {data.map((block) => (
            <div key={block.year} className="space-y-4">
              <div className="text-xl font-semibold">{block.year}</div>
              <div className="grid md:grid-cols-2 gap-4">
                {block.subjects.map((subj) => (
                  <SubjectCard
                    key={subj.slug}
                    subject={subj}
                    onToggle={toggleSubject}
                    expandedUnits={expandedUnits}
                    toggleUnit={toggleUnit}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-6">
          Tip: when you are ready I can convert this data into JSON files so we can auto-generate unit lists from the official syllabus and later link PDFs stored in `public/notes/<subject-slug>/`.
        </p>
      </div>
    </section>
  )
}
