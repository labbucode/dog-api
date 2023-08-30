
import './App.css'
import React , { useState, useEffect } from 'react'
import Header from './Component/Header'




function App() {

  const [breedsData, setBreedsData] = useState([]);
  const [breedsDataImg, setBreedsDataImg] = useState({});
  const [filterDog, setFilterDog] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchBreeds();
  }, []); 

  const handleSearchBar = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filtered = breedsData.filter(breed => breed.toLowerCase().includes(value));
    setFilterDog(filtered);
  };
  
  const fetchBreeds = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((data) => {
        const breeds = Object.keys(data.message);
        setBreedsData(breeds);
        fetchBreedsImg(breeds);
        setFilterDog(breeds);
    })
    .catch(err => console.error("data error"+err)); 
  };
  const fetchBreedsImg = (breeds) => {
    const imagesPromises = breeds.map(breed => 
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(res => res.json())
    .then(data => ({breed, image: data.message}))
    )
  

  Promise.all(imagesPromises)
  .then(data => {
    const imagesStore = {};
    data.forEach(item => {
      imagesStore[item.breed] = item.image;
    });
    setBreedsDataImg(imagesStore);
  })
  .catch(err => console.error("img error"+err));
};

  return (

    <div className="App">
        <Header />
             
       
        <div className='input'>
          <input placeholder='Type here to filter by breed' value={search} onChange={handleSearchBar} />
        </div>

        <div className='container'>
          <ul className='list'>
              {filterDog.map(breed => (
                <li className='list-item' key={breed}>
                  <img src={breedsDataImg[breed]} alt={breed} />
                  {breed}
                </li>
              ))}
          </ul>
        </div>

        

      </div>   
  )
}

export default App
