import {configureStore} from '@reduxjs/toolkit'
import home from './home'

const store = configureStore({
   reducer: {
      home
   },
})

export default store;