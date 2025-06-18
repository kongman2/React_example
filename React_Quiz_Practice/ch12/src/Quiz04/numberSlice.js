import { createSlice } from '@reduxjs/toolkit'

const numberSlice = createSlice({
   name: 'number',
   initialState: { number: 1 },
   reducers: {
      MULTIPLY: (state, action) => {
         state.number *= action.payload
      },
      RESET: (state, action) => {
         state.number = 1
      },
   },
})

export default numberSlice
export const { MULTIPLY, RESET } = numberSlice.actions
