import { NextResponse } from "next/server";
import { PortfolioEngine } from "@/lib/portfolio/portfolio-engine";

export async function GET() {
  const portfolios = await PortfolioEngine.getPortfolios("ws-1");
  return NextResponse.json({ success: true, portfolios });
}
