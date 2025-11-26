import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import img from './../assets/Rectangle 1262.png';
import "swiper/css";
import { motion, AnimatePresence } from "framer-motion";
import { CiHeart } from "react-icons/ci";
import SectionNedvij from '../Components/Sections/NedvigSections/SectionNedvij';
import axios from 'axios';
import { FaWhatsapp } from 'react-icons/fa';
import { Ri4kLine, RiDashboard2Fill, RiDice1Fill } from 'react-icons/ri';
import { IoLocateSharp } from 'react-icons/io5';
import imgLocation from './../assets/Vector (11).png';
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
            <div className='flex justify-between flex-wrap'>
                {
                    data
                        .filter(item => item.newbuild === "Новостройка")
                        .map((item, index) => (
                            <div key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="mt-3 flex justify-center lg:justify-start"
                                >
                                    <div className="w-full sm:w-[301px] h-[422px] border border-black rounded-2xl p-4 hover:shadow-xl hover:-translate-y-2 transition">
                                        <img src={`${item.img}`} className="rounded-xl w-full h-auto hover:scale-[1.03] transition" />
                                        <div className="mt-3">
                                            <h1 className="text-[16px] font-bold">{item.name}</h1>
                                            <p className="flex items-center gap-2 text-[14px] mt-1">
                                                <img src={imgLocation} alt="" /> {item.address}
                                            </p>
                                            <p className="text-[14px] mt-1">{item.size}</p>
                                            <p className="text-[12px] text-gray-500 mt-2 line-clamp-2">
                                                {item.info}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between mt-5">
                                            <h1 className="text-[16px] text-orange-500">от $180 000</h1>
                                            <div className="flex items-center gap-4 text-[20px]">
                                                <FaWhatsapp className="hover:text-green-500 hover:scale-125 transition cursor-pointer" />
                                                <CiHeart className="hover:text-red-500 hover:scale-125 transition cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))
                }
            </div>
        </>
    )

}

export default Nedvij
