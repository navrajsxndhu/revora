import { NextResponse } from "next/server";
import { InvestmentEngine } from "@/lib/portfolio/investment-engine";

export async function GET() {
  const investments = await InvestmentEngine.getInvestments("ws-1");
  return NextResponse.json({ success: true, investments });
}
