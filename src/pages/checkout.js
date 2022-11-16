import Image from 'next/image'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import Header from '../components/Header'
import { selectItems } from '../slices/basketSlice'
function Checkout() {
     const items = useSelector(selectItems)

  return (
       <div className='bg-gray-100'>
            <Header />
            
            <main className='lg:flex max-w-screen-2xl'>
                 <div className='flex-grow m-5 shadow-sm'>
                      <Image src="https://links.papareact.com/ikj" alt='checkout page banner' width={1020} height={250} objectFit={'contain'} />
                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                         <h1 className='text-3xl border-b pb-4 '>
                                {items.length === 0 ? 'Your Amazon Cart is empty': "Shopping Basket"}
                         </h1>
                           {items.map(({
                                   id,
                                   title,
                                   price,
                                   rating,
                                   description,
                                   category,
                                   image,
                                   hasPrime,
                                   }, i) => (
                                <CheckoutProduct
                                     key={i}
                                     id={id}
                                     title={title}
                                     rating={rating}
                                     price={price}
                                     description={description}
                                     category={category}
                                     image={image}
                                     hasPrime={hasPrime}
                                />
                         ))}
                    </div>
                 </div>
            </main>
    </div>
  )
}

export default Checkout