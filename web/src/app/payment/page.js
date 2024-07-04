"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/button";
import axios from "axios";
import { IoSearchOutline } from "react-icons/io5";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
);

export default function Payment() {
  const makeOrder = async () => {
    const { data } = await axios.post(`/api/pay`, {
      pay: 100,
    });
    window.location.href = data.url;
  };
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">Upcoming Payments</h1>
      </div>
      {/* <div> */}
      {/* <label className="font-semibold text-lg">Loan ID</label> */}
      <div className="flex flex-nowrap items-center border-black/40 border gap-4 px-4 py-2 rounded-xl">
        <input
          type="number"
          className="outline-none border-none w-full font-semibold"
          placeholder="Enter the Loan ID"
          name="familyMemebers"
          id="familyMemebers"
        />
        <IoSearchOutline size={25} />
      </div>
      {/* </div> */}
      <div>
        <Button onClick={makeOrder}>Make Payment</Button>
      </div>
    </main>
  );
}
