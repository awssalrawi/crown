import { createSelector } from "reselect";

const selectUser = (state) => state.user;
// const selectCart = state => state.cart
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

//!Can be
//export const selectCurrentUser = createSelector([selectUser,selectCart] ,(user)=>user.currentUser
//Or
//export const selectCurrentUser = createSelector(selectUser,selectCart,(user,cart)=>user.currentUser
