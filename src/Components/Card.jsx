import React from 'react'

const Card = (props) => {
    return (
        <div className='border-2 rounded-sm w-[280px] '>
            <img className='h-[250px] w-[280px]' src={props.src} alt="" />
            <p className='mt-5 px-5 font-bold text-base'>Rs {props.Price}</p>
            <p className='mt-2 px-5'>{props.Title} </p>
            <p className='mt-6 mb-2 px-5 text-gray-500 text-sm'>{props.Address} </p>
        </div>
    )
}

export default Card