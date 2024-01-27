import React from 'react'
import { useState } from 'react'


export default function NewTodoForm(props) {

    const [newItemTitle,setNewItemTitle] = useState("")
    const handleSubmit = (e) =>{

        // stops page from refreshing on click
        e.preventDefault()
    
        props.addTodoFunc(newItemTitle)
        setNewItemTitle("")
    
      }
    
    
    const handleChange = (e) => {              
    return setNewItemTitle(e.target.value)
    }




  return (
    <>
        <h1>NoteZen</h1>
        <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'>
            <label htmlFor='input-todo'>Enter New TODO</label>
            <input  type="text" 
                    id="input-todo"
                    value={newItemTitle}
                    onChange={handleChange}
                    className='new-item-form'/>
        </div>
        <button className='btn'>Add TODO</button>
        </form>
    </>
  )
}
