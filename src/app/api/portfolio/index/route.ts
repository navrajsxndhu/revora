import { NextResponse } from "next/server";
import { PortfolioIndex } from "@/lib/portfolio/portfolio-index";

export async function GET() {
  const index = await PortfolioIndex.getIndex("ws-1");
  return NextResponse.json({ success: true, index });
}
