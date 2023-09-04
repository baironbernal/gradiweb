import { createSlice } from '@reduxjs/toolkit';
import { Products } from '../../../interfaces/product.interface';

const initialState: Products = {
  nodes: [],
  isLoading: false
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    startLoadProducts: (state) => {
      state.isLoading = true
    },
    setProducts: (state, action) => {
      state.isLoading = false;
      state.nodes = action.payload.nodes
    }
   
  },
})

// Action creators are generated for each case reducer function
export const { startLoadProducts, setProducts } = productSlice.actions

