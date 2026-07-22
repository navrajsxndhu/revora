import { NextRequest, NextResponse } from "next/server";
import { tuneGovernanceParameters } from "@/lib/evolution/parameter-tuning";

export async function POST(req: NextRequest) {
  try {
    const { workspaceId } = await req.json();
    const result = await tuneGovernanceParameters(workspaceId);
    return NextResponse.json(result);
  } catch (error: unknown) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
