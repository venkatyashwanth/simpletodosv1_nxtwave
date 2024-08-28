import React, { useState } from 'react';
import styles from "./SimpleTodos.module.scss";
import TodoItem from '../TodoItem';

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

function SimpleTodos() {
  const [todos, setTodos] = useState(initialTodosList);
  const handleDelete = uniqueNo => {
    const filteredList = todos.filter(each => each.id !== uniqueNo);
    console.log(filteredList);
    setTodos(filteredList);
  }

  return (
    <div className={`${styles.appBg}`}>
      <div className={`${styles.appContent}`}>
        <h1>SimpleTodos</h1>
        <ul className={`${styles.todoList}`}>
          {
            todos.map(eachTodo =>
              <TodoItem key={eachTodo.id} data={eachTodo} deleteFunc={handleDelete}/>
            )
          }
        </ul>
        {todos.length === 0 && <p className={`${styles.cautionMsg}`}>All Done</p>}
      </div>
    </div>
  )
}

export default SimpleTodos