export interface CoordinationNodeDef {
  id: string;
  nodeType: 'PLAN' | 'MILESTONE' | 'SERVICE' | 'REGION' | 'INFRASTRUCTURE';
  reference: string;
  role: string;
}

export interface CoordinationEdgeDef {
  sourceId: string;
  targetId: string;
  edgeType: 'SEQUENCING' | 'RESOURCE_CONTENTION' | 'CONSTITUTIONAL_DEPENDENCY';
}

export function buildCoordinationGraph(): { nodes: CoordinationNodeDef[], edges: CoordinationEdgeDef[] } {
  // Deterministically generate a macroscopic coordination graph mapping active plans and resources
  const nodes: CoordinationNodeDef[] = [
    { id: "NODE_PLAN_A", nodeType: "PLAN", reference: "Cloud Migration", role: "PRIMARY_INITIATIVE" },
    { id: "NODE_PLAN_B", nodeType: "PLAN", reference: "Security Audit", role: "COMPLIANCE_REQUIREMENT" },
    { id: "NODE_REGION_US_EAST", nodeType: "REGION", reference: "us-east-1", role: "EXECUTION_ENVIRONMENT" }
  ];

  const edges: CoordinationEdgeDef[] = [
    { sourceId: "NODE_PLAN_B", targetId: "NODE_PLAN_A", edgeType: "CONSTITUTIONAL_DEPENDENCY" },
    { sourceId: "NODE_PLAN_A", targetId: "NODE_REGION_US_EAST", edgeType: "RESOURCE_CONTENTION" }
  ];

  return { nodes, edges };
}
