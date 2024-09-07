import React, { useEffect, useState,useContext } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import '../createNote/createNote.css'
import { NoteContext } from '../context/NoteContext'

function UpdateNote() {
  const {id} = useParams()
  const{data,setData} = useContext(NoteContext)

  const [updateddata, setUpdateddata] = useState(
   data.find((note)=>note.ID == id)
  )
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const [success, setSuccess] = useState(false)
      //change the initial data to the current data
      function handleChange(event){
         const {name, value}= event.target
         setUpdateddata((prevValue)=>{return {...prevValue,[name]:value}})
    }
const handleUpdate =  async(event)=>{
      
        event.preventDefault()
        if(!updateddata.title || !updateddata.content){
          setError("Title and Content are required")
          return  // Stop the function if required fields are missing
        }
        try{

          await axios.put('http://localhost:2010/update/'+ id, updateddata)
          setSuccess(true)
          setError(null)
          setTimeout(() => navigate('/'), 2000); // Navigate after 2 seconds

        }
        catch(err){
            console.log(err)
            setError("Error updating")
            }
    
      }
  return (
    <div className='crtnote'>
        <h1>Update Note data</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error messages */}
        {success && <p style={{ color: 'green' }}>Note updated successfully!</p>} {/* Success message */}
      <form onSubmit={handleUpdate} > 
        <input className='input'  type="text" onChange={handleChange} name='title' placeholder='Enter Title'   value={updateddata.title}/>
        <textarea className='input' type="text" onChange={handleChange} name='content' placeholder='Enter Content' value={updateddata.content} />
        <button type='submit'  >update</button>
      </form>
    </div>
  )
}

export default UpdateNote
