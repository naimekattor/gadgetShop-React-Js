import React from 'react';

const Hero = () => {
  return (
    <div className='container mx-auto flex md:flex-row flex-col justify-center items-center gap-4 mt-8 px-[25px]'>
      <div>
        <img src="https://new-ella-demo.myshopify.com/cdn/shop/files/home-20-slider-1.jpg?v=1646280166&width=740" alt="" className=' cursor-pointer' />
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <img src="https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-[250px] w-[250px] rounded hover:scale-105 duration-300 cursor-pointer' />
        <img src="https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-[250px] w-[250px] rounded hover:scale-105 duration-300 cursor-pointer' />
        <img src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-[250px] w-[250px] rounded hover:scale-105 duration-300 cursor-pointer' />
        <img src="https://images.pexels.com/photos/1034653/pexels-photo-1034653.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-[250px] w-[250px] rounded hover:scale-105 duration-300 cursor-pointer' />
      </div>
    </div>
  );
};

export default Hero;