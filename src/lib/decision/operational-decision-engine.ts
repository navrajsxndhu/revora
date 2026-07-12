import { constructDecisionContext } from "./decision-context";
import { deriveAlternatives } from "./decision-derivation";
import { analyzeTradeoffs } from "./tradeoff-analysis";
import { calculateDecisionIndex } from "./decision-index";

export async function processOperationalDecision(workspaceId: string) {
  // 1. Construct Context
  const context = await constructDecisionContext(workspaceId);

  // 2. Derive Alternatives
  const alternatives = deriveAlternatives(context);

  // 3. Analyze Trade-offs
  const tradeoffs = analyzeTradeoffs(alternatives);

  // 4. Calculate Decision Index
  const indexData = await calculateDecisionIndex(workspaceId);

  return {
    context,
    alternatives,
    tradeoffs,
    index: indexData,
    timestamp: new Date().toISOString()
  };
}
