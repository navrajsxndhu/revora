import React from "react";

interface PageShellProps {
  children: React.ReactNode;
}

/**
 * PageShell — Constitutional page wrapper for every Revora enterprise screen.
 * Provides consistent max-width, padding, spacing, and flex layout.
 */
export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        {children}
      </div>
    </div>
  );
}
