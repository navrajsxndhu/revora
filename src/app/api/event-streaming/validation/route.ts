import { NextResponse } from "next/server";
import { StreamValidationEngine } from "@/lib/event-streaming/stream-validation-engine";

export async function GET() {
  const validation = await StreamValidationEngine.validate("ws-1");
  return NextResponse.json({ success: true, validation });
}
