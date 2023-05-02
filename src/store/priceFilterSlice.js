import { createSlice } from '@reduxjs/toolkit'

const priceFilterSlice = createSlice({
  name: 'price',
  initialState: {
    panel: [
      { label: 'Без пересадок', id: 1, isChecked: true, numStops: 0 },
      { label: '1 пересадка', id: 2, isChecked: true, numStops: 1 },
      { label: '2 пересадки', id: 3, isChecked: true, numStops: 2 },
      { label: '3 пересадки', id: 4, isChecked: true, numStops: 3 },
    ],
  },
  reducers: {
    checkAll(state, action) {
      state.panel = state.panel.map((el) => ({ ...el, isChecked: action.payload }))
    },
    toggleCheck(state, action) {
      const toggledCheck = state.panel.find((check) => check.id === action.payload)
      toggledCheck.isChecked = !toggledCheck.isChecked
    },
  },
})

export const { checkAll, toggleCheck } = priceFilterSlice.actions

export default priceFilterSlice.reducer
