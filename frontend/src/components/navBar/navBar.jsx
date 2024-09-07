import React,{useState} from 'react'
import "./bar.css"
import { Link } from 'react-router-dom';

function NavBar() {

    const [open,setOpen] = useState(false);
    const Menus = ["item1", "item2", "item3","item4","item5"]
  return (
    <div className='navcontainer' >
      <ul>
        <li>
          <Link to='/' className='lilink'>Home</Link>
        </li>
        <li>
          <Link to='/create' className='lilink'>Create Note</Link>
        </li>
        
        <li>

        <button onClick ={()=>{setOpen(!open)}} > Select Item </button> 
          {open &&(<div  className='mainbar' id='mainbar'>
        <ul name="items" >
          { 
              Menus.map((item, index)=>(
                <li type='none' key={index}  onClick ={()=>{setOpen(!open)}} >{item}</li>
              ))
            }
        </ul>
          
        </div>
        )}
        </li>
      </ul>
    </div>
  )
}

export default NavBar
