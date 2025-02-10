import React from 'react';
import { RxCross1 } from "react-icons/rx";

const QuickView = ({ item, quickView, setQuickView }) => {
  console.log(item.id);

  return (
    <div className='fixed overflow-hidden z-10 flex justify-center items-center  w-full h-full bg-gray-300/40 top-0 left-0'>
      <div className='bg-white p-4 rounded-md opacity-100 flex gap-4 relative'>
        <div>
          <img src={item.mainImage} alt="" srcSet="" className='w-[400px] h-[400px] rounded-md' />
        </div>
        <div>
          <h1 className='text-[20px] font-semibold text-black'>{item.name}</h1>
          <span className='text-xl text-yellow-400 my-3'>{'★'.repeat(Math.floor(item.rating))}</span>
          <h2 className='text-[20px] font-semibold text-black'>TK {item.price}৳</h2>
          <button className='px-[40px] py-3 text-white text-[16px] font-semibold bg-orange-400 rounded-md my-3'>Add To Cart</button>
          <p>{item.description}</p>
          <h3>Quick Overview</h3>
          <ul className='list-disc p-4'>
            <li>Form Factor - Tower</li>
            <li>Processor Type - Core i3</li>
            <li>Processor Max Turbo Frequency - 4.50GHz</li>
            <li>RAM - 8GB</li>
            <li>Hard Disk Drive (HDD) - No</li>
            <li>Solid-State Drive (SSD) - 512GB</li>
            <li>Graphics Memory - Shared</li>
          </ul>
        </div>
        <button onClick={() => setQuickView(!quickView)} className='absolute top-0 right-0 text-2xl font-medium'><RxCross1 /></button>
      </div>
    </div>
  );
};

export default QuickView;