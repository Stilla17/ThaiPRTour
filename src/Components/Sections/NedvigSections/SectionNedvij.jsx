import React, { useState } from 'react'

import { motion, AnimatePresence } from "framer-motion";
import iconSelect from './../../../assets/Group 1556.png';
import { XIcon } from 'lucide-react';
import img2 from './../../../assets/Group 1556 (1).png';
const SectionNedvij = () => {
    const [page, setPage] = useState("pas1");
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [currency, setCurrency] = useState("USD");
    const [currency2, setCurrency2] = useState("all");
    const PageWrapper = ({ children }) => (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
        >
            {children}
        </motion.div>
    );

    const toggleDropdown = (name) => {
        setActiveDropdown(prev => prev === name ? null : name);
    };
    return (
        <section>
            <div className="about">
                <div className="about-inner">
                    <div className='aas'>
                        <button onClick={() => setPage("pas1")}>Жилая ЕС</button>
                        <button onClick={() => setPage("pas2")}>Загородная</button>
                        <button onClick={() => setPage("pas3")}>Коммерческая</button>
                    </div>
                    <div className='h-1 w-full bg-[#D9D9D9] my-5'>

                    </div>
                    <div className="page-wrapper">
                        <AnimatePresence mode="wait">
                            {page === "pas1" && (
                                <PageWrapper key="pa1">
                                    <div className='flex gap-5 flex-wrap '>

                                        <div>
                                            <button onClick={() => toggleDropdown("type")} className='flex gap-[50px] items-center py-2 w-44 px-2 rounded-[10px] border border-[#D9D9D9] shadow'>
                                                Новостройка <img src={iconSelect} alt="" />
                                            </button>
                                            {activeDropdown === "type" && (
                                                <div className='p-5 rounded-[15px] absolute w-[150px] flex flex-col items-start bg-white border border-[#D9D9D9] shadow mt-5'>
                                                    <button>Новостройка</button>
                                                    <button>Вторичка</button>
                                                    <button>Снять</button>
                                                    <button>Посуточно</button>
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <button onClick={() => toggleDropdown("rooms")} className='flex gap-[50px] items-center py-2 w-48 px-2 rounded-[10px] border border-[#D9D9D9] shadow'>
                                                Кол-во комнат <img src={iconSelect} alt="" />
                                            </button>
                                            {activeDropdown === "rooms" && (
                                                <div className='p-5 rounded-[15px] items-start absolute w-[100px] flex flex-col bg-white border border-[#D9D9D9] shadow mt-5'>
                                                    {[1, 2, 3, 4, 5, 6, 8, 9].map(n => <button key={n}>{n}</button>)}
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <button onClick={() => toggleDropdown("price")} className='flex gap-[50px] items-center py-2 w-32 px-2 rounded-[10px] border border-[#D9D9D9] shadow'>
                                                Цена <img src={iconSelect} alt="" />
                                            </button>
                                            {activeDropdown === "price" && (
                                                <div className='p-5 rounded-[15px] absolute w-70 flex flex-col bg-white border border-[#D9D9D9] shadow mt-5'>
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
                                                    <div className='flex items-center gap-5 mt-2'>
                                                        <input className='w-25 rounded-2xl border-[#D9D9D9] p-2 border' type="text" placeholder='От' />
                                                        <input className='w-25 rounded-2xl border-[#D9D9D9] p-2 border' type="text" placeholder='До' />
                                                    </div>
                                                    <div className='flex items-center flex-wrap gap-4 mt-2'>
                                                        <button
                                                            onClick={() => setCurrency2("all")}
                                                            className={currency2 === "all" ? "p-2 rounded-[5px] bg-[#FE8505] text-white" : "p-2 rounded-[5px] bg-[#E3E2E2]"}
                                                        >
                                                            За все
                                                        </button>
                                                        <button
                                                            onClick={() => setCurrency2("m2")}
                                                            className={currency2 === "m2" ? "p-2 rounded-[5px] bg-[#FE8505] text-white" : "p-2 rounded-[5px] bg-[#E3E2E2]"}
                                                        >
                                                            За м²
                                                        </button>
                                                        <button
                                                            onClick={() => setCurrency2("dogovor")}
                                                            className={currency2 === "dogovor" ? "p-2 rounded-[5px] bg-[#FE8505] text-white" : "p-2 rounded-[5px] bg-[#E3E2E2]"}
                                                        >
                                                            Договорная
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <button onClick={() => toggleDropdown("city")} className='flex gap-[50px] items-center py-2 w-80 px-2 rounded-[10px] border border-[#D9D9D9] shadow'>
                                                Укажите город/регион поиска <img src={iconSelect} alt="" />
                                            </button>
                                            {activeDropdown === "city" && (
                                                <div className='p-5 rounded-[15px] absolute w-[250px] flex flex-col bg-white border border-[#D9D9D9] shadow mt-5'>
                                                    <input className='border rounded-[10px] p-2 border-[#D9D9D9]' placeholder='Введите город' type="text" />
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <button onClick={() => toggleDropdown("map")} className='flex gap-5 items-center py-2 w-40 px-2 rounded-[10px] border border-[#D9D9D9] shadow'>
                                                <img src={img2} alt="" /> на карте
                                            </button>
                                            {activeDropdown === "map" && (
                                                <div className='p-5 rounded-[15px] absolute right-[270px] flex flex-col bg-white border border-[#D9D9D9] shadow mt-5'>
                                                    <div className='flex justify-end'>
                                                        <button onClick={() => setActiveDropdown(null)} className='mb-2'>
                                                            <XIcon className='bg-red-500 text-white' />
                                                        </button>
                                                    </div>
                                                    <div className='flex justify-center items-center'>
                                                        <iframe
                                                            className="w-[700px] h-[400px]"
                                                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9116.466585125003!2d69.1339264!3d41.192659049999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1764085464247!5m2!1sru!2s"
                                                            style={{ border: 0 }}
                                                            allowFullScreen
                                                            loading="lazy"
                                                            referrerPolicy="no-referrer-when-downgrade"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </PageWrapper>
                            )}

                            {page === "pas2" && (
                                <PageWrapper key="pa2">
                                    <h1>Загородная  ЕС</h1>
                                </PageWrapper>
                            )}

                            {page === "pas3" && (
                                <PageWrapper key="pa3">
                                    <h1>Коммерческая</h1>
                                </PageWrapper>
                            )}

                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionNedvij