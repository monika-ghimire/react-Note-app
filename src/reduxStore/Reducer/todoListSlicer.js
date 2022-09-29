import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "list",
  initialState: {
    
    todoList: []
  },
  reducers: {

    addItem:(state,actions)=>{
      state.todoList=[...state.todoList,actions.payload]
       },

       removeItem:(state,actions)=>
       {
        
        state.todoList=state.todoList.splice(actions.payload.id,1)
       }
},
});

export const {addItem,removeItem} = todoListSlice.actions;
export const selectlist = (state) => state.list.todoList;
export default todoListSlice.reducer;
