import React from 'react';
import { IdentityDirectoryCenter } from "@/components/mission-control/identity/identity-directory-center";
import { AuthenticationDashboard } from "@/components/mission-control/identity/authentication-dashboard";
import { AuthorizationMatrix } from "@/components/mission-control/identity/authorization-matrix";
import { FederationOperationsCenter } from "@/components/mission-control/identity/federation-operations-center";
import { IdentityLifecycleDashboard } from "@/components/mission-control/identity/identity-lifecycle-dashboard";
import { ServiceAccountCenter } from "@/components/mission-control/identity/service-account-center";
import { PrivilegedAccessDashboard } from "@/components/mission-control/identity/privileged-access-dashboard";
import { CredentialVaultCenter } from "@/components/mission-control/identity/credential-vault-center";
import { CredentialRotationBoard } from "@/components/mission-control/identity/credential-rotation-board";
import { AccessCertificationDashboard } from "@/components/mission-control/identity/access-certification-dashboard";
import { IdentityPolicyCenter } from "@/components/mission-control/identity/identity-policy-center";
import { IdentityEvidenceLedger } from "@/components/mission-control/identity/identity-evidence-ledger";
import { IdentityGovernanceCenter } from "@/components/mission-control/identity/identity-governance-center";
import { RuntimeIdentityMonitor } from "@/components/mission-control/identity/runtime-identity-monitor";
import { ConstitutionalIdentityDashboard } from "@/components/mission-control/identity/constitutional-identity-dashboard";

export default function IdentityGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Identity & Access Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing identity lifecycle, authentication, and credentials</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">IDENTITY GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <IdentityDirectoryCenter />
        <AuthenticationDashboard />
        <AuthorizationMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FederationOperationsCenter />
        <IdentityLifecycleDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ServiceAccountCenter />
        <PrivilegedAccessDashboard />
        <CredentialVaultCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CredentialRotationBoard />
        <AccessCertificationDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <IdentityPolicyCenter />
        <IdentityEvidenceLedger />
        <IdentityGovernanceCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RuntimeIdentityMonitor />
        <ConstitutionalIdentityDashboard />
      </div>
    </div>
  );
}
