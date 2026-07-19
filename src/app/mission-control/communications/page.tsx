import React from 'react';
import { EnterpriseCommunicationCenter } from "@/components/mission-control/communications/enterprise-communication-center";
import { NotificationOperationsDashboard } from "@/components/mission-control/communications/notification-operations-dashboard";
import { CommunicationChannelMatrix } from "@/components/mission-control/communications/communication-channel-matrix";
import { TemplateGovernanceCenter } from "@/components/mission-control/communications/template-governance-center";
import { DeliveryOperationsDashboard } from "@/components/mission-control/communications/delivery-operations-dashboard";
import { CommunicationQueueCenter } from "@/components/mission-control/communications/communication-queue-center";
import { RecipientOperationsBoard } from "@/components/mission-control/communications/recipient-operations-board";
import { SubscriptionManagementCenter } from "@/components/mission-control/communications/subscription-management-center";
import { PreferenceGovernanceDashboard } from "@/components/mission-control/communications/preference-governance-dashboard";
import { CommunicationPolicyCenter } from "@/components/mission-control/communications/communication-policy-center";
import { DeliveryReceiptDashboard } from "@/components/mission-control/communications/delivery-receipt-dashboard";
import { ArchiveOperationsCenter } from "@/components/mission-control/communications/archive-operations-center";
import { CommunicationEvidenceLedger } from "@/components/mission-control/communications/communication-evidence-ledger";
import { CommunicationAuditDashboard } from "@/components/mission-control/communications/communication-audit-dashboard";
import { ExecutiveCommunicationsCommandCenter } from "@/components/mission-control/communications/executive-communications-command-center";

export default function CommunicationsGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Communications, Notifications & Messaging Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing enterprise notifications, deliveries, scheduling, and messaging queues</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">COMMUNICATION GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EnterpriseCommunicationCenter />
        <NotificationOperationsDashboard />
        <CommunicationChannelMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TemplateGovernanceCenter />
        <DeliveryOperationsDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CommunicationQueueCenter />
        <RecipientOperationsBoard />
        <SubscriptionManagementCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PreferenceGovernanceDashboard />
        <CommunicationPolicyCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DeliveryReceiptDashboard />
        <ArchiveOperationsCenter />
        <CommunicationEvidenceLedger />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CommunicationAuditDashboard />
        <ExecutiveCommunicationsCommandCenter />
      </div>
    </div>
  );
}
