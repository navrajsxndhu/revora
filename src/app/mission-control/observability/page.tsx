import React from "react";
import { ExecutiveObservabilityDashboard } from "@/components/mission-control/observability/executive-observability-dashboard";

export const metadata = {
  title: "Enterprise Observability | Revora Mission Control",
};

export default function ObservabilityPage() {
  return (
    <div className="h-full bg-slate-950">
      <ExecutiveObservabilityDashboard />
    </div>
  );
}
