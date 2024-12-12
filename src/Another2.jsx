import React from 'react';
import './Another2.css';

const Another2 = ({ dogImages }) => {
  return (
    <div className="another2-container">
      {dogImages.length === 0 ? (
        <p>Loading dog images...</p>
      ) : (
        <div className="dog-gallery">
          {dogImages.map((url, index) => (
            <div key={index} className="dog-card">
              <img src={url} alt="A cute dog" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Another2;
