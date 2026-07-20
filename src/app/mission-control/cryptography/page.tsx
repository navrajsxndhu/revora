import React from 'react';
import { SecretVaultOverview } from '@/components/mission-control/cryptography/SecretVaultOverview';
import { SecretLifecycle } from '@/components/mission-control/cryptography/SecretLifecycle';
import { KeyManagement } from '@/components/mission-control/cryptography/KeyManagement';
import { CertificateCenter } from '@/components/mission-control/cryptography/CertificateCenter';
import { TrustStoreStatus } from '@/components/mission-control/cryptography/TrustStoreStatus';
import { SigningIdentities } from '@/components/mission-control/cryptography/SigningIdentities';
import { CryptographicPolicies } from '@/components/mission-control/cryptography/CryptographicPolicies';
import { ValidationStatus } from '@/components/mission-control/cryptography/ValidationStatus';
import { RuntimeIntegration } from '@/components/mission-control/cryptography/RuntimeIntegration';
import { ComplianceCenter } from '@/components/mission-control/cryptography/ComplianceCenter';
import { LedgerTimeline } from '@/components/mission-control/cryptography/LedgerTimeline';
import { AuditEvents } from '@/components/mission-control/cryptography/AuditEvents';
import { SecurityPosture } from '@/components/mission-control/cryptography/SecurityPosture';
import { RotationGovernance } from '@/components/mission-control/cryptography/RotationGovernance';
import { ExecutiveSummary } from '@/components/mission-control/cryptography/ExecutiveSummary';

export default function CryptographyGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Enterprise Cryptographic Governance</h1>
        <p className="text-slate-400 text-sm mt-1">Constitutional PKI & Secrets Ledger</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <SecretVaultOverview />
        <SecretLifecycle />
        <KeyManagement />
        <CertificateCenter />
        <TrustStoreStatus />
        <SigningIdentities />
        <CryptographicPolicies />
        <ValidationStatus />
        <RuntimeIntegration />
        <ComplianceCenter />
        <LedgerTimeline />
        <AuditEvents />
        <SecurityPosture />
        <RotationGovernance />
        <ExecutiveSummary />
      </div>
    </div>
  );
}
