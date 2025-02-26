import React from 'react';
import { MdDelete } from "react-icons/md";
import { removeFromCart } from '../redux/Feature/CartSlice';
import { useDispatch } from 'react-redux';
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id))
  }
  return (
    <div className='flex justify-between items-center mb-2 p-4'>
      <img src={item.mainImage} alt="" className='w-[100px] h-[50px] hidden md:block' />
      <h1>{item.name}</h1>
      <h2 className='hidden md:block'>{item.price} Tk</h2>
      <h2>{item.totalQuantity}</h2>
      <span onClick={handleRemoveFromCart} className=' cursor-pointer'><MdDelete /></span>
      <h2 oncli>{item.totalAmount} Tk</h2>
    </div>
  );
};

export default CartItem;