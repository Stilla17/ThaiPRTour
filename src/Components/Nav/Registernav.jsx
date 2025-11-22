import React, { useState } from 'react';
import { data, Link } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';

import Logo from './../../assets/Group 1675.svg';
import BtnImg from './../../assets/Frame 1000003282.png';
import SearchImg from './../../assets/Mask group (3).png';
import RussianFlagImg from './../../assets/Russian.png';
import Img from './../../assets/Polygon 46.png';
import Vhod from '../Childrens/Vhod.jsx';

const Registernav = () => {
  const [openLang, setOpenLang] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => setOpenNav((prev) => !prev);
  const toggleLang = () => setOpenLang((prev) => !prev);
  const toggleLogin = () => setOpenLogin((prev) => !prev);

  return (
    <>
      <nav className="w-full border-b border-gray-300 p-5">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="logo" className="w-32" />

          <div className="flex items-center gap-5">
            <button className="hidden md:flex items-center gap-2 border rounded-lg px-4 py-2 shadow">
              <img src={BtnImg} alt="" className="w-5 h-5" /> Услуги
            </button>

            <div className="relative hidden md:block">
              <input
                type="text"
                className="w-64 px-3 py-2 border rounded-lg shadow"
                placeholder="Поиск..."
              />
              <img
                src={SearchImg}
                className="absolute right-2 top-2 w-5 h-5"
                alt=""
              />
            </div>

            <ul className="hidden md:flex gap-5 text-[16px] font-medium">
              <li>
                <Link to="/contacts">Контакты</Link>
              </li>
              <li>
                <Link to="/aboutUs">О нас</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={toggleLang}
              >
                <img src={RussianFlagImg} alt="flag" className="w-6 h-4" />
                <img
                  src={Img}
                  className={`w-3 h-3 transition-transform duration-300 ${
                    openLang ? 'rotate-180' : ''
                  }`}
                  alt="arrow"
                />
              </div>
              {openLang && (
                <div className="absolute right-0 mt-2 w-36 bg-white border shadow p-2 rounded-lg z-20">
                  <button className="flex items-center gap-2 p-1 hover:bg-gray-100 w-full">
                    <img
                      width="21"
                      height="14"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/2560px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
                    />
                    English
                  </button>
                  <button className="flex items-center gap-2 p-1 hover:bg-gray-100 w-full">
                    <img
                      width="21"
                      height="14"
                      src="https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Uzbekistan.png"
                    />
                    O‘zbek
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={toggleLogin}
              className="hidden md:block px-4 py-2 border rounded-lg"
            >
              Войти
            </button>
            <button className="hidden md:block px-4 py-2 border rounded-lg bg-orange-500 text-white">
              Связаться
            </button>

            <IoIosMenu
              onClick={toggleNav}
              className="text-3xl md:hidden cursor-pointer"
            />
          </div>
        </div>

        {openNav && (
          <div className="md:hidden mt-4 flex flex-col gap-3">
            <input
              type="text"
              className="border px-3 py-2 rounded-lg shadow"
              placeholder="Поиск..."
            />
            <button
              onClick={toggleLogin}
              className="px-4 py-2 border rounded-lg bg-orange-500 text-white"
            >
              Войти
            </button>
            <button className="px-4 py-2 border rounded-lg bg-gray-200">
              Связаться
            </button>
          </div>
        )}

        {openLogin && <Vhod toggleLogin={toggleLogin} />}
      </nav>
      <h1 className=" text-[42px] font-black text-center mt-20">Регистрация</h1>
    </>
  );
};

export default Registernav;
