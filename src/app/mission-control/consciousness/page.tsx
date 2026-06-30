"use client";

import { useEffect, useState } from "react";
import { ConsciousnessIndexPanel } from "@/components/mission-control/consciousness/consciousness-index-panel";
import { SystemicAwarenessGraph } from "@/components/mission-control/consciousness/systemic-awareness-graph";
import { PerceptionIntegrityGrid } from "@/components/mission-control/consciousness/perception-integrity-grid";
import { CivilizationCoherenceMap } from "@/components/mission-control/consciousness/civilization-coherence-map";
import { ContinuityCognitionTimeline } from "@/components/mission-control/consciousness/continuity-cognition-timeline";
import { ConsciousnessSimulationPanel } from "@/components/mission-control/consciousness/consciousness-simulation-panel";
import { AwarenessSurvivabilityCard } from "@/components/mission-control/consciousness/awareness-survivability-card";
import { OperationalCoherenceFeed } from "@/components/mission-control/consciousness/operational-coherence-feed";
import { Loader2 } from "lucide-react";

export default function OperationalConsciousnessPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchConsciousness = async () => {
    try {
      const res = await fetch("/api/consciousness/projections");
      if (!res.ok) throw new Error("Failed to fetch consciousness data");
      const d = await res.json();
      setData(d);
    } catch (err) {
      console.error("Error loading Operational Consciousness Plane");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConsciousness();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-slate-500" />
      </div>
    );
  }

  // The projection API gives the full ConsciousnessIndexResult which contains everything 
  // we need for the index panel and feed.
  // We'll need to refetch specific module details or we can assume the UI components
  // will fetch their own, but since we have a monolithic page we could fetch them here.

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-100">The Operational Consciousness Plane</h2>
          <p className="text-muted-foreground text-slate-400">
            Deterministic civilization-scale awareness and institutional continuity coordination.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2">
          <ConsciousnessIndexPanel data={data} />
        </div>
        <div className="col-span-2">
          <AwarenessSurvivabilityCard horizon={data?.awarenessSurvivabilityHorizon || "UNKNOWN"} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* We'll use mocked sub-data for now unless we do full API integration for each card */}
        <SystemicAwarenessGraph data={{
          awarenessScore: 85,
          coherenceIntegrity: 92,
          causalityDensity: 0.8,
          classification: "COHERENT"
        }} />
        <PerceptionIntegrityGrid data={{
          integrityScore: 90,
          blindSpotIndex: 10,
          synchronizationDrift: 5
        }} />
        <CivilizationCoherenceMap data={{
          coherenceScore: 88,
          continuityAlignment: 95,
          survivabilityAgreement: 82
        }} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <OperationalCoherenceFeed evidence={data?.evidence || []} />
        </div>
        <div className="col-span-3 space-y-4">
          <ContinuityCognitionTimeline data={{
            multiEraLinkage: 75,
            survivabilityCausality: 85,
            governanceSync: 90
          }} />
          <ConsciousnessSimulationPanel />
        </div>
      </div>
    </div>
  );
}
