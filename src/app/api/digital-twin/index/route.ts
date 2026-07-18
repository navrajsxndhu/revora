import { NextResponse } from "next/server";
import { DigitalTwinIndex } from "@/lib/digital-twin/digital-twin-index";

export async function GET() {
  const index = await DigitalTwinIndex.getIndex("ws-1");
  return NextResponse.json({ success: true, index });
}
