// redux 담는통
import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      const number = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[number].count++;
    },
    reduceCount(state, action) {
      const number = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[number].count--;
    },
  },
});
export const { addCount } = cart.actions;
export const { reduceCount } = cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
    user: user.reducer,
  },
});
