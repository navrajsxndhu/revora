"use client";

import React from "react";
import { KnowledgeOverview } from "./knowledge-overview";
import { KnowledgeLibrary } from "./knowledge-library";
import { DecisionMemory } from "./decision-memory";
import { KnowledgeGraph } from "./knowledge-graph";
import { ArchitectureDecisions } from "./architecture-decisions";
import { RunbookCenter } from "./runbook-center";
import { PlaybookCenter } from "./playbook-center";
import { KnowledgeRelationships } from "./knowledge-relationships";
import { KnowledgeReviews } from "./knowledge-reviews";
import { KnowledgeGaps } from "./knowledge-gaps";
import { KnowledgeCoverage } from "./knowledge-coverage";
import { KnowledgeTimeline } from "./knowledge-timeline";
import { KnowledgeLedger } from "./knowledge-ledger";
import { KnowledgeSimulator } from "./knowledge-simulator";

export function ExecutiveKnowledgeDashboard() {
  return (
    <div className="p-6 space-y-6 bg-slate-950 min-h-screen">
      <div className="border-b border-slate-800 pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-200 font-sans tracking-tight">Enterprise Knowledge & Decision Memory</h1>
          <p className="text-xs text-slate-500 font-mono mt-1">Immutable institutional learning and deterministic knowledge graph.</p>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-emerald-400 font-mono font-bold animate-pulse">MEMORY ENGINE ONLINE</div>
          <div className="text-[10px] text-slate-500 font-mono mt-1">RECORDING ALL DECISIONS</div>
        </div>
      </div>

      <KnowledgeOverview />

      <div className="grid grid-cols-12 gap-6 h-[400px]">
        <div className="col-span-4 h-full"><KnowledgeLibrary /></div>
        <div className="col-span-4 h-full"><DecisionMemory /></div>
        <div className="col-span-4 h-full"><KnowledgeGraph /></div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[300px]">
        <div className="col-span-4 h-full"><ArchitectureDecisions /></div>
        <div className="col-span-4 h-full"><RunbookCenter /></div>
        <div className="col-span-4 h-full"><KnowledgeCoverage /></div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[300px]">
        <div className="col-span-3 h-full"><PlaybookCenter /></div>
        <div className="col-span-3 h-full"><KnowledgeRelationships /></div>
        <div className="col-span-3 h-full"><KnowledgeReviews /></div>
        <div className="col-span-3 h-full"><KnowledgeGaps /></div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[250px]">
        <div className="col-span-4 h-full"><KnowledgeTimeline /></div>
        <div className="col-span-4 h-full"><KnowledgeLedger /></div>
        <div className="col-span-4 h-full"><KnowledgeSimulator /></div>
      </div>
    </div>
  );
}
