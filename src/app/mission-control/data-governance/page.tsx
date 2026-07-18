import React from "react";
import { ExecutiveDataGovernanceDashboard } from "@/components/mission-control/data-governance/executive-data-governance-dashboard";

export const metadata = {
  title: "Enterprise Data Governance & Metadata Lifecycle | Revora Mission Control",
};

export default function DataGovernancePage() {
  return (
    <div className="h-full bg-slate-950">
      <ExecutiveDataGovernanceDashboard />
    </div>
  );
}
