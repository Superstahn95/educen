import React from "react";
import { useNavigate } from "react-router-dom";
import { bookData } from "../components/books/bookData";
import Intro from "../components/intro/Intro";
import Search from "../components/search/Search";
import Book from "../components/books/Book";
import { CartState } from "../context/Context";

function Shop() {
  const navigate = useNavigate();
  const {
    state: { cart },
  } = CartState();
  const handleNavigate = () => {
    if (cart.length > 0) {
      navigate("/cart");
    } else {
      alert("Add an item to the cart");
    }
  };

  return (
    <>
      <Intro page={"Shop"} />
      <Search />
      <div className="flex justify-end p-4 w-[90%] mx-auto">
        <button
          className="py-3 px-4 uppercase text-white bg-sky-900 font-bold"
          onClick={handleNavigate}
        >
          view cart({cart.length > 0 ? `${cart.length}` : 0})
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 w-[90%] mx-auto">
        {bookData.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}

export default Shop;
