import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/integrations/stripe';
import { prisma } from '@/lib/prisma';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    // Note: In mock mode, this will fail unless we bypass signature verification
    if (process.env.STRIPE_SECRET_KEY === 'sk_test_mock') {
      event = JSON.parse(body);
    } else {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    }
  } catch (err: any) {
    console.error('Webhook signature verification failed', err.message);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const workspaceId = session.client_reference_id;
        if (!workspaceId) break;

        await prisma.subscription.upsert({
          where: { workspaceId },
          update: {
            stripeCustomerId: session.customer as string,
            stripeSubscriptionId: session.subscription as string,
            status: 'ACTIVE'
          },
          create: {
            workspaceId,
            stripeCustomerId: session.customer as string,
            stripeSubscriptionId: session.subscription as string,
            status: 'ACTIVE'
          }
        });

        await prisma.auditLog.create({
          data: {
            workspaceId,
            eventType: 'BILLING_UPDATED',
            status: 'SUCCESS',
            message: 'Upgraded to PRO plan via Checkout',
            actor: 'System'
          }
        });
        break;
      }
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription;
        await prisma.subscription.updateMany({
          where: { stripeSubscriptionId: sub.id },
          data: {
            status: sub.status.toUpperCase(),
            stripePriceId: sub.items.data[0].price.id,
            currentPeriodEnd: new Date(sub.current_period_end * 1000),
            cancelAtPeriodEnd: sub.cancel_at_period_end
          }
        });
        break;
      }
      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        const subId = invoice.subscription as string;
        
        const sub = await prisma.subscription.findUnique({ where: { stripeSubscriptionId: subId }});
        if (sub) {
          await prisma.auditLog.create({
            data: {
              workspaceId: sub.workspaceId,
              eventType: 'BILLING_FAILED',
              status: 'FAILURE',
              message: 'Invoice payment failed',
              actor: 'System'
            }
          });
        }
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error handling webhook', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
