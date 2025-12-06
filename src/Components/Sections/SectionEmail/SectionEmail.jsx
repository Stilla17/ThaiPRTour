import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import img from './../../../assets/Rectangle 1176.png';
import { InputMask } from "primereact/inputmask";

const SectionEmail = ({ image, text, text2 }) => {
    const form = useRef();
    const [value, setValue] = useState();
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

    return (
        <div className={`flex w-full rounded-xl mt-10 bg-white flex-wrap max-md:flex-col max-md:w-full`}>

            <form
                ref={form}
                onSubmit={sendEmail}
                className="w-2/5 bg-[#FFD028] p-8 flex flex-col gap-4 max-md:w-full"
            >
                <h2 className="text-2xl font-bold">{text || "Свяжитесь с нами"}</h2>

                <p className="text-sm text-[#444] leading-[1.4]">
                    {text2 ||
                        'Если у вас есть вопросы, свяжитесь с нами, и мы свяжемся с вами в ближайшее время.'}
                </p>

                <input
                    type="text"
                    name="name"
                    placeholder="Имя"
                    className="w-full px-4 py-3 rounded-md outline-none bg-white "
                />

                <div className="card flex justify-content-center">
                    <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999" />
                </div>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-md outline-none bg-white "
                />

                <button
                    type="submit"
                    className="mt-2 w-[150px] bg-black text-white py-3 rounded-md"
                >
                    Отправить
                </button>
                <p>Меня интересует <span className='font-bold'>[Layan Verde Phuket]</span></p>
            </form>


        </div>
    );
};

export default SectionEmail;
