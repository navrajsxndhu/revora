import { NextResponse } from "next/server";
import { ApiSimulator } from "@/lib/api-governance/api-simulator";

export async function POST() {
  const body = await req.json();
  const result = await ApiSimulator.simulate("ws-1", body.scenario);
  return NextResponse.json({ success: true, result });
}
