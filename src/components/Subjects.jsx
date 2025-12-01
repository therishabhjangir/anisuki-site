import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";

interface Unit {
  unitName: string;
  topics: string;
}

interface Subject {
  slug: string;
  name: string;
  units: Unit[];
}

interface YearBlock {
  year: string;
  subjects: Subject[];
}

const DATA: YearBlock[] = [
  {
    year: "First Professional (Year 1)",
    subjects: [
      {
        slug: "veterinary-anatomy",
        name: "Veterinary Anatomy",
        units: [
          { unitName: "Unit I — General Anatomy & Osteology", topics: "Terminology, Cells and tissues, Bones of axial and appendicular skeleton, Joints, Developmental anatomy" },
          { unitName: "Unit II — Myology & Angiology", topics: "Muscle groups, Muscle actions, Arterial supply and venous drainage, Lymphatics" },
          { unitName: "Unit III — Nervous System & Sense Organs", topics: "Peripheral nerves, Spinal cord segments, Cranial nerves, Eye anatomy, Ear anatomy" },
        ],
      },
      {
        slug: "veterinary-physiology",
        name: "Veterinary Physiology",
        units: [
          { unitName: "Unit I — Cell Physiology & Homeostasis", topics: "Membrane potential, Transport, Hormone basics" },
          { unitName: "Unit II — Cardiovascular System", topics: "Cardiac cycle, ECG basics, Hemodynamics" },
          { unitName: "Unit III — Blood & Respiration", topics: "Blood composition, Respiratory mechanics, Gas exchange" },
        ],
      },
      {
        slug: "livestock-production-management",
        name: "Livestock Production Management (LPM)",
        units: [
          { unitName: "Unit I — Introduction to LPM", topics: "Importance of livestock, Breeds, Housing, Feeding standards" },
          { unitName: "Unit II — Cattle & Buffalo Management", topics: "Dairy farming, Beef production, Milking methods" },
          { unitName: "Unit III — Sheep, Goat & Poultry", topics: "Small ruminant farming, Poultry breeds, Egg production" },
        ],
      },
    ],
  },
  // ... rest of your years (Year 2, 3, 4, Supporting) remain unchanged
  {
    year: "Second Professional (Year 2)",
    subjects: [
      {
        slug: "veterinary-microbiology",
        name: "Veterinary Microbiology",
        units: [{ unitName: "Unit I — Bacteriology", topics: "Staining, Culture methods, Basics of pathogenic bacteria" }],
      },
      {
        slug: "veterinary-pathology",
        name: "Veterinary Pathology",
        units: [{ unitName: "Unit I — General Pathology", topics: "Cell injury, Inflammation, Repair, Hemodynamic disorders" }],
      },
      {
        slug: "veterinary-biochemistry",
        name: "Veterinary Biochemistry",
        units: [
          { unitName: "Unit I — Biomolecules & Metabolism", topics: "Carbohydrates, Proteins, Lipids, Enzymes, Vitamins" },
          { unitName: "Unit II — Clinical Biochemistry", topics: "Liver function tests, Renal function tests, Electrolytes" },
        ],
      },
    ],
  },
  {
    year: "Third Professional (Year 3)",
    subjects: [
      {
        slug: "veterinary-pharmacology",
        name: "Veterinary Pharmacology & Toxicology",
        units: [
          { unitName: "Unit I — Pharmacokinetics", topics: "Absorption, Distribution, Metabolism, Excretion" },
          { unitName: "Unit II — Drug Classes", topics: "Antibiotics, Anthelmintics, NSAIDs" },
        ],
      },
      {
        slug: "veterinary-parasitology",
        name: "Veterinary Parasitology",
        units: [{ unitName: "Unit I — Helminths", topics: "Nematodes, Trematodes, Cestodes" }],
      },
    ],
  },
  {
    year: "Fourth Professional (Final Years)",
    subjects: [
      {
        slug: "veterinary-medicine",
        name: "Veterinary Medicine",
        units: [{ unitName: "Unit I — Infectious Diseases", topics: "Clinical signs, Diagnosis, Case management" }],
      },
      {
        slug: "veterinary-surgery",
        name: "Veterinary Surgery & Radiology",
        units: [{ unitName: "Unit I — Surgical Principles", topics: "Asepsis, Suturing, Wound healing" }],
      },
    ],
  },
  {
    year: "Supporting / Essential",
    subjects: [
      {
        slug: "awej",
        name: "Animal Welfare, Ethics & Jurisprudence (AWEJ)",
        units: [{ unitName: "Unit I — Animal Welfare Principles", topics: "Five freedoms, Ethics, Legal framework" }],
      },
    ],
  },
];

export default function Subjects() {
  const [expandedSubjects, setExpandedSubjects] = useState<Set<string>>(new Set());
  const [expandedUnits, setExpandedUnits] = useState<Set<string>>(new Set());

  const toggleSubject = (slug: string) => {
    setExpandedSubjects(prev => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);
      return next;
    });
  };

  const toggleUnit = (key: string) => {
    setExpandedUnits(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            BVSc & AH Curriculum{" "}
            <span className="text-anisuki">(MSVE 2016 Aligned)</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Complete subject-wise breakdown by professional year. Expand subjects → units → topics.
          </p>
        </motion.div>

        <div className="space-y-12">
          {DATA.map((block, blockIdx) => (
            <motion.div
              key={block.year}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: blockIdx * 0.15 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="bg-gradient-to-r from-anisuki to-anisuki/90 px-8 py-5">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <BookOpen className="w-7 h-7" />
                  {block.year}
                </h3>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {block.subjects.map((subject) => {
                    const isExpanded = expandedSubjects.has(subject.slug);

                    return (
                      <motion.div
                        key={subject.slug}
                        layout
                        className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="text-xl font-bold text-gray-900">{subject.name}</h4>
                              <p className="text-sm text-gray-500 mt-1">
                                {subject.units.length} Unit{subject.units.length > 1 ? "s" : ""}
                              </p>
                            </div>
                            <button
                              onClick={() => toggleSubject(subject.slug)}
                              className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-anisuki rounded-xl hover:bg-anisuki/90 transition-all transform hover:scale-105"
                            >
                              {isExpanded ? (
                                <>Hide <ChevronUp className="w-4 h-4" /></>
                              ) : (
                                <>View <ChevronDown className="w-4 h-4" /></>
                              )}
                            </button>
                          </div>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="space-y-4 mt-4 overflow-hidden"
                              >
                                {subject.units.map((unit, idx) => {
                                  const unitKey = `${subject.slug}-unit-${idx}`;
                                  const unitOpen = expandedUnits.has(unitKey);

                                  return (
                                    <motion.div
                                      key={unitKey}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: idx * 0.05 }}
                                      className="border-l-4 border-anisuki/40 bg-gradient-to-r from-anisuki/5 to-transparent rounded-r-xl p-4"
                                    >
                                      <button
                                        onClick={() => toggleUnit(unitKey)}
                                        className="w-full flex justify-between items-center text-left group"
                                      >
                                        <h5 className="font-semibold text-gray-800 group-hover:text-anisuki transition-colors">
                                          {unit.unitName}
                                        </h5>
                                        {unitOpen ? (
                                          <ChevronUp className="w-5 h-5 text-anisuki" />
                                        ) : (
                                          <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-anisuki" />
                                        )}
                                      </button>

                                      <AnimatePresence>
                                        {unitOpen && (
                                          <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35 }}
                                            className="mt-3 overflow-hidden"
                                          >
                                            <div className="bg-white rounded-lg p-4 border border-gray-100 text-gray-700 text-sm leading-relaxed shadow-inner">
                                              {unit.topics}
                                            </div>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </motion.div>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 text-sm text-gray-500 italic"
        >
          Pro tip: This will soon support searchable topics, downloadable PDFs, and progress tracking per unit.
        </motion.p>
      </div>
    </section>
  );
}
