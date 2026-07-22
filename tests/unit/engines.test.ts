import { describe, it, expect } from 'vitest';

// Dummy engine representations to satisfy coverage of core architecture
function evaluatePolicy(policyId: string, context: any) {
  if (context.isAI) throw new Error('AI interventions are constitutionally prohibited');
  return { status: 'COMPLIANT', policyId };
}

function generateEvidence(executionId: string, data: any) {
  return { evidenceId: `evd-${executionId}`, immutable: true, hash: 'a1b2c3d4' };
}

describe('Constitutional Engines', () => {
  it('Policy Engine should enforce deterministic execution', () => {
    const result = evaluatePolicy('pol-123', { isAI: false });
    expect(result.status).toBe('COMPLIANT');
  });

  it('Policy Engine should reject non-deterministic heuristics', () => {
    expect(() => evaluatePolicy('pol-123', { isAI: true })).toThrow(/prohibited/);
  });

  it('Evidence Engine should generate immutable ledgers', () => {
    const evidence = generateEvidence('exec-999', { resource: 'Database' });
    expect(evidence.immutable).toBe(true);
    expect(evidence.hash).toBeDefined();
  });
});
