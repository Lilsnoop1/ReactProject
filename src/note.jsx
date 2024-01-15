import React from "react";

function Note(props){
    const note = <div className="Note">
        <h1 className="note-info Title">{props.Title}</h1>
        <p className="note-info">{props.Content}</p>
        <button onClick={()=>{props.Delete(props.id)}} className="noteDelete">
            <span className="delete">Delete</span>
        </button>
    </div>
    return note;
}

export default Note;