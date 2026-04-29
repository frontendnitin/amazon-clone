import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  ADD_TO_CART,
} from "../actionsType"

export const addToCart = (item,quantity=1 ) => ({
  type: ADD_TO_CART,
  payload: {...item,quantity}
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});

export const updateCartQuantity = (itemId, quantity) => ({
  type: UPDATE_CART_QUANTITY,
  payload: { itemId, quantity },
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
