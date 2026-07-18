import { NextResponse } from "next/server";
import { RelationshipEngine } from "@/lib/topology/relationship-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const relationships = await RelationshipEngine.getRelationships(workspaceId);
    return NextResponse.json({ relationships });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch relationships" }, { status: 500 });
  }
}
