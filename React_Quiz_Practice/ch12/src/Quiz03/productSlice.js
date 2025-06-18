import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
   name: 'products',
   initialState: [],
   reducers: {
      addProduct: (state, action) => {
         state.push({ id: Date.now(), text: action.payload })
      },
      deleteProduct: (state, action) => {
         return state.filter((product) => product.id !== action.payload)
      },
   },
})

export default productSlice.reducer
export const { addProduct, deleteProduct } = productSlice.actions
