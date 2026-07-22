import { enforceTokenLimits, sanitizeContext, buildSystemPrompt } from "./guardrails";

// This is a deterministic mock representing our strict Copilot boundary.
// In production, this wraps the OpenAI or Anthropic SDK with temperature=0.
export async function invokeCopilot(
  context: string,
  role: string,
  constraint: string
): Promise<string> {
  const safeContext = enforceTokenLimits(sanitizeContext(context));
  const prompt = buildSystemPrompt(role, constraint);

  // We mock the "AI" generation by extracting explicit fields from the JSON context
  // to ensure it feels perfectly grounded and deterministic as required by the philosophy.
  
  try {
    const data = JSON.parse(safeContext);
    
    if (role.includes("Executive Briefing")) {
      return `**Incident Summary**
The ${data.incident?.serviceAffected || 'system'} experienced a ${data.incident?.severity || 'failure'} starting at ${data.incident?.createdAt}. 
Resolution was achieved at ${data.incident?.resolvedAt || 'TBD'}.

**Impact**
Service degradation on ${data.incident?.serviceAffected || 'core infrastructure'}.

**Context**
${data.deploymentsPrecedingIncident?.length ? 'Preceded by a recent deployment.' : 'No recent deployments detected prior to impact.'}
Orchestration failures detected: ${data.deadLetterFailures || 0}.`;
    }

    if (role.includes("Timeline Compressor")) {
      const events = data.timeline || [];
      return `**Timeline Synthesis**
${events.slice(0,5).map((e: unknown) => `- [${new Date(e.time).toISOString()}] ${e.type}: Executed by ${e.actor || 'System'}`).join('\n')}
${events.length > 5 ? `\n*(+ ${events.length - 5} additional internal state transitions suppressed for clarity)*` : ''}
`;
    }

    return "Summary generated successfully based on bounded context.";
  } catch(e) {
    return "Insufficient data to determine a structured summary.";
  }
}
