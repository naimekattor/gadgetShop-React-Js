import { MdAddIcCall } from "react-icons/md";
const Footer = () => {
  return (
    <div className='bg-[#081620] text-white'>
      <div className='container mx-auto py-8 px-[25px]'>
        <div className='flex md:flex-row flex-col md:items-start items-center justify-between p-4'>
          <div className='flex md:flex-col flex-row gap-4'>
            <h1 className=' font-semibold text-[18px] mb-2'>Supprort</h1>
            <div className='flex flex-row gap-4 items-center border p-4 md:rounded-full rounded-md '>
              <span className=' border-r-2 border-[#fe6724] px-2'><MdAddIcCall /></span>
              <div className='flex flex-col'>
                <span className="text-[14px]">9AM-8PM</span>
                <span className='text-[#fe6724] font-semibold'>1234</span>
              </div>
            </div>
            <div className='flex flex-row gap-4 items-center border p-4 md:rounded-full rounded-md'>
              <span className=' border-r-2 border-[#fe6724] px-2'><MdAddIcCall /></span>
              <div className='flex flex-col'>
                <span className="text-[14px]">9AM-8PM</span>
                <span className='text-[#fe6724] font-semibold'>1234</span>
              </div>
            </div>
          </div>
          <div>
            <h1 className=' font-semibold text-[18px] mb-2'>About Us</h1>
            <div className='grid grid-cols-3 gap-4'>
              <div className='flex flex-col text-[#838383] gap-4'>
                <span className=' cursor-pointer hover:text-[#fe6724]'>Affiliate Program</span>
                <span className=' cursor-pointer hover:text-[#fe6724]'>Online Delivery</span>
                <span className=' cursor-pointer hover:text-[#fe6724]'>Refund and Return Policy</span>
                <span className=' cursor-pointer hover:text-[#fe6724]'>Blog</span>
              </div>
              <div className='flex flex-col text-[#838383] gap-4'>
                <span className=' cursor-pointer hover:text-[#fe6724]'>Affiliate Program</span>
                <span className=' cursor-pointer hover:text-[#fe6724]'>Online Delivery</span>
                <span className=' cursor-pointer hover:text-[#fe6724]'>Refund and Return Policy</span>
                <span className=' cursor-pointer hover:text-[#fe6724]'>Blog</span>
              </div>
              <div className='flex flex-col text-[#838383] gap-4'>
                <span className=' cursor-pointer hover:text-[#fe6724]'>Affiliate Program</span>
                <span className=' cursor-pointer hover:text-[#fe6724]'>Online Delivery</span>
                <span className=' cursor-pointer hover:text-[#fe6724]'>Refund and Return Policy</span>
                <span className=' cursor-pointer hover:text-[#fe6724]'>Blog</span>
              </div>

              <div></div>
              <div></div>
            </div>
          </div>
          <div className='flex flex-col gap-4 '>
            <h1 className=' font-semibold text-[18px] mb-2'>Stay Connected</h1>
            <h2 className='text-[#fe6724]'>Gadget Shop</h2>
            <p className='text-[#838383]'>Head Office:  Kazi Nazrul Islam Ave,Navana Zohura Square, Dhaka 1000</p>
            <span>Email: <span className='text-[#fe6724]'>shop@gadget.com</span></span>
          </div>
        </div>
        <hr className=' h-[5px] w-full bg-[#fe6724]' />
        <p className='mt-4'>All Rights Reserved 2024</p>
      </div>

    </div>
  );
};

export default Footer;