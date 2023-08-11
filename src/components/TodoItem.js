import React from 'react'
// import Todos from './Todos';
export const TodoItem = (props) => {
    
    return (<>
        
        <h3 className='m-3'>{props.todo.Event}</h3>
        
        <h5 className='mx-4'>{props.todo.Timming}</h5>
        
        <button className="mx-4 btn btn btn-danger" onClick={() => { props.onDelete(props.todo) }} >Delete</button>
        
        <hr></hr>
        
    </>
    );
}

export default TodoItem;