import { NextResponse } from "next/server";
import { DigitalTwinSimulator } from "@/lib/digital-twin/digital-twin-simulator";

export async function POST() {
  const body = await req.json();
  const result = await DigitalTwinSimulator.simulate("ws-1", body.action, body.targetId);
  return NextResponse.json({ success: true, result });
}
