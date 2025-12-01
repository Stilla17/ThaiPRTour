import React from 'react'
import image from './../../assets/Rectangle 1172.png';

const News = ({ text1, text, img }) => {
    return (
        <div>
            <div className='flex flex-col w-[301px] py-[10px] hover:scale-[1.02] duration-200 hover:shadow-2xl  border border-[#C9C9C9] rounded-[15px] shadow-lg  '>
                <img src={img} alt="" className='rounded-t-[15px]' />
                <div className='p-4'>
                    <div className='flex items-center gap-2'>
                        <img src={image} alt="" />
                        <p>{text1}</p>
                    </div>
                    <p className='font-bold text-lg mb-2'>{text}</p>
                    <button className='text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default News