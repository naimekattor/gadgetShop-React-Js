import gadgetItems from '../gadgetData';
import ProductsItem from './ProductsItem';

const FeaturedProducts = () => {
  return (
    <div className='container mx-auto p-4'>
      <div>
        <h1 className=' text-center text-2xl font-bold tracking-wide'>Feactured Products</h1>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 '>
        {
          // Featured products will be displayed here 
          gadgetItems.map((items) => <ProductsItem key={items.id} productItems={items} />)
        }
      </div>
    </div>
  );
};

export default FeaturedProducts;