import React from 'react';
import { EnterpriseDigitalWorkplaceOverview } from "@/components/mission-control/collaboration/enterprise-digital-workplace-overview";
import { CollaborationWorkspaceDashboard } from "@/components/mission-control/collaboration/collaboration-workspace-dashboard";
import { CollaborationChannelCenter } from "@/components/mission-control/collaboration/collaboration-channel-center";
import { MeetingGovernanceDashboard } from "@/components/mission-control/collaboration/meeting-governance-dashboard";
import { CalendarOperationsCenter } from "@/components/mission-control/collaboration/calendar-operations-center";
import { ProductivityGovernanceDashboard } from "@/components/mission-control/collaboration/productivity-governance-dashboard";
import { WorkspacePermissionsMatrix } from "@/components/mission-control/collaboration/workspace-permissions-matrix";
import { IntegrationOperationsCenter } from "@/components/mission-control/collaboration/integration-operations-center";
import { CollaborationArchiveDashboard } from "@/components/mission-control/collaboration/collaboration-archive-dashboard";
import { CollaborationComplianceMatrix } from "@/components/mission-control/collaboration/collaboration-compliance-matrix";
import { CollaborationValidationCenter } from "@/components/mission-control/collaboration/collaboration-validation-center";
import { ConstitutionalCollaborationLedger } from "@/components/mission-control/collaboration/constitutional-collaboration-ledger";
import { CollaborationAuditDashboard } from "@/components/mission-control/collaboration/collaboration-audit-dashboard";
import { CollaborationHealthDashboard } from "@/components/mission-control/collaboration/collaboration-health-dashboard";
import { ExecutiveDigitalWorkplaceDashboard } from "@/components/mission-control/collaboration/executive-digital-workplace-dashboard";

export default function CollaborationGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Digital Workplace & Collaboration Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing enterprise workspaces, meetings, and productivity platforms</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-500 font-mono text-sm">COLLABORATION GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveDigitalWorkplaceDashboard />
        <EnterpriseDigitalWorkplaceOverview />
        <CollaborationValidationCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CollaborationWorkspaceDashboard />
        <CollaborationChannelCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <MeetingGovernanceDashboard />
        <CalendarOperationsCenter />
        <ProductivityGovernanceDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WorkspacePermissionsMatrix />
        <IntegrationOperationsCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CollaborationArchiveDashboard />
        <CollaborationComplianceMatrix />
        <CollaborationAuditDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConstitutionalCollaborationLedger />
        <CollaborationHealthDashboard />
      </div>
    </div>
  );
}
