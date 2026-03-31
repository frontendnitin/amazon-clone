

import { createStore } from "redux";
import cartreducer from "./reducer/reducer";
// import cartReducer from "./cartReducer";

// Load cart from localStorage
const loadState = () => {
  console.log("Loading from localStorage");
  try {
    const savedCart = localStorage.getItem("cart");
    if (savedCart === null) {
      return undefined;
    }
    return {
      items: JSON.parse(savedCart)
    };
  } catch (err) {
    return undefined; 
  }
};

// Save cart to localStorage
const saveState = (state) => {
  console.log("Saving to localStorage", state);
  try {
    const cartItems = JSON.stringify(state);
    localStorage.setItem("cart", cartItems);  
  } catch (err) {
    console.log("Could not save cart");
  }
};

// Initialize state
const persistedState = loadState();

// Create store
const store = createStore(cartreducer, persistedState);

// Subscribe to store changes
store.subscribe(() => {
  saveState(store.getState().items);
});

export default store;

