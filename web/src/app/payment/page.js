"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/button";
import axios from "axios";
import { IoSearchOutline } from "react-icons/io5";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../firebaseConfig";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
);

export default function Payment() {
  const [loanId, setLoanId] = useState("");
  const [res, setRes] = useState({});

  const makeOrder = async () => {
    const { data } = await axios.post(`/api/pay`, {
      pay: parseInt(res.monthAmt),
    });
    window.location.href = data.url;
  };

  const getLoanDetails = async () => {
    try {
      const docRef = doc(db, "loan", loanId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const val = docSnap.data();
        const si = (val.amount * (val.months / 12) * val.interest) / 100;
        const total = val.amount + si;
        const monthAmt = total / val.months;
        setRes({
          ...val,
          monthAmt,
        });
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (err) {
      console.log(err);
    }
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
          autoComplete="off"
          className="outline-none border-none w-full font-semibold"
          placeholder="Enter the Loan ID"
          name="familyMemebers"
          id="familyMemebers"
          value={loanId}
          onChange={(e) => setLoanId(e.target.value)}
        />
        <IoSearchOutline
          className="cursor-pointer"
          onClick={getLoanDetails}
          size={25}
        />
      </div>
      {res?.amount && (
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="p-6">
            <h5 className="mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 flex justify-between">
              Installment:{" "}
              <span className="text-green-500">{res.monthAmt.toFixed(2)}</span>
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Principal amount: {res.amount}
              <br></br>
              Interest: {res.interest}%<br></br>
              <div className="flex justify-between">
                <span>Months: {res.months}</span>
                <span>Paid: {res.paid}</span>
              </div>
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              onClick={makeOrder}
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Make Payment
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
