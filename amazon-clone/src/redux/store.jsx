import { createStore, combineReducers } from "redux";
import cartreducer from "./reducer/reducer";

const rootReducer = combineReducers({
  
  cart: cartreducer
});

const store = createStore(rootReducer);

export default store;