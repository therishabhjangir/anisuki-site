import React from "react"

const SUBJECTS = [
  {
    title: "Foundational Sciences (Pre-Clinical)",
    items: ["Veterinary Anatomy", "Veterinary Physiology", "Veterinary Biochemistry"],
  },
  {
    title: "Para-Clinical Sciences",
    items: ["Veterinary Microbiology", "Veterinary Pathology", "Veterinary Parasitology", "Veterinary Pharmacology and Toxicology", "Veterinary Public Health and Epidemiology"],
  },
  {
    title: "Animal Husbandry & Production",
    items: ["Livestock Production Management (LPM)", "Animal Nutrition", "Animal Genetics and Breeding (AGB)", "Livestock Products Technology (LPT)", "Veterinary & Animal Husbandry Extension Education"],
  },
  {
    title: "Clinical Sciences & Practice",
    items: ["Veterinary Medicine", "Veterinary Surgery & Radiology", "Veterinary Gynaecology & Obstetrics (Theriogenology)", "Livestock Farm Practice (LFP)", "Veterinary Clinical Practice-I", "Veterinary Clinical Practice-II"],
  },
  {
    title: "Essential Support Courses",
    items: ["Animal Welfare, Ethics & Jurisprudence (AWEJ)"],
  },
]

export default function Subjects() {
  return (
    <section id="subjects" className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Subjects — B.V.Sc. & A.H. (VCI-MSVE aligned)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SUBJECTS.map((group, idx) => (
            <div key={idx} className="p-5 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{group.title}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {group.items.map((it, i) => {
                  // create a safe anchor id from the item text
                  const anchor = it.toLowerCase().replace(/[^\w]+/g, "-").replace(/(^-|-$)/g, "")
                  return (
                    <li key={i}>
                      <a href={`#${anchor}`} className="hover:underline text-anisuki">
                        {it}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-600 text-center">
          Click any topic above to jump to that section (pages will be created for each topic and linked to PDFs).  
          We will add per-subject pages and PDF links next.
        </p>
      </div>
    </section>
  )
}

