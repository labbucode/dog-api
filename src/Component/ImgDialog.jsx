import React, { useState, useEffect } from 'react';
import '../App.css';

export default function ImgDialog({ closeModel, currBreed }) {
  const [subBreedImgs, setSubBreedImgs] = useState([]);

  useEffect(() => {
    getBreedImages(currBreed);
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [currBreed]);

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
          <h3>{currBreed} Dog Breed</h3>
        </div>
        <div className='dialog-image-container'>
          <h4>Sub Breed Images</h4>
          {subBreedImgs.length > 0 && (
            <ul className='dialog-image-show' style={{listStyle: "none"}}>
              {subBreedImgs.slice(0, 4).map((imgSrc, index) => (
                <li key={index}>
                  <img src={imgSrc} alt={`Sub Breed ${index}`} />
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className='dialog-image-container'>
          <h4>More Images</h4>
          {subBreedImgs.length > 0 && (
            <ul className='dialog-image-show' style={{listStyle: "none"}}>
              {subBreedImgs.slice(4, 8).map((imgSrc, index) => (
                <li key={index}>
                  <img src={imgSrc} alt={`Sub Breed ${index}`} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
