import Stripe from 'stripe';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || 'sk_test_mock';

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16', // using a recent, stable API version
  appInfo: {
    name: 'Revora',
    version: '0.1.0'
  }
});

export async function createCheckoutSession(workspaceId: string, priceId: string, customerId?: string) {
  if (STRIPE_SECRET_KEY === 'sk_test_mock') {
    console.warn('[Stripe] Mock mode: Generating fake checkout URL');
    return `https://mock.stripe.com/checkout?workspace=${workspaceId}&price=${priceId}`;
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'subscription',
    customer: customerId,
    client_reference_id: workspaceId,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings/billing?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings/billing`,
  });

  return session.url;
}

export async function createBillingPortalSession(customerId: string) {
  if (STRIPE_SECRET_KEY === 'sk_test_mock') {
    return `https://mock.stripe.com/portal?customer=${customerId}`;
  }

  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings/billing`,
  });

  return session.url;
}
