import React, { FormEvent,useRef } from "react";
import './NewTodo.css';

interface NewTodoProps{
    onAddTodo: (todoText:string) => void;
}

function NewTodo(props:NewTodoProps){

    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event:FormEvent) => {   
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        console.log(enteredText);
        props.onAddTodo(enteredText);
    }

    return(
        <form onSubmit={todoSubmitHandler}>
            <div className="from-control">
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    )
}

export default NewTodo;