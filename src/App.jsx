// main app
import { useEffect, useState } from 'react'
import './style.css'
import NewTodoForm from './NewTodoForm'
import TodoModel from './todoModel'
import { TodoList } from './TodoList'


function App() {

  // use state is hook 
  // returns array,
  // value & function to update the value

  const loadTodosFromLocal = () => {
    const localValue = localStorage.getItem("ITEM")
    console.log("loading todos to local storage")
    if (localValue == null) return []
    return JSON.parse(localValue)
  }

  const [todos,setTodos] = useState(loadTodosFromLocal)


  const deleteTodo = (id) =>{
    setTodos( (currentTodos) =>{

      return currentTodos.filter( (todo) =>{
        return todo.id!==id 
        //skip the one which is same
      })
    }
    )
  }

  const addTodo= (newItemTitle) => {
    const newTodoItem = new TodoModel(newItemTitle)
    
    // destructure old ones & add one more 
    setTodos( (currentTodos) =>{
      return [...currentTodos,newTodoItem]
    })
  }

  const toggleTodo = (id,isChecked) =>{
    setTodos( (currentTodos) => {
      currentTodos.map( (todo)=>{

        if(id === todo.id){
          return {...todo,completed:isChecked}
        } 
        return todo
      }
      )
      return currentTodos
    })
  }

  console.log(todos)

  //everytime todos change call this 
  useEffect( ()=>{
    console.log("Saving todos to local storage")
    localStorage.setItem("ITEM",JSON.stringify(todos))
  },[todos])

  //Onchange ->
  // Whenever we change input, call setNewItem with that, which will rerender the componenr
  return (
    <>
    <NewTodoForm addTodoFunc={addTodo} />
    <h1 className='header'>Todo list</h1>
    <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </>
  )
}

export default App
