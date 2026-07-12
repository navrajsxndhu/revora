import { ExtractionResult } from "./knowledge-extraction";
import { DoctrineEvolutionResult } from "./doctrine-evolution";
import { OperationalWisdomResult } from "./operational-wisdom";
import { MemoryGraphResult } from "./institutional-memory";

export type KnowledgeClass = "DOCUMENTED" | "STRUCTURED" | "EVOLVING" | "INSTITUTIONAL" | "OPERATIONAL_KNOWLEDGE_SYSTEM";

export interface KnowledgeIndexResult {
  knowledgeScore: number;
  knowledgeClass: KnowledgeClass;
  knowledgeMaturity: string;
  evidence: string[];
}

export function calculateKnowledgeIndex(
  extraction: ExtractionResult,
  doctrine: DoctrineEvolutionResult,
  wisdom: OperationalWisdomResult,
  memory: MemoryGraphResult
): KnowledgeIndexResult {
  const evidence: string[] = [];
  
  let score = extraction.confidenceScore * 0.25;
  score += doctrine.lineageDepth * 5; // Up to ~25 if lineage is deep
  score += wisdom.confidenceScore * 0.25;
  score += memory.memoryDensity * 0.25;

  score = Math.max(0, Math.min(100, score));

  let knowledgeClass: KnowledgeClass = "DOCUMENTED";
  let maturity = "LOW_MATURITY";

  if (score >= 90) {
    knowledgeClass = "OPERATIONAL_KNOWLEDGE_SYSTEM";
    maturity = "CIVILIZATIONAL_MEMORY";
  } else if (score >= 75) {
    knowledgeClass = "INSTITUTIONAL";
    maturity = "PERMANENT_RECORD";
  } else if (score >= 50) {
    knowledgeClass = "EVOLVING";
    maturity = "ADAPTING_DOCTRINE";
  } else if (score >= 25) {
    knowledgeClass = "STRUCTURED";
    maturity = "CLASSIFIED_EVIDENCE";
  } else {
    knowledgeClass = "DOCUMENTED";
    maturity = "RAW_HISTORY";
  }

  evidence.push(`Operational Knowledge Score calculated at ${score.toFixed(1)}/100.`);
  evidence.push(`Classified as ${knowledgeClass} with ${maturity} maturity.`);

  return {
    knowledgeScore: score,
    knowledgeClass,
    knowledgeMaturity: maturity,
    evidence
  };
}
