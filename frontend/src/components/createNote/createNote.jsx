import React,{useState} from 'react'
import "./createNote.css"
import axios from 'axios'
import NavBar from '../navBar/navBar'
import { useNavigate } from 'react-router-dom'

function CreateNote() {
    const navigation = useNavigate();
    const [data,setData] =useState({
        title:"",
        content:""
    })
    function handleChange(event){
        const {name,value} = event.target
        setData((prevVal)=>{
           return{...prevVal,
            [name]:value
            }
        })
        
    }
    function handleClick(){
      if(!data.content || !data.title){
        alert("Please No field should be left blank")
        return
      }
      else{
      axios.post('http://localhost:2010/create',data)
      setData({
        title:"",
        content:""
    })
    navigation('/')
  }
    }
  return (
    <div className='crtnote'>
       <NavBar />

      <form >
        <h1 id='create-note'>Create New Note</h1>
        <input className='input' type="text" name="title" onChange={handleChange} placeholder='Title here' value={data.title} />
        <br />
        <textarea className='input' onChange={handleChange} name="content" placeholder='Content here' value={data.content} />
        <br />
        <button type="submit" onClick={handleClick}>Add +</button>
      </form>
    </div>
  )
}

export default CreateNote
