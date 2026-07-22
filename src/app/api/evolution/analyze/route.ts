import { NextRequest, NextResponse } from "next/server";
import { runEvolutionCycle } from "@/lib/evolution/evolution-engine";

export async function POST(req: NextRequest) {
  try {
    const { workspaceId, serviceName } = await req.json();
    const result = await runEvolutionCycle(workspaceId, serviceName);
    return NextResponse.json(result);
  } catch (error: unknown) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
