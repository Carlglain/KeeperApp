import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom'
import { NoteContextProvider } from './components/context/NoteContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <NoteContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </NoteContextProvider>
  </div>
);
