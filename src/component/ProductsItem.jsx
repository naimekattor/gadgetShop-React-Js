import React from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/Feature/CartSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductsItem = ({ productItems }) => {
  const dispatch = useDispatch();
  console.log(productItems);
  const { items } = useSelector(state => state.cart)
  console.log(items);

  // add to cart
  const handleAddToCart = () => {
    dispatch(addToCart({ product: productItems, quantity: 1 }));
  }
  const findItem = items.find((item) => item.id === productItems.id);

  return (
    <div className='bg-white p-4 drop-shadow-md rounded-md m-4'>
      <img src={productItems.mainImage} alt="" className=' w-[350px] h-[200px] hover:scale-105 duration-300 z-[-10]' />
      <Link to={`/product/${productItems.id}`}>
        <h1 className='font-semibold mt-2'>{productItems.name}</h1>
      </Link>
      <span>
        {'★'.repeat(Math.floor(productItems.rating))}
        {'☆'.repeat(5 - Math.floor(productItems.rating))}
      </span>
      <span className="ml-2 text-gray-600">({productItems.rating})</span>
      <h2 className='text-center font-semibold mb-2 text-[#fe6724]'>Tk {productItems.price}</h2>
      <div className='text-center bg-[#fe6724] hover:bg-gray-700 duration-400 text-white p-2 cursor-pointer rounded font-semibold'>
        <button className='' onClick={handleAddToCart}>{items.some((item) => item.id === productItems.id) ? `${findItem.totalQuantity} in Cart` : "Add To Cart"}</button>
      </div>

    </div>
  );
};

export default ProductsItem;