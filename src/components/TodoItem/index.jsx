import React from 'react'
import styles from "./TodoItem.module.scss";

function TodoItem({ data, deleteFunc }) {
    const { title,id } = data
    const deleteItem = () => {
        deleteFunc(id);
    }
    return (
        <li className={`${styles.listItems}`}>
            <p>{title}</p>
            <button onClick={deleteItem}>Delete</button>
        </li>
    )
}

export default TodoItem