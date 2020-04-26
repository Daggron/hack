import React, { useState, Fragment } from 'react';
import size3 from './assets/3.jpg';
import Form from './components/form';
import style from './App.module.css';

const App = () => {
  const [todos, setTodods] = useState([]);

  const toggleStatus = (id) => {  
    const arr = todos.map(eachTodo=>{
      if(eachTodo.id === id){
        eachTodo.status = eachTodo.status === 'incomplete' ? 'complete' : 'incomplete' 
      }
      return eachTodo;
    })

    setTodods(arr);
  }

  const deleteTodo = (id) => {
    const arr = todos.filter(eachTodo=>{
      if(eachTodo.id === id){
        return false;
      }
      return true;
    })

    setTodods(arr);
  }


  const complete = todos.filter(eachTodo=>{
    if(eachTodo.status === 'complete'){
      return true;
    }
    return false;
  })

  const inComplete = todos.filter(eachTodo=>{
    if(eachTodo.status === 'incomplete'){
      return true;
    }
    return false;
  })



  if(todos.length === 0){
    return (
      <Fragment>
         <div className={style.flex}>
           <img src={size3} style={{height:300}} alt="no todo"/>
           <h3>
             You have no todo today please add some todos
           </h3>
           <Form todos={todos} setTodods={setTodods} />
         </div>
      </Fragment>
    )
  }

  return(
    <div className={style.flex}>
      <h3>
        Todos App
      </h3>
      <Form  todos={todos} setTodods={setTodods} />
      {
        inComplete.length !== 0 && (
          <>
          <h4>
            In Complted todos
          </h4>
          <ul>
            {
              inComplete.map(eachTodo=>{
                return(
                  <Fragment key={eachTodo.id}>
                    <li className={style.red}>
                      {eachTodo.title}
                    </li>
                    <span onClick={()=>toggleStatus(eachTodo.id)} role="img" aria-label="tick">
                       ✅ 
                    </span>
                    <span onClick={()=>deleteTodo(eachTodo.id)} role="img" aria-label="tarsh can">
                       ⏫ 
                    </span>
                  </Fragment>
                )
              })
            }
          </ul>
          </>
        )
      }


      {
        complete.length !== 0 && (
          <>
          <h4>
            Complted todos
          </h4>
          <ul>
            {
              complete.map(eachTodo=>{
                return(
                  <Fragment key={eachTodo.id}>
                    <li className={style.green}>
                      {eachTodo.title}
                    </li>
                    <span onClick={()=>toggleStatus(eachTodo.id)} role="img" aria-label="tick">
                        ❌  
                    </span>
                    <span onClick={()=>deleteTodo(eachTodo.id)} role="img" aria-label="tarsh can">
                       ⏫ 
                    </span>
                   </Fragment>
                )
              })
            }
          </ul>
          </>
        )
      } 
    </div>
  )
}

export default App;