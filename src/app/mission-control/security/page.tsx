import React from 'react';
import { EnterpriseSecurityOverview } from "@/components/mission-control/security/enterprise-security-overview";
import { ZeroTrustOperationsCenter } from "@/components/mission-control/security/zero-trust-operations-center";
import { SecurityPolicyDashboard } from "@/components/mission-control/security/security-policy-dashboard";
import { SecurityControlMatrix } from "@/components/mission-control/security/security-control-matrix";
import { SecurityIncidentCenter } from "@/components/mission-control/security/security-incident-center";
import { ThreatIntelligenceDashboard } from "@/components/mission-control/security/threat-intelligence-dashboard";
import { VulnerabilityOperationsCenter } from "@/components/mission-control/security/vulnerability-operations-center";
import { PatchComplianceDashboard } from "@/components/mission-control/security/patch-compliance-dashboard";
import { EndpointSecurityCenter } from "@/components/mission-control/security/endpoint-security-center";
import { IdentityProtectionDashboard } from "@/components/mission-control/security/identity-protection-dashboard";
import { SecurityComplianceMatrix } from "@/components/mission-control/security/security-compliance-matrix";
import { SecurityValidationCenter } from "@/components/mission-control/security/security-validation-center";
import { ConstitutionalSecurityLedger } from "@/components/mission-control/security/constitutional-security-ledger";
import { SecurityHealthDashboard } from "@/components/mission-control/security/security-health-dashboard";
import { ExecutiveSecurityDashboard } from "@/components/mission-control/security/executive-security-dashboard";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Security Operations & Cyber Defense</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing Zero Trust architecture and security controls</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-500 font-mono text-sm">SECURITY: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveSecurityDashboard />
        <EnterpriseSecurityOverview />
        <SecurityValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ZeroTrustOperationsCenter />
        <IdentityProtectionDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SecurityPolicyDashboard />
        <SecurityControlMatrix />
        <EndpointSecurityCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ThreatIntelligenceDashboard />
        <SecurityIncidentCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VulnerabilityOperationsCenter />
        <PatchComplianceDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SecurityComplianceMatrix />
        <SecurityHealthDashboard />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ConstitutionalSecurityLedger />
      </div>
    </div>
  );
}
