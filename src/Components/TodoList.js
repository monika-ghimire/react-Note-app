import React from "react";

import{selectlist} from '../reduxStore/Reducer/todoListSlicer'
import { useSelector,useDispatch } from "react-redux";
import{removeItem} from '../reduxStore/Reducer/todoListSlicer'
export default function TodoList() {
  const dispatch=useDispatch();
  const usertodoList = useSelector(selectlist);
  const cancelBtn=(id)=>
  {
  console.log(id + "outside of loop")
    for(let i=0; i<usertodoList.length;i++)
    {   
      if(id===usertodoList[i].id)
       {
      //  let t=usertodoList;
      //    let test=t.splice(i, 1); 
        console.log(id + "inside of looping")
      
        dispatch(removeItem(id))
      }    

    }
  }    
  const saveTask=()=>
   {
   
   }
  
  return (
    <>
      <div>
      {usertodoList.map((x) => {
        return (
          <li className="list-item" key={x.id}>
            {x.title}
            <div>
              <button class="buttom-compelete task-button" onClick={saveTask}>✔ </button>
          
            </div>
         
            <div>
            <button class="button-delete task-button" onClick={()=>cancelBtn(x.id)}>X </button>
         
            </div>
          </li>
        );
      })}
       
         
   
      </div>
    </>
  ); 
}
