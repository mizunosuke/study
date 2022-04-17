import React from 'react';
import { useState } from "react";
import InputForm from "./Components/InputForm";
import TodoList from "./Components/TodoList";
import TodoHeader from "./Components/TodoHeader";


function App () {

  const [TaskList,setTaskList] = useState([]);

  return(
    <div>
     <TodoHeader/>
     
     <InputForm 
     TaskList={TaskList} 
     setTaskList={setTaskList}/>
     
     <TodoList
     TaskList={TaskList}
     setTaskList={setTaskList}
     />
    </div>
  );
}

export default App;