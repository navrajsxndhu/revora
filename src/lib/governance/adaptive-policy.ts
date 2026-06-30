export function determinePolicyOutcome(restrictionLevel: string) {
  switch (restrictionLevel) {
    case 'SAFE': return { status: 'PASS', message: 'Reliability budget is healthy. Direct deployment permitted.' };
    case 'WATCHLIST': return { status: 'WARN', message: 'Reliability budget declining. Consider phased rollout.' };
    case 'RESTRICTED': return { status: 'CANARY_ONLY', message: 'Service is restricted. Only 5% canary rollouts permitted.' };
    case 'FROZEN': return { status: 'BLOCK', message: 'Deployment frozen due to CRITICAL reliability debt.' };
    default: return { status: 'PASS', message: 'Unknown state. Defaulting to PASS.' };
  }
}
