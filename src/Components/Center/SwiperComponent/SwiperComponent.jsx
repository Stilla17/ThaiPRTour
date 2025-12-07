import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import swipe from '../../../assets/Rectangle 1161.png';
import swip from '../../../assets/images.jpg';

const SwiperComponent = () => {
  return (
    <div className="swiper-container">
      <Swiper loop={true} autoplay={{ delay: 3000 }}>
        <SwiperSlide>
          <img src={swipe} alt="Image 1" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swip} alt="Image 2" className="swiper-image" />
        </SwiperSlide>
      </Swiper>

      <div className="swiper-text">
        Популярные категории
      </div>
    </div>
  );
};

export default SwiperComponent;
