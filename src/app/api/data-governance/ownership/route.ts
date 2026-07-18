import { NextResponse } from "next/server";
import { OwnershipEngine } from "@/lib/data-governance/ownership-engine";

export async function GET() {
  const owners = await OwnershipEngine.getOwners("ws-1");
  return NextResponse.json({ success: true, owners });
}
