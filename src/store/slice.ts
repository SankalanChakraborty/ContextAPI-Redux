import { createSlice } from "@reduxjs/toolkit";

export interface ProductState<T> {
  data?: T;
}

const initialState: ProductState<{ id: string | number }[]> = {
  data: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductData: (state, action) => {
      state.data = action.payload;
    },
    deleteProductData: (state, action) => {
      state.data = state.data?.filter(
        (product) => product.id !== action.payload.id,
      );
    },
  },
});

export const { setProductData, deleteProductData } = productSlice.actions;
export default productSlice.reducer;
