import { createSlice } from "@reduxjs/toolkit";
const initialValue = {
  isLogged: false,
};
export const UserReducer = createSlice({
  name: "UserAuth",
  initialState: initialValue,

  reducers: {
    handleLogin: (state: any) => {
      state.isLogged = true;
    },
    handleLogout: (state: any) => {
      state.isLogged = false;
      window.localStorage.setItem("token", "");
    },
  },
});

export const { handleLogin, handleLogout } = UserReducer.actions;
export default UserReducer.reducer;
