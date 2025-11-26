import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import img from './../assets/Rectangle 1262.png';
import "swiper/css";

import SectionNedvij from '../Components/Sections/NedvigSections/SectionNedvij';
import axios from 'axios';

const Nedvij = () => {
    const [data, setData] = useState([])
    const handleGetData = async () => {
        try {
            const res = await axios.get('https://68e211a48943bf6bb3c58500.mockapi.io/todoList/objects');
            setData(res.data)
        } catch (element) {
            console.error('Error:', element)
        }
    }

    useEffect(() => {
        handleGetData()
    }, [])
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
            {
                data
                    .filter(item => item.newbuild === "Новостройка")
                    .map((item, index) => (
                        <div key={index} className='border p-5 rounded-lg mt-5'>
                            <img src={item.image} alt="" />
                            <p className='text-[20px] font-bold mt-5'>{item.name}</p>
                            <p className='text-[#757575]'>{item.address}</p>
                            <p>{item.size}</p>
                            <p className='text-[#202020] mt-2'>{item.info}</p>
                        </div>
                    ))
            }
        </>
    )

}

export default Nedvij
