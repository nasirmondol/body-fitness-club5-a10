import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, img, price, id} = service;
    return (
        <div className='service'>
            <img className='images' src={img} alt="" />
            <h4 className='font-bold  text-2xl m-3'>{name}</h4>
            <p className='m-3 text-xl  font-bold'>Price: ${price} per week</p>
            <button className=' font-bold bg-green-500 w-1/2 rounded-md justify-self-center m-4'>Check out</button>
        </div>
    );
};

export default Service;