import React, { useState, useEffect } from 'react';
import './Home.css'; // Assuming you have a CSS file named Home.css

const Home = () => {
  const banners = [
    // Your banner URLs
    'https://img.freepik.com/free-photo/top-view-delicious-cakes-along-with-cinnamon-candies-dark-surface_140725-43911.jpg?w=1060&t=st=1721478859~exp=1721479459~hmac=50fbf0bae19cbcb3eadfb66bf14f0323bbb186d95ba9101acbcfd6c37fa876c2',
    'https://img.freepik.com/free-photo/top-view-yummy-waffle-cookies-with-fresh-red-strawberries-french-macarons-pink-surface_140725-81114.jpg?size=626&ext=jpg&ga=GA1.1.1994183730.1715175290&semt=ais_user',
    'https://img.freepik.com/free-photo/top-view-delicious-cakes-along-with-cinnamon-candies-dark-surface_140725-43911.jpg?w=1060&t=st=1721478859~exp=1721479459~hmac=50fbf0bae19cbcb3eadfb66bf14f0323bbb186d95ba9101acbcfd6c37fa876c2',
    'https://img.freepik.com/free-photo/top-view-yummy-waffle-cookies-with-fresh-red-strawberries-french-macarons-pink-surface_140725-81114.jpg?size=626&ext=jpg&ga=GA1.1.1994183730.1715175290&semt=ais_user'
  ];

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBannerIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 2400);

    return () => clearInterval(timer);
  }, [banners.length]);

  const handlePrevClick = () => {
    setCurrentBannerIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentBannerIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="home-container" style={{ position: 'relative' }}>
        {banners.map((banner, index) => (
          <img
            src={banner}
            alt={`Banner ${index}`}
            style={{
              display: index === currentBannerIndex ? 'block' : 'none',
              width: '100%',
              marginTop: "110px",
              height: "665px"
            }}
            key={index}
          />
        ))}
        <button
          onClick={handlePrevClick}
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
            width:"10px"
          }}
        ><img src='IMG\right-arrow.png' alt='Next' style={{width:'20px',}}/>
        </button>
        <button
          onClick={handleNextClick}
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
            width:"20px"
          }}
        ><img src='IMG\right-arrow.png' alt='Next' style={{width:'20px'}}/>
        </button>
      </div>
      <div style={{ height: "1000px" }}></div>
    </>
  );
};

export default Home;
