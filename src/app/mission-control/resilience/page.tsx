import React from 'react';
import { ResilienceOverview } from '@/components/mission-control/resilience/ResilienceOverview';
import { ContinuityPlans } from '@/components/mission-control/resilience/ContinuityPlans';
import { RecoveryObjectives } from '@/components/mission-control/resilience/RecoveryObjectives';
import { CriticalServices } from '@/components/mission-control/resilience/CriticalServices';
import { OperationalReadiness } from '@/components/mission-control/resilience/OperationalReadiness';
import { CrisisScenarios } from '@/components/mission-control/resilience/CrisisScenarios';
import { ExerciseCenter } from '@/components/mission-control/resilience/ExerciseCenter';
import { DependencyMap } from '@/components/mission-control/resilience/DependencyMap';
import { RuntimeIntegration } from '@/components/mission-control/resilience/RuntimeIntegration';
import { ComplianceStatus } from '@/components/mission-control/resilience/ComplianceStatus';
import { MetricsDashboard } from '@/components/mission-control/resilience/MetricsDashboard';
import { EvidenceTimeline } from '@/components/mission-control/resilience/EvidenceTimeline';
import { LedgerView } from '@/components/mission-control/resilience/LedgerView';
import { AuditEvents } from '@/components/mission-control/resilience/AuditEvents';
import { ExecutiveSummary } from '@/components/mission-control/resilience/ExecutiveSummary';

export default function ResilienceGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Enterprise Resilience Governance</h1>
        <p className="text-slate-400 text-sm mt-1">Constitutional Continuity & Crisis Ledger</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <ResilienceOverview />
        <ContinuityPlans />
        <RecoveryObjectives />
        <CriticalServices />
        <OperationalReadiness />
        <CrisisScenarios />
        <ExerciseCenter />
        <DependencyMap />
        <RuntimeIntegration />
        <ComplianceStatus />
        <MetricsDashboard />
        <EvidenceTimeline />
        <LedgerView />
        <AuditEvents />
        <ExecutiveSummary />
      </div>
    </div>
  );
}
