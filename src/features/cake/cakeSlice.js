import { createSlice } from "@reduxjs/toolkit";

const cakeSlise = createSlice({
  name: "cake",
  initialState: { numOfCakes: 10 },
  reducers: {
    buyCake: (state) => {
      // state.numOfCakes = state.numOfCakes - action.payload;
      state.numOfCakes = state.numOfCakes - 1;
      
    },
  },
});

export const {buyCake} = cakeSlise.actions;
export default cakeSlise.reducer;