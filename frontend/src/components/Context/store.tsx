import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Reducer";


export const store = configureStore({
  reducer: {
    auth: UserReducer,

  },
});
