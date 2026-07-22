import { NextResponse } from "next/server";
import { KnowledgeSimulator } from "@/lib/knowledge/knowledge-simulator";

export async function POST() {
  const body = await req.json();
  const result = await KnowledgeSimulator.simulate("ws-1", body.scenario);
  return NextResponse.json({ success: true, result });
}
