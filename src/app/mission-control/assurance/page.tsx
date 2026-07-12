"use client";

import { useEffect, useState } from "react";
import { AssuranceIndexPanel } from "@/components/mission-control/assurance/assurance-index-panel";
import { IntentVsOutcomeTable } from "@/components/mission-control/assurance/intent-vs-outcome-table";
import { VerificationTimeline } from "@/components/mission-control/assurance/verification-timeline";
import { DriftValidationGrid } from "@/components/mission-control/assurance/drift-validation-grid";
import { AssuranceEvidenceViewer } from "@/components/mission-control/assurance/assurance-evidence-viewer";
import { CounterfactualSimulationPanel } from "@/components/mission-control/assurance/counterfactual-simulation-panel";
import { OperationalAssuranceFeed } from "@/components/mission-control/assurance/operational-assurance-feed";
import { VerificationStatusCard } from "@/components/mission-control/assurance/verification-status-card";
import { Loader2, ShieldCheck } from "lucide-react";

export default function OperationalAssurancePage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation this would fetch from /api/assurance/index and related
    setTimeout(() => {
      setData({
        index: {
          assuranceScore: 92.5,
          assuranceClass: "OPERATIONAL_ASSURANCE_CIVILIZATION",
          verificationMaturity: "MATHEMATICALLY_PROVEN"
        },
        intentVsOutcome: {
          intent: {
            objective: "Decrease Global MTTR",
            expectedOutcome: "Latency < 200ms, Treasury Delta > 0"
          },
          actuals: {
            latencyDelta: "-45ms",
            treasuryDelta: "+1.2%",
            reliabilityDelta: "+0.4%"
          }
        },
        timeline: {
          totalVerifications: 818,
          passedVerifications: 810,
          failedVerifications: 8
        },
        drift: {
          driftCategory: "TREASURY_DECAY",
          severity: "MODERATE"
        },
        evidence: [
          { evidenceType: "TELEMETRY_DELTA", sourceReference: "METRIC_STORE_REF_01", evidenceWeight: 1.0 },
          { evidenceType: "TREASURY_IMPACT", sourceReference: "ECONOMY_LEDGER_REF_02", evidenceWeight: 0.8 },
          { evidenceType: "SURVIVABILITY_CHECK", sourceReference: "IMMUNITY_CORE_REF_03", evidenceWeight: 0.95 }
        ],
        logs: [
          "Operational Intent formally defined and locked prior to execution.",
          "Execution successfully completed and transferred to Verification Plane.",
          "Telemetry ingested: Latency -45ms. Treasury +1.2%.",
          "Outcome mathematically mapped against Intent.",
          "Verification PASS: Achieved expected operational outcome without regression.",
          "Evidence chain sealed and cryptographically linked to execution record.",
          "Drift monitor active on trailing treasury velocity."
        ],
        health: {
          systemStatus: "VERIFIED",
          lastVerified: new Date().toISOString()
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
            <ShieldCheck className="h-6 w-6 text-teal-400" />
            The Operational Assurance Plane
          </h2>
          <p className="text-muted-foreground text-slate-400">
            Independent verification distinguishing execution success from operational outcome success.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2">
          <AssuranceIndexPanel data={data?.index} />
        </div>
        <div className="col-span-2 space-y-4">
          <VerificationTimeline timeline={data?.timeline} />
          <VerificationStatusCard status={data?.health} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <IntentVsOutcomeTable intent={data?.intentVsOutcome?.intent} actuals={data?.intentVsOutcome?.actuals} />
        </div>
        <div className="col-span-1">
          <DriftValidationGrid drift={data?.drift} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-3 space-y-4">
          <AssuranceEvidenceViewer evidence={data?.evidence} />
          <CounterfactualSimulationPanel />
        </div>
        <div className="col-span-4">
          <OperationalAssuranceFeed logs={data?.logs} />
        </div>
      </div>
    </div>
  );
}
