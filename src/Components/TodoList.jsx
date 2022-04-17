import React from "react";

  const TodoList = ({TaskList,setTaskList}) => {

  /*取り消し線を付ける*/  
  const handleDelete=(id)=>{
    setTaskList(TaskList.map((task)=>{
      if(task.id===id){
        return{
          ...task,
          completed:!task.completed,
        }
      }
      return task;
    }));
  }

  

   /*リスト を削除*/
  const handleComlpleted=(id)=>{
    setTaskList(TaskList.filter((task)=>{
       return task.id!==id
      }
    ));
  }

  return (
    <div>
      <div className="todoList">
        <div className="todos">
          {TaskList.map((task,index)=>{
            return(
             <div className="todo" key={index}>
               <div className="todoText">
                 <span>{task.text}</span>
                 <button onClick={()=>{handleComlpleted(task.id)}}>完了</button>
                 <button onClick={()=>{handleDelete(task.id)}}>削除</button>
               </div>
             </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


export default TodoList;