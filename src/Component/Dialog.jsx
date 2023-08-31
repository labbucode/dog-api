import React, { useEffect, useState } from 'react'
import '../App.css';

export default function Dialog( {closeModel, breedsData} ) {

    const [value, setValue] = useState('');
    const [breed, setBreed] = useState('');
    const [ImageShow, setImageShow] = useState(false);
    const [subBreedImgs, setSubBreedImgs] = useState([]);

    const handleGetImages = () => {
        setImageShow(true);
    }

    useEffect(() => {
        getBreedImages(breed);
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, [handleGetImages]);

    

    const getBreedImages = async (breed) => {
        try {
          const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
          const data = await response.json();
          setSubBreedImgs([...data.message]);
        } catch (error) {
          throw error;
        }
      };

  return (
      <>
    <div className='dialog-wrapper' onClick={closeModel}></div>
    <div className='dialog-container'>
            <div className='dialog-header'>
                <h3>Custom Search</h3>
            </div>
            <div className='dialog-main'>
            <select onChange={(e) => setBreed(e.target.value)
         } value={breed} >
                <option className='option'>Select a Breed</option>
                {breedsData.map((e) => {
                    return <option>{e}</option>
                })}
            </select> 
            <input type='number' placeholder='Number of Images' value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
    <div  className='dialog-button'>
    <button onClick={handleGetImages}>GET IMAGES</button>
    </div>
    <div  className='dialog-image-container'>
    {  ImageShow  && <p> Showing {value} Images of {breed} </p> }

{/* working */}
    {  ImageShow && subBreedImgs.length > 0 && (
          <ul className='dialog-image-show' style={{listStyle: "none"}}>
              {subBreedImgs.slice(0, value).map((imgSrc) => (
                <li >
                  <img src={imgSrc} />
                </li>
              ))}
            </ul>
              
          )}
          {/* working */}


            {/* <img src='https://images.dog.ceo/breeds/bouvier/n02106382_3048.jpg' /> */}
    </div>
    </div>
    </>
    )
}
