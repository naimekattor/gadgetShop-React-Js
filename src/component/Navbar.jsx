import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import gadgetItems from '../gadgetData';
import SearchResult from './SearchResult';
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { IoSearch } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
const Navbar = () => {
  const [searchItem, setSearchItem] = useState('');
  const [navMenu, setNavMenu] = useState(false);
  //console.log(searchItem);
  //Search Result
  const filterProducts = gadgetItems.filter((item) => item.name.toLowerCase().includes(searchItem.toLowerCase()));
  console.log(filterProducts);
  const { items } = useSelector(state => state.cart);
  return (
    <header className='bg-[#fe6724]'>
      <div className='flex justify-between gap-4 py-4 px-[25px] items-center container mx-auto'>
        <div className='text-2xl font-bold'>
          Gadget <span className=' text-white '>Shop</span>
        </div>
        <div className='relative '>
          <input type="text" placeholder='Search..' className=' border md:w-[500px] h-10 rounded-lg outline-none w-[120px] ' onChange={(e) => setSearchItem(e.target.value)} />
          {
            searchItem.length > 0 ? <div className='absolute top-10 bg-white md:w-[500px] w-[200px] z-10'>
              <SearchResult filterProducts={filterProducts} />
            </div> : null
          }

        </div>
        <nav className='hidden md:block'>
          <ul className='flex space-x-4 items-center text-white font-semibold'>
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/shop"}>
              <li>Shop</li>
            </NavLink>
            <NavLink to={"/cart"}>
              <li className='relative'><FaCartPlus />
                <span className=' absolute top-[-10px]  right-[-10px] bg-red-500 size-[20px] rounded-full flex items-center justify-center text-white'>{items.reduce((total, item) => total + parseInt(item.totalQuantity), 0)}</span>
              </li>
            </NavLink>


          </ul>
        </nav>
        {/* navbar for mobile */}
        <div className='md:hidden  flex items-center text-white gap-x-6'>

          <NavLink to={"/cart"}>
            <li className='relative'><FaCartPlus />
              <span className=' absolute top-[10px] right-[-10px] bg-red-500 size-[18px] rounded-full flex items-center justify-center text-white'>{items.reduce((total, item) => total + parseInt(item.totalQuantity), 0)}</span></li>
          </NavLink>
          <span className=' text-2xl cursor-pointer' onClick={() => setNavMenu(!navMenu)}>{navMenu ? <ImCross /> : <FaBarsStaggered />}</span>
          {navMenu &&
            <nav className={`absolute w-[200px] right-0 top-[72px] h-[600px] z-10 bg-[#fe6724]  transition-all duration-300 ${navMenu ? 'right-[0]' : 'right-[200%]'}`}>
              <ul className='flex flex-col text-white space-x-4 items-center  font-semibold'>
                <NavLink to={"/"}>
                  <li className='border-b-2 w-[200px] text-center mb-[10px]'>Home</li>
                </NavLink>
                <NavLink to={"/shop"}>
                  <li className='border-b-2 w-[200px] text-center mb-[10px]'>Shop</li>
                </NavLink>
              </ul>
            </nav>}
        </div>
      </div>

    </header>
  );
};

export default Navbar;