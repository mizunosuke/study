const input=document.getElementById("ireru");
const button=document.getElementById("btn");
const ul=document.getElementById("list");

const addList=function(submittedList){
  const li=document.createElement("li");
  const taskList=ul.appendChild(li);
  taskList.innerHTML=submittedList;

  const deleteButton=document.createElement("button");
  const deleteList=li.appendChild(deleteButton);
  deleteList.innerText="削除";

  deleteButton.addEventListener("click",function(){
    Event.preventDefault();
    deleteTask(deleteButton);
  });
};

function deleteTask(deleteButton){
  const chosenList=deleteButton.closest("li");
  ul.removeChild(chosenList);
};

input.addEventListener("submit",function(){
  const submittedList=input.value;
  addList(submittedList);
  Event.preventDefault();
});
