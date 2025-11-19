import React, { useState } from 'react'
import Logo from './../../assets/Group 1675.svg';
import BtnImg from './../../assets/Frame 1000003282.png';
import SearchImg from './../../assets/Mask group (3).png';
import RussianFlagImg from './../../assets/Russian.png';
import Img from './../../assets/Polygon 46.png';
import { Link, Links } from 'react-router';
import CancelImg from './../../assets/Group 1685.png';
import VkImg from './../../assets/Component 11 (4).png';
import TgImg from './../../assets/Component 11 (1).png';
import FbImg from './../../assets/Component 11 (2).png';
import GoogleImg from './../../assets/Component 11 (3).png';


let main = [
    {
        title: 'Гражданство',
        links: ['Гражданство', 'Резиденство', 'Бизнес', 'Визы']
    },
    {
        title: 'Недвижимость',
        links: ['Купить', 'Снять', 'Коммерческая', 'Юридическая помощь', 'Предложить объект']
    },
    {
        title: 'Индекс паспорта',
        links: ['Рейтинг паспортов', 'Безвизовые страны', 'Виза', 'Сравнение']
    },
    {
        title: 'Авто',
        links: ['Купить / продать', 'Купить / продать', 'Аренда', 'Сотрудничество']
    },
    {
        title: 'Консъерж - сервис',
        links: ['Аренда яхт', 'Аренда вертолета', 'Аренда vip авто', '24/7 обслуживание гостей']
    },
    {
        title: 'Медиа',
        links: ['Новости', 'Блог']
    }
]

const Nav = () => {

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const openData = () => {
        setOpen(!open);
    }
    const openData2 = () => {
        setOpen2(!open2);
    }
    return (
        <nav >
            <div className='flex justify-between items-center border p-5 border-[#D9D9D9]'>
                <img src={Logo} alt="" />
                <div className='flex items-center gap-10'>
                    <button className='flex items-center border shadow border-[#C9C9C9] rounded-[10px] gap-[20px] p-[12px]'><img src={BtnImg} alt="" />Услуги</button>
                    <div className='relative'>
                        <input type="text" className='w-[353px] py-[10px] border-[#C9C9C9] shadow border px-[10px] rounded-[10px]' placeholder='Поиск..' />
                        <img src={SearchImg} className='absolute right-3 top-[13px]' alt="" />
                    </div>
                    <ul className='flex gap-[30px] text-[18px] font-medium'>
                        <li><Link to='/contacts'>Контакты</Link></li>
                        <li><Link to='/aboutUs'>О нас</Link></li>
                    </ul>
                </div>
                <div className='flex items-center gap-5' onClick={openData}>
                    <button><img src={RussianFlagImg} alt="" /></button>
                    <img src={Img} alt="" />
                </div>
                {
                    open ? (
                        <div className='absolute top-10 rounded-t-none z-10 border-t-0 right-[300px] border shadow pb-px p-3 rounded-[10px]'>
                            <ul className='flex flex-col  text-[18px] font-medium'>
                                <li><button className='mt-[10px]'><img width={'25px'} height={'18px'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/2560px-Flag_of_Uzbekistan.svg.png" alt="" /></button></li>
                                <li><button><img width={'25px'} height={'18px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyNArp3p_UVUmGhNnGTwqoVqon0KY7l70mQ&s" alt="" /></button></li>
                            </ul>
                        </div>
                    ) : ""
                }
                <div className='flex gap-[20px]'>
                    <button onClick={openData2} className='rounded-[8px] py-[7px] px-[18px] bg-[#E3E2E2] border-[#C9C9C9] border-[1px] '>Вход</button>
                    <button className='rounded-[8px] py-[9px] px-[18px] bg-[#FE8505] text-white  '>Связаться</button>
                </div>
                {
                    open2 ? (
                        <div className='absolute top-[80px] border-[#C9C9C9] shadow-2xl bg-white z-10 w-[270px] right-[150px] border   p-[12px] rounded-[10px]'>
                            <div className='flex  items-center justify-between'>
                                <p className='font-bold'>Войти</p>
                                <img onClick={() => openData2(!open2)} src={CancelImg} alt="" />
                            </div>

                            <div className='flex items-center justify-between mt-[20px] '>
                                <Link to='https://vk.com/' target='_blank'> <img src={VkImg} alt="" /></Link>
                                <Link to='https://telegram.org/' target='_blank'> <img src={TgImg} alt="" /></Link>
                                <Link to='https://www.facebook.com/' target='_blank'> <img src={FbImg} alt="" /></Link>
                                <Link to='https://www.google.com/' target='_blank'> <img src={GoogleImg} alt="" /></Link>
                            </div>
                            <input className='px-[20px] py-[12px] focus:border-none w-full focus:outline-none border-[#D9D9D9] mt-[15px] border-[1px] rounded-[15px]' type="text" placeholder='Логин или Email' />
                            <input className='px-[20px] py-[12px] focus:border-none w-full focus:outline-none border-[#D9D9D9] mt-[15px] border-[1px] rounded-[15px]' type="text" placeholder='Пароль' />
                            <button className='w-full mt-[15px] rounded-[15px] py-[9px] px-[18px] bg-[#FE8505] text-white  '>Войти</button>
                            <p className='text-[18px] mt-[15px] text-blue-500 '>Забыли пароль?</p>
                            <button className='rounded-[8px] py-[7px] px-[18px] bg-[#E3E2E2] border-[#C9C9C9] border-[1px] w-full mt-[20px]'>Загистрироваться</button>

                        </div>
                    ) : ""
                }

            </div>
            <div className='flex justify-center gap-[100px] p-[15px] bg-[#F7F4F0]'>
                <ul>
                    <li className='font-bold'>Гражданство</li>
                    <li className=''><Link to='/grajdanstvo'>Гражданство</Link></li>
                    <li className=''><Link to='/rezidestvo'>Резиденство</Link></li>
                    <li className=''><Link to='/biznes'>Бизнес</Link></li>
                    <li className=''><Link to='/vizi'>Визы</Link></li>
                </ul>
                <ul>
                    <li className='font-bold'>Недвижимость</li>
                    <li className=''><Link to='/buy'>Купить</Link></li>
                    <li className=''><Link to='/remove'>Снять</Link></li>
                    <li className=''><Link to='/commercial'>Коммерческая</Link></li>
                    <li className=''><Link to='/help'>Юридическая помощь</Link></li>
                    <li className=''><Link to='/helpObject'>Предложить объект</Link></li>
                </ul>
                <ul>
                    <li className='font-bold'>Индекс паспорта</li>
                    <li className=''><Link to='/rating'>Рейтинг паспортов</Link></li>
                    <li className=''><Link to='/countries'>Безвизовые страны</Link></li>
                    <li className=''><Link to='/viza'>Виза</Link></li>
                    <li className=''><Link to='/comparison'>Сравнение</Link></li>
                </ul>
                <ul>
                    <li className='font-bold'>Авто</li>
                    <li className=''><Link to='/sell\buy'>Купить / продать</Link></li>
                    <li className=''><Link to='/sell\buy'>Купить / продать</Link></li>
                    <li className=''><Link to='/arend'>Аренда</Link></li>
                    <li className=''><Link to='/Cooperation'>Сотрудничество</Link></li>
                </ul>
                <ul>
                    <li className='font-bold'>Консъерж - сервис</li>
                    <li className=''><Link to='/arendYaxt'>Аренда яхт</Link></li>
                    <li className=''><Link to='/arendHelicopter'>Аренда вертолета</Link></li>
                    <li className=''><Link to='/arendVip'>Аренда vip авто</Link></li>
                    <li className=''><Link to='/'>24/7 обслуживание гостей</Link></li>
                </ul>
                <ul>
                    <li className='font-bold'>Медиа</li>
                    <li className=''><Link to='/news'>Новости</Link></li>
                    <li className=''><Link to='/blog'>Блог</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav