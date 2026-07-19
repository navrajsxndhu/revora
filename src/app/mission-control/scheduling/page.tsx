import React from 'react';
import { EnterpriseCalendarCenter } from "@/components/mission-control/scheduling/enterprise-calendar-center";
import { SchedulingOperationsDashboard } from "@/components/mission-control/scheduling/scheduling-operations-dashboard";
import { ResourceReservationCenter } from "@/components/mission-control/scheduling/resource-reservation-center";
import { ResourceAvailabilityMatrix } from "@/components/mission-control/scheduling/resource-availability-matrix";
import { MaintenanceScheduleDashboard } from "@/components/mission-control/scheduling/maintenance-schedule-dashboard";
import { SchedulingConstraintCenter } from "@/components/mission-control/scheduling/scheduling-constraint-center";
import { CalendarIntegrationBoard } from "@/components/mission-control/scheduling/calendar-integration-board";
import { RecurringScheduleDashboard } from "@/components/mission-control/scheduling/recurring-schedule-dashboard";
import { ConflictManagementCenter } from "@/components/mission-control/scheduling/conflict-management-center";
import { TimeZoneOperationsDashboard } from "@/components/mission-control/scheduling/time-zone-operations-dashboard";
import { ScheduleApprovalCenter } from "@/components/mission-control/scheduling/schedule-approval-center";
import { ScheduleEvidenceLedger } from "@/components/mission-control/scheduling/schedule-evidence-ledger";
import { SchedulingAuditDashboard } from "@/components/mission-control/scheduling/scheduling-audit-dashboard";
import { EnterpriseTimelineCenter } from "@/components/mission-control/scheduling/enterprise-timeline-center";
import { ExecutiveSchedulingCommandCenter } from "@/components/mission-control/scheduling/executive-scheduling-command-center";

export default function SchedulingGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 space-y-6 text-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Enterprise Scheduling & Calendar Governance</h1>
          <p className="text-slate-400 mt-2">Deterministic constitutional authority governing reservations, constraints, and time coordination</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-indigo-950 border border-indigo-900 rounded-md">
            <span className="text-indigo-400 font-mono text-sm">SCHEDULING GOVERNANCE: ENFORCED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EnterpriseCalendarCenter />
        <SchedulingOperationsDashboard />
        <EnterpriseTimelineCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ResourceReservationCenter />
        <ResourceAvailabilityMatrix />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <MaintenanceScheduleDashboard />
        <SchedulingConstraintCenter />
        <CalendarIntegrationBoard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecurringScheduleDashboard />
        <ConflictManagementCenter />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TimeZoneOperationsDashboard />
        <ScheduleApprovalCenter />
        <ScheduleEvidenceLedger />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SchedulingAuditDashboard />
        <ExecutiveSchedulingCommandCenter />
      </div>
    </div>
  );
}
