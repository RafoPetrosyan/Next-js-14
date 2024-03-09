import { createSlice } from '@reduxjs/toolkit'
import { fetchHomeMarketplaces } from './operations'

const initialState = {
   marketplaces: [],
   searchList: [],
   loader: false,
}

export const homeSlice = createSlice({
   name: 'home',
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(fetchHomeMarketplaces.fulfilled, (state, { payload }) => {
            state.marketplaces = payload
            state.loader = false
         })
         .addCase(fetchHomeMarketplaces.pending, (state) => {
            state.loader = true
         })
   },
})

export default homeSlice.reducer
