import React from "react";
import { useState } from "react";

const InputForm = ({TaskList,setTaskList}) => {

  const [InputText,setInputText] = useState("");

  const handleChange = (e) => {
    e.preventdefault();
    setInputText(e.target.value);
    }

  const addTask = () => {
    setTaskList([
      ...TaskList,{
        text:InputText,
        id:TaskList.length,
        completed:false,
      }
    ]);

    setInputText("");
  }

  return(
    <div>
      <form onSubmit={addTask}>
        <input type="text" onChange={handleChange} value={InputText}/>
        <button onClick={addTask}>追加</button>
      </form>
    </div>
  )
}

export default InputForm;