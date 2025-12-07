import React from "react";
import CategoryItem from './../CategoryItem/CategoryItem.jsx';




const categories = [
  { name: "Купить животное", color: "#4da3ff", img: "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Продать животное", color: "#ffd23f", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxlDun0EWp8OiGTXoelcBkuM7BiifKAflkw&s' },
  { name: "Аренда животных", color: "#7ed4ff", img: 'https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D'},
  { name: "Услуги для животных", color: "#ff8c42",  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxlDun0EWp8OiGTXoelcBkuM7BiifKAflkw&s'},
  { name: "Пропавшие животные", color: "#59c96f",  img: 'https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D'},
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
