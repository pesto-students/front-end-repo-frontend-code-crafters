import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log("State", state);
      console.log("Action", action);
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        // immer makes this immutable
        existingProduct.quantity++;
      } else {
        // immer makes this immutable
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    subtractProduct: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct.quantity > 1) {
        existingProduct.quantity--;
      } else if (existingProduct.quantity === 1) {
        // console.log("State",state);
        console.log("existing product ", existingProduct.quantity);
        const index = state.cart.findIndex((item) => item === existingProduct);
        console.log(index);
        state.cart.splice(index, 1);
      }
    },
    removeProduct: (state, action) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      state.cart.splice(index, 1);
    },
  },
});

const cartCountSelector = (state) => {
  return state.cart.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
};

const cartValueSelector = (state) => {
  return state.cart.cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

export { cartCountSelector, cartValueSelector };

export const { addProduct, subtractProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
