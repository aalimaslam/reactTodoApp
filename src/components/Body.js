import React from 'react'
import {useState} from "react"
import "./body.css";
export default function Body() {
    
    
    const [text, setText] = useState("");
    const handleSubmit = (event)=>{
        const todoContainer = document.getElementById("todo-container");
        event.preventDefault();

        if(text === ""){
            alert("Enter Something In Todo");
            return;
        }

        const handleRemove = ()=>{
            todoContainer.removeChild(container)
        }

        const handleEdit = function(){
            input.readOnly = !input.readOnly;
            this.classList.toggle("fa-edit");
            this.classList.toggle("fa-save");
        }


        const container = document.createElement("div");
        const input = document.createElement("input");
        const iEdit = document.createElement("i");
        const iRemove = document.createElement("i");

        container.className = "todo";
        iEdit.classList.add("fas","fa-edit");
        iRemove.classList.add("fas","fa-trash");
        iRemove.onclick = handleRemove;
        iEdit.onclick = handleEdit;

        input.readOnly = true;
        input.value = text;
        container.appendChild(input)
        container.appendChild(iEdit)
        container.appendChild(iRemove)
        todoContainer.appendChild(container);
        
    }




    const handleChange = (event)=>{
        setText(event.target.value);
    }

    return (
        <>
            <div className="container">
                <h1 className="heading">TodoList</h1>
                <div className="main-container">
                    <form className="search-container" onSubmit={handleSubmit}>
                        <input type="text" className='search-bar' onChange={handleChange} value={text} placeholder="Enter Your Text Here..." />
                        <button><i className="fas fa-search"></i></button>
                    </form>
                    <div id="todo-container">

                    </div>
                </div>
            </div>
        </>
    )
}
