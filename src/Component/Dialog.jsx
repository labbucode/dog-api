import React, { useEffect } from 'react'
import '../App.css';

export default function Dialog( {closeModel} ) {

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, []);

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
    <div className='dialog-image-show'>
            <img src='https://images.dog.ceo/breeds/bouvier/n02106382_3048.jpg' />
            <img src='https://images.dog.ceo/breeds/bouvier/n02106382_3048.jpg' />
            <img src='https://images.dog.ceo/breeds/bouvier/n02106382_3048.jpg' />
            <img src='https://images.dog.ceo/breeds/bouvier/n02106382_3048.jpg' />
            <img src='https://images.dog.ceo/breeds/bouvier/n02106382_3048.jpg' />
            <img src='https://images.dog.ceo/breeds/bouvier/n02106382_3048.jpg' />
            <img src='https://images.dog.ceo/breeds/bouvier/n02106382_3048.jpg' />
            <img src='https://images.dog.ceo/breeds/bouvier/n02106382_3048.jpg' />
            <img src='https://images.dog.ceo/breeds/bouvier/n02106382_3048.jpg' />
            <img src='https://images.dog.ceo/breeds/bouvier/n02106382_3048.jpg' />
            <img src='https://images.dog.ceo/breeds/bouvier/n02106382_3048.jpg' />
            <img src='https://images.dog.ceo/breeds/bouvier/n02106382_3048.jpg' />
    </div>
    </div>
    </div>
    </>
    )
}
