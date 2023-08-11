import React, { useState } from 'react'

export const AddTodo = (props) => {
    let stylee = {
        textAlign: 'center',
        fontFamily :"cursive"
    }
    const [title, setTitle] =useState("");    
    const [desc, setDesc] =useState("");    

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc ){
            alert('Please fill all the fields');
        }
        else{
            // console.log(title + " "+ desc);
            props.addTodoList(title, desc);
        }
        setTitle('')
        setDesc('')
        
    }
    return (
        <>
        <div className='container my-2'>
            <h1 style={stylee}> Add Tasks:- </h1>

            <form onSubmit={submit}>
            {/* <div className="form-group">
                    <label htmlFor="exampleInputEmail1">S no:- </label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Sno" />

                </div> */}
                <br></br>
                <div className="form-group">
                    <label htmlFor="Event">Event:- </label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="Event" aria-describedby="emailHelp" placeholder="Event name" />

                </div>
                <br></br>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Timming:-</label>
                    <textarea value={desc} className="form-control" onChange={(e)=>{setDesc(e.target.value)}} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
            </div>
        </>
    )
}

export default AddTodo