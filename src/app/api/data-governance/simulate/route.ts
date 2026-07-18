import { NextResponse } from "next/server";
import { MetadataSimulator } from "@/lib/data-governance/metadata-simulator";

export async function POST(req: Request) {
  const body = await req.json();
  const result = await MetadataSimulator.simulate("ws-1", body.scenario);
  return NextResponse.json({ success: true, result });
}
