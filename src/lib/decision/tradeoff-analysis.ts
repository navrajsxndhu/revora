import { DecisionAlternative } from "./decision-derivation";

export interface TradeoffMatrixRow {
  optionName: string;
  velocityScore: number;
  reliabilityScore: number;
  survivabilityImpact: number;
  treasuryImpact: number;
  ranking: number;
}

export function analyzeTradeoffs(alternatives: DecisionAlternative[]): TradeoffMatrixRow[] {
  return alternatives.map(alt => {
    let velocityScore = 0;
    let reliabilityScore = 0;
    let survivabilityImpact = 0;
    let treasuryImpact = 0;
    let ranking = 0;

    switch (alt.optionName) {
      case "FREEZE_DEPLOYMENT":
        velocityScore = 0;
        reliabilityScore = 100;
        survivabilityImpact = +15.0;
        treasuryImpact = -5.0; // Opportunity cost
        ranking = 1;
        break;
      case "EMERGENCY_PATCH_ONLY":
        velocityScore = 10;
        reliabilityScore = 80;
        survivabilityImpact = +10.0;
        treasuryImpact = -2.0;
        ranking = 2;
        break;
      case "CANARY_1_PERCENT":
        velocityScore = 30;
        reliabilityScore = 90;
        survivabilityImpact = +5.0;
        treasuryImpact = +2.0;
        ranking = 1;
        break;
      case "CANARY_5_PERCENT":
        velocityScore = 60;
        reliabilityScore = 70;
        survivabilityImpact = +2.0;
        treasuryImpact = +5.0;
        ranking = 2;
        break;
      case "IMMEDIATE_ROLLOUT":
        velocityScore = 100;
        reliabilityScore = 30;
        survivabilityImpact = -15.0;
        treasuryImpact = +10.0;
        ranking = 3;
        break;
    }

    return {
      optionName: alt.optionName,
      velocityScore,
      reliabilityScore,
      survivabilityImpact,
      treasuryImpact,
      ranking
    };
  }).sort((a, b) => a.ranking - b.ranking);
}
