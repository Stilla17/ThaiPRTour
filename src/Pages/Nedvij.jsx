import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import image from './../assets/Rectangle 1262.png';
import "swiper/css";
import { motion, AnimatePresence, filterProps } from "framer-motion";
import { CiHeart } from "react-icons/ci";
import SectionNedvij from '../Components/Sections/NedvigSections/SectionNedvij';
import axios from 'axios';
import { FaWhatsapp } from 'react-icons/fa';
import { Ri4kLine, RiDashboard2Fill, RiDice1Fill } from 'react-icons/ri';
import { IoLocateSharp } from 'react-icons/io5';
import imgLocation from './../assets/Vector (11).png';
import sectionImg from './../assets/Rectangle 1164.png';
import nextImg from './../assets/Group 1681.png';
import { Navigation } from "swiper/modules";
import SectionEmail from '../Components/Sections/SectionEmail/SectionEmail';
import imgAddress from './../assets/Rectangle 1176 (1).png';
import imgSection from './../assets/Rectangle 1164 (1).png';
import MiniCard from '../Components/Childrens/MiniCard';
import minicardimg from './../assets/Frame 1000003361.png';
import minicardimg2 from './../assets/Frame 1000003361 (1).png';
import minicardimg3 from './../assets/Frame 1000003361 (2).png';
import minicardimg4 from './../assets/Frame 1000003361 (3).png';
import SectionInfo from './../Components/Sections/SectionInfo/SectionInfo.jsx';
import News from '../Components/Childrens/News.jsx';
import newsImg from './../assets/Group 1688.png';
import newsImg2 from './../assets/Rectangle 1165.png';
import newsImg3 from './../assets/Rectangle 1165 (1).png';
import newsImg4 from './../assets/Rectangle 1165 (2).png';
import { useParams } from 'react-router';
import { Link } from 'react-router';

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
    const filteredData = data.filter(item => item.newbuild === 'Новостройка');
    const filteredFtorichka = data.filter(item => item.newbuild === 'Вторичка');
    const filteredCotejar = data.filter(item => item.newbuild === 'Коттеджи');
    const [allRender, setAllRender] = useState(false)

    useEffect(() => {
        handleGetData()
    }, [])
    return (
        <div className='max-w-[1350px] mx-auto px-5'>
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
                        <img className='w-full h-[250px] object-cover' src={image

                        } alt="" />
                    </SwiperSlide>
                </Swiper>
            </section>

            <SectionNedvij />
            <div className='flex justify-between items-center mt-2 flex-wrap gap-3'>
                {
                    ['Все', "Дома и виллы в Тайланде", "Купить квартиру в Тайланде", "Недвижимость в Азии", 'Продажа кондоминиумов',
                        'Дом у моря в Тайланде', 'Купить дом в Тайланде на берегу моря', 'Агенство недвижимости в Тайланде', 'Квартиры в новостройках в Тайланде', 'Апартаменты у моря'
                    ].map((item, index) => (
                        <button onClick={() => setAllRender(!allRender)} className='bg-[#E3E2E2] cursor-pointer p-2 rounded-[10px] hover:bg-[#FE8505] hover:text-white ' key={index}>
                            <p>{item}</p>
                        </button>
                    ))
                }
            </div>

            <section className={!allRender ? 'block relative' : 'hidden'}>
                <div className='flex gap-5 items-center mt-5'>
                    <p className='text-[22px] font-bold'>Топ новостроек</p>
                    <p className='text-[#757575]'>Смотреть все</p>
                </div>

                <Swiper
                    modules={[Navigation]}
                    slidesPerView={4}
                    spaceBetween={20}
                    navigation={{
                        nextEl: ".nextBtn1",
                        prevEl: ".prevBtn1",
                    }}
                >
                    {
                        filteredData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Link to={`/estate/${item.id}`}>
                                    <div className="w-[300px] border rounded-2xl p-4 mt-4">
                                        <img src={item.img} className="rounded-xl w-full h-[200px] object-cover" />
                                        <h1 className="text-[16px] font-bold mt-3">{item.name}</h1>
                                        <p>{item.address}</p>
                                        <p>{item.size}</p>
                                        <p className="text-[12px] text-gray-500 line-clamp-2">{item.info}</p>

                                        <div className="flex items-center justify-between mt-5">
                                            <h1 className="text-[16px] text-orange-500">от $180 000</h1>
                                            <div className="flex items-center gap-4 text-[20px]">
                                                <FaWhatsapp className="hover:text-green-500 hover:scale-125 transition cursor-pointer" />
                                                <CiHeart className="hover:text-red-500 hover:scale-125 transition cursor-pointer" />
                                            </div>
                                        </div>

                                    </div></Link>
                            </SwiperSlide>

                        ))}
                </Swiper>

                <div className="flex justify-center absolute top-0 right-0 z-10 gap-4">
                    <button className="prevBtn1">
                        <img src={nextImg} className="rotate-180" />
                    </button>
                    <button className="nextBtn1">
                        <img src={nextImg} />
                    </button>
                </div>
            </section>
            <section className={!allRender ? 'block' : 'hidden'}>
                <div className='flex gap-5 items-center mt-5'>
                    <p className='font-bold mt-5 text-[24px]'>Вторичка</p>
                    <p className=' mt-5 text-[18px]'>Смотреть все</p>

                </div>

                <div className='relative mt-2'>
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={4}
                        spaceBetween={20}
                        navigation={{
                            nextEl: ".nextBtn2",
                            prevEl: ".prevBtn2",
                        }}
                    >
                        {filteredFtorichka.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Link to={`/estate/${item.id}`}>
                                    <div key={index} className="w-[300px] border rounded-2xl p-4 mt-4">
                                        <img src={item.img} className="rounded-xl w-full object-cover" />
                                        <h1 className="text-[16px] font-bold mt-3">{item.name}</h1>
                                        <p>{item.address}</p>
                                        <p>{item.size}</p>
                                        <p className="text-[12px] text-gray-500 line-clamp-2">{item.info}</p>
                                        <div className="flex items-center justify-between mt-5">
                                            <h1 className="text-[16px] text-orange-500">от $180 000</h1>
                                            <div className="flex items-center gap-4 text-[20px]">
                                                <FaWhatsapp className="hover:text-green-500 hover:scale-125 transition cursor-pointer" />
                                                <CiHeart className="hover:text-red-500 hover:scale-125 transition cursor-pointer" />
                                            </div>
                                        </div>

                                    </div></Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="flex justify-center  gap-4 absolute right-0 -top-12 z-10">
                        <button className="prevBtn2">
                            <img src={nextImg} className="rotate-180" />
                        </button>
                        <button className="nextBtn2">
                            <img src={nextImg} />
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <div className={!allRender ? 'flex flex-wrap justify-between mt-20 items-center border rounded-[20px] p-5' : 'hidden'}>
                    <img src={sectionImg} alt="" />
                    <div>
                        <p className='font-bold text-[24px] '>Почему именно Тайланд</p>
                        <p className='max-w-[800px]'>Наши иностранные представительства в Европе и других странах позволяют предоставлять услуги непосредственно на территории той страны, которую Вы выбрали для иммиграции, покупки недвижимости или же путешествия, — это существенно сокращает сроки оформления всех документов.
                            С нами Вы легко можете  открыть предприятие на территории, к примеру, Польши или Чехии с дальнейшим сопровождением бизнеса, вплоть до полной бизнес-иммиграции в Европу.
                            Наши партнеры в Польше, Болгарии, Венгрии, Словакии, Румынии, Чехии и др. — это юридические компании с соответствующими лицензиями и разрешениями на консалтинговую деятельность на своей территории.
                            Благодаря налаженной схеме работы между нами и партнерами в Европе все клиенты получают персональное сопровождение в новой стране, включая помощь с адаптацией, а вся процедура оформления документов проходит прозрачно, в обещанные сроки и с учетом пожеланий клиента.</p>
                    </div>
                </div>
                <div className={!allRender ? 'flex gap-5 items-center mt-10' : 'hidden'}>
                    <p className='font-bold mt-5 text-[24px]'>Коттеджи</p>
                    <p className=' mt-5 text-[18px]'>Смотреть все</p>
                </div>
            </section>
            <section className={!allRender ? 'block' : 'hidden'}>
                <div className='relative mt-2'>
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={4}
                        spaceBetween={20}
                        navigation={{
                            nextEl: ".nextBtn3",
                            prevEl: ".prevBtn3",
                        }}
                    >
                        {
                            filteredCotejar.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Link to={`/estate/${item.id}`}>
                                        <div key={index} className="w-[300px] border rounded-2xl p-4 mt-4">
                                            <img src={item.img} className="rounded-xl w-full object-cover" />
                                            <h1 className="text-[16px] font-bold mt-3">{item.name}</h1>
                                            <p>{item.address}</p>
                                            <p>{item.size}</p>
                                            <p className="text-[12px] text-gray-500 line-clamp-2">{item.info}</p>
                                            <div className="flex items-center justify-between mt-5">
                                                <h1 className="text-[16px] text-orange-500">от $180 000</h1>
                                                <div className="flex items-center gap-4 text-[20px]">
                                                    <FaWhatsapp className="hover:text-green-500 hover:scale-125 transition cursor-pointer" />
                                                    <CiHeart className="hover:text-red-500 hover:scale-125 transition cursor-pointer" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                    </Swiper>

                    <div className="flex justify-center  gap-4 absolute right-0 -top-12 z-10">
                        <button className="prevBtn3">
                            <img src={nextImg} className="rotate-180" />
                        </button>
                        <button className="nextBtn3">
                            <img src={nextImg} />
                        </button>
                    </div>
                </div>
            </section>
            <section className={allRender ? 'block' : 'hidden'}>
                <p className='font-bold mt-5 text-[24px]'>Все объекты</p>
                <div className='flex gap-5 items-center mt-20 flex-wrap'>
                    {
                        data.map((item, index) => (
                            <Link key={index} to={`/estate/${item.id}`}>
                                <div className="w-[300px] border rounded-2xl p-4 mt-4">
                                    <img src={item.img} className="rounded-xl w-full object-cover" />
                                    <h1 className="text-[16px] font-bold mt-3">{item.name}</h1>
                                    <p>{item.address}</p>
                                    <p>{item.size}</p>
                                    <p className="text-[12px] text-gray-500 line-clamp-2">{item.info}</p>
                                    <div className="flex items-center justify-between mt-5">
                                        <h1 className="text-[16px] text-orange-500">от $180 000</h1>
                                        <div className="flex items-center gap-4 text-[20px]">
                                            <FaWhatsapp className="hover:text-green-500 hover:scale-125 transition cursor-pointer" />
                                            <CiHeart className="hover:text-red-500 hover:scale-125 transition cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </section >
            <section>
                <SectionEmail text={'Получить гид по недвижимости'} text2={'Напишите свои контакты и в ближайшее время с вами свяжется наш менеджер для уточнения вашего вопроса'} image={imgAddress} />
                <div className='flex justify-between p-4 border rounded-[15px] border-[#C9C9C9] items-center mt-20 mb-5'>
                    <img src={imgSection} alt="" />
                    <div className=''>
                        <p className='text-[24px] font-bold'>Юридические услуги</p>
                        <p className='w-200'>Наши иностранные представительства в Европе и других странах позволяют предоставлять услуги непосредственно на территории той страны, которую Вы выбрали для иммиграции, покупки недвижимости или же путешествия, — это существенно сокращает сроки оформления всех документов.
                            С нами Вы легко можете открыть предприятие на территории, к примеру, Польши или Чехии с дальнейшим сопровождением бизнеса, вплоть до полной бизнес-иммиграции в Европу.
                            Наши партнеры в Польше, Болгарии, Венгрии, Словакии, Румынии, Чехии и др. — это юридические компании с соответствующими лицензиями и разрешениями на консалтинговую деятельность на своей территории.
                            Благодаря налаженной схеме работы между нами и партнерами в Европе все клиенты получают персональное сопровождение в новой стране, включая помощь с адаптацией, а вся процедура оформления документов проходит прозрачно, в обещанные сроки и с учетом пожеланий клиента.</p>
                    </div>
                </div>
                <div className={!allRender ? 'flex justify-between gap-5 mt-10' : 'hidden'}>
                    <MiniCard img={minicardimg} text={'Судебные Споры с застройщиками'} />
                    <MiniCard img={minicardimg2} text={'Юридическая проверка документов'} />
                    <MiniCard img={minicardimg3} text={'Escrow счета (устовие депонирвания)'} />
                    <MiniCard img={minicardimg4} text={'Сопровождение сделок'} />
                </div>
            </section>
            <p className={!allRender ? 'font-bold mt-20 text-[24px]' : 'hidden'}>Новости</p>
            <section className={!allRender ? 'flex-wrap flex items-center justify-between ' : "hidden"} >
                <News text1={'Недвижимость'} text={'Что такое гражданство ЕС и как его получить?'} img={newsImg} />
                <News text1={'Автоуслуги'} text={'Покупка недвижимости в Чехии иностранцами: пошаговое руководство'} img={newsImg2} />
                <News text1={'Гражданство'} text={'Что такое гражданство ЕС и как его получить?'} img={newsImg3} />
                <News text={'Что такое гражданство ЕС и как его получить?'} img={newsImg4} />
            </section>
            <section className={!allRender ? 'max-w-[1300px] mx-auto px-5' : 'hidden'}>
                <p className='font-bold pt-10 text-[28px] '>Часто задаваемые вопросы</p>
                <SectionInfo />
            </section>

        </div >
    )

}

export default Nedvij
