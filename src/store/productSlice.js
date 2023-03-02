import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";
const initialState = {
  products: products,
  selectedProduct: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
        const product_id = action.payload
      state.selectedProduct = state.products.find(
        (prod) => prod.id === product_id
      );
    },
  },
});
