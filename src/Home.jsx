import React from 'react';
import Header from './Header';
import Events from './Events';
import Another from './Another';
import Another2 from './Another2';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const samplePosts = [
    { id: 1, title: "Coding Club Meetup", description: "Join us for a night of coding and snacks!" },
    { id: 2, title: "Music Club Concert", description: "Enjoy a live performance by the UCI Music Club." },
  ];

  return (
    <div>
        <Header/>
        <div className='home-container'>
            <Events/>
            <div className='home-another-container'>
                <Another/>
                <Another2/>
            </div>
        </div>
    </div>
  );
};

export default Home;
