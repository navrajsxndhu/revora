import { NextResponse } from "next/server";
import { tuneGovernanceParameters } from "@/lib/evolution/parameter-tuning";

export async function POST() {
  try {
    const { workspaceId } = await req.json();
    const result = await tuneGovernanceParameters(workspaceId);
    return NextResponse.json(result);
  } catch (error: unknown) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
