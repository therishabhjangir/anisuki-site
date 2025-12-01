import React from "react";
import { useParams, Navigate } from "react-router-dom";

// import subject pages here
import AnatomyPage from "./subjects/anatomy";
// future imports: import PhysiologyPage from "./subjects/physiology";

const pageMap = {
  "veterinary-anatomy": AnatomyPage,
  // add others: "veterinary-physiology": PhysiologyPage,
};

export default function SubjectPage() {
  const { slug } = useParams();
  const PageComp = pageMap[slug];

  // if page not found, redirect to home or show NotFound. We'll redirect to home for now.
  if (!PageComp) {
    // navigate to home so user doesn't get stuck
    return <Navigate to="/" replace />;
  }

  return <PageComp />;
}
