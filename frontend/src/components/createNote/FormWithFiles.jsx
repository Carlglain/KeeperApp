import React,{useState} from 'react'
import axios from 'axios' 
function FormWithFiles() {
    const [FormDat,setFormDat] =useState({
        title:'',
        content:'',
        file:null
    })
    const handleChange =(e)=>{
    
        const {name,value,files} = e.target
        if(name ==='file'){
            setFormDat({...FormDat,[name]:files[0]})
        }
        else{
            setFormDat({...FormDat,[name]:value})
        }

    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = new FormData();
        data.append('title',FormDat.title)
        data.append('content',FormDat.content)
        data.append('file',FormDat.file)
        try{
         await axios.post('http://localhost:2010/upload',data)
        }
        catch(e){console.error(e)}
        }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name='title' value={FormDat.title} />
        <input onChange={handleChange} type="text" name='content' value={FormDat.content} />
        <input onChange={handleChange} type="file" name='file' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormWithFiles
