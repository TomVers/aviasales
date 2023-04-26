import { createSlice } from '@reduxjs/toolkit'

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    panel: [
      { label: 'Без пересадок', id: 1, isChecked: true },
      { label: '1 пересадка', id: 2, isChecked: true },
      { label: '2 пересадки', id: 3, isChecked: true },
      { label: '3 пересадки', id: 4, isChecked: true },
    ],
  },
  reducers: {
    // // выбрать все фильтры
    checkAll(state, action) {
      state.panel = state.panel.map((el) => ({ ...el, isChecked: action.payload }))
    },
    // // изменение галки на фильтре
    toggleCheck(state, action) {
      const toggledCheck = state.panel.find((check) => check.id === action.payload)
      toggledCheck.isChecked = !toggledCheck.isChecked
    },
  },
})

export const { checkAll, toggleCheck } = ticketsSlice.actions

export default ticketsSlice.reducer
