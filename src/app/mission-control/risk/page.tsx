import React from 'react';
import { EnterpriseRiskOverview } from "@/components/mission-control/risk/enterprise-risk-overview";
import { EnterpriseRiskRegister } from "@/components/mission-control/risk/enterprise-risk-register";
import { RiskAssessmentCenter } from "@/components/mission-control/risk/risk-assessment-center";
import { RiskTreatmentDashboard } from "@/components/mission-control/risk/risk-treatment-dashboard";
import { KeyRiskIndicatorCenter } from "@/components/mission-control/risk/key-risk-indicator-center";
import { BusinessContinuityDashboard } from "@/components/mission-control/risk/business-continuity-dashboard";
import { DisasterRecoveryCenter } from "@/components/mission-control/risk/disaster-recovery-center";
import { CrisisOperationsCenter } from "@/components/mission-control/risk/crisis-operations-center";
import { RecoveryReadinessDashboard } from "@/components/mission-control/risk/recovery-readiness-dashboard";
import { RiskComplianceMatrix } from "@/components/mission-control/risk/risk-compliance-matrix";
import { RiskValidationCenter } from "@/components/mission-control/risk/risk-validation-center";
import { ConstitutionalRiskLedger } from "@/components/mission-control/risk/constitutional-risk-ledger";
import { RiskHealthDashboard } from "@/components/mission-control/risk/risk-health-dashboard";
import { EnterpriseResilienceDashboard } from "@/components/mission-control/risk/enterprise-resilience-dashboard";
import { ExecutiveRiskDashboard } from "@/components/mission-control/risk/executive-risk-dashboard";

export default function RiskPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Risk & Business Continuity Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing operational risk and enterprise resilience</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-amber-950 border border-amber-900 rounded-md">
            <span className="text-amber-500 font-mono text-sm">RISK: MITIGATED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveRiskDashboard />
        <EnterpriseRiskOverview />
        <RiskValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EnterpriseRiskRegister />
        <KeyRiskIndicatorCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RiskAssessmentCenter />
        <RiskTreatmentDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <BusinessContinuityDashboard />
        <DisasterRecoveryCenter />
        <CrisisOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecoveryReadinessDashboard />
        <EnterpriseResilienceDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RiskComplianceMatrix />
        <RiskHealthDashboard />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ConstitutionalRiskLedger />
      </div>
    </div>
  );
}
