import React from 'react'
import '../App.css';

export default function Dialog( {closeModel} ) {
  return (
      <>
    <div className='dialog-wrapper' onClick={closeModel}></div>
    <div className='dialog-container'>
            <div className='dialog-header'>
                <h3>Custom Search</h3>
            </div>
            <div className='dialog-main'>
            <select>
                <option value="volvo">Select a Breed</option>
            </select> 
            <input type='number' placeholder='Number of Images'/>
    </div>
    <div  className='dialog-button'>
    <button>GET IMAGES</button>
    </div>
    <div  className='dialog-image-container'>
    <p> Showing 3 Images of "Breed Name" </p>
    </div>
    </div>
    </>
    )
}
