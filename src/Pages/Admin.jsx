import React, { useState } from 'react';
import axios from "axios";
import { useForm } from 'react-hook-form';
const AdminPanel = () => {
    const [active, setActive] = useState('dashboard');
    const { register, handleSubmit, reset } = useForm();
    const pushData = async (data) => {
        try {
            const res = await axios.post('https://68e211a48943bf6bb3c58500.mockapi.io/todoList/objects', {
                name: data.name,
                address: data.address,
                size: data.size,
                newbuild: data.newbuild,
                info: data.info,
                img: data.image
            });
            console.log(res.message);
            alert('Обьект успешно добавлен')
        } catch (element) {
            console.error('Error:', element)
        }
    }

    const renderContent = () => {
        switch (active) {
            case 'dashboard':
                return <div className='h-full '>
                    <p className='text-[24px] font-bold'>Добавить обьект</p>


                    <form onSubmit={(e) => e.preventDefault()} className="space-y-4 mt-4 pb-10">
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
            case 'users':
                return <div>Список пользователей</div>;
            case 'settings':
                return <div>Настройки</div>;
            default:
                return <div>Выберите раздел</div>;
        }
    };

    return (<div className="flex h-screen">
        <div className="w-64 bg-gray-800 text-white flex flex-col p-4 ">
            <button
                className={`p-2 mb-2 text-left rounded ${active === 'dashboard' ? 'bg-gray-700' : ''}`}
                onClick={() => setActive('dashboard')}
            >
                Добавить продукт </button>
            <button
                className={`p-2 mb-2 text-left rounded ${active === 'users' ? 'bg-gray-700' : ''}`}
                onClick={() => setActive('users')}
            >
                Пользователи </button>
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
