import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "list",
  initialState: {
    
    todoList: []
  },
  reducers: {

    addItem:(state,actions)=>{
      state.todoList=[...state.todoList,actions.payload]
       }
},
});

export const {addItem} = todoListSlice.actions;
export const selectlist = (state) => state.list.todoList;
export default todoListSlice.reducer;
