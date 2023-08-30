import React, { useState } from 'react';
import '../App.css';
import Dialog from './Dialog';



export default function Header() {

  const [dialog, setDialog] = useState(false);

  const closeModel = () => setDialog(false);

  return (
    <div className='Header'>
        <div className='Header1'>
        <h1>Dog Gallery</h1>
    <button className="Header1-button" onClick={() => setDialog(true)}>Custom Search</button>
    {dialog && <Dialog closeModel={closeModel} />}  
        </div>
    </div>   
  )
}
