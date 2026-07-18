import { NextResponse } from "next/server";
import { MetadataLedger } from "@/lib/data-governance/metadata-ledger";

export async function GET() {
  const history = await MetadataLedger.getLedger("ws-1");
  return NextResponse.json({ success: true, history });
}
