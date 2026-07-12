"use client";

import { useEffect, useState } from "react";
import { ImmunityIndexPanel } from "@/components/mission-control/immunity/immunity-index-panel";
import { PathogenDetectionGrid } from "@/components/mission-control/immunity/pathogen-detection-grid";
import { GovernanceIntegrityChart } from "@/components/mission-control/immunity/governance-integrity-chart";
import { QuarantineCoordinationTable } from "@/components/mission-control/immunity/quarantine-coordination-table";
import { ContinuityAntibodyFeed } from "@/components/mission-control/immunity/continuity-antibody-feed";
import { ImmunitySimulationPanel } from "@/components/mission-control/immunity/immunity-simulation-panel";
import { ContainmentHorizonCard } from "@/components/mission-control/immunity/containment-horizon-card";
import { SurvivabilityProtectionMap } from "@/components/mission-control/immunity/survivability-protection-map";
import { Loader2, Terminal } from "lucide-react";

export default function OperationalImmunityPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // We could fetch a comprehensive aggregation or individual endpoints.
  // We'll mock a fetch aggregation to represent the final system state.
  
  useEffect(() => {
    // In a real implementation this would hit an aggregated /api/immunity/dashboard
    // For this phase, we mock the dashboard structure and set realistic derived values.
    setTimeout(() => {
      setData({
        index: {
          immunityScore: 82.5,
          immunityClass: "RESILIENT",
          containmentSurvivabilityHorizon: "LONG_TERM_STABILITY"
        },
        pathogen: {
          pathogenScore: 25.0,
          contaminationSeverity: 15.0,
          propagationVelocity: 1.2,
          classification: "SPREADING"
        },
        integrity: {
          purityScore: 90.0,
          corruptionExposure: 10.0,
          integrityConfidence: 85.0
        },
        quarantine: {
          activeQuarantines: 1,
          containmentStatus: "CONTAINED",
          restrictionLevel: "STANDARD_QUARANTINE"
        },
        antibody: {
          antibodyStrength: 75.0,
          activeAntibodies: 3,
          deployedDoctrines: ["TEMPORAL_DEBT_STABILIZATION", "CONSTITUTIONAL_REINFORCEMENT"],
          evidence: []
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
            <Terminal className="h-6 w-6 text-slate-400" />
            The Operational Immunity Plane
          </h2>
          <p className="text-muted-foreground text-slate-400">
            Deterministic pathogen detection and survivability containment.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2">
          <ImmunityIndexPanel data={data?.index} />
        </div>
        <div className="col-span-2">
          <ContainmentHorizonCard horizon={data?.index?.containmentSurvivabilityHorizon || "UNKNOWN"} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <PathogenDetectionGrid data={data?.pathogen} />
        <GovernanceIntegrityChart data={data?.integrity} />
        <QuarantineCoordinationTable data={data?.quarantine} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 space-y-4">
          <SurvivabilityProtectionMap data={{
            activeQuarantines: data?.quarantine?.activeQuarantines || 0,
            containmentStatus: data?.quarantine?.containmentStatus || "SECURE",
            pathogenClassification: data?.pathogen?.classification || "ISOLATED"
          }} />
          <ContinuityAntibodyFeed data={data?.antibody} />
        </div>
        <div className="col-span-3">
          <ImmunitySimulationPanel />
        </div>
      </div>
    </div>
  );
}
