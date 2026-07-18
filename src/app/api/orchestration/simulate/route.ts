import { NextResponse } from "next/server";
import { ExecutionSimulator } from "@/lib/orchestration/execution-simulator";

export async function POST(req: Request) {
  const body = await req.json();
  const result = await ExecutionSimulator.simulate("ws-1", body.action, body.targetId);
  return NextResponse.json({ success: true, result });
}
