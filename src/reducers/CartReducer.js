export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "DECREASE_ITEM_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id == action.payload.id ? { ...item, qty: item.qty - 1 } : item
        ),
      };
    case "INCREASE_ITEM_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id == action.payload.id ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    default:
      return state;
      break;
  }
};
