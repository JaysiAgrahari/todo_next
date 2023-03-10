import  React,{ Fragment, useState, useEffect } from 'react'
import EditTodo from './EditTodo'

const index = () => {
  const [description, setdescription] = useState('')
  const [todolist, setTodoList] = useState([])
  
  const handleChange = (e) => {
    e.preventDefault()

    setdescription(e.target.value)
    //console.log(description)
  }



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const body = { description };
      const response = await fetch("http://localhost:8080/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      console.log(description);
    } catch (error) {
      console.log(err.message)

    };
    setTodoList([
      description,
      ...todolist
    ])
    setdescription('')

  }





  //for adding a value in todolist


  /* const getTodos = async () => {
     try {
       const response = await fetch("http://localhost:8080/todos")
       const jsonData = await response.json(
 
         console.log(jsonData)
       )
     }
     catch (error) {
       console.log(error.message);
 
     }
 
     const selectedItem = await fetch(`id${todo.todo_id}`, {
       method: "PUT"
 
     })
     console.log(updatetodo);
   }
   useEffect(() => {
     getTodos();
   })
 */

  //deleting

  const handleDelete = (todo) => {
    const updatedarr = todolist.filter(todoItem => todolist.indexOf(todoItem) != todolist.indexOf(todo))
    setTodoList(updatedarr)
  }


  const deletetodo = async (id) => {
    try {
      const deletetodo = await fetch(`http://localhost:8080/todos/${id}`, {
        method: "DELETE"
      })
      console.log(deletetodo);
    } catch (error) {
      console.error(err.message)

    }
  }

  //editttttttt

  const EditTodo = ({todo }) =>{
     const [description ,setDescription] =useState(todo.description);
  }
  
  const updateDescription= async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`http://localhost:8080/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log(response);



    } catch (error) {
      console.error(err.message)
    }

  }


  /*if (editId) {
    const editTask = todolist.find((i) => i.index === editId);
    const updatedTasks = todolist.map((t) =>
      t.index === editTask.index ? t = { index: t.index, task } : { index: t.index, task: t.task }
    )
    setTodoList(updatedTasks);
    setEditId(0);
    return;
  }*/


  return (

    < div >
      <h1 className="text-center "> Todo list </h1>
      <form>
        <input type="text" value={description}
          placeholder='Enter new todo' onChange={handleChange}
        /><button onClick={handleSubmit}>Add</button>
      </form>
      <ul className='list'>
        {
          todolist.length >= 1 ? todolist.map((todo, index) => {

            return <> <li key={index}>{todo}</li>
              <button onClick={(e) => {
                e.preventDefault()
                handleDelete(todo)
              }}> Delete</button>
              <button > Edit</button>


            </>
          })
            : ''
        }
      </ul>


    </div>
  )
}



export default index



/*<ul>
        {
          todolist.length >= 1 ? todolist.map((todo, index) => {

            return <li key={index}>{todo}<button onClick={(e) => {
              e.preventDefault()
              handleDelete(todo)
            }}> Delete</button></li>
          })
            : 'Enter a todo item'
        }
      </ul>*/


/* <ul>
   {
     todolist.length >= 1 ? todolist.map((todo, index) => {

       return <li key={index}>{todo}<button onClick={(e) => {
         e.preventDefault()
         handleEdit(todo)
       }}> DELETE</button>
       <button onClick={(e) => {
         e.preventDefault()
         handleDelete(todo)
       }}> EDIT</button></li>
     })
       : 'Adding Todo List'
   }
 </ul>

 <button onClick={(e) => {
  e.preventDefault()
  handleEdit(todo)
}}>
*/




/*const EditTodo = ({ todo }) => {
  const [description, setdescription] = useState(todo.description);
}
const updatetodo= async (id) => {
  try {
    const updatetodo = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "UPDATE"
    })
    console.log(updateTodo);
  } catch (error) {
    console.error(err.message)

  }
*/


