import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getSearchId = createAsyncThunk('tickets/getSearchId', async function () {
  const res = await fetch('https://aviasales-test-api.kata.academy/search')
  return await res.json()
})

export const getTickets = createAsyncThunk(
  'tickets/getTickets',
  async function (searchId, { rejectWithValue }) {
    try {
      const res = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
      )
      if (!res.ok) {
        throw new Error("Couldn't get tickets from database")
      }
      return await res.json()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

const ticketsListSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    searchId: null,
    status: null,
    error: null,
    stop: false,
  },
  reducers: {},
  extraReducers: {
    [getTickets.pending]: (state) => {
      state.status = 'loading'
    },
    [getTickets.fulfilled]: (state, action) => {
      state.stop = action.payload.stop
      state.status = 'resolved'
      state.tickets = [...state.tickets, ...action.payload.tickets]
    },
    [getTickets.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [getSearchId.fulfilled]: (state, action) => {
      state.searchId = action.payload.searchId
    },
  },
})

export default ticketsListSlice.reducer
