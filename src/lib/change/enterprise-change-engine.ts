import { prisma } from "@/lib/prisma";
import { validateOperationalChange } from "./change-validation";
import { generateImpactAssessment } from "./impact-analysis";
import { determineRequiredApprovals } from "./approval-engine";

export async function orchestrateOperationalChange(workspaceId: string, changePayload: any) {
  // Master orchestrator for Operational Change Management
  
  // 1. Initial Creation
  const change = await prisma.operationalChange.create({
    data: {
      workspaceId,
      title: changePayload.title,
      description: changePayload.description,
      category: changePayload.category,
      priority: changePayload.priority,
      status: "DRAFT",
      requester: changePayload.requester,
      owner: changePayload.owner
    }
  });

  // 2. Validate against Constitution and active incidents
  const validation = await validateOperationalChange(change.id);
  
  // 3. Generate Impact
  const impact = await generateImpactAssessment(change.id);
  
  // 4. Route Approvals
  const approvals = await determineRequiredApprovals(change.id, change.category as string);

  return { change, validation, impact, approvals };
}
