import React from "react";
import { ExecutivePortfolioDashboard } from "@/components/mission-control/portfolio/executive-portfolio-dashboard";

export const metadata = {
  title: "Enterprise Portfolio & Strategic Execution | Revora Mission Control",
};

export default function PortfolioPage() {
  return (
    <div className="h-full bg-slate-950">
      <ExecutivePortfolioDashboard />
    </div>
  );
}
