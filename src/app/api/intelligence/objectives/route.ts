import { NextResponse } from "next/server";
import { BusinessObjectiveEngine } from "@/lib/intelligence/business-objective-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const objectives = await BusinessObjectiveEngine.getObjectives(workspaceId);
    return NextResponse.json({ objectives });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch objectives" }, { status: 500 });
  }
}
