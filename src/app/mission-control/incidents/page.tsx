"use client";

import { useEffect, useState } from "react";
import { ActiveIncidents } from "@/components/mission-control/incidents/active-incidents";
import { IncidentTimeline } from "@/components/mission-control/incidents/incident-timeline";
import { RootCauseEvidence } from "@/components/mission-control/incidents/root-cause-evidence";
import { RecoveryCenter } from "@/components/mission-control/incidents/recovery-center";
import { ImpactMatrix } from "@/components/mission-control/incidents/impact-matrix";
import { HistoricalLibrary } from "@/components/mission-control/incidents/historical-library";
import { IncidentSimulator } from "@/components/mission-control/incidents/incident-simulator";
import { IncidentHealthMetrics } from "@/components/mission-control/incidents/incident-health-metrics";
import { Loader2, ShieldAlert } from "lucide-react";

export default function EnterpriseIncidentsPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated deterministic extraction payload
    setTimeout(() => {
      setData({
        active: [
          { title: "Database Migration Drift: Core Auth", severity: "SEV-1", status: "ACTIVE", duration: "14m", affectedServices: "Auth, APIGateway", businessImpact: "Critical" }
        ],
        timeline: [
          { eventType: "RELEASE_STARTED", description: "Enterprise Release #148 initiated", timestamp: new Date(Date.now() - 3600000).toISOString(), sourceSubsystem: "RELEASE_MANAGER" },
          { eventType: "CANARY_DEPLOYED", description: "5% synthetic traffic routed to canary", timestamp: new Date(Date.now() - 3500000).toISOString(), sourceSubsystem: "EXECUTION" },
          { eventType: "ASSURANCE_FAILED", description: "Query latency threshold exceeded by 400ms", timestamp: new Date(Date.now() - 3400000).toISOString(), sourceSubsystem: "ASSURANCE" },
          { eventType: "INCIDENT_DECLARED", description: "SEV-1 Drift declared automatically", timestamp: new Date(Date.now() - 3390000).toISOString(), sourceSubsystem: "INTELLIGENCE" }
        ],
        evidence: [
          { evidenceType: "EXECUTION_REPLAY", referenceId: "exec_9a8b", deterministicProof: "Latency at p99 reached 1.2s", timestamp: new Date(Date.now() - 3400000).toISOString() },
          { evidenceType: "INFRASTRUCTURE_STATE", referenceId: "db_cluster_02", deterministicProof: "CPU saturation at 98%", timestamp: new Date(Date.now() - 3400000).toISOString() }
        ],
        recovery: {
          stages: ["ISOLATE_TRAFFIC", "PROMOTE_SHADOW", "REVERT_SCHEMA", "RESTORE_PRIMARY"],
          rollbackReadiness: true,
          progress: 25,
          estimatedCompletion: "8m"
        },
        impact: {
          services: ["Auth", "APIGateway", "IdentityProfile"],
          regions: ["us-east-1", "eu-central-1"],
          customersAffected: 1240,
          treasuryBurn: 850.50,
          reliabilityHit: 0.04
        },
        history: [
          { title: "Redis Connection Pool Exhaustion", severity: "SEV-2", status: "RESOLVED", date: new Date(Date.now() - 86400000 * 3).toISOString() },
          { title: "Third-party CDN Outage", severity: "SEV-1", status: "RESOLVED", date: new Date(Date.now() - 86400000 * 12).toISOString() }
        ],
        health: {
          mttd: "4.2m",
          mttr: "12.8m",
          frequency: "0.8/wk",
          rollbackSuccess: "98.2%",
          recoverySuccess: "100%",
          repeatRate: "1.5%"
        }
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-slate-500" />
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
            <ShieldAlert className="h-6 w-6 text-rose-500" />
            Enterprise Incident Management
          </h2>
          <p className="text-muted-foreground text-slate-400">
            Immutable, deterministic operational intelligence and root cause reconstruction.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-5 space-y-4">
          <ActiveIncidents incidents={data?.active} />
          
          <div className="grid gap-4 grid-cols-2">
            <IncidentTimeline timeline={data?.timeline} />
            <RootCauseEvidence evidence={data?.evidence} />
          </div>

          <div className="grid gap-4 grid-cols-2">
            <RecoveryCenter recovery={data?.recovery} />
            <ImpactMatrix impact={data?.impact} />
          </div>
        </div>
        
        <div className="col-span-2 space-y-4">
          <IncidentHealthMetrics health={data?.health} />
          <IncidentSimulator />
          <HistoricalLibrary history={data?.history} />
        </div>
      </div>
    </div>
  );
}
