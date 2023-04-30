import { configureStore } from '@reduxjs/toolkit'

import priceFilterSlice from './priceFilterSlice'
import ticketsListSlice from './ticketsListSlice'

export default configureStore({
  reducer: {
    priceFilterSlice,
    ticketsListSlice,
  },
})
