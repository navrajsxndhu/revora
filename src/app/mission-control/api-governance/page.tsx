import React from "react";
import { ExecutiveApiDashboard } from "@/components/mission-control/api-governance/executive-api-dashboard";

export const metadata = {
  title: "Enterprise API Governance & Integration | Revora Mission Control",
};

export default function ApiGovernancePage() {
  return (
    <div className="h-full bg-slate-950">
      <ExecutiveApiDashboard />
    </div>
  );
}
