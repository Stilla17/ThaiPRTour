import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import img from './../assets/Rectangle 1262.png';
import "swiper/css";

import SectionNedvij from '../Components/Sections/NedvigSections/SectionNedvij';

const Nedvij = () => {
    return (
        <>
            <section>
                <p className='mt-5'>Главная {'>'} Недвижимость</p>
                <h1 className='text-[42px] font-bold '>Недвижимость в Тайланде</h1>
                <p className='text-[#202020] mt-5'>
                    Недвижимость Таиланде от застройщиков и ведущих агентств. Бесплатная консультация по покупке и продаже недвижимости в Таиланде. Thai.PRO - Портал недвижимости для тех кто выгодно хочет вложить деньги
                </p>
            </section>

            <section>
                <Swiper className="mySwiper mt-5">
                    <SwiperSlide>
                        <img className='w-full h-[250px] object-cover' src={img} alt="" />
                    </SwiperSlide>
                </Swiper>
            </section>

            <SectionNedvij />

            <section className=''>
                <div className='flex gap-5 items-center mt-5'>
                    <p className='text-[22px] font-bold'>Топ новостроек</p>
                    <p className='text-[#757575]'>Смотреть все</p>
                </div>
                
            </section>
        </>
    )

}

export default Nedvij
