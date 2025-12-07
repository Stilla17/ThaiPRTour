import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import imgLocation from './../assets/_Режим_изоляции.png';
import { useParams } from 'react-router';
import img from './../assets/Component 11 (5).png';
import img2 from './../assets/Frame 1000003273.png';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router';

const NedvijInfoPage = () => {
    const { id } = useParams()
    const [card, setCard] = useState([])
    const [data, setData] = useState([])
    const form = useRef()

    const fetchData = async () => {
        try {
            const res = await axios.get(`https://68d8c81290a75154f0d8ad21.mockapi.io/ee/f/${id}`)
            setCard(res.data)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }
    const renderAll = async () => {
        try {
            const res = await axios.get(`https://68d8c81290a75154f0d8ad21.mockapi.io/ee/f/${id}`)
            setData(res.data)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }
    const [currency, setCurrency] = useState('USD')
    if (!card) return <div>Loading...</div>

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_2uuntpl', 'template_la67xd2', form.current, {
                publicKey: 'mtZZeyFYJ_dxq-5Dk',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Сообщение отправлено успешно!');

                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    useEffect(() => {
        fetchData()
    }, [id])
    useEffect(() => {
        renderAll()
    }, [])
    return (
        <>

            <div className='max-w-[1300px] mx-auto'>
                <div className="lg:col-span-2 flex justify-between flex-wrap  items-center">

                    <div>
                        <p className='text-[42px] font-bold '>{card.name}</p>
                        <div className="text-sm py-5 text-gray-500 flex flex-wrap items-center gap-3">
                            <img src={img2} alt="" />
                            <img src={imgLocation} alt="" />
                            <p className=''>{card.address}</p>
                        </div>
                        <div className='border rounded-2xl border-[#C9C9C9] px-25 shadow '>
                            <img
                                src={card.img}
                                alt="product"
                                className="w-[720px] h-[500px] object-cover rounded-2xl border shadow-sm"
                            />


                        </div>
                    </div>

                    <div className='p-5 border border-[#C9C9C9] rounded-2xl shadow max-md:mt-5 max-md:m-auto'>
                        <div className='flex gap-5'>
                            <button
                                onClick={() => setCurrency("USD")}
                                className={currency === "USD" ? "p-2 rounded-[5px] bg-[#FE8505] text-white" : "p-2 rounded-[5px] bg-[#E3E2E2]"}
                            >
                                USD ($)
                            </button>
                            <button
                                onClick={() => setCurrency("THB")}
                                className={currency === "THB" ? "p-2 rounded-[5px] bg-[#FE8505] text-white" : "p-2 rounded-[5px] bg-[#E3E2E2]"}
                            >
                                THB (฿)
                            </button>
                        </div>
                        <p className='font-bold text-[26px] '>{currency === "THB" ? (`От ${card.price / 2}$`) : (`От ${card.price}$`)}</p>
                        <form ref={form} onSubmit={(e) => e.preventDefault()} className='w-[300px]'>
                            <input
                                type="text"
                                name="name"
                                placeholder="Имя"
                                className="px-4 py-3 rounded-md shadow-2xl border-[#C9C9C9] border outline-none bg-white "
                            />

                            <input
                                type="text"
                                name="phone"
                                placeholder="Телефон"
                                className="w-full mt-2 shadow-2xl border-[#C9C9C9] border px-4 py-3 rounded-md outline-none bg-white "
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="shadow-2xl mt-2 border-[#C9C9C9] border w-full px-4 py-3 rounded-md outline-none bg-white "
                            />
                            <div className='p-3 rounded-2xl border border-[#C9C9C9] mt-4 shadow'>
                                <p>Меня интересует <span className='font-bold'>[{card.name}]</span></p>
                            </div>
                            <p className='mt-2'>Запланировать просмотр</p>
                            <div className='flex items-center gap-2 justify-between'>
                                <button onClick={sendEmail}
                                    type="submit"
                                    className="mt-2 w-[150px] bg-[#C9C9C9] text-black py-3 rounded-md"
                                >
                                    Отправить
                                </button>
                                <img src={img} alt="" />
                            </div>
                        </form>

                    </div>

                </div >
                <div className="border mt-5 border-[#C9C9C9] rounded-2xl p-5 shadow-sm space-y-4 bg-white">
                    <p className='text-[28px] font-bold '>Описание</p>
                    <p className='mt-2'>{card.info}</p>
                </div>
            </div>
        </>
    )
}

export default NedvijInfoPage