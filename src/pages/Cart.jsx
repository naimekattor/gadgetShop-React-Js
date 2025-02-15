import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../component/CartItem';

const Cart = () => {
  const { items } = useSelector(state => state.cart)
  console.log(items);

  return (
    <div className='container mx-auto bg-white drop-shadow-lg p-4 my-4'>
      <div className='flex justify-between items-center mb-2 p-4'>
        <span>images</span>
        <span>images</span>
        <span>images</span>
        <span>images</span>
        <span>images</span>
        <span>images</span>
      </div>
      {
        items.map((item) => <CartItem key={item.id} item={item} />)
      }
      <div className='p-4'>
        <hr className=' border-[2px]' />
        <h1 className='font-semibold'>Cart Summary</h1>
        <h2 className='font-bold tracking-wider	'>Total : {items.reduce((total, item) => total + item.totalAmount, 0)} Tk</h2>
      </div>
    </div>
  );
};

export default Cart;