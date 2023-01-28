import React, {useState} from 'react'
import {useGetTodosQuery, useGetTodoQuery} from './store/apis/todosApi'

export const TodoApp = () => {


  //const algo = useGetTodosQuery();  
  //console.log(algo);
  //const {data:todos = [], isLoading} = useGetTodosQuery();  //desestructuramos lo que nos interesa de nuestro custom hook

    
  const [ todoID , setTodoId] = useState(1);

  const { data:todo, isLoading } = useGetTodoQuery(todoID);
    //console.log(todo);

 
  const nextTodo = () => {
    setTodoId(todoID+1)
  }

  const prevTodo = () => {
    if(todoID === 1) return

    setTodoId(todoID  -1)

  }

  
  return (
    <>
        <h1>TODO - RTK QUERY</h1>
        <hr/>
        <h4>isLoading: { isLoading ? 'True' : 'False' } </h4>

        <pre>{JSON.stringify(todo) }</pre>


        <button onClick={prevTodo} >Prev Todo</button>
        <button onClick={nextTodo} >Next Todo</button>

        {/* <ol>
            { 
                todos.map(todo =>(
                    <li key={ todo.id } >
                        <strong> { todo.completed ? 'Done' : 'Pending'} </strong>
                         {todo.title} 
                    </li>
                ))
             }
        </ol> */}




    </>
  )
}


/**EL RTK QUERY ESTA HECHO PARA OPTIMIZAR LAS PETICIONES HTTP
 * 
 */