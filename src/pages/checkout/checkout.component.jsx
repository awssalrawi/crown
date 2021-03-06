import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { selectCartItems } from "./../../redux/cart/card.selector";
import { createStructuredSelector } from "reselect";
import { selectCartTotal } from "./../../redux/cart/card.selector";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";
import StripeCheckoutButton from "./../../component/stripe-button/stripe-button.component";
const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: $ {total} </span>
      </div>
      <div className="test-warning">
        *Please use this following test credit cart for payments
        <br />
        4242 4242 4242 4242 4242 - EXP:01/23 - CVV:123
        <br />
        <br />
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
