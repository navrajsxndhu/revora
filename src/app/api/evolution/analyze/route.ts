import { NextResponse } from "next/server";
import { runEvolutionCycle } from "@/lib/evolution/evolution-engine";

export async function POST(req: Request) {
  try {
    const { workspaceId, serviceName } = await req.json();
    const result = await runEvolutionCycle(workspaceId, serviceName);
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
