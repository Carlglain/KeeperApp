import React,{useState,useEffect,useContext} from 'react'
import DisplayNote from './displayNote'
import axios from 'axios'
import { NoteContext } from '../context/NoteContext'


function DisplayEachNote() {
  const{data,setData} = useContext(NoteContext)
    const [notes,setNotes] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:2010/')
      .then(res=>{
        setNotes(res.data)
        setData(res.data)
      })
      .catch(err=>console.error(err))
      
    },[])

  return (
    <div>
      <div className='displayStyles'>
        {notes.map((note,index)=>(
          <DisplayNote  key={index}
          title = {note.title}
          content = {note.content}
          id={note.ID}
          />
        ))
        }
        </div> 
    </div>
  )
}

export default DisplayEachNote
