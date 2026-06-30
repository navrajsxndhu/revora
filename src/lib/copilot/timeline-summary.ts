import { buildIncidentContext } from "./context-builder";
import { invokeCopilot } from "./copilot";

export async function generateTimelineSummary(incidentId: string) {
  const context = await buildIncidentContext(incidentId);
  const summary = await invokeCopilot(
    context, 
    "Timeline Compressor", 
    "Condense the incident timeline into chronological bullet points. Ignore noise and redundant retries. Keep timestamps."
  );
  return summary;
}
