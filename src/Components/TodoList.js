import React from "react";
import { useSelector } from "react-redux";
import{selectlist} from '../reduxStore/Reducer/todoListSlicer'
export default function TodoList() {
  const usertodoList = useSelector(selectlist);
  return (
    <>
      <div>
      {usertodoList.map((x) => (
         <li  className="list-item" key={x.id}>
             {x.title}
         </li>
        ))}
       
         
   
      </div>
    </>
  ); 
}
