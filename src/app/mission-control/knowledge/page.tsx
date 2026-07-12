"use client";

import { useEffect, useState } from "react";
import { KnowledgeIndexPanel } from "@/components/mission-control/knowledge/knowledge-index-panel";
import { DoctrineLibrary } from "@/components/mission-control/knowledge/doctrine-library";
import { WisdomFeed } from "@/components/mission-control/knowledge/wisdom-feed";
import { InstitutionalMemoryGraph } from "@/components/mission-control/knowledge/institutional-memory-graph";
import { KnowledgeEvidenceViewer } from "@/components/mission-control/knowledge/knowledge-evidence-viewer";
import { KnowledgeSimulationPanel } from "@/components/mission-control/knowledge/knowledge-simulation-panel";
import { DoctrineEvolutionTimeline } from "@/components/mission-control/knowledge/doctrine-evolution-timeline";
import { OperationalKnowledgeTable } from "@/components/mission-control/knowledge/operational-knowledge-table";
import { Loader2, LibraryBig } from "lucide-react";

export default function OperationalKnowledgePage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation this would fetch from /api/knowledge/index
    // We mock the response to represent the deterministic state.
    setTimeout(() => {
      setData({
        index: {
          knowledgeScore: 92.5,
          knowledgeClass: "OPERATIONAL_KNOWLEDGE_SYSTEM",
          knowledgeMaturity: "CIVILIZATIONAL_MEMORY"
        },
        extraction: {
          extractedDoctrines: [
            "High incident density requires mandatory extended observation windows.",
            "Resilience tuning yielding >10% improvement becomes permanent operational baseline."
          ],
          supportingEvidence: [
            "Extracted from 8 recent resolved incidents.",
            "Extracted from recent high-impact resilience tuning optimizations."
          ]
        },
        doctrine: {
          activeDoctrines: 14,
          supersededDoctrines: 26,
          lineageDepth: 5,
          evidence: []
        },
        wisdom: {
          derivedWisdom: [
            "Continuous resilience transitions fundamentally decouple organizational survivability from individual operational failures.",
            "Deployment pacing below 2 deployments/hour consistently improves survivability."
          ]
        },
        memory: {
          totalLinks: 245,
          memoryDensity: 88.5,
          graphStatus: "DENSELY_CONNECTED"
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
            <LibraryBig className="h-6 w-6 text-slate-400" />
            The Operational Knowledge Plane
          </h2>
          <p className="text-muted-foreground text-slate-400">
            Deterministic institutional memory, auditable doctrine, and evidence-backed operational wisdom.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2">
          <KnowledgeIndexPanel data={data?.index} />
        </div>
        <div className="col-span-2">
          <InstitutionalMemoryGraph data={data?.memory} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DoctrineLibrary doctrines={data?.extraction?.extractedDoctrines} />
        <WisdomFeed wisdom={data?.wisdom?.derivedWisdom} />
        <DoctrineEvolutionTimeline data={data?.doctrine} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 space-y-4">
          <KnowledgeSimulationPanel />
          <OperationalKnowledgeTable knowledgeData={data?.index} />
        </div>
        <div className="col-span-3">
          <KnowledgeEvidenceViewer evidence={data?.extraction?.supportingEvidence} />
        </div>
      </div>
    </div>
  );
}
