import React from "react";
import { CartState } from "../context/Context";
import Intro from "../components/intro/Intro";
import CartTable from "../components/cart/CartTable";
function Cart() {
  const {
    state: { cart },
  } = CartState();
  return (
    <>
      <Intro page={"cart"} />
      <CartTable cart={cart} />
    </>
  );
}

export default Cart;
