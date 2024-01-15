import React, { useState } from "react";
import { CartState } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

function CartTable({ cart }) {
  // const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { dispatch } = CartState();
  console.log(cart);
  if (cart.length < 1) {
    return navigate("/shop");
  }
  return (
    <div className="py-10">
      <div className="flex justify-end p-4 w-[90%] mx-auto">
        <button
          className="py-3 px-4 uppercase text-white bg-sky-900 font-bold"
          onClick={() => navigate("/shop")}
        >
          continue shopping
        </button>
      </div>
      <div className="w-[90%] mx-auto">
        <table className="w-full border-collapse border border-solid border-black">
          <tr className="uppercase">
            <th>Image</th>
            <th className=" border border-solid border-black">Product</th>
            <th className=" border border-solid border-black">Quantity</th>
            <th className=" border border-solid border-black">Price</th>
            <th className=" border border-solid border-black">total</th>
            <th className=" border border-solid border-black">remove</th>
          </tr>
          {cart.map((item) => {
            return (
              <tr className="text-center">
                <td className="flex items-center justify-center p-2 border-t border-black border-solid">
                  <img src={item.image} alt="" className="w-[100px]" />
                </td>
                <td className=" border border-solid border-black">
                  {item.name}
                </td>
                <td className=" border border-solid border-black">
                  <div>
                    <button
                      className="bg-red-900 text-white font-bold p-2"
                      onClick={() =>
                        dispatch({
                          type: "DECREASE_ITEM_QUANTITY",
                          payload: item,
                        })
                      }
                    >
                      -
                    </button>
                    <span className="bg-slate-200  font-bold py-2 px-4">
                      {item.qty}
                    </span>
                    <button
                      className="bg-sky-900 text-white font-bold p-2"
                      onClick={() =>
                        dispatch({
                          type: "INCREASE_ITEM_QUANTITY",
                          payload: item,
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className=" border border-solid border-black">
                  {item.price}
                </td>
                <td className=" border border-solid border-black">
                  NGN{item.price * item.qty}
                </td>
                <td className=" border border-solid border-black">
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: item })
                    }
                  >
                    {" "}
                    <AiOutlineClose size={30} color="red" />
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>

      {/* cart totals */}
      <div className="w-[90%] mx-auto flex justify-end">
        <div></div>
      </div>
    </div>
  );
}

export default CartTable;
