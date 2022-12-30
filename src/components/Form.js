import React,{useEffect} from "react";
import { v4 as uuidv4 } from "uuid";
export default function Form({ input, setInput, todos, setTodos ,editTodo,setEditTodo}) {
  
  const updateTodo=(title,id,completed)=>{
    const newTodo=todos.map((todo)=>{
      return(
        todo.id===id? {title,id,completed}:todo)
    })
    setTodos(newTodo);
    setEditTodo('');
  }
  useEffect(()=>{
    if(editTodo){
      setInput(editTodo.title)
    }
    else{ 
      setInput('')
    }
  },[setInput,editTodo])
  
  const onInputChange=(ev)=>{
    setInput(ev.target.value);

  }
  
  
  const onFormSubmit=(ev)=>{
    console.log(editTodo,'edittodo')
    ev.preventDefault();
    if(!editTodo){
      setTodos([...todos,{id:uuidv4(),title:input,completed:false}]);
      setInput('');
    }
    else{
    console.log('============>s')
      updateTodo(input,editTodo.id,editTodo.completed)
    }
   
  }
  return (
    <form onSubmit={onFormSubmit}>
      <input type="text"
       placeholder="Enter a Todo.." 
       className="task-input"
      value={input}
      required
      onChange={onInputChange}
        />
      <button className="button-add" type="submit">
        {editTodo ? 'OK' : 'Add'}
      </button>
    </form>
  );
}
