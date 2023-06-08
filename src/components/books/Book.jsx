import React from "react";
import Button from "../Button";
import { CartState } from "../../context/Context";

function Book({ book }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log(cart);
  console.log(cart.some((item) => item.id == book.id));

  return (
    <div>
      <div className="bg-slate-100 flex items-center justify-center py-4">
        <img src={book.image} alt={book.name} className="max-h-[200px]" />
      </div>
      <div className="flex flex-col items-center py-3">
        <h2 className="capitalize text-xl font-bold font-roboto">
          {book.name}
        </h2>
        <span className="my-3">NGN{book.price}</span>
        {cart.some((item) => item.id == book.id) ? (
          <button
            className="button-white-blue"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: book })
            }
          >
            remove from cart
          </button>
        ) : (
          <button
            className="button-white-blue"
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: book })}
          >
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Book;
