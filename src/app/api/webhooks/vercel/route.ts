import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from 'crypto';

export async function POST() {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-vercel-signature');
    const deliveryId = req.headers.get('x-vercel-deployment-id') || crypto.randomUUID(); // Fallback if no delivery ID exists
    const workspaceId = req.nextUrl.searchParams.get('workspaceId');

    if (!workspaceId) {
      return NextResponse.json({ error: "Missing workspaceId param" }, { status: 400 });
    }

    // 1. Signature Validation
    const secret = process.env.VERCEL_WEBHOOK_SECRET;
    if (secret && signature) {
      const hmac = crypto.createHmac('sha1', secret);
      const digest = hmac.update(rawBody).digest('hex');
      if (signature !== digest) {
        return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
      }
    }

    // 2. Duplicate Delivery Protection
    const existingDelivery = await prisma.webhookDelivery.findUnique({
      where: { deliveryId }
    });

    if (existingDelivery) {
      return NextResponse.json({ message: "Duplicate delivery ignored" }, { status: 200 });
    }

    // 3. Record Delivery
    const payloadHash = crypto.createHash('sha256').update(rawBody).digest('hex');
    await prisma.webhookDelivery.create({
      data: {
        workspaceId,
        deliveryId,
        provider: 'VERCEL',
        payloadHash,
        status: 'PROCESSED',
        processedAt: new Date()
      }
    });

    const payload = JSON.parse(rawBody);
    // ... processing logic (e.g., track Vercel deployment)
    
    return NextResponse.json({ success: true });

  } catch {
    console.error("[Vercel Webhook]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
