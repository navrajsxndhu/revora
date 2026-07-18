import { NextResponse } from "next/server";
import { KnowledgeLedger } from "@/lib/knowledge/knowledge-ledger";

export async function GET() {
  const history = await KnowledgeLedger.getLedger("ws-1");
  return NextResponse.json({ success: true, history });
}
