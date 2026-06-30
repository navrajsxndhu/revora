export function enforceTokenLimits(context: string, maxTokens = 4000): string {
  // Very rough approximation: 1 token = 4 chars
  const maxChars = maxTokens * 4;
  if (context.length > maxChars) {
    return context.substring(0, maxChars) + "\n...[TRUNCATED FOR CONTEXT BOUNDS]";
  }
  return context;
}

export function sanitizeContext(context: string): string {
  // Strip common secrets matching patterns
  return context
    .replace(/(sk_[a-zA-Z0-9]{20,})/g, '[REDACTED_STRIPE_KEY]')
    .replace(/(ghp_[a-zA-Z0-9]{30,})/g, '[REDACTED_GH_TOKEN]');
}

export function buildSystemPrompt(role: string, constraint: string): string {
  return `
    You are the Revora Operational Intelligence Copilot.
    Your role is: ${role}
    
    STRICT CONSTRAINTS:
    - ${constraint}
    - NEVER invent data, timelines, or root causes.
    - Base all conclusions STRICTLY on the provided context.
    - If the context is insufficient, explicitly state "Insufficient data to determine."
    - Output must be calm, operational, and non-conversational.
  `;
}
