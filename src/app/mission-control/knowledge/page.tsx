import React from "react";
import { ExecutiveKnowledgeDashboard } from "@/components/mission-control/knowledge/executive-knowledge-dashboard";

export const metadata = {
  title: "Enterprise Knowledge & Decision Memory | Revora Mission Control",
};

export default function KnowledgePage() {
  return (
    <div className="h-full bg-slate-950">
      <ExecutiveKnowledgeDashboard />
    </div>
  );
}
