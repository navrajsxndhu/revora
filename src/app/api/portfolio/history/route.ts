import { NextResponse } from "next/server";
import { PortfolioLedger } from "@/lib/portfolio/portfolio-ledger";

export async function GET() {
  const history = await PortfolioLedger.getLedger("ws-1");
  return NextResponse.json({ success: true, history });
}
