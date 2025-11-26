import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import img from './../../../assets/Rectangle 1176.png';
const SectionEmail = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_2uuntpl', 'template_la67xd2', form.current, {
                publicKey: 'mtZZeyFYJ_dxq-5Dk',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="flex w-full rounded-xl bg-white flex-wrap max-md:flex-col max-md:w-full">

            <div className="w-2/5 bg-[#FFD028] p-8 flex flex-col gap-4 max-md:w-full">
                <h2 className="text-2xl font-bold">Свяжитесь с нами</h2>

                <p className="text-sm text-[#444] leading-[1.4]">
                    Напишите свои контакты и в ближайшее время с вами свяжется
                    наш менеджер для уточнения вашего вопроса
                </p>

                <input
                    type="text"
                    placeholder="Имя"
                    className="w-full px-4 py-3 rounded-md outline-none bg-white "
                />

                <input
                    type="text"
                    placeholder="Телефон"
                    className="w-full px-4 py-3 rounded-md outline-none bg-white "
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-md outline-none bg-white "
                />

                <button className="mt-2 w-[150px] bg-black text-white py-3 rounded-md">
                    Отправить
                </button>
            </div>

            <div className="w-3/5 max-md:w-full h-[400px]">
                <img
                    src={img}
                    alt="contact"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>

    );
};
export default SectionEmail;