import { createAsyncThunk } from '@reduxjs/toolkit'
import httpClient from '../../../utils/httpClient'

export const fetchHomeMarketplaces = createAsyncThunk('home/fetchHomeMarketplaces', async () => {
   try {
      const {data} = await httpClient.get('/default')
      return data;
   } catch (e) {
      console.log(e)
   }
})
