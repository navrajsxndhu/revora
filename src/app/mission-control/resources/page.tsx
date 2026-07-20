import React from 'react';
import { ResourceOverview } from '@/components/mission-control/resources/ResourceOverview';
import { CapacityDashboard } from '@/components/mission-control/resources/CapacityDashboard';
import { AllocationCenter } from '@/components/mission-control/resources/AllocationCenter';
import { ReservationStatus } from '@/components/mission-control/resources/ReservationStatus';
import { QuotaGovernance } from '@/components/mission-control/resources/QuotaGovernance';
import { UtilizationMetrics } from '@/components/mission-control/resources/UtilizationMetrics';
import { BudgetOverview } from '@/components/mission-control/resources/BudgetOverview';
import { CostCenters } from '@/components/mission-control/resources/CostCenters';
import { ChargebackSummary } from '@/components/mission-control/resources/ChargebackSummary';
import { ShowbackSummary } from '@/components/mission-control/resources/ShowbackSummary';
import { RuntimeIntegration } from '@/components/mission-control/resources/RuntimeIntegration';
import { ComplianceCenter } from '@/components/mission-control/resources/ComplianceCenter';
import { LedgerTimeline } from '@/components/mission-control/resources/LedgerTimeline';
import { AuditEvents } from '@/components/mission-control/resources/AuditEvents';
import { ExecutiveSummary } from '@/components/mission-control/resources/ExecutiveSummary';

export default function ResourceGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Enterprise Resource Governance</h1>
        <p className="text-slate-400 text-sm mt-1">Constitutional Cost & Capacity Ledger</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <ResourceOverview />
        <CapacityDashboard />
        <AllocationCenter />
        <ReservationStatus />
        <QuotaGovernance />
        <UtilizationMetrics />
        <BudgetOverview />
        <CostCenters />
        <ChargebackSummary />
        <ShowbackSummary />
        <RuntimeIntegration />
        <ComplianceCenter />
        <LedgerTimeline />
        <AuditEvents />
        <ExecutiveSummary />
      </div>
    </div>
  );
}
