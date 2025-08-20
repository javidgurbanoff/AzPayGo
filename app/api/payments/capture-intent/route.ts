import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-07-30.basil",
});

export async function POST(req: Request) {
  const { paymentIntentId } = await req.json();

  try {
    const paymentIntent = await stripe.paymentIntents.capture(paymentIntentId);
    return NextResponse.json({ success: true, paymentIntent });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
