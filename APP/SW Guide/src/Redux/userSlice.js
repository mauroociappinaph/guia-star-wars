import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  birth_year: "",
  gender: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { name, birth_year, gender } = action.payload;
      state.name = name;
      state.birth_year = birth_year;
      state.gender = gender;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;