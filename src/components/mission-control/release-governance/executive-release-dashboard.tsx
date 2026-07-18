"use client";

import React from "react";
import { ReleaseGovernanceOverview } from "./release-governance-overview";
import { EnterpriseReleaseRegistry } from "./enterprise-release-registry";
import { DeploymentCenter } from "./deployment-center";
import { EnvironmentCenter } from "./environment-center";
import { DeploymentWindowCenter } from "./deployment-window-center";
import { ProgressiveRolloutCenter } from "./progressive-rollout-center";
import { RollbackCenter } from "./rollback-center";
import { ApprovalCenter } from "./approval-center";
import { VerificationCenter } from "./verification-center";
import { DeploymentValidation } from "./deployment-validation";
import { ReleaseTimeline } from "./release-timeline";
import { ReleaseLedger } from "./release-ledger";
import { ReleaseSimulator } from "./release-simulator";
import { DeploymentAssessments } from "./deployment-assessments";

export function ExecutiveReleaseDashboard() {
  return (
    <div className="p-6 space-y-6 bg-slate-950 min-h-screen">
      <div className="border-b border-slate-800 pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-200 font-sans tracking-tight">Enterprise Release Governance Operations</h1>
          <p className="text-xs text-slate-500 font-mono mt-1">Deterministically governing all production delivery workflows.</p>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-emerald-400 font-mono font-bold animate-pulse">RDPG ENGINE ACTIVE</div>
          <div className="text-[10px] text-slate-500 font-mono mt-1">ENFORCING RELEASE CONSTITUTION</div>
        </div>
      </div>

      <ReleaseGovernanceOverview />

      <div className="grid grid-cols-12 gap-6 h-[400px]">
        <div className="col-span-5 h-full"><EnterpriseReleaseRegistry /></div>
        <div className="col-span-4 h-full"><ProgressiveRolloutCenter /></div>
        <div className="col-span-3 h-full"><DeploymentValidation /></div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[250px]">
        <div className="col-span-3 h-full"><DeploymentCenter /></div>
        <div className="col-span-3 h-full"><EnvironmentCenter /></div>
        <div className="col-span-3 h-full"><ApprovalCenter /></div>
        <div className="col-span-3 h-full"><VerificationCenter /></div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[250px]">
        <div className="col-span-4 h-full"><RollbackCenter /></div>
        <div className="col-span-4 h-full"><DeploymentWindowCenter /></div>
        <div className="col-span-4 h-full"><DeploymentAssessments /></div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[250px]">
        <div className="col-span-4 h-full"><ReleaseTimeline /></div>
        <div className="col-span-4 h-full"><ReleaseLedger /></div>
        <div className="col-span-4 h-full"><ReleaseSimulator /></div>
      </div>
    </div>
  );
}
