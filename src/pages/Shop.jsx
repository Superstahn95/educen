import React from "react";
import { CartState } from "../context/Context";
import { bookData } from "../components/books/bookData";
import Intro from "../components/intro/Intro";
import Search from "../components/search/Search";
import Book from "../components/books/Book";

function Shop() {
  return (
    <>
      <Intro page={"Shop"} />
      <Search />
      <div className="grid grid-cols-4 gap-4 w-[90%] mx-auto">
        {bookData.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}

export default Shop;
