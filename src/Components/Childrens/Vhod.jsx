import React from 'react';
import CancelImg from './../../assets/Group 1685.png';
import VkImg from './../../assets/Component 11 (4).png';
import TgImg from './../../assets/Component 11 (1).png';
import FbImg from './../../assets/Component 11 (2).png';
import GoogleImg from './../../assets/Component 11 (3).png';
import { Link } from 'react-router-dom';

const Vhod = ({ toggleLogin }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white w-[300px] p-5 rounded-xl relative shadow-2xl">
        <img
          onClick={toggleLogin}
          src={CancelImg}
          alt="Закрыть"
          className="absolute top-3 right-3 w-6 h-6 cursor-pointer"
        />

        <p className="font-bold text-xl text-center mb-4">Войти</p>

        <div className='flex items-center justify-between mb-4'>
          <Link to='https://vk.com/' target='_blank'><img src={VkImg} alt="VK" /></Link>
          <Link to='https://telegram.org/' target='_blank'><img src={TgImg} alt="TG" /></Link>
          <Link to='https://www.facebook.com/' target='_blank'><img src={FbImg} alt="FB" /></Link>
          <Link to='https://www.google.com/' target='_blank'><img src={GoogleImg} alt="G" /></Link>
        </div>

        <input className='px-4 py-2 w-full border rounded-lg mb-3' placeholder='Логин или Email' />
        <input className='px-4 py-2 w-full border rounded-lg mb-4' placeholder='Пароль' />

        <button className='w-full py-2 mb-2 bg-orange-500 text-white rounded-lg'>Войти</button>

        <p className='text-center text-blue-500 mb-2 cursor-pointer'>Забыли пароль?</p>

        <button className='w-full py-2 bg-gray-200 rounded-lg'>Зарегистрироваться</button>
      </div>
    </div>
  )
}

export default Vhod;
