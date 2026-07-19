import React from 'react';
import { ExecutiveCustomerExperienceOverview } from "@/components/mission-control/customer-experience/executive-customer-experience-overview";
import { CustomerJourneyCenter } from "@/components/mission-control/customer-experience/customer-journey-center";
import { OmnichannelOperationsDashboard } from "@/components/mission-control/customer-experience/omnichannel-operations-dashboard";
import { InteractionGovernanceMatrix } from "@/components/mission-control/customer-experience/interaction-governance-matrix";
import { CustomerCommunicationCenter } from "@/components/mission-control/customer-experience/customer-communication-center";
import { ExperiencePolicyDashboard } from "@/components/mission-control/customer-experience/experience-policy-dashboard";
import { CustomerFeedbackDashboard } from "@/components/mission-control/customer-experience/customer-feedback-dashboard";
import { JourneyComplianceMatrix } from "@/components/mission-control/customer-experience/journey-compliance-matrix";
import { DigitalTouchpointCenter } from "@/components/mission-control/customer-experience/digital-touchpoint-center";
import { CustomerPreferenceDashboard } from "@/components/mission-control/customer-experience/customer-preference-dashboard";
import { NotificationOperationsCenter } from "@/components/mission-control/customer-experience/notification-operations-center";
import { ExperienceAuditDashboard } from "@/components/mission-control/customer-experience/experience-audit-dashboard";
import { ConstitutionalExperienceLedger } from "@/components/mission-control/customer-experience/constitutional-experience-ledger";
import { CustomerSatisfactionDashboard } from "@/components/mission-control/customer-experience/customer-satisfaction-dashboard";
import { ExecutiveCustomerExperienceCommandCenter } from "@/components/mission-control/customer-experience/executive-customer-experience-command-center";

export default function CustomerExperienceGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Customer Experience & Journey Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing omnichannel engagement and customer journeys</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">EXPERIENCE GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExecutiveCustomerExperienceCommandCenter />
        <ExecutiveCustomerExperienceOverview />
        <CustomerJourneyCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OmnichannelOperationsDashboard />
        <InteractionGovernanceMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CustomerCommunicationCenter />
        <NotificationOperationsCenter />
        <DigitalTouchpointCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CustomerFeedbackDashboard />
        <CustomerSatisfactionDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CustomerPreferenceDashboard />
        <ExperiencePolicyDashboard />
        <ExperienceAuditDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <JourneyComplianceMatrix />
        <ConstitutionalExperienceLedger />
      </div>
    </div>
  );
}
