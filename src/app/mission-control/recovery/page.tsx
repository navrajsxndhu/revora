import React from 'react';
import { EnterpriseBackupCenter } from "@/components/mission-control/recovery/enterprise-backup-center";
import { RecoveryOperationsDashboard } from "@/components/mission-control/recovery/recovery-operations-dashboard";
import { RestoreOperationsCenter } from "@/components/mission-control/recovery/restore-operations-center";
import { SnapshotManagementDashboard } from "@/components/mission-control/recovery/snapshot-management-dashboard";
import { ReplicationOperationsCenter } from "@/components/mission-control/recovery/replication-operations-center";
import { RecoveryValidationDashboard } from "@/components/mission-control/recovery/recovery-validation-dashboard";
import { ArchiveGovernanceCenter } from "@/components/mission-control/recovery/archive-governance-center";
import { FailoverOperationsCenter } from "@/components/mission-control/recovery/failover-operations-center";
import { FailbackDashboard } from "@/components/mission-control/recovery/failback-dashboard";
import { RepositoryHealthCenter } from "@/components/mission-control/recovery/repository-health-center";
import { RetentionManagementDashboard } from "@/components/mission-control/recovery/retention-management-dashboard";
import { BackupAuditCenter } from "@/components/mission-control/recovery/backup-audit-center";
import { RecoveryEvidenceLedger } from "@/components/mission-control/recovery/recovery-evidence-ledger";
import { DisasterRecoveryExecutionCenter } from "@/components/mission-control/recovery/disaster-recovery-execution-center";
import { EnterpriseRecoveryOverview } from "@/components/mission-control/recovery/enterprise-recovery-overview";

export default function RecoveryGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Backup & Recovery Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing backups, replication, failover, and disaster recovery execution</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">RECOVERY GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EnterpriseBackupCenter />
        <RecoveryOperationsDashboard />
        <RestoreOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SnapshotManagementDashboard />
        <ReplicationOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecoveryValidationDashboard />
        <ArchiveGovernanceCenter />
        <FailoverOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FailbackDashboard />
        <RepositoryHealthCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RetentionManagementDashboard />
        <BackupAuditCenter />
        <RecoveryEvidenceLedger />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DisasterRecoveryExecutionCenter />
        <EnterpriseRecoveryOverview />
      </div>
    </div>
  );
}
