import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { RiDislikeLine } from "react-icons/ri";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import n from './../../../public/Rectangle 1165 (1).png';
import image from "./../../../public/Rectangle 1164.png";
import ame from "./../../../public/Group 1688.jpg";
import named from "./../../../public/Rectangle 1165.png";
import name from "./../../../public/Rectangle 1164 (1).png";
import nf from './../../../public/Rectangle 1165 (2).png';

const Villa = () => {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <section className="py-14">
      <div className="max-w-[1276px] mx-auto px-4">

        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-10"
          >
            <h1 className="text-[28px] font-bold">Недвижимость в Тайланде</h1>
            <p className="text-gray-500 hover:text-black cursor-pointer transition max-md:hidden">Смотреть все</p>
          </motion.div>

          <div className="flex gap-3">
            <button
              className="group border border-black w-[53px] h-9 flex items-center justify-center rounded-xl hover:bg-black hover:text-white transition"
            >
              <FaCaretLeft />
            </button>
            <button
              className="group border border-black w-[53px] h-9 flex items-center justify-center rounded-xl hover:bg-black hover:text-white transition"
            >
              <FaCaretRight />
            </button>
          </div>
        </div>

        <div className="mt-14 flex items-start justify-between gap-10 flex-wrap max-md:justify-center">
          <motion.img
            src={name}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition"
          />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-[757px] text-[15px] text-gray-700 space-y-4"
          >
            <h1 className="text-[20px] font-semibold">Международное посредничество</h1>
            <p>Представительства позволяют предоставлять услуги напрямую.</p>
            <p>Можно открыть предприятие в Польше или Чехии.</p>
            <p>Партнёры — лицензированные юридические компании.</p>
            <p>Клиенты получают полное сопровождение.</p>
          </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <div className="w-[301px] h-[422px] border border-black rounded-2xl p-4 hover:shadow-xl hover:-translate-y-2 transition">
            <img src={ame} className="rounded-xl hover:scale-[1.03] transition" />
            <div className="mt-3">
              <h1 className="text-[16px] font-bold">Layan Verde Phuket</h1>
              <p className="flex items-center gap-2 text-[14px] mt-1">
                <IoLocationSharp /> Таиланд, Пхукет, Студия 35 м
              </p>
              <p className="text-[14px] mt-1">Студия 35 кв.м., этаж 3/7, год 2023</p>
              <p className="text-[12px] text-gray-500 mt-2">
                Новый дом, парковка, бассейн, магазины рядом
              </p>
            </div>

            <div className="flex items-center justify-between mt-5">
              <h1 className="text-[16px] text-orange-500">от $180 000</h1>
              <div className="flex items-center gap-4 text-[20px]">
                <FaWhatsapp className="hover:text-green-500 hover:scale-125 transition cursor-pointer" />
                <RiDislikeLine className="hover:text-red-500 hover:scale-125 transition cursor-pointer" />
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex items-center justify-between mt-14">
          <div className="flex items-center gap-10">
            <h1 className="text-[28px] font-bold">Недвижимость в Тайланде</h1>
            <p className="text-gray-500 hover:text-black cursor-pointer transition max-md:hidden">Смотреть все</p>
          </div>
          <div className="flex gap-3">
            <FaCaretLeft className="border border-black w-[53px] h-9 p-2 rounded-xl hover:bg-black hover:text-white transition" />
            <FaCaretRight className="border border-black w-[53px] h-9 p-2 rounded-xl hover:bg-black hover:text-white transition" />
          </div>
        </div>
        <div className="mt-14 flex items-start justify-between gap-10 flex-wrap max-md:justify-center">
          <motion.img src={name} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition" />

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-[757px] text-[15px] text-gray-700 space-y-4" >
            <h1 className="text-[20px] font-semibold">Международное посредничество</h1>
            <p>Представительства позволяют предоставлять услуги напрямую.</p>
            <p>Можно открыть предприятие в Польше или Чехии.</p>
            <p>Партнёры — лицензированные юридические компании.</p>
            <p>Клиенты получают полное сопровождение.</p>
          </motion.div>
        </div>

        <div className="flex items-center justify-between mt-14">
          <div className="flex items-center gap-10">
            <h1 className="text-[28px] font-bold">Статьи</h1>
            <p className="text-gray-500 hover:text-black cursor-pointer transition max-md:hidden">Смотреть все</p>
          </div>

          <div className="flex gap-3">
            <FaCaretLeft className="border border-black w-[53px] h-9 p-2 rounded-xl hover:bg-black hover:text-white transition" />
            <FaCaretRight className="border border-black w-[53px] h-9 p-2 rounded-xl hover:bg-black hover:text-white transition" />
          </div>
        </div>
        <div>
          <div className="max-w-[301px] h-[299px] border border-black rounded-2xl p-4 hover:shadow-xl hover:-translate-y-2 transition mt-14">
            <img src={nf} alt="" />
            <h1 className="font-bold ml-7">Layan Verde Phuket</h1>
            <div className="flex items-cnter justify-around mt-3 border border-black ">
              <h1 className="text-[16px] text-orange-500">12,000฿ /месяц</h1>
              <div className="flex items-center gap-4 text-[20px]">
                <FaWhatsapp className="hover:text-green-500 hover:scale-125 transition" />
                <RiDislikeLine className="hover:text-red-500 hover:scale-125 transition" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-14">
          <div className="flex items-center gap-10">
            <h1 className="text-[28px] font-bold">Статьи</h1>
            <p className="text-gray-500 hover:text-black cursor-pointer transition max-md:hidden">Смотреть все</p>
          </div>

          <div className="flex gap-3">
            <FaCaretLeft className="border border-black w-[53px] h-9 p-2 rounded-xl hover:bg-black hover:text-white transition" />
            <FaCaretRight className="border border-black w-[53px] h-9 p-2 rounded-xl hover:bg-black hover:text-white transition" />
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-14 flex items-center justify-center">
          <div className="w-[301px] h-[292px] border border-black rounded-2xl p-4 hover:shadow-xl hover:-translate-y-2 transition">
            <img src={n} className="rounded-xl hover:scale-[1.03] transition" />
            <div className="mt-4 ml-1">
              <p className="text-gray-500 text-[14px]">Недвижимость</p>
              <h1 className="font-semibold text-[17px] leading-5 mt-2">
                Что такое гражданство ЕС и как его получить?
              </h1>
            </div>
          </div>
        </motion.div>



      </div>
    </section>
  );
};

export default Villa;
