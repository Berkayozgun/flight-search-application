// flightsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const searchFlights = createAsyncThunk(
  "flights/search",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/flights");
      if (!response.ok) {
        throw new Error(`Failed to fetch flights. Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const flightsSlice = createSlice({
  name: "flights",
  initialState: {
    flights: [],
    filteredFlights: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setFlights: (state, action) => {
      state.flights = action.payload;
    },
    setFilteredFlights: (state, action) => {
      const { departureCity, arrivalCity } = action.payload;
      state.filteredFlights = state.flights.filter(
        (flight) =>
          flight.departureCity === departureCity &&
          flight.arrivalCity === arrivalCity
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchFlights.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchFlights.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.flights = action.payload;
        // Filtreleme işlemini setFilteredFlights reducer'ı ile yapalım
      })
      .addCase(searchFlights.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setFlights, setFilteredFlights } = flightsSlice.actions;
export const selectFlights = (state) => state.flights;

export default flightsSlice.reducer;
