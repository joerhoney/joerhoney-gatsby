import React, { useState } from "react";
// Components
import { loadStripe } from "@stripe/stripe-js";

const disabled = {
  opacity: "0.5",
  cursor: "not-allowed",
};

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLIC_KEY);
  }
  return stripePromise;
};

const Checkout = (props) => {
  const [loading, setLoading] = useState(false);

  const redirectToCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: props.lineItems,
      successUrl: `http://localhost:8000/thanks-purchase/`,
      cancelUrl: `http://localhost:8000/`,
    });

    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };

  return (
    <button
      className={`checkout-button ${props.link ?? "a"}`}
      disabled={loading}
      style={loading ? { ...disabled } : {}}
      onClick={redirectToCheckout}
    >
      {props.text ?? "Buy now"}
    </button>
  );
};

export default Checkout;
