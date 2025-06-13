import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
   name: 'products',
   initialState: [],
   reducers: {
      add: (state, action) => {
         state.push({ id: Date.now(), name: action.payload })
      },
      remove: (state, action) => {
         return state.filter((product) => product.id !== action.payload)
      },
   },
})

export default productSlice
export const { add, remove } = productSlice.actions
