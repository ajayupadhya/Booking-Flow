import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  slots: [],
  loading: false,
  error:""
};

export const getSlot = createAsyncThunk("getSlot", async (data, thunkAPI) => {
  const { start_date, end_date } = data;

  try {
    const response = await fetch(
      `https://app.appointo.me/scripttag/mock_timeslots?${
        start_date && "start_date =" + start_date
      }${end_date && "&end_date=" + end_date}`
    );
    const filteredDate = await response.json();
  
    
    return filteredDate[filteredDate.length - 1];
  } catch (error) {
    console.log(error , "err")
  }
  
});

export const bookingSlice = createSlice({
  name: "bookingSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSlot.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(getSlot.fulfilled, (state, action) => {
        state.slots = action.payload;
        state.loading = false;
      }),
      builder.addCase(getSlot.rejected, (state, action) => {
        state.slots = action.payload;
        state.loading = false;
      });
  },
});

export const allSlot = (state) => state.slots;
export const loadingState = (state) => state.loading;

export default bookingSlice.reducer;
