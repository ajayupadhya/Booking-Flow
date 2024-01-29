import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  slots: [],
  loading: false,
};

// GET https://app.appointo.me/scripttag/mock_timeslots?start_date=2024-01-20&end_date=2024-01-30

// [
//   {
//     date: "2024-01-17",
//     slots: [
//       {
//         start_time: "2024-01-17T12:04:10.000+09:00",
//         end_time: "2024-01-17T13:04:10.000+09:00",
//       },
//       {
//         start_time: "2024-01-17T13:04:10.000+09:00",
//         end_time: "2024-01-17T14:04:10.000+09:00",
//       },
//       {
//         start_time: "2024-01-17T14:04:10.000+09:00",
//         end_time: "2024-01-17T15:04:10.000+09:00",
//       },
//       {
//         start_time: "2024-01-17T15:04:10.000+09:00",
//         end_time: "2024-01-17T16:04:10.000+09:00",
//       },
//       {
//         start_time: "2024-01-17T16:04:10.000+09:00",
//         end_time: "2024-01-17T17:04:10.000+09:00",
//       },
//     ],
//   },
//   {
//     date: "2024-01-18",
//     slots: [
//       {
//         start_time: "2024-01-18T09:00:00.000+09:00",
//         end_time: "2024-01-18T10:00:00.000+09:00",
//       },
//       {
//         start_time: "2024-01-18T10:00:00.000+09:00",
//         end_time: "2024-01-18T11:00:00.000+09:00",
//       },
//       {
//         start_time: "2024-01-18T11:00:00.000+09:00",
//         end_time: "2024-01-18T12:00:00.000+09:00",
//       },
//       {
//         start_time: "2024-01-18T12:00:00.000+09:00",
//         end_time: "2024-01-18T13:00:00.000+09:00",
//       },
//       {
//         start_time: "2024-01-18T13:00:00.000+09:00",
//         end_time: "2024-01-18T14:00:00.000+09:00",
//       },
//       {
//         start_time: "2024-01-18T14:00:00.000+09:00",
//         end_time: "2024-01-18T15:00:00.000+09:00",
//       },
//       {
//         start_time: "2024-01-18T15:00:00.000+09:00",
//         end_time: "2024-01-18T16:00:00.000+09:00",
//       },
//       {
//         start_time: "2024-01-18T16:00:00.000+09:00",
//         end_time: "2024-01-18T17:00:00.000+09:00",
//       },
//     ],
//   },
//   {
//     date: "2024-01-19",
//     slots: [
//       {
//         start_time: "2024-01-19T09:00:00.000+09:00",
//         end_time: "2024-01-19T10:00:00.000+09:00",
//       },
//       {
//         start_time: "2024-01-19T10:00:00.000+09:00",
//         end_time: "2024-01-19T11:00:00.000+09:00",
//       },
//       {
//         start_time: "2024-01-19T11:00:00.000+09:00",
//         end_time: "2024-01-19T12:00:00.000+09:00",
//       },
//       {
//         start_time: "2024-01-19T12:00:00.000+09:00",
//         end_time: "2024-01-19T13:00:00.000+09:00",
//       },
//     ],
//   },
// ];

export const getSlot = createAsyncThunk("getSlot", async (data, thunkAPI) => {
  const response = await fetch(
    `https://app.appointo.me/scripttag/mock_timeslots?${
      start_date && "start_date =" + start_date
    }${end_date && "&end_date=" + end_date}`
  );

  return await response.json();
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
export const loadingState = (state) => state.loading

export default bookingSlice.reducer;
