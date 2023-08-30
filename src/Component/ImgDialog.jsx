import React, { useEffect } from 'react'
import '../App.css';

export default function ImgDialog( {closeModel} ) {

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
                <h3>Selected Dog Breed Name</h3>
            </div>
            <div  className='dialog-image-container'>
    <h4>Sub Breeds</h4>
    <div className='dialog-image-show'>
            <img src='https://images.dog.ceo/breeds/bouvier/n02106382_3048.jpg' />
            <img src='https://images.dog.ceo/breeds/bouvier/n02106382_3048.jpg' />
            <img src='https://images.dog.ceo/breeds/bouvier/n02106382_3048.jpg' />
                        <img src='https://images.dog.ceo/breeds/bouvier/n02106382_3048.jpg' />
    </div>
    </div>
            <div  className='dialog-image-container'>
    <h4> More Images</h4>
    <div className='dialog-image-show'>
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
