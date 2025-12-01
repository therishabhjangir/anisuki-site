// src/components/UnitAccordion.jsx
import React, { useState } from "react";

/**
 * Clean, neutral accordion for units.
 * Usage: <UnitAccordion units={units} />
 */
export default function UnitAccordion({ units = [] }) {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-3">
      {units.map((u) => (
        <div key={u.id} className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <button
            onClick={() => toggle(u.id)}
            className="w-full text-left px-5 py-4 flex justify-between items-start bg-white dark:bg-slate-800"
            aria-expanded={openId === u.id}
          >
            <div>
              <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">{u.title}</div>
              <div className="text-sm text-slate-500 dark:text-slate-300 mt-1">{u.short}</div>
            </div>
            <div
              className={
                "flex items-center justify-center w-9 h-9 rounded-full text-xl transition-transform " +
                (openId === u.id ? "transform rotate-45 bg-slate-100 text-slate-700" : "bg-slate-50 text-slate-600")
              }
              aria-hidden
            >
              {openId === u.id ? "−" : "+"}
            </div>
          </button>

          {openId === u.id && (
            <div className="px-5 py-4 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200">
              <p className="whitespace-pre-line leading-relaxed">{u.details}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
