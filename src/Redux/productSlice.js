import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productRecords: [],
  updateInfo: {
    status: false,
    index: -1
  }
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.value += 1
      state.productRecords.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.studentRecords.splice(action.payload, 1)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct } = productSlice.actions

export default productSlice.reducer