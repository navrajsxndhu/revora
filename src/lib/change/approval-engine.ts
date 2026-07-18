import { prisma } from "@/lib/prisma";

export async function determineRequiredApprovals(changeId: string, category: string) {
  const roles = ["Platform Engineering", "Security", "SRE"];
  
  const approvals = [];
  for (const role of roles) {
    const approval = await prisma.changeApproval.create({
      data: {
        changeId,
        approver: "SYSTEM", role: String(role), decision: "PENDING", workspaceId: "SYSTEM"
      }
    });
    approvals.push(approval);
  }
  return approvals;
}
