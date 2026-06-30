import React from "react";
import { CopilotPanel } from "./copilot-panel";

export function ExecutiveBrief({ summary }: { summary: string | null }) {
  return (
    <div className="my-8">
      <CopilotPanel summary={summary} title="Executive Brief" icon="📊" />
    </div>
  );
}
