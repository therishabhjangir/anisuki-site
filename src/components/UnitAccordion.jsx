// src/components/UnitAccordion.jsx
import React, { useState } from "react";

export default function UnitAccordion({ units = [] }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 py-8">
      {units.map((unit) => {
        const isOpen = openId === unit.id;

        return (
          <div
            key={unit.id}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            {/* Unit Header */}
            <button
              onClick={() => toggle(unit.id)}
              className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-30"
              aria-expanded={isOpen}
              aria-controls={`unit-content-${unit.id}`}
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                  {unit.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {unit.short}
                </p>
              </div>

              {/* Plus/Minus Toggle */}
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center text-2xl font-light transition-all duration-300 ${
                  isOpen
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                    : "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400"
                }`}
              >
                {isOpen ? "−" : "+"}
              </div>
            </button>

            {/* Collapsible Content */}
            <div
              id={`unit-content-${unit.id}`}
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-8 pt-3 bg-slate-50/70 dark:bg-slate-900/70">
                {/* Unit Details */}
                <div className="mb-8 text-slate-700 dark:text-slate-300">
                  <p className="whitespace-pre-line leading-relaxed text-justify text-sm sm:text-base">
                    {unit.details}
                  </p>
                </div>

                {/* Topics List */}
                {Array.isArray(unit.topics) && unit.topics.length > 0 ? (
                  <div>
                    <h4
