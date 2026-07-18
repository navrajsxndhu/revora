import { NextResponse } from "next/server";
import { RelationshipEngine } from "@/lib/knowledge/relationship-engine";

export async function GET() {
  const relationships = await RelationshipEngine.getRelationships("ws-1");
  return NextResponse.json({ success: true, relationships });
}
