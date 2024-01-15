import React,{useState} from "react";
import Header from './header'
import Note from './note'
import Footer from './footer'
import Form from "./form.jsx"

function App(){
    const [noteInfo,setNoteInfo] = useState({
        title:"",
        text:""
    })
    const [noteList,setNoteList] = useState({
        titleList:[],
        textList:[]
    })
    function handleChange(event){
        const {value,name} = event.target;
        setNoteInfo((prevValue)=>{
            return {
                ...prevValue,
                [name]:value
            }
        })
    }
    function whenSubmit(event){
        setNoteList((prevValue)=>{
            return{
                titleList:[...prevValue.titleList,noteInfo.title],
                textList:[...prevValue.textList,noteInfo.text]
            }
        })
        event.preventDefault();
    }
    function deleteNote(id){
        setNoteList((prevValue)=>{
            return{
                titleList: prevValue.titleList.filter((elementTitle,indexTitle)=>{
                    return id!==indexTitle;
                }),
                textList: prevValue.textList.filter((elementText,indexText)=>{
                    return id!==indexText
                })
            }
        })
    }
    return <div>
        <Header/>
        <Form 
            changeHandler={handleChange} 
            titleValue={noteInfo.title} 
            textValue={noteInfo.text}
            Submit={whenSubmit}
        />
        <div className="notes-div">
            {noteList.titleList.map((element,index)=>{
                return <Note Title={element} Content={noteList.textList[index]} id={index} Delete={deleteNote}/>
            })}
        </div>
        <Footer/>
    </div>
}

export default App