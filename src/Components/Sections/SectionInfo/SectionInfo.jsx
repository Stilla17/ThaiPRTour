import React, { useState } from 'react'
import { main } from './SectionInfo.js';
import img7 from './../../../assets/Frame 2031.png';

const SectionInfo = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };
    return (
        <section className='mt-[100px]'>
            {
                main.map((item, index) => (
                    <div key={index} className='max-w-[1300px] mx-auto px-5 '>
                        <div onClick={() => toggle(index)} className=' border-b border-[#D9D9D9]  py-[15px] flex flex-col gap-2 cursor-pointer'>
                            <div className='flex items-center gap-5 justify-between'>
                                <div className='font-bold'>
                                    {item.title}
                                </div>
                                <img onClick={toggle} src={img7} className="text-xl transition-transform"
                                    style={{
                                        transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                                    }}>
                                </img>
                            </div>
                            {
                                openIndex === index && (
                                    <div className='pl-5'>
                                        {item.info}
                                    </div>
                                )
                            }
                        </div >
                    </div>


                ))
            }
        </section >
    )
}

export default SectionInfo