"use client";
import Image from 'next/image';
import shoe1 from "@/images/products/Shoe1.jpg"
import Link from 'next/link';

export default function PlaceOrderModel({ size, name, price, id }: { size: string, name: string, price: number, id: string }) {
  return (
    <div className='fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-white bg-opacity-[0.01] backdrop-blur-sm'>
      <div className='w-1/2 rounded-10 px-10 py-4 bg-white/75'>
        <h2 className='text-2xl font-semibold'>Your information :</h2>
        <form className='flex flex-col gap-5 w-full mt-8'>
          <div className='relative w-full'>
            <input
              id='name'
              type="text"
              className='place_order-input'
              required
            />
            <label className='place_order-label' htmlFor="name">Full Name</label>
          </div>

          <div className='relative w-full'>
            <input
              id='phone'
              type="tel"
              className='place_order-input'
              required
            />
            <label className='place_order-label' htmlFor="phone">Phone Number</label>
          </div>

          <div className='relative w-full'>
            <input
              id='city'
              type="text"
              className='place_order-input'
              required
            />
            <label className='place_order-label' htmlFor="city">The State</label>
          </div>

          <div className='relative w-full'>
            <input
              id='state'
              type="text"
              className='place_order-input'
              required
            />
            <label className='place_order-label' htmlFor="state">The City</label>
          </div>

          <div className='relative w-full'>
            <input
              id='address'
              type="text"
              className='place_order-input'
              required
            />
            <label className='place_order-label' htmlFor="address">The address</label>
          </div>
          <div className='flex px-5'>
            <Image className='rounded-10' src={shoe1} width={100} height={100} alt='' />
            <div className='mx-5 flex flex-col justify-around'>
              <h3 className='font-semibold text-[#333]'>{name}</h3>
              <h3 className='text-sm'>Size : <span className='text-lg font-medium text-[#333]'>{size}</span></h3>
            </div>
            <div className='flex-grow text-center'>
              <h3 className='text-sm'>Price with Livrision :</h3>
              <h2 className='my-2 font-bold'>{price}.00 $</h2>
            </div>
          </div>
          <div className='flex gap-3'>
            <Link href={`/shoes/${id}`} className='font-semibold py-1 w-1/3 bg-[#aaa] text-[#222] rounded-10 bg-opacity-80 hover:bg-opacity-100 duration-100 text-center' >Back</Link>
            <button className='font-semibold py-1 w-2/3 bg-primary text-[#eee] rounded-10 bg-opacity-80 hover:bg-opacity-100 duration-100' type='submit'>Place Order</button>
          </div>
        </form>
      </div>
    </div>
  )
}
