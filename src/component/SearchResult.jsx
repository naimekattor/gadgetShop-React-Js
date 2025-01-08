import { Link } from 'react-router-dom';

const SearchResult = ({ filterProducts }) => {
  console.log(filterProducts.id);

  return (
    <div className='gap-y-2 p-2 grid '>
      {
        filterProducts.map((item) => <div key={item.id} className='flex gap-x-4'>
          <img src={item.mainImage} alt="" className='w-[60px] h-[50px]' />
          <div className='text-[16px] font-semibold '>
            <Link to={`/product/${item.id}`}>
              <h2>{item.name}</h2>
            </Link>
            <h2>Tk {item.price}</h2>
          </div>
        </div>)
      }
    </div>
  );
};

export default SearchResult;