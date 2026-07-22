"use client";

import React from "react";

/**
 * SkeletonLoader — Composable skeleton primitives that match the shape
 * of real components for perceived performance during route transitions.
 */

export function SkeletonPulse({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-slate-900 rounded animate-pulse ${className}`} aria-hidden="true" />
  );
}

export function SkeletonHeader() {
  return (
    <header className="flex justify-between items-end pb-6 border-b border-slate-900 shrink-0" aria-hidden="true">
      <div className="space-y-3">
        <SkeletonPulse className="h-4 w-40" />
        <SkeletonPulse className="h-8 w-72" />
        <SkeletonPulse className="h-4 w-96" />
      </div>
      <div className="flex items-center gap-4">
        <SkeletonPulse className="h-10 w-64 rounded-md" />
        <SkeletonPulse className="h-10 w-32 rounded-md" />
      </div>
    </header>
  );
}

export function SkeletonMetricGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 shrink-0" aria-hidden="true">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 relative overflow-hidden"
        >
          <div className="flex justify-between items-start mb-3">
            <SkeletonPulse className="h-4 w-24" />
            <SkeletonPulse className="h-4 w-4 rounded" />
          </div>
          <SkeletonPulse className="h-8 w-20 mb-2" />
          <SkeletonPulse className="h-3 w-28" />
        </div>
      ))}
    </div>
  );
}

export function SkeletonTable({ rows = 5, cols = 6 }: { rows?: number; cols?: number }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden flex-1" aria-hidden="true">
      <div className="p-4 border-b border-slate-800 flex items-center justify-between">
        <SkeletonPulse className="h-5 w-40" />
        <div className="flex gap-2">
          <SkeletonPulse className="h-8 w-8 rounded" />
          <SkeletonPulse className="h-8 w-8 rounded" />
          <SkeletonPulse className="h-8 w-8 rounded" />
        </div>
      </div>
      <div className="divide-y divide-slate-800/50">
        {Array.from({ length: rows }).map((_, r) => (
          <div key={r} className="flex items-center gap-4 px-5 py-4">
            {Array.from({ length: cols }).map((_, c) => (
              <SkeletonPulse
                key={c}
                className={`h-4 ${c === 0 ? "w-40" : c === cols - 1 ? "w-24" : "w-28"}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkeletonPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        <SkeletonHeader />
        <SkeletonMetricGrid />
        <SkeletonTable />
      </div>
    </div>
  );
}
