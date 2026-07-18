import React from 'react';
import { ConfigurationOverview } from "@/components/mission-control/configuration-governance/configuration-overview";
import { EnterpriseConfigurationRegistry } from "@/components/mission-control/configuration-governance/enterprise-configuration-registry";
import { EnvironmentCenter } from "@/components/mission-control/configuration-governance/environment-center";
import { ConfigurationTemplateCenter } from "@/components/mission-control/configuration-governance/configuration-template-center";
import { SecretReferenceCenter } from "@/components/mission-control/configuration-governance/secret-reference-center";
import { SecretProviderCenter } from "@/components/mission-control/configuration-governance/secret-provider-center";
import { CertificateCenter } from "@/components/mission-control/configuration-governance/certificate-center";
import { EncryptionCenter } from "@/components/mission-control/configuration-governance/encryption-center";
import { RotationPolicyCenter } from "@/components/mission-control/configuration-governance/rotation-policy-center";
import { ConfigurationValidation } from "@/components/mission-control/configuration-governance/configuration-validation";
import { ConfigurationTimeline } from "@/components/mission-control/configuration-governance/configuration-timeline";
import { ConfigurationLedger } from "@/components/mission-control/configuration-governance/configuration-ledger";
import { ConfigurationSimulator } from "@/components/mission-control/configuration-governance/configuration-simulator";
import { ConfigurationAssessments } from "@/components/mission-control/configuration-governance/configuration-assessments";
import { ExecutiveConfigurationDashboard } from "@/components/mission-control/configuration-governance/executive-configuration-dashboard";

export default function ConfigurationGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Configuration Operations Center</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing runtime configuration</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-900 rounded-md">
            <span className="text-emerald-500 font-mono text-sm">STATUS: OPTIMAL</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveConfigurationDashboard />
        <ConfigurationOverview />
        <ConfigurationAssessments />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EnterpriseConfigurationRegistry />
        <EnvironmentCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConfigurationTemplateCenter />
        <SecretReferenceCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SecretProviderCenter />
        <CertificateCenter />
        <EncryptionCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RotationPolicyCenter />
        <ConfigurationValidation />
        <ConfigurationSimulator />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConfigurationTimeline />
        <ConfigurationLedger />
      </div>
    </div>
  );
}
