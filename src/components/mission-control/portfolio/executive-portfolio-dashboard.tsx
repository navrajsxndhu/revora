"use client";

import React from "react";
import { PortfolioOverview } from "./portfolio-overview";
import { EnterprisePortfolios } from "./enterprise-portfolios";
import { ProgramManagement } from "./program-management";
import { StrategicInitiatives } from "./strategic-initiatives";
import { ExecutiveRoadmap } from "./executive-roadmap";
import { ValueStreamCenter } from "./value-stream-center";
import { InvestmentCenter } from "./investment-center";
import { BenefitRealization } from "./benefit-realization";
import { DependencyCenter } from "./dependency-center";
import { PortfolioAssessments } from "./portfolio-assessments";
import { PortfolioValidation } from "./portfolio-validation";
import { PortfolioTimeline } from "./portfolio-timeline";
import { PortfolioLedger } from "./portfolio-ledger";
import { PortfolioSimulator } from "./portfolio-simulator";

export function ExecutivePortfolioDashboard() {
  return (
    <div className="p-6 space-y-6 bg-slate-950 min-h-screen">
      <div className="border-b border-slate-800 pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-200 font-sans tracking-tight">Enterprise Portfolio & Strategic Execution</h1>
          <p className="text-xs text-slate-500 font-mono mt-1">Deterministically mapping strategic outcomes to enterprise execution.</p>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-emerald-400 font-mono font-bold animate-pulse">STRATEGY ENGINE ACTIVE</div>
          <div className="text-[10px] text-slate-500 font-mono mt-1">SYNCED WITH CMDB AND CAPACITY REGISTRY</div>
        </div>
      </div>

      <PortfolioOverview />

      <div className="grid grid-cols-12 gap-6 h-[400px]">
        <div className="col-span-4 h-full"><EnterprisePortfolios /></div>
        <div className="col-span-4 h-full"><ProgramManagement /></div>
        <div className="col-span-4 h-full"><StrategicInitiatives /></div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[400px]">
        <div className="col-span-3 h-full"><ValueStreamCenter /></div>
        <div className="col-span-3 h-full"><InvestmentCenter /></div>
        <div className="col-span-3 h-full"><BenefitRealization /></div>
        <div className="col-span-3 h-full"><ExecutiveRoadmap /></div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[300px]">
        <div className="col-span-3 h-full"><DependencyCenter /></div>
        <div className="col-span-3 h-full"><PortfolioAssessments /></div>
        <div className="col-span-3 h-full"><PortfolioValidation /></div>
        <div className="col-span-3 h-full"><PortfolioSimulator /></div>
      </div>
      
      <div className="grid grid-cols-12 gap-6 h-[250px]">
        <div className="col-span-6 h-full"><PortfolioTimeline /></div>
        <div className="col-span-6 h-full"><PortfolioLedger /></div>
      </div>
    </div>
  );
}
