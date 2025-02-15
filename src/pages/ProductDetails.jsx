import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import gadgetItems from './../gadgetData';
import { addToCart } from '../redux/Feature/CartSlice';
import { useDispatch } from 'react-redux';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = gadgetItems.find((item) => item.id === parseInt(productId))
  const dispatch = useDispatch();
  //console.log(productId, product);
  //console.log(typeof (productId));
  //add product quantity
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  }
  // add to cart
  const handleAddToCart = () => {
    if (quantity >= 1) {
      dispatch(addToCart({ product, quantity }));
    }

  }
  // handle image 
  const [mainImage, setMainImage] = useState(product.mainImage);

  const handleImageClick = (image) => {
    setMainImage(image);
  };
  return (
    <div className='container mx-auto py-8'>
      <div className='flex md:flex-row flex-col gap-4 p-4'>
        <div>
          <img src={mainImage} alt="" />
          <div className='flex gap-4'>
            {product.images.map((image) => <img src={image} key={image} alt="" className='w-[100px] mt-2 cursor-pointer' onClick={() => handleImageClick(image)} />)}
          </div>
        </div>
        <div>
          <h1 className='text-[18px] font-semibold text-black'>{product.name}</h1>
          <h3 className='text-[15px] font-semibold text-black my-4'>{product.description}</h3>
          <h2 className='text-[18px] font-semibold text-black my-4'>{product.price} Tk</h2>
          <div>
            <input type="number" value={quantity} onChange={handleQuantity} className='border-2 my-2' />
          </div>

          <button className=' bg-[#fe6724] w-[300px] h-[50px] rounded-md text-white hover:bg-gray-700 duration-300 font-semibold my-4' onClick={handleAddToCart}>Add To Cart</button>
          <h2 className='text-[18px] font-semibold text-black my-4'>Quick Overview</h2>
          <ul className='list-disc px-4'>
            <li className='text-black'>Sensor Type - 1/2 inch CMOS</li>
            <li className='text-black'>Sensor Resolution - Effective: 12 Megapixel</li>
            <li className='text-black'>Display Resolution (Pixels) - No</li>
            <li className='text-black'>Maximum Takeoff Weight - 135 gm</li>
            <li className='text-black'>Maximum Flight Time - 18 Minutes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;