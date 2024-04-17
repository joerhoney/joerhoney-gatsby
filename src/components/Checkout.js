import React, { useState } from "react";
// Utilities
import ConditionalWrap from "@utils/ConditionalWrap";
// Components
import { loadStripe } from "@stripe/stripe-js";

const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#000",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
};

const buttonDisabledStyles = {
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
      successUrl: `http://localhost:8000/thanks/`,
      cancelUrl: `http://localhost:8000/`,
    });

    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };

  return (
    <ConditionalWrap
      condition={props.link}
      wrapper={(children) => (
        <a
          className="checkout-button"
          disabled={loading}
          style={loading ? { ...buttonDisabledStyles } : {}}
          onClick={redirectToCheckout}
        >
          {props.text ?? "Buy Now"}
        </a>
      )}
    >
      <button
        className="checkout-button"
        disabled={loading}
        style={loading ? { ...buttonDisabledStyles } : {}}
        onClick={redirectToCheckout}
      >
        {props.text ?? "Buy Now"}
      </button>
    </ConditionalWrap>
  );
};

export default Checkout;
