import React, { useState, useEffect } from "react";
import './Home.css';

const photos = [
  '/image/16.jpeg',
  '/image/35.jpeg',
  '/image/36.jpeg',
  '/image/37.jpeg',
  '/image/19.jpeg',
  '/image/5.jpeg',
  '/image/2.jpeg',
  '/image/3.jpeg',
  '/image/15.jpeg',
  '/image/14.jpeg',
  '/image/6.jpeg',
  '/image/11.jpeg',
  '/image/13.jpeg',
  '/image/1.jpeg',
  '/image/9.jpeg',
  '/image/26.jpeg',
  '/image/29.jpeg',
  '/image/17.jpeg',
  '/image/30.jpeg',
  '/image/55.jpeg',
  '/image/54.jpeg',
  '/image/56.jpeg',
  '/image/53.jpeg',
  '/image/52.jpeg',
  '/image/51.jpeg',
  '/image/30.jpeg',
  '/image/47.jpeg',
];

const Home = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photos.length);
    }, 3000); // Change the photo every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home" style={
      { backgroundImage: `url('/image/tara.gif')`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat',
      }}>
      <div className="header-row">
        <div className="school-logo">
          <img src="/image/logo.png" alt="School Logo" />
        </div>
        <h2>माँ भारती विद्या मंदिर जूनियर हाई स्कूल</h2>
      </div>
      <h3>मँझली पुरवा (लालपुर), निघासन, लखीमपुर-खीरी, उत्तर प्रदेश (262903)</h3>

      <div className="carousel-container">
        <div className="carousel-slide" style={{ transform: `translateX(-${currentPhoto * 100}%)` }}>
          {photos.map((photo, index) => (
            <img key={index} src={photo} alt={`School activities ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
