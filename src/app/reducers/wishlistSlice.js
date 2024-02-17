import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addProductWishlist: (state, action) => {
      const existingProduct = state.wishlist.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        return;
      } else {
        state.wishlist.push({ ...action.payload, isWishlist: true});
      }
    },
    removeProductWishlist: (state, action) => {
      const index = state.wishlist.findIndex(
        (product) => product.id === action.payload.id
      );
      state.wishlist.splice(index, 1);
    },
  },
});

export const { addProductWishlist, removeProductWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
