import React from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom'
import CreateNote from '../createNote/createNote';
import UpdateNote from '../updateNote/updateNote';
import HomePage from '../displayNote/homePage';
import FormWithFiles from '../createNote/FormWithFiles';
function App() {
  
  return (
    <div className='App'>
      <Routes>
        {/* <Route path='' element={< NavBar/>}></Route> */}
        <Route path='/' element={< HomePage/>}></Route>
        <Route path='/create' element={<CreateNote />} ></Route>
        <Route path='/update/:id' element={<UpdateNote />}></Route>
        <Route path='/upload' element={<FormWithFiles />}></Route>
        </Routes>
    </div>
  );
}

export default App;
