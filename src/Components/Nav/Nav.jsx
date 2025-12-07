import React, { useState, useEffect } from 'react'
import Logo from './../../assets/Group 1675.svg';
import BtnImg from './../../assets/Frame 1000003282.png';
import SearchImg from './../../assets/Mask group (3).png';
import RussianFlagImg from './../../assets/Russian.png';
import Img from './../../assets/Polygon 46.png';
import { Link } from 'react-router';
import { IoIosMenu } from "react-icons/io";
import img7 from './../../assets/Frame 2031.png';
import img8 from './../../assets/Frame 1000003272.png';


import { main } from './NodeService.js';
import Vhod from '../Childrens/Vhod.jsx';
import Input from '../Childrens/Input.jsx';

const Nav = () => {

    const [openLang, setOpenLang] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    const toggleNav = () => setOpenNav(!openNav);

    const toggleLang = () => setOpenLang(!openLang);
    const toggleLogin = () => setOpenLogin(!openLogin);
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    }

    return (
        <nav className=''>
            {
                openNav ? <div className=' justify-center max-md:flex hidden max-md:px-5'>
                    <div className='flex  justify-between gap-[30px] items-center mt-5'>
                        <img src={img8} onClick={() => toggleNav(!openNav)} alt="search-icon" />
                        <input type="text" className='max-w-full shadow-2xl border-gray-400 border px-3 rounded-[10px]  py-3' placeholder='Поиск' />
                    </div>
                </div> : ""
            }
            <div className={'flex justify-between items-center border p-5 border-[#D9D9D9]'}>

                <Link to={'/'}>
                    <img src={Logo} alt="logo" />
                </Link>

                <div className='flex items-center gap-10'>
                    <button onClick={toggleNav} className='max-md:hidden flex items-center border shadow border-[#C9C9C9] rounded-[10px] gap-5 p-3'>
                        <img src={BtnImg} alt="" />Услуги
                    </button>

                    <div className='relative max-md:hidden'>
                        <Input />
                        <img src={SearchImg} className='absolute right-3 top-[13px]' alt="" />
                    </div>

                    <ul className='flex gap-[30px] text-[18px] font-medium max-[520px]:hidden'>
                        <li><Link to='/test'>Контакты</Link></li>
                        <li><Link to='/citizen'>О нас</Link></li>
                        <li><Link to={'/estate'}>Животные</Link></li>
                    </ul>
                </div>

                

                <div className='flex items-center '>
                    <button onClick={toggleLogin} className='max-md:hidden ml-4 px-4 py-2 border rounded-lg'>Войти</button>
                    <button className='max-md:hidden ml-4 px-4 py-2 border rounded-lg bg-[#FE8505] text-white'>Связаться</button>
                </div> <IoIosMenu onClick={toggleNav} className='text-3xl max-md:block hidden' />

                {
                    openLogin && (

                        < Vhod toggleLogin={toggleLogin} />
                    )
                }

            </div>

            <div className={openNav ? 'flex justify-between  p-[15px] bg-[#F7F4F0] max-md:hidden' : 'hidden'}>
                {
                    main.map((item, index) => (
                        <ul key={index}>
                            <li className='font-bold'>{item.title}</li>
                            {
                                item.allLiks[0].links.map((link, linkIndex) => (
                                    <li key={linkIndex}><Link to={item.allLiks[1].link[linkIndex]}>{link}</Link></li>
                                ))
                            }
                        </ul>
                    ))
                }
            </div>

            <div className='block p-5 z-10 md:hidden' data-aos="fade-left">
                {
                    openNav ? main.map((item, i) => (
                        <div key={i} className="bg-white rounded-xl p-4 mb-3 shadow-sm">
                            <div className='flex items-center '>
                                <img src={item.img} alt="" />
                                <div
                                    onClick={() => toggle(i)}
                                    className="flex justify-between items-center w-[1300px]"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">{item.icon}</span>
                                        <span className="font-semibold text-gray-800">{item.title}</span>
                                    </div>

                                    <img src={img7} className="text-xl transition-transform"
                                        style={{
                                            transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                                        }}>

                                    </img>
                                </div>
                            </div>
                            {
                                openIndex === i && item.allLiks && (
                                    <ul className="mt-4 ml-12 text-gray-600 space-y-1">
                                        {item.allLiks[0].links.map((text, idx) => (
                                            <li key={idx}>
                                                <Link to={item.allLiks[1].link[idx]}>{text}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )
                            }
                        </div>
                    )) : ""
                }
            </div>
        </nav>
    );
}

export default Nav;
