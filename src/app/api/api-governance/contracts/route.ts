import { NextResponse } from "next/server";
import { ApiContractEngine } from "@/lib/api-governance/api-contract-engine";

export async function GET() {
  const contracts = await ApiContractEngine.getContracts("ws-1");
  return NextResponse.json({ success: true, contracts });
}
