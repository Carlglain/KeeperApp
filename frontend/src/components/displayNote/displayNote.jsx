import React from 'react';
import "./displayNote.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

// import { useParams } from 'react-router-dom'
function DisplayNote(props) {
 
    const handleDelete= async(id)=>{
      try{
      await axios.delete("http://localhost:2010/deletenote/"+id)
      return 
      }
      catch(err){
        console.log(err);
      }
     
    }
   
  return (
   
      <span className='dispnote' >
         

        <h1>{props.title}</h1>
        <p>{props.content}</p>
       
       <Link to={`update/${props.id}`} >Update</Link>
       <form>
      <button type='submit' onClick={e=>handleDelete(props.id)}>Delete</button>
      </form>
        
      </span>
  )
}

export default DisplayNote
