// src/components/UnitAccordion.jsx
import React, { useState } from "react";

/**
 * Accordion for units with optional topic list.
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
            <div className="px-5 py-4 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 space-y-4">
              <p className="whitespace-pre-line leading-relaxed">{u.details}</p>

              {/* Topics list (if available) */}
              {Array.isArray(u.topics) && u.topics.length > 0 && (
                <div>
                  <h5 className="text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">Topics</h5>
                  <ol className="list-decimal pl-5 space-y-2">
                    {u.topics.map((t) => (
                      <li key={t.id} className="flex items-center justify-between bg-white p-2 rounded-md border">
                        <div className="text-sm text-slate-800">{t.id} — {t.title}</div>
                        <div>
                          <a
                            href={t.gdriveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 hover:bg-slate-200 transition"
                          >
                            Open
                          </a>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
