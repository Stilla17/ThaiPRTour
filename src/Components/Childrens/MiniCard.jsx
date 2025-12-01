import React from 'react'

const MiniCard = ({ text, img }) => {
    return (
        <div className='flex hover:text-blue-500 gap-2 hover:scale-[1.1] duration-200 hover:shadow-2xl items-center w-[301px] border pl-2 border-[#C9C9C9] rounded-[15px] shadow py-4  justify-center'>
            <img src={img} alt="" />
            <p className=' text-center mt-2 font-medium'>{text}</p>
        </div>
    )
}

export default MiniCard