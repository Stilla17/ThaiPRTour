import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import image from './../assets/Rectangle 1262.png';
import "swiper/css";
import { CiHeart } from "react-icons/ci";
import { FaWhatsapp } from 'react-icons/fa';
import SectionNedvij from '../Components/Sections/NedvigSections/SectionNedvij';
import axios from 'axios';
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
import { Link } from 'react-router';
import { useForm } from 'react-hook-form';

import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

const Nedvij = () => {
    const { register, handleSubmit, reset } = useForm();

    const [data, setData] = useState([])
    const [allRender, setAllRender] = useState(false)


    const [open, setOpen] = useState(false);

    const pushData = async (data) => {
        try {
            const res = await axios.post('https://68d8c81290a75154f0d8ad21.mockapi.io/ee/f', {
                name: data.name,
                caatogory: data.type,
                age: data.age,
                img: data.image,
                price: data.price,
                info: data.info,
                number: data.phone
            });
            setData(prev => [...prev, res.data]);
            reset();
            toast.success('Успешно добавлено');
        } catch (error) {
            console.error('Error:', error);
            toast.error('Ошибка загрузки');
        }
    };
    const renderData = async () => {
        try {
            const res = await axios.get('https://68d8c81290a75154f0d8ad21.mockapi.io/ee/f');
            setData(res.data);
            console.log(data);

        } catch (element) {
            console.error('Error:', element)
        }
    }
    useEffect(() => {
        renderData()
    }, [])

    return (
        <div className='max-w-[1350px] mx-auto px-5'>
            <Toaster className="right-0 top-0 absolute" />

            <section>
                <p className='mt-5'>Главная {'>'} Животные</p>
                <h1 className='text-[42px] font-bold '>Купить породистых животных</h1>
                <p className='text-[#202020] mt-5'>
                    Продажа породистых животных от проверенных заводчиков: собаки, кошки, птицы, грызуны
                    и экзотические животные. Полное сопровождение сделки, консультации и помощь в подборе
                    питомца.
                </p>
            </section>

            <section>
                <Swiper className="mySwiper mt-5">
                    <SwiperSlide>
                        <img className='w-full h-[250px] object-cover'
                            src={image}
                            alt="" />
                    </SwiperSlide>
                </Swiper>
            </section>
            <div className='flex justify-center mt-5'>
                <button onClick={() => setOpen(!open)} className='p-5 text-[25px] rounded-2xl m-auto  bg-amber-500 text-white border-none '>Хотите добавить животные?</button>
            </div>
            <form
                onSubmit={handleSubmit(pushData)}
                className={open ? "m-auto space-y-5 mt-6 w-full max-w-md p-6 bg-white rounded-2xl shadow-lg border" : 'hidden'}
            >
                <div className="flex flex-col">
                    <label className="mb-2 font-semibold text-gray-700">Фото (URL)</label>
                    <input
                        {...register('image', { required: true })}
                        type="text"
                        placeholder="https://site.com/photo.jpg"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none transition"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 font-semibold text-gray-700">Имя животного</label>
                    <input
                        {...register('name', { required: true })}
                        type="text"
                        placeholder="Например: Бублик"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none transition"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 font-semibold text-gray-700">Категория</label>
                    <select
                        {...register('type', { required: true })}
                        className="w-full border border-gray-300 rounded-lg p-3 bg-white cursor-pointer focus:ring-2 focus:ring-orange-400 outline-none transition"
                    >
                        <option value="Собаки">🐶 Собаки</option>
                        <option value="Кошки">🐱 Кошки</option>
                        <option value="Кролики">🐰 Кролики</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 font-semibold text-gray-700">Возраст</label>
                    <input
                        {...register('age', { required: true })}
                        type="text"
                        placeholder="Например: 6 месяцев"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none transition"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 font-semibold text-gray-700">Номер телефона</label>
                    <input
                        {...register('phone', { required: true })}
                        type="text"
                        placeholder="Телефон для связи"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none transition"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 font-semibold text-gray-700">Цена</label>
                    <input
                        {...register('price', { required: true })}
                        type="number"
                        placeholder="Например: 500"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none transition"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 font-semibold text-gray-700">Описание животного</label>
                    <textarea
                        {...register('info', { required: true })}
                        rows={4}
                        placeholder="Характер, особенности, уход..."
                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none transition resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 text-lg font-semibold rounded-xl hover:bg-orange-600 transition shadow-md hover:shadow-lg"
                >
                    Сохранить животное
                </button>

            </form>
            <SectionNedvij />






            <section>
                <div className={!allRender ? 'flex flex-wrap justify-between mt-20 items-center border rounded-[20px] p-5' : 'hidden'}>
                    <img src={imgSection} alt="" />
                    <div>
                        <p className='font-bold text-[24px] '>Почему стоит покупать у проверенных заводчиков</p>
                        <p className='max-w-[800px]'>
                            Покупая животное у официального питомника, вы получаете гарантии здоровья,
                            документы, родословную, консультации и поддержку. Проверенные заводчики контролируют
                            условия содержания, питание и разведение животных.
                        </p>
                    </div>
                </div>

                <div className={!allRender ? 'flex gap-5 items-center mt-10' : 'hidden'}>
                    <p className='font-bold mt-5 text-[24px]'>Экзотические животные</p>
                    <p className=' mt-5 text-[18px]'>Смотреть все</p>
                </div>
            </section>



            <section>
                <p className='font-bold mt-5 text-[24px]'>Все животные</p>
                <div className='flex gap-5 items-center mt-20  flex-wrap'>
                    {
                        
                            data.map((item, index) => (
                                <Link
                                    key={index}
                                    to={`/estate/${item.id}`}
                                    className="group"
                                >
                                    <div className="
                                    w-[300px] 
                                    bg-white
                                    border 
                                    rounded-2xl 
                                    p-4 
                                    mt-4 
                                    shadow-md 
                                    hover:shadow-xl 
                                    transition-all 
                                    duration-300 
                                    hover:-translate-y-1
                                    cursor-pointer
                                ">

                                        <div className="overflow-hidden rounded-xl">
                                            <img
                                                src={item.img}
                                                className="
                                                w-full 
                                                h-[200px] 
                                                object-cover 
                                                rounded-xl 
                                                group-hover:scale-105 
                                                transition-all 
                                                duration-300
                                            "
                                            />
                                        </div>

                                        <h1 className="text-[18px] font-bold mt-3 text-gray-800">
                                            {item.name}
                                        </h1>

                                        <p className="text-[14px] text-gray-500 mt-1">
                                            {item.address}
                                        </p>

                                        <p className="text-[14px] text-gray-600 mt-1">
                                            {item.size}
                                        </p>
                                        <p>
                                            Возраст: {item.age}
                                        </p>
                                        <p>
                                            Категория: {item.caatogory}
                                        </p>
                                        <p>
                                            Контактный номер: {item.number}
                                        </p>
                                        <p className="text-[13px]  text-gray-500 line-clamp-2 mt-2">
                                            {item.info}
                                        </p>

                                        <div className="flex items-center justify-between mt-5">
                                            <h1 className="text-[18px] text-orange-500 font-semibold">
                                                {item.price} $
                                            </h1>

                                            <div className="flex items-center gap-4 text-[22px]">
                                                <FaWhatsapp
                                                    className="
                                                    hover:text-green-500 
                                                    hover:scale-125 
                                                    transition 
                                                    cursor-pointer
                                                "
                                                />
                                                <CiHeart
                                                    className="
                                                    hover:text-red-500 
                                                    hover:scale-125 
                                                    transition 
                                                    cursor-pointer
                                                "
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            ))
                        }
                    

                </div>
            </section>

            <section>
                <SectionEmail
                    text={'Получить каталог животных'}
                    text2={'Оставьте свои контакты, и мы отправим вам список доступных животных'}
                    image={imgAddress}
                />

                <div className='flex justify-between p-4 border rounded-[15px] border-[#C9C9C9] items-center mt-20 mb-5'>
                    <img src={imgSection} alt="" />
                    <div>
                        <p className='text-[24px] font-bold'>Документы и услуги для животных</p>
                        <p className='w-200'>
                            Поможем оформить ветеринарный паспорт, прививки, родословную,
                            документы на вывоз за границу и регистрацию в международных клубах.
                        </p>
                    </div>
                </div>

                <div className={!allRender ? 'flex justify-between gap-5 mt-10' : 'hidden'}>
                    <MiniCard img={minicardimg} text={'Оформление документов'} />
                    <MiniCard img={minicardimg2} text={'Консультации по уходу'} />
                    <MiniCard img={minicardimg3} text={'Перевозка животных'} />
                    <MiniCard img={minicardimg4} text={'Подбор породы под клиента'} />
                </div>
            </section>

            <p className={!allRender ? 'font-bold mt-20 text-[24px]' : 'hidden'}>Новости и статьи</p>
            <section className={!allRender ? 'flex-wrap flex items-center justify-between ' : "hidden"}>
                <News text1={'Собаки'} text={'Как выбрать породу для семьи?'} img={newsImg} />
                <News text1={'Кошки'} text={'Как ухаживать за котёнком?'} img={newsImg2} />
                <News text1={'Документы'} text={'Как оформить паспорт животного'} img={newsImg3} />
                <News text={'Как перевезти животное за границу'} img={newsImg4} />
            </section>

            <section className={!allRender ? 'max-w-[1300px] mx-auto px-5' : 'hidden'}>
                <p className='font-bold pt-10 text-[28px] '>Часто задаваемые вопросы</p>
                <SectionInfo />
            </section>

        </div >
    )
}

export default Nedvij
