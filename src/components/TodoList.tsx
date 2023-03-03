import React from 'react';
import './TodoList.css';

interface TodoListProps{
    items:{id:string,text:string}[],
    onDeleteTodo: (id:string) => void,
}

function TodoList (props:TodoListProps){
    return (
        <ul>
            {props.items.map(item => 
            <li key={item.id}>
                <span>{item.text}</span>
                <button onClick={props.onDeleteTodo.bind(null,item.id)}>DELETE</button>
            </li>)}
        </ul>
    )
}

export default TodoList;