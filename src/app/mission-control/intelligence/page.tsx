"use client";

import { useEffect, useState } from "react";
import { OrganizationalHealthPanel } from "@/components/mission-control/intelligence/organizational-health-panel";
import { OperationalSignalsGrid } from "@/components/mission-control/intelligence/operational-signals-grid";
import { IntelligenceCorrelationTable } from "@/components/mission-control/intelligence/intelligence-correlation-table";
import { SubsystemScoreMatrix } from "@/components/mission-control/intelligence/subsystem-score-matrix";
import { IntelligenceLedger } from "@/components/mission-control/intelligence/intelligence-ledger";
import { IntelligenceSimulationPanel } from "@/components/mission-control/intelligence/intelligence-simulation-panel";
import { OrganizationalTrendTimeline } from "@/components/mission-control/intelligence/organizational-trend-timeline";
import { ExecutiveIntelligenceDashboard } from "@/components/mission-control/intelligence/executive-intelligence-dashboard";
import { Loader2, BrainCircuit } from "lucide-react";

export default function OperationalIntelligencePage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation this would fetch from /api/intelligence/index and related routes
    setTimeout(() => {
      setData({
        index: {
          intelligenceScore: 92.5,
          intelligenceClass: "OPERATIONAL_INTELLIGENCE_CIVILIZATION",
          intelligenceMaturity: "EVIDENCE_DRIVEN_EXECUTIVE_AWARENESS"
        },
        health: 92.5,
        components: [
          { subsystem: "RELIABILITY", weight: 0.15, score: 99.2, contribution: 14.88 },
          { subsystem: "COORDINATION", weight: 0.15, score: 88.4, contribution: 13.26 },
          { subsystem: "PLANNING", weight: 0.10, score: 82.5, contribution: 8.25 },
          { subsystem: "CONSTITUTION", weight: 0.10, score: 100.0, contribution: 10.0 },
          { subsystem: "TREASURY", weight: 0.10, score: 94.0, contribution: 9.4 },
          { subsystem: "ASSURANCE", weight: 0.10, score: 96.5, contribution: 9.65 },
          { subsystem: "EXECUTION", weight: 0.10, score: 91.2, contribution: 9.12 },
          { subsystem: "KNOWLEDGE", weight: 0.10, score: 85.0, contribution: 8.5 },
          { subsystem: "IMMUNITY", weight: 0.10, score: 97.8, contribution: 9.78 }
        ],
        signals: [
          { signalName: "DEPLOYMENT_SUCCESS_TREND", signalValue: 99.4, signalCategory: "EXECUTION" },
          { signalName: "INCIDENT_DENSITY_7D", signalValue: 0.12, signalCategory: "RELIABILITY" },
          { signalName: "TREASURY_BURN_RATE", signalValue: 85.0, signalCategory: "ECONOMY" },
          { signalName: "CONSTITUTIONAL_COMPLIANCE", signalValue: 100.0, signalCategory: "GOVERNANCE" },
          { signalName: "COORDINATION_INTEGRITY", signalValue: 95.5, signalCategory: "COORDINATION" }
        ],
        correlations: [
          { sourceSubsystem: "PLANNING", targetSubsystem: "EXECUTION", correlationReason: "High planning maturity directly correlated with 99.4% deployment success.", evidenceReference: "SIGNAL:DEPLOYMENT_SUCCESS_TREND" },
          { sourceSubsystem: "COORDINATION", targetSubsystem: "RELIABILITY", correlationReason: "Coordination resource locks prevented 3 regional outages.", evidenceReference: "SIGNAL:INCIDENT_DENSITY_7D" }
        ],
        ledger: [
          { id: "cm02v89x", intelligenceScore: 92.5, organizationalHealth: 92.5, intelligenceClass: "OPERATIONAL_INTELLIGENCE_CIVILIZATION", createdAt: new Date(Date.now() - 3600000).toISOString() },
          { id: "cm02v89y", intelligenceScore: 91.2, organizationalHealth: 91.2, intelligenceClass: "OPERATIONAL_INTELLIGENCE_CIVILIZATION", createdAt: new Date(Date.now() - 86400000).toISOString() }
        ],
        simulation: {
          scenario: "INCIDENT_SURGE",
          projectedHealth: 79.8,
          survivabilityDelta: -15.2
        },
        timeline: [75, 78, 80, 81, 85, 87, 86, 89, 91.2, 92.5]
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
            <BrainCircuit className="h-6 w-6 text-indigo-400" />
            The Operational Intelligence Plane
          </h2>
          <p className="text-muted-foreground text-slate-400">
            Deterministic synthesis of organizational health and operational subsystems.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        <div className="col-span-2">
          <OrganizationalHealthPanel health={data?.health} intelligenceClass={data?.index?.intelligenceClass} maturity={data?.index?.intelligenceMaturity} />
        </div>
        <div className="col-span-2 space-y-4">
          <OrganizationalTrendTimeline timelineData={data?.timeline} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-7">
        <div className="col-span-2 space-y-4">
          <ExecutiveIntelligenceDashboard score={data?.index?.intelligenceScore} />
          <IntelligenceSimulationPanel simulation={data?.simulation} />
        </div>
        <div className="col-span-5 space-y-4">
          <div className="grid gap-4 grid-cols-1">
            <SubsystemScoreMatrix components={data?.components} />
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 space-y-4">
              <OperationalSignalsGrid signals={data?.signals} />
            </div>
            <div className="col-span-1 space-y-4">
              <IntelligenceCorrelationTable correlations={data?.correlations} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        <div className="col-span-1">
          <IntelligenceLedger ledgerEntries={data?.ledger} />
        </div>
      </div>
    </div>
  );
}
