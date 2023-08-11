import React from 'react';
import './css/App.css';
import './css/Todos.css';
import TodoItem from './TodoItem';


export const Todos = (props) => {
    return (
        <div className='container my-5 '>
            <h1 className='heading-text'>  Todo's List  </h1>
            <div className="container ">
                <ul className='m-4'>
                    <li>
                        {props.data.length === 0 ? "No todos Found" :
                            props.data.map((todo) => {
                                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                            })}
                    </li>
                </ul>
            </div>

        </div>
    );
}
export default Todos;