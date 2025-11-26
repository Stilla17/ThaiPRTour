import React from 'react';
import cardData from './CardApi.jsx';
import '../../App.css'; 

const CardList = () => {
  return (
    <div className="offers-section">
      <h2 className="section-title">Самые выгодные предложения</h2>

      <div className="offers-grid">
        {cardData.map((item, index) => (
          <div key={index} className="offer-card">
            
            <img src={item.image} alt={item.title} className="offer-image" />

            <div className="offer-content">
              <div className="flag-title">
                <img src={item.flag} alt="flag" className="flag-img" />
                <h3>{item.title}</h3>
              </div>

              <p className="description">{item.description}</p>

              <div className="price-row">
                <p className="price">от {item.price}</p>
                <button className="offer-btn">Оформить</button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;