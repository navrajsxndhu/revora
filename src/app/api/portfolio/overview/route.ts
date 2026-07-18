import { NextResponse } from "next/server";
import { EnterprisePortfolioEngine } from "@/lib/portfolio/enterprise-portfolio-engine";

export async function GET() {
  const data = await EnterprisePortfolioEngine.getOverview("ws-1");
  return NextResponse.json({ success: true, ...data });
}
