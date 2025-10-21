import { useState, useEffect, ReactNode } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, Stripe } from "@stripe/stripe-js";

const StripeProvider = ({ children }: { children: ReactNode }) => {
  const [stripePromise, setStripePromise] =
    useState<Promise<Stripe | null> | null>(null);

  useEffect(() => {
    fetch("/api/config")
      .then((res) => res.json())
      .then((data) => {
        const promise = loadStripe(data.publishableKey);
        setStripePromise(promise);
      })
      .catch((err) => {
        console.error("Error fetching Stripe key:", err);
      });
  }, []);

  if (!stripePromise) return <div>Loading payment system...</div>;

  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
