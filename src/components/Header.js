import React from 'react'
import Image from 'next/image'
import {  AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenu,BiSearch } from "react-icons/bi";
function Header() {
  return (
       <header>
            <div className='flex items-center h-16 bg-amazon_blue p-1 flex-grow py-2'>
                 <div className=''>
                 <Image
                      src='https://links.papareact.com/f90'
                      alt='logo'
                      width={150}
                      height={40}
                      objectFit="contain"
                      className='cursor-pointer'
                 />
                 </div>
                 <div className='bg-yellow-400 hover:bg-yellow-500 hidden rounded-md flex-grow sm:flex cursor-pointer items-center h-10'>
                           <input className='p-2 h-full w-6 flex-grow rounded-l-md focus:outline-none px-4' type="text" />
                      <BiSearch className="h-12 p-3 w-14 " />
                 </div>
                 <div className=' text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                      <div className=' link'>
                           <p className=' font-extrabold md:text-sm '>Hello Dinesh</p>
                           <p>Account & list</p>
                    </div>
                      <div className=' link'>
                           <p className=' font-extrabold md:text-sm '>Returns</p>
                           <p>& Orders</p>
                    </div>
                      <div className=' link relative flex items-center '>
                           <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full font-bold hover:border-yellow-500 text-yellow-800'>2</span>
                           <AiOutlineShoppingCart className=' h-10 w-10 ' />
                           <p className=' font-extrabold md:text-sm hidden md:inline mt-2'>Basket</p>
                    </div>
                 </div>
            </div>
            <div className='flex items-center bg-amazon_blue-light space-x-3 p-2 pl-6 text-white text-sm'>
                 <p className='link flex items-center'>
                       <BiMenu className="h-6 mr-1 " />
                      All
                 </p>
                 <p className='link'>Prime Video</p>
                 <p className='link' >Amazon Business</p>
                 <p className='link'>Today's Deals</p>
                 <p className='link hidden lg:inline-flex'>Electronics</p>
                 <p className='link hidden lg:inline-flex'>Food & Grocery</p>
                 <p className='link hidden lg:inline-flex'>Prime</p>
                 <p className='link hidden lg:inline-flex'>Buy Again</p>
                 <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
                 <p className='link hidden lg:inline-flex'>Health & Personal Care</p> 
            </div>
       </header>
  )
}

export default Header