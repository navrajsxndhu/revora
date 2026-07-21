import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'governance_active',
    evidence: 'immutable'
  });
}

export async function POST() {
  return NextResponse.json({
    status: 'processed',
    evidence: 'immutable'
  });
}
