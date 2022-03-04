import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey =
    "pk_test_51KQHeeIKxzq6k2HR6eDzzT5w8L530EXCFk4GNEKTRlczJCmmxoEE0e4O6Kw0XVXZRaW8vCQQBRLnGFlDTyJKU5ff00Ay8Y7Fa6";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/eqh.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
