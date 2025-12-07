import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import one from './../../assets/Rectangle 1161 (1).png';
import ones from './../../assets/79a6af39848fc56a019d164c09488aca406f3940.jpg';

const Page = () => {
  return (
    <div className="page px-4 md:px-10 py-6 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">О компании</h1>
      <p className="text-gray-700 mb-8 text-justify">
        Компания <strong>Thai.PRO</strong> — это профессиональный сервис в области иммиграционных услуг с многолетним опытом работы.
        Мы помогаем клиентам с получением <strong>ВНЖ и ПМЖ</strong> в Евросоюзе,
        а также оказываем услуги по оформлению <strong>двойного гражданства ЕС</strong>.
        С нами у Вас есть возможность получить польское, румынское, болгарское или другое гражданство Евросоюза для себя и своей семьи.
      </p>

      <Swiper loop autoplay={{ delay: 3000 }} className="rounded-lg overflow-hidden">
        <SwiperSlide>
          <img src={one} alt="Слайд 1" className="w-full object-cover h-64 md:h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ones} alt="Слайд 2" className="w-full object-cover h-64 md:h-96" />
        </SwiperSlide>
      </Swiper>

      <p className="text-[22px] mt-10">Компания <strong>Thai.PRO</strong> — это ведущий сервис в области иммиграционных услуг с многолетним опытом работы. Мы специализируемся на помощи клиентам в получении <strong>ВНЖ и ПМЖ</strong> в странах Евросоюза, а также на оформлении <strong>двойного гражданства ЕС</strong>.

        Наша команда профессионалов сопровождает вас на каждом этапе: от подготовки документов до получения официальных разрешений. Мы работаем с надежными партнерами и предоставляем индивидуальные решения для каждой семьи, обеспечивая быстрый и безопасный процесс иммиграции.

        С <strong>Thai.PRO</strong> вы можете получить гражданство Польши, Румынии, Болгарии и других стран ЕС, открывая новые возможности для жизни, работы и обучения за границей. Наша цель — сделать процесс иммиграции простым, понятным и доступным для каждого клиента.

        Если хочешь, я могу сделать ещё более живой вариант с маркетинговым оттенком, чтобы текст «продавал» услуги и вдохновлял на обращение в компанию.</p>

    </div >
  )
}
export default Page;