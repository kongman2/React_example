import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
   name: 'products',
   initialState: [],
   reducers: {
      addProduct: (state, action) => {
         state.push({ id: Date.now(), name: action.payload })
      },
      removeProduct: (state, action) => {
         return state.filter((product) => product.id !== action.payload)
      },
   },
})

export default productSlice
export const { addProduct, removeProduct } = productSlice.actions
