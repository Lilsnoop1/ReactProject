import React from "react";

function Form(props){
    return <div className="formDiv">
        <form className="innerForm" onSubmit={props.Submit}>
            <input 
            onChange={props.changeHandler}
            name="title"
            value={props.titleValue}
            type="text"
            className="inputText"
            placeholder="Title..."/>
            <input 
            onChange={props.changeHandler} 
            className="inputText"
            name="text" value={props.textValue} 
            type="text" placeholder="Text..."/>
            <button className="submit" type="submit">
                <span className="plus">+</span>
            </button>
        </form>
    </div>
}

export default Form;