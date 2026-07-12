"use client";

import { useEffect, useState } from "react";
import { AdaptationIndexPanel } from "@/components/mission-control/adaptation/adaptation-index-panel";
import { ConvergenceChart } from "@/components/mission-control/adaptation/convergence-chart";
import { OptimizationLedgerTable } from "@/components/mission-control/adaptation/optimization-ledger-table";
import { GovernanceOptimizationGrid } from "@/components/mission-control/adaptation/governance-optimization-grid";
import { AdaptationSimulationPanel } from "@/components/mission-control/adaptation/adaptation-simulation-panel";
import { StabilityImprovementCard } from "@/components/mission-control/adaptation/stability-improvement-card";
import { OptimizationTimeline } from "@/components/mission-control/adaptation/optimization-timeline";
import { EvidenceChainViewer } from "@/components/mission-control/adaptation/evidence-chain-viewer";
import { Loader2, Fingerprint } from "lucide-react";

export default function OperationalAdaptationPage() {
  const [data, setData] = useState<any>(null);
  const [evidence, setEvidence] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation this would fetch from /api/adaptation/index and /api/adaptation/evidence
    // We mock the response to represent the deterministic state.
    setTimeout(() => {
      setData({
        index: {
          adaptationScore: 88.5,
          adaptationClass: "SELF_OPTIMIZING",
          optimizationMaturity: "HIGHLY_ADAPTIVE"
        },
        convergence: {
          convergenceScore: 82.0,
          optimizationDelta: 5.5,
          classification: "CONVERGING"
        },
        governance: {
          optimizationCategory: "RESILIENCE_TUNING",
          projectedImprovement: 12.5,
          parametersTuned: {
            "rolloutPacing": "CONSERVATIVE",
            "observationWindow": "EXTENDED_48H"
          }
        },
        stability: {
          survivabilityImprovement: 15.0,
          resilienceDelta: 4.2
        }
      });
      
      setEvidence([
        {
          adaptationType: "VELOCITY_OPTIMIZATION",
          previousConfiguration: "BASELINE_UNOPTIMIZED",
          optimizedConfiguration: '{"rolloutPacing":"AGGRESSIVE"}',
          mathematicalEvidence: "Projected delta: +8.00",
          constitutionalValidation: "VALIDATED_BY_DETERMINISTIC_ENGINE",
          createdAt: new Date().toISOString()
        }
      ]);
      
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
            <Fingerprint className="h-6 w-6 text-slate-400" />
            The Operational Adaptation Plane
          </h2>
          <p className="text-muted-foreground text-slate-400">
            Deterministic optimization, mathematical convergence, and auditable evolution.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2">
          <AdaptationIndexPanel data={data?.index} />
        </div>
        <div className="col-span-2">
          <StabilityImprovementCard data={data?.stability} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ConvergenceChart data={data?.convergence} />
        <GovernanceOptimizationGrid data={data?.governance} />
        <OptimizationTimeline evidence={evidence} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 space-y-4">
          <AdaptationSimulationPanel />
          <EvidenceChainViewer evidence={evidence} />
        </div>
        <div className="col-span-3">
          <OptimizationLedgerTable evidence={evidence} />
        </div>
      </div>
    </div>
  );
}
