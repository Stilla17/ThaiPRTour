import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import one from './../../assets/Rectangle 1161 (1).png';
import ones from './../../assets/79a6af39848fc56a019d164c09488aca406f3940.jpg';

const Page = () => {
  return (
    <div className="page">
      <h1>Второе гражданство</h1>

      <p>
    Компания Thai.PRO — это профессиональный сервис в области иммиграционных услуг с многолетним опытом 
    работы в области гражданства Европейского союза. Мы помогаем клиентам с получением ВНЖ и ПМЖ в Евросоюзе, 
    а также оказываем услуги по оформлению двойного гражданства ЕС. С нами у Вас есть возможность получить польское, 
    румынское, болгарское или другое гражданство Евросоюза для себя и своей семьи.
      </p>

      <Swiper loop>
        <SwiperSlide>
          <img src={one} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ones} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Page;
