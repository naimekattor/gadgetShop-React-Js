import { useState } from 'react';
import gadgetItems from '../gadgetData';
import ProductsItem from './ProductsItem';
import QuickView from './QuickView';
import { ToastContainer, toast } from 'react-toastify';
const FeaturedProducts = () => {
  const [quickView, setQuickView] = useState(false);
  const [item, setItem] = useState(null);
  // quick view
  const handleQuickView = (itemId) => {
    setQuickView(!quickView);
    const item = gadgetItems.find((item) => item.id === itemId);
    setItem(item);
    console.log(`working modal ${item.id}`);
  }
  // Toast Notification for Add to Cart
  const notify = () => toast("Item added!");


  return (
    <div className='container mx-auto p-4'>
      <div>
        <h1 className=' text-center text-2xl font-bold tracking-wide'>Feactured Products</h1>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-4 '>
        {
          // Featured products will be displayed here 
          gadgetItems.map((items) => <ProductsItem key={items.id} productItems={items} handleQuickView={handleQuickView} notify={notify} />)
        }
        {
          quickView && <QuickView item={item} quickView={quickView} setQuickView={setQuickView} />
        }
      </div>
      <ToastContainer />
    </div>
  );
};

export default FeaturedProducts;