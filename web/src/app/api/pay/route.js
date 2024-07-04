import { NextResponse } from "next/server";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
export const POST = async (req) => {
  const body = await req.json();
  const { pay } = body;

  if (!pay) {
    return NextResponse.json(
      { message: "pay is required" },
      { status: 400 }
    );
  }
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [{
        price_data: {
          currency: "inr",
          unit_amount: pay*100,
          product_data: {
            name: "Noidea",
          },
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `http://localhost:3000/payment?type=success`,
      cancel_url: `http://localhost:3000/payment?type=failure`,
    });
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
};