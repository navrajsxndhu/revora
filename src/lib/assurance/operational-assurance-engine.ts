import { verifyOutcome } from "./outcome-verification";
import { getOperationalIntent } from "./operational-intent";
import { collectAssuranceEvidence, getAssuranceEvidenceChain } from "./assurance-evidence";
import { detectOperationalDrift } from "./drift-validator";
import { calculateAssuranceIndex } from "./assurance-index";

export async function processOperationalAssurance(workspaceId: string, executionId: string) {
  // 1. Retrieve the original intent
  const intent = await getOperationalIntent(executionId);

  // 2. Mathematically verify the outcome against the intent
  const verification = await verifyOutcome(executionId);

  // 3. Log evidence supporting the verification
  if (verification) {
    await collectAssuranceEvidence(verification.id, "TELEMETRY_DELTA", "METRIC_STORE_REF_01", 1.0);
    await collectAssuranceEvidence(verification.id, "TREASURY_IMPACT", "ECONOMY_LEDGER_REF_02", 0.8);
  }

  // 4. Check for latent drift
  const drift = await detectOperationalDrift(workspaceId);

  // 5. Update Assurance Index
  const index = await calculateAssuranceIndex(workspaceId);

  // 6. Fetch complete evidence chain
  const evidence = verification ? await getAssuranceEvidenceChain(verification.id) : [];

  return {
    intent,
    verification,
    evidence,
    drift,
    index
  };
}
