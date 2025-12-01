// src/components/UnitAccordion.jsx
import React, { useState } from "react";

/**
 * Simple accessible accordion for units.
 * Usage: <UnitAccordion units={units} />
 */
export default function UnitAccordion({ units = [] }) {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-3">
      {units.map((u) => (
        <div key={u.id} className="border rounded-xl overflow-hidden shadow-sm">
          <button
            onClick={() => toggle(u.id)}
            className="w-full text-left px-4 py-3 flex justify-between items-start bg-white dark:bg-slate-800"
            aria-expanded={openId === u.id}
          >
            <div>
              <div className="text-lg font-semibold">{u.title}</div>
              <div className="text-sm text-slate-500 dark:text-slate-300 mt-1">{u.short}</div>
            </div>
            <div className="text-xl">{openId === u.id ? "−" : "+"}</div>
          </button>

          {openId === u.id && (
            <div className="px-4 py-3 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200">
              <p className="whitespace-pre-line leading-relaxed">{u.details}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
