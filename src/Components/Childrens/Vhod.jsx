import React from 'react'
import CancelImg from './../../assets/Group 1685.png';
import VkImg from './../../assets/Component 11 (4).png';
import TgImg from './../../assets/Component 11 (1).png';
import FbImg from './../../assets/Component 11 (2).png';
import GoogleImg from './../../assets/Component 11 (3).png';
import { Link } from 'react-router';

const Vhod = ({ toggleLogin }) => {
    return (
        <div className='absolute top-20 border-[#C9C9C9] shadow-2xl bg-white z-10 w-[270px] right-[150px] border p-3 rounded-[10px]'>
            <div className='flex items-center justify-between'>
                <p className='font-bold'>Войти</p>
                <img onClick={toggleLogin} src={CancelImg} alt="" />
            </div>

            <div className='flex items-center justify-between mt-5'>
                <Link to='https://vk.com/' target='_blank'><img src={VkImg} /></Link>
                <Link to='https://telegram.org/' target='_blank'><img src={TgImg} /></Link>
                <Link to='https://www.facebook.com/' target='_blank'><img src={FbImg} /></Link>
                <Link to='https://www.google.com/' target='_blank'><img src={GoogleImg} /></Link>
            </div>

            <input className='px-5 py-3 w-full border rounded-[15px] mt-[15px]' placeholder='Логин или Email' />
            <input className='px-5 py-3 w-full border rounded-[15px] mt-[15px]' placeholder='Пароль' />

            <button className='w-full mt-[15px] rounded-[15px] py-[9px] px-[18px] bg-[#FE8505] text-white'>Войти</button>
            <p className='text-[18px] mt-[15px] text-blue-500'>Забыли пароль?</p>

            <button className='rounded-2 py-[7px] px-[18px] bg-[#E3E2E2]  w-full mt-5'>
                Зарегистрироваться
            </button>
        </div>
    )
}

export default Vhod