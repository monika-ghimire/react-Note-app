import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./Reducer/todoListSlicer";

export default configureStore({
  reducer: {
    list:listReducer
  }
});
