import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { incidentAnalysisQueue } from "@/lib/queue/queue";
import { broadcastEvent } from "@/lib/events/emitter";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  const operatorId = session?.user?.email || "System";

  const resolvedParams = await params;
  try {
    const originalExecution = await prisma.workflowExecution.findUnique({
      where: { id: resolvedParams.id }
    });

    if (!originalExecution) {
      return NextResponse.json({ error: "Execution not found" }, { status: 404 });
    }

    const originalTrace = await prisma.apiTrace.findFirst({
      where: { workflowExecutionId: originalExecution.id }
    });

    if (!originalTrace) {
      return NextResponse.json({ error: "No trace found for replay" }, { status: 400 });
    }

    // 1. Create a NEW execution for the replay (Immutability)
    const newExecutionId = crypto.randomUUID();
    
    await prisma.workflowExecution.create({
      data: {
        id: newExecutionId,
        workflowId: originalExecution.workflowId,
        state: "QUEUED",
      }
    });

    await prisma.auditLog.create({
      data: {
        workspaceId: "system",
        executionId: newExecutionId,
        eventType: "REPLAY_INITIATED",
        status: "SUCCESS",
        message: `Execution ${originalExecution.id} replayed as ${newExecutionId}`,
        actor: "system"
      }
    });

    // 2. Clone trace
    const newTraceId = crypto.randomUUID();
    await prisma.apiTrace.create({
      data: {
        workspaceId: "system",
        id: newTraceId,
        workflowExecutionId: newExecutionId,
        nodeId: originalTrace.nodeId,
        status: "QUEUED",
        latencyMs: 0,
        requestPayload: originalTrace.requestPayload,
        timestamp: new Date(),
      }
    });

    // 3. Enqueue the replay
    await incidentAnalysisQueue.add('analyze-failure', { 
      traceId: newTraceId, 
      executionId: newExecutionId,
      payload: JSON.parse(originalTrace.requestPayload || '{}') 
    });

    broadcastEvent("EXECUTION_REPLAYED", { originalId: originalExecution.id, newId: newExecutionId });

    return NextResponse.json({ success: true, newExecutionId });
  } catch {
    return NextResponse.json({ error: "Failed to replay execution" }, { status: 500 });
  }
}
