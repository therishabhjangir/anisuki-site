import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h2 className="text-2xl font-semibold mb-3">Page not found</h2>
      <p className="text-sm text-slate-600 mb-4">The page you are looking for doesn't exist.</p>
      <Link to="/" className="inline-block px-4 py-2 bg-slate-100 rounded hover:bg-slate-200">Back to home</Link>
    </div>
  );
}
