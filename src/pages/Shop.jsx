import { useState } from 'react';
import ProductsItem from './../component/ProductsItem';
import gadgetItems from '../gadgetData';

const Shop = () => {
  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('none');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const filterProducts = gadgetItems.filter((item) => (
    category ? item.categories === category : true
  ) && item.price >= priceRange[0] && item.price <= priceRange[1])
    .sort((a, b) => {
      if (sortOrder === 'none') {
        return 0;
      }
      if (sortOrder === 'Price Low To High') {
        return a.price - b.price;
      }
      if (sortOrder === 'Price High To Low') {
        return b.price - a.price;
      }
    })
  console.log(category);
  console.log(filterProducts);


  return (
    <div className='container mx-auto'>
      <div className='flex md:flex-row flex-col gap-y-4 justify-between items-center'>
        <div>
          <select name="" id="" className='p-2 border-2 w-[200px]' value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value=''>All</option>
            <option value="Smartphones">Smartphones</option>
            <option value="Electronics">Electronics</option>
            <option value="Audio">Audio</option>
            <option value="Accessories">Accessories</option>
            <option value="Cameras">Cameras</option>
            <option value="Fitness">Fitness</option>
            <option value="Wearables">Wearables</option>
            <option value="Laptops">Laptops</option>
            <option value="Gaming">Gaming</option>
            <option value="Drones">Drones</option>
            <option value="Tablets">Tablets</option>
            <option value="Smart Home">Smart Home</option>
            <option value="Mobility">Mobility</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Projectors">Projectors</option>
            <option value="Storage">Storage</option>

          </select>
        </div>
        <div>
          <label htmlFor="">Price Range</label>
          <input type="range" min={0} max={10000} className='w-full' onChange={(e) => setPriceRange([0, e.target.value])} value={priceRange[1]} />
        </div>
        <div>
          <select name="" id="" className='p-2 border-2 w-[200px]' onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
            <option defaultValue={sortOrder}>none</option>
            <option value="Price Low To High">Price Low To High</option>
            <option value="Price High To Low">Price High To Low </option>
          </select>
        </div>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 '>
        {
          // Featured products will be displayed here 
          filterProducts.map((items) => <ProductsItem key={items.id} productItems={items} />)
        }
      </div>
    </div>
  );
};

export default Shop;