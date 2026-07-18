import React from 'react';
import { EnterpriseRulesOverview } from "@/components/mission-control/business-rules/enterprise-rules-overview";
import { BusinessRuleRegistry } from "@/components/mission-control/business-rules/business-rule-registry";
import { DecisionTableCenter } from "@/components/mission-control/business-rules/decision-table-center";
import { PolicyGovernanceDashboard } from "@/components/mission-control/business-rules/policy-governance-dashboard";
import { ApprovalMatrixCenter } from "@/components/mission-control/business-rules/approval-matrix-center";
import { RuleExecutionDashboard } from "@/components/mission-control/business-rules/rule-execution-dashboard";
import { ValidationRulesMatrix } from "@/components/mission-control/business-rules/validation-rules-matrix";
import { EligibilityOperationsCenter } from "@/components/mission-control/business-rules/eligibility-operations-center";
import { DecisionServicesDashboard } from "@/components/mission-control/business-rules/decision-services-dashboard";
import { RuleGovernanceBoard } from "@/components/mission-control/business-rules/rule-governance-board";
import { PolicyComplianceMatrix } from "@/components/mission-control/business-rules/policy-compliance-matrix";
import { DecisionValidationCenter } from "@/components/mission-control/business-rules/decision-validation-center";
import { ConstitutionalDecisionLedger } from "@/components/mission-control/business-rules/constitutional-decision-ledger";
import { RuleHealthDashboard } from "@/components/mission-control/business-rules/rule-health-dashboard";
import { ExecutiveDecisionGovernanceDashboard } from "@/components/mission-control/business-rules/executive-decision-governance-dashboard";

export default function BusinessRulesGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Business Rules & Decision Management</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing policies and decision execution</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">RULE GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveDecisionGovernanceDashboard />
        <EnterpriseRulesOverview />
        <DecisionValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BusinessRuleRegistry />
        <DecisionTableCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PolicyGovernanceDashboard />
        <ApprovalMatrixCenter />
        <RuleExecutionDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ValidationRulesMatrix />
        <EligibilityOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DecisionServicesDashboard />
        <RuleGovernanceBoard />
        <PolicyComplianceMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConstitutionalDecisionLedger />
        <RuleHealthDashboard />
      </div>
    </div>
  );
}
