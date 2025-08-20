import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/utils/db"; 

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-07-30.basil",
});

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature")!;
  const body = await req.text();

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === "payment_intent.succeeded") {
      const intent = event.data.object as Stripe.PaymentIntent;

      await prisma.user.update({
        where: { id: "receiver-user-id" }, 
        data: { balance: { increment: intent.amount } },
      });

      await prisma.transaction.create({
        data: {
          senderId: null,
          receiverId: "receiver-user-id",
          amount: intent.amount,
          status: "success",
        },
      });
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }
}
