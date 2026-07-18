import React from "react";
import { ExecutiveReleaseDashboard } from "@/components/mission-control/release-governance/executive-release-dashboard";

export const metadata = {
  title: "Enterprise Release Governance | Revora Mission Control",
};

export default function ReleaseGovernancePage() {
  return (
    <div className="h-full bg-slate-950">
      <ExecutiveReleaseDashboard />
    </div>
  );
}
