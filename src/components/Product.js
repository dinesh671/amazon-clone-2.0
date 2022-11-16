import React, { useState } from 'react'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';


const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const dispatch =useDispatch()
  const [rating] = useState(
    Math.floor(Math.random()*(MAX_RATING-MIN_RATING+1))+MIN_RATING
  );

  const [hasPrime] =useState(Math.random()<0.5)

  const addItemToBasket = () => {
    const product = {
      id, title, price, description, category, image,rating,hasPrime
    };
    dispatch(addToBasket(product))
  }
  return (
    <div className='relative flex flex-col m-5 bg-white p-10 z-30'>
      <p className=' absolute top-2 right-2 text-xs italic text-gray-500 '>{category}</p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className='my-3'>{title}</h4>
      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <AiFillStar className='h-5 text-yellow-500' />
          ))}
      </div>
      <p className='text-xs my-2 line-clamp-2' >{description}</p>
      
      <div className='mb-5'>
            <Currency quantity={price} currency='INR'/>
      </div>
      {hasPrime && (
        <div className='flex item-center space-x-2 -mt-5'>
          <img className='w-12' src="https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png" alt="" />
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}

      <button className='mt-auto button' onClick={addItemToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product