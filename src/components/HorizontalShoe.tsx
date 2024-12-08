import Link from 'next/link'
import Image from 'next/image'
import shoe from "@/images/products/Shoe2.png";
import { TiShoppingCart } from 'react-icons/ti';

export default function HorizontalShoe({ name, price }: { price: number, name: string }) {

  return (
    <div className='snap-center overflow-hidden min-w-[20%] relative horizontal_shoe rounded-10'>

      <Image className="w-full" width={300} height={200} src={shoe} alt='' />

      <Link href={"#"} className='opacity-0 duration-200 absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-black/30 px-4 py-2'>
        <h3 className='text-xl font-medium text-[#333]'>{name}</h3>
        <h3 className='my-5 text-center text-2xl font-bold text-[#eee]'>{price} $</h3>
      </Link>

      <button className='flex gap-2 items-center text-nowrap opacity-0 duration-500 absolute bg-secondary text-white rounded-10 px-[8%] py-1 left-1/2 -translate-x-1/2 bottom-2 z-20' onClick={() => console.log("add")}>
        Add to Cart
        <TiShoppingCart className="size-6 text-[#d0d0d0]" />
      </button>
    </div>
  )
}
