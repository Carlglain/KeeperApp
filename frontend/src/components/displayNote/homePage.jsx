import React,{useEffect, useState} from 'react'
import NavBar from '../navBar/navBar' 
import DisplayEachNote from './displayEachNote'
import axios from 'axios'
function HomePage() {
  const [data, setData] =useState(null)
 useEffect(()=>
  {axios.get('http://localhost:2010/api')
 .then(res=>{setData(res.data.weather)})
 .catch(err=>console.error(err))}
 ,[])
 if(!data){
  return <div>Loading.......</div>
 }
 return (
   <div>
        <div></div>
      <NavBar />
      <p>city:{data.town}</p> 
      <p>weather:{data.weather}</p>
      <p>temperature:{data.temp}</p>
      <p>{data.icon}</p>
      <DisplayEachNote />
    </div>
  )
}

export default HomePage
