import { calculateOrganizationalHealth } from "./organizational-health";
import { extractOperationalSignals } from "./operational-signals";
import { correlateIntelligence } from "./intelligence-correlation";
import { recordIntelligenceSnapshot } from "./intelligence-ledger";
import { simulateIntelligenceScenario } from "./intelligence-simulator";
import { calculateIntelligenceIndex } from "./intelligence-index";

export async function orchestrateOperationalIntelligence(workspaceId: string) {
  // 1. Calculate Organizational Health across 20 prior subsystems
  const { organizationalHealth, components } = calculateOrganizationalHealth();

  // 2. Extract Deterministic Operational Signals
  const signals = extractOperationalSignals();

  // 3. Map Intelligence Correlations based on rigid evidence
  const correlations = correlateIntelligence(signals, components);

  // 4. Update Maturity Index
  const index = await calculateIntelligenceIndex(workspaceId);

  // 5. Commit Intelligence Snapshot to Ledger (Immutable)
  const snapshotRecord = await recordIntelligenceSnapshot(
    workspaceId,
    index.intelligenceScore,
    organizationalHealth,
    index.intelligenceClass,
    signals,
    correlations
  );

  // 6. Provide baseline simulation
  const defaultSimulation = simulateIntelligenceScenario('INCIDENT_SURGE');

  return {
    snapshotRecord,
    index,
    components,
    defaultSimulation
  };
}
