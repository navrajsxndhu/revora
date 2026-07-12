"use client";

import { useEffect, useState } from "react";
import { DecisionIndexPanel } from "@/components/mission-control/decision/decision-index-panel";
import { DecisionContextViewer } from "@/components/mission-control/decision/decision-context-viewer";
import { DecisionAlternativesTable } from "@/components/mission-control/decision/decision-alternatives-table";
import { TradeoffMatrix } from "@/components/mission-control/decision/tradeoff-matrix";
import { DecisionLedger } from "@/components/mission-control/decision/decision-ledger";
import { DecisionSimulationPanel } from "@/components/mission-control/decision/decision-simulation-panel";
import { DecisionEvidenceChain } from "@/components/mission-control/decision/decision-evidence-chain";
import { DecisionOutcomeTimeline } from "@/components/mission-control/decision/decision-outcome-timeline";
import { Loader2, GitBranch } from "lucide-react";

export default function OperationalDecisionPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation this would fetch from /api/decision/index
    // We mock the response to represent the deterministic state.
    setTimeout(() => {
      setData({
        index: {
          decisionScore: 88.5,
          decisionClass: "INSTITUTIONAL",
          decisionMaturity: "HIGHLY_REPRODUCIBLE"
        },
        context: {
          activeRisks: 0,
          availableCapacity: 100,
          constitutionalConstraints: [],
          operationalConstraints: ["Institutional memory graph indicates high maturity; conservative scaling authorized."]
        },
        alternatives: [
          {
            optionName: "CANARY_1_PERCENT",
            description: "Minimal risk rollout strategy.",
            evidence: ["Historical doctrine indicates lowest MTTR with 1% canaries."]
          },
          {
            optionName: "CANARY_5_PERCENT",
            description: "Balanced velocity rollout.",
            evidence: ["Knowledge graph supports 5% based on previous sustained epochs."]
          },
          {
            optionName: "IMMEDIATE_ROLLOUT",
            description: "High velocity, high risk rollout.",
            evidence: ["Available due to 0 active risks and high operational capacity."]
          }
        ],
        tradeoffs: [
          { optionName: "CANARY_1_PERCENT", velocityScore: 30, reliabilityScore: 90, survivabilityImpact: 5.0, treasuryImpact: 2.0, ranking: 1 },
          { optionName: "CANARY_5_PERCENT", velocityScore: 60, reliabilityScore: 70, survivabilityImpact: 2.0, treasuryImpact: 5.0, ranking: 2 },
          { optionName: "IMMEDIATE_ROLLOUT", velocityScore: 100, reliabilityScore: 30, survivabilityImpact: -15.0, treasuryImpact: 10.0, ranking: 3 }
        ],
        ledger: [
          { decisionType: "DEPLOYMENT_STRATEGY", selectedOption: "CANARY_5_PERCENT", decisionScore: 82.5, createdAt: new Date().toISOString() },
          { decisionType: "EMERGENCY_MITIGATION", selectedOption: "FREEZE_DEPLOYMENT", decisionScore: 95.0, createdAt: new Date(Date.now() - 86400000).toISOString() }
        ],
        timeline: {
          totalDecisions: 412,
          decisionClass: "INSTITUTIONAL",
          decisionMaturity: "HIGHLY_REPRODUCIBLE"
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
            <GitBranch className="h-6 w-6 text-indigo-400" />
            The Operational Decision Plane
          </h2>
          <p className="text-muted-foreground text-slate-400">
            Deterministic derivation, transparent trade-offs, and auditable evidence for executive decision-making.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2">
          <DecisionIndexPanel data={data?.index} />
        </div>
        <div className="col-span-2">
          <DecisionContextViewer context={data?.context} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DecisionAlternativesTable alternatives={data?.alternatives} />
        <TradeoffMatrix tradeoffs={data?.tradeoffs} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 space-y-4">
          <DecisionSimulationPanel />
          <DecisionLedger ledger={data?.ledger} />
        </div>
        <div className="col-span-3 space-y-4">
          <DecisionEvidenceChain evidence={data?.index?.evidence || ["High volume of deterministic decisions indicates full institutional adoption."]} />
          <DecisionOutcomeTimeline data={data?.timeline} />
        </div>
      </div>
    </div>
  );
}
