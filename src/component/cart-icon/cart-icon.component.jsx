import React from "react";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "./../../redux/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/card.selector";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// const mapStateToProps = (state) => ({
//   itemCount: selectCartItemsCount(state) });
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce(
//     (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
//     0
//   ),
// });

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
