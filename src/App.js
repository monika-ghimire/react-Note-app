
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form'
import React,{useState} from 'react';
function App() {
  const [input,setInput]=useState('');
  const [todos,setTodos]=useState([]);
  return (
    <>
    <div class="Container">
      <div className='app-wrapper'>
        <div>
        <Header/>
        </div>
        <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        />
      </div>
      
    </div>
   
    </>
      
   
  );
}

export default App;
