import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";

import pass from '../../../assets/Rectangle 1162.png';
import realestate from '../../../assets/Rectangle 1162 (1).png';
import passport from '../../../assets/Rectangle 1162 (2).png';
import poster from '../../../assets/Rectangle 1161.png';
import car from '../../../assets/Rectangle 1162 (4).png';
import concierge from '../../../assets/Rectangle 1162 (5).png';

const categories = [
  { name: "Гражданство", color: "blue", img: pass },
  { name: "Недвижимость", color: "yellow", img: realestate },
  { name: "Индекс паспорта", color: "lightblue", img: passport },
  { name: "Автослуги", color: "orange", img: car },
  { name: "Консьерж-сервис", color: "green", img: concierge },
];

const Categories = () => {
  return (
    <div className="categories-wrapper">
      {categories.map((cat, index) => (
        <CategoryItem key={index} {...cat} />
      ))}
    </div>
  );
};

export default Categories;