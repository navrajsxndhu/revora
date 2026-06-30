import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-hub-signature-256');
    const deliveryId = req.headers.get('x-github-delivery');
    const workspaceId = req.nextUrl.searchParams.get('workspaceId');

    if (!deliveryId || !workspaceId) {
      return NextResponse.json({ error: "Missing required headers or params" }, { status: 400 });
    }

    // 1. Signature Validation
    const secret = process.env.GITHUB_WEBHOOK_SECRET;
    if (secret && signature) {
      const hmac = crypto.createHmac('sha256', secret);
      const digest = 'sha256=' + hmac.update(rawBody).digest('hex');
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
        provider: 'GITHUB',
        payloadHash,
        status: 'PROCESSED',
        processedAt: new Date()
      }
    });

    const payload = JSON.parse(rawBody);
    // ... processing logic (e.g., trigger deployment or risk analysis)
    
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("[GitHub Webhook]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
