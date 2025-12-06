import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { CiMenuKebab } from "react-icons/ci";
import TrueFalse from '../Components/Hooks/TrueFalse';
import { Doughnut } from 'react-chartjs-2';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const AdminPanel = () => {
    const [active, setActive] = useState('dashboard');
    const { register, handleSubmit, reset } = useForm();
    const [data, setData] = useState([]);
    const [dataUsers, setDataUsers] = useState([]);
    const { open, toggleOpen } = TrueFalse();
    const [selectedItem, setSelectedItem] = useState(null);
    const [originalData, setOriginalData] = useState([])

    const handleOpenData = (index) => {
        setSelectedItem(index);
        if (selectedItem === index) {
            setSelectedItem(null);
        } else {
            setSelectedItem(index);
        }
    }


    const pushData = async (data) => {
        try {
            const res = await axios.post('https://68e211a48943bf6bb3c58500.mockapi.io/todoList/objects', {
                name: data.name,
                address: data.address,
                size: data.size,
                newbuild: data.newbuild,
                info: data.info,
                img: data.image,
                price: data.price
            });
            console.log(res.message);
            reset()
            toast.success('Успешно добавлено');
        } catch (element) {
            console.error('Error:', element)
            toast.error('Ошибка загрузки');
        }
    }
    const deleteData = async (id) => {
        try {
            const res = await axios.delete(`https://68e211a48943bf6bb3c58500.mockapi.io/todoList/objects/${id}`);
            renderData()
            console.log(res);
            toast.success('Успешно удалено');

        } catch (element) {
            console.error('Error:', element)
            toast.error('Ошибка при удалении');

        }
    }
    const renderData = async () => {
        try {
            const res = await axios.get('https://68e211a48943bf6bb3c58500.mockapi.io/todoList/objects');
            setData(res.data);
        } catch (element) {
            console.error('Error:', element)
        }
    }
    const handlePutData = async (id) => {
        const updatedData = {
            name: data[id].name,
            address: 'Обновленный адрес',
            size: 'Обновленный размер',
            newbuild: 'Вторичка',
            info: 'Обновленная информация',
            img: 'https://via.placeholder.com/150',
            price: 99999
        };
        try {
            const res = await axios.put(`https://68e211a48943bf6bb3c58500.mockapi.io/todoList/objects/${id}`, updatedData);
            console.log(res.data);
            renderData()
        } catch (element) {
            console.error('Error:', element)
        }
    }
    const handleGetUsers = async () => {
        try {
            const res = await axios.get('https://68c141a798c818a69401336f.mockapi.io/register')
            console.log(res.data)
            setDataUsers(res.data)
            setOriginalData(res.data);
        } catch (element) {
            console.error('Error:', element)
        }
    }
    const openData = () => {
        toggleOpen(!open)
    }
    const searchData = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredData = originalData.filter(item =>
            item.name.toLowerCase().includes(searchTerm) ||
            item.address.toLowerCase().includes(searchTerm) ||
            item.newbuild.toLowerCase().includes(searchTerm)
        );
        setData(filteredData);
    }
    useEffect(() => {
        renderData()
        handleGetUsers()
    }, []);
    const Chart = {
        labels: [
            'Users',
            'Admins',
            'Products'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [dataUsers.length, 3, data.length],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };
    const renderContent = () => {
        switch (active) {
            case 'dashboard':
                return <div className='h-full '>
                    <p className='text-[24px] font-bold'>Добавить обьект</p>


                    <form onSubmit={(e) => e.preventDefault()} className="space-y-4 mt-4 w-140 pb-10">
                        Картинка
                        <input
                            {...register('image', { required: true })}
                            id="input"
                            type="text"
                            className="block w-full border rounded p-2"
                        />

                        <div>
                            <label className="block mb-1 font-medium">Имя</label>
                            <input
                                {...register('name', { required: true })}
                                type="text"
                                name="name"
                                className="w-full border rounded p-2"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Адрес</label>
                            <input
                                {...register('address', { required: true })}
                                type="text"
                                name="address"
                                className="w-full border rounded p-2"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Котегория</label>
                            <select {...register('newbuild')} className='w-full border rounded p-2'>
                                <option value="Новостройка">Новостройка</option>
                                <option value="Вторичка">Вторичка</option>
                                <option value="Коттеджи">Коттеджи</option>

                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Размер дома</label>
                            <input
                                {...register('size', { required: true })}
                                type="text"
                                name="size"
                                className="w-full border rounded p-2"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Цена дома</label>
                            <input
                                {...register('price', { required: true })}
                                type="number"
                                name="price"
                                className="w-full border rounded p-2"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Общий инфо</label>
                            <textarea
                                {...register('info', { required: true })}
                                name="info"
                                className="w-full border rounded p-2"
                                rows={4}
                            ></textarea>
                        </div>

                        <button onClick={handleSubmit(pushData)}
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Сохранить
                        </button>
                    </form>
                </div >
            case 'products':
                return <div>
                    <div><p className='font-bold text-[28px]'>Котегории</p>
                        <div className='mt-2'>
                            <button onClick={renderData} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                                Показать все
                            </button>
                            <button onClick={() => setData(data.filter(item => item.newbuild === 'Новостройка'))} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-2">
                                Новостройка
                            </button >
                            <button onClick={() => setData(data.filter(item => item.newbuild === 'Вторичка'))} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-2">
                                Вторичка
                            </button>
                            <button onClick={() => setData(data.filter(item => item.newbuild === 'Коттеджи'))} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-2">
                                Коттеджи
                            </button>


                        </div>
                    </div>
                    <div className='w-full h-1 bg-gray-300 my-4'>

                    </div>
                    <div className="grid mt-5 grid-cols-3 gap-4">
                        {
                            [...data]
                                .sort((a, b) => b.id - a.id)
                                .map((item, index) => (
                                    <div key={item.id} className="border p-4 pt-1 rounded bg-white relative">
                                        <div className='flex justify-end items-center '>
                                            <button><CiMenuKebab onClick={() => handleOpenData(index)} className='text-[18px] mt-1 cursor-pointer' /></button>
                                        </div>
                                        <div className={selectedItem === index ? 'absolute bg-white border rounded shadow-md p-2 right-10 mt-2' : 'hidden'}>
                                            <button className='cursor-pointer' onClick={() => deleteData(item.id)}>Удалить</button>
                                            <div className='h-0.5 bg-gray-500 w-full'></div>
                                            <button className='cursor-pointer' onClick={() => handlePutData(item.id)}>Редактировать</button>
                                        </div>
                                        <Link to={`/estate/${item.id}`}>
                                            <img src={item.img} alt={item.name} className="w-full mt-2 h-40 object-cover mb-4 rounded" />
                                            <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                                            <p className="text-gray-600 mb-2">Адрес: {item.address}</p>
                                            <p className="text-gray-600 mb-2">Размер: {item.size}</p>
                                            <p className='line-clamp-2'>{item.info}</p>
                                            <p className="text-gray-600 mb-2">Категория: {item.newbuild}</p>
                                            <p className="text-gray-800 font-bold">Цена: ${item.price}</p>

                                        </Link>
                                    </div>
                                ))
                        }
                    </div>
                </div >;
            case 'users':
                return <div>
                    <div className='flex  gap-30 items-center'>
                        <p className='font-bold text-[28px]'>Пользователи</p>
                        <div>

                            {
                                dataUsers.length === 0 && <p className=''>Пользователей пока нет</p>
                            }
                            <div className='rounded-[15px] shadow-2xl border bg-white p-5 w-60 
                flex items-center justify-between gap-3 hover:shadow-3xl 
                transition-all duration-200 cursor-default'>
                                {
                                    dataUsers.length > 0 && (
                                        <p className='text-[18px] font-semibold text-gray-700'>
                                            Всего пользователей:
                                            <span className='ml-2 text-blue-600 font-bold'>{dataUsers.length}</span>
                                        </p>
                                    )
                                }
                            </div>

                        </div>
                        <input
                            className="border p-2 rounded-[10px] border-gray-500"
                            type="text"
                            placeholder="Поиск..."
                            onChange={searchData}
                        />
                    </div>
                    <div className='h-0.5 w-full bg-gray-500 mt-5 shadow-2xl'></div>
                    <div>
                        <div className='flex justify-between items-center flex-wrap'>
                            {
                                dataUsers.map((item) => (
                                    <div key={item.id} className={'p-5 rounded-[20px] shadow-xl bg-white mt-5 w-[300px]'}>
                                        <div className='mb-4'>
                                            <p><span className='font-bold'>Имя:</span> {item.name}</p>
                                            <p><span className='font-bold'>Фамилия:</span> {item.surname}</p>
                                            <p><span className='font-bold'>Email:</span> {item.email}</p>
                                            <div className='h-0.5 bg-gray-300 my-2'></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div >;
            case 'chart':
                return <div>
                    <p className='font-bold text-[28px]'>Графики</p>
                    <div className='mt-5 w-[500px] h-[500px]'>
                        <Doughnut data={Chart} />

                    </div>
                </div>;
            case 'settings':
                return <div>Настройки</div>;
            default:
                return <div>Выберите раздел</div>;
        }
    };

    return (<div className="flex h-screen">
        <Toaster position="top-right" />
        <div className="w-64 bg-gray-800 text-white flex flex-col p-4 ">
            <button
                className={`p-2 mb-2 text-left rounded ${active === 'dashboard' ? 'bg-gray-700' : ''}`}
                onClick={() => setActive('dashboard')}
            >
                Добавить продукт </button>
            <button
                className={`p-2 mb-2 text-left rounded ${active === 'products' ? 'bg-gray-700' : ''}`}
                onClick={() => setActive('products')}
            >
                Продукты </button>
            <button
                className={`p-2 mb-2 text-left rounded ${active === 'users' ? 'bg-gray-700' : ''}`}
                onClick={() => setActive('users')}
            >
                Пользователи </button>
            <button
                className={`p-2 mb-2 text-left rounded ${active === 'chart' ? 'bg-gray-700' : ''}`}
                onClick={() => setActive('chart')}
            >
                Графики</button>
            <button
                className={`p-2 mb-2 text-left rounded ${active === 'settings' ? 'bg-gray-700' : ''}`}
                onClick={() => setActive('settings')}
            >
                Настройки </button> </div>

        <div className="flex-1 p-6 bg-gray-100 min-h-screen overflow-auto">
            {renderContent()}
        </div>
    </div>

    );
};

export default AdminPanel;
