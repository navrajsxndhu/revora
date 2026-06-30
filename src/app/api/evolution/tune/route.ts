import { NextResponse } from "next/server";
import { tuneGovernanceParameters } from "@/lib/evolution/parameter-tuning";

export async function POST(req: Request) {
  try {
    const { workspaceId } = await req.json();
    const result = await tuneGovernanceParameters(workspaceId);
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
