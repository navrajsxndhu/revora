import { extractOperationalKnowledge } from "./knowledge-extraction";
import { trackDoctrineEvolution } from "./doctrine-evolution";
import { deriveOperationalWisdom } from "./operational-wisdom";
import { constructInstitutionalMemory } from "./institutional-memory";
import { calculateKnowledgeIndex } from "./knowledge-index";

export async function processOperationalKnowledge(workspaceId: string) {
  // 1. Extract Knowledge
  const extractionData = await extractOperationalKnowledge(workspaceId);

  // 2. Track Doctrine
  const doctrineData = await trackDoctrineEvolution(workspaceId);

  // 3. Derive Wisdom
  const wisdomData = await deriveOperationalWisdom(workspaceId);

  // 4. Construct Memory Graph
  const memoryData = await constructInstitutionalMemory(workspaceId);

  // 5. Calculate Knowledge Index
  const indexData = calculateKnowledgeIndex(
    extractionData,
    doctrineData,
    wisdomData,
    memoryData
  );

  // Conceptually we could persist the new knowledge index score to `OperationalKnowledge` table here
  // For the sake of the deterministic cycle, returning the aggregated structure

  return {
    extraction: extractionData,
    doctrine: doctrineData,
    wisdom: wisdomData,
    memory: memoryData,
    index: indexData,
    timestamp: new Date().toISOString()
  };
}
