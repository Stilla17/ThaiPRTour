import React from "react";

const CategoryItem = ({ name, color, img }) => {
  return (
    <div className="category-item">
      <div 
        className="category-card"
        style={{ backgroundColor: color }}
      >
        <img src={img} alt={name} className="category-image" />
        <p className="category-name">{name}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
