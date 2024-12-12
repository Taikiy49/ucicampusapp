import React, { useEffect, useState } from 'react';
import Header from './Header';
import Events from './Events';
import Another from './Another';
import Another2 from './Another2';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [dogImages, setDogImages] = useState([]);

  // Fetch random dog images
  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random/5'); // Fetch 5 random dog images
        const data = await response.json();
        setDogImages(data.message); // The API returns an array of image URLs
      } catch (error) {
        console.error('Error fetching dog images:', error);
      }
    };

    fetchDogImages();
  }, []);

  return (
    <div>
      <Header />
      <div className='home-container'>
        <Events />
        <div className='home-another-container'>
          <Another />
          <Another2 dogImages={dogImages} />
        </div>
      </div>
    </div>
  );
};

export default Home;
