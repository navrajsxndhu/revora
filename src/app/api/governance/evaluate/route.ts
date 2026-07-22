import { NextRequest, NextResponse } from "next/server";
import { evaluateDeploymentPolicy } from "@/lib/governance/policy-evaluator";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { serviceName, workspaceId } = await req.json();

    if (!serviceName || !workspaceId) {
      return NextResponse.json({ error: "Missing serviceName or workspaceId" }, { status: 400 });
    }

    const evaluation = await evaluateDeploymentPolicy(workspaceId, serviceName);
    
    // Log the evaluation check (audit trail for CI/CD querying)
    await prisma.governanceEvent.create({
      data: {
        workspaceId,
        serviceName,
        actionType: 'POLICY_EVALUATED',
        reasoning: `Outcome: ${evaluation.status} - ${evaluation.message}`,
        actor: 'CI_CD_PIPELINE'
      }
    });

    return NextResponse.json(evaluation);
  } catch (error: unknown) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
