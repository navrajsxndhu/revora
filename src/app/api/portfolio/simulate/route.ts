import { NextResponse } from "next/server";
import { PortfolioSimulator } from "@/lib/portfolio/portfolio-simulator";

export async function POST() {
  const body = await req.json();
  const result = await PortfolioSimulator.simulate("ws-1", body.scenario);
  return NextResponse.json({ success: true, result });
}
