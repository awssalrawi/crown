import React from "react";
import { connect } from "react-redux";
import CustomButton from "./../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { createStructuredSelector } from "reselect";
import CartItem from "./../cart-item/cart-item.component";
import { selectCartItems } from "./../../redux/cart/card.selector";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { toggleCartHidden } from "./../../redux/cart/cart.action";
//* history came from withRouter function
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        dispatch(toggleCartHidden());
        history.push("/checkout");
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);
// Store.js contain cart . inside that card you will find cartItems with same name.
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
// const mapStateToProps = (state) => ({
//   cartItems: selectCartItems(state),
// });
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });
export default withRouter(connect(mapStateToProps)(CartDropdown));

//! important ,, we can use mapDispatchToProps method with connect to toggle card icon but when it is just one function we can take dispatch from connect() without reading its function
