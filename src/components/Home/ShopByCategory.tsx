import Link from 'next/link'
import Image from 'next/image';
import { CATEGORIES } from '@/utils/contants'
import img from '../../images/shoes-categories/shoe.png';

export default function ShopByCategory() {

  return (
    <div>
      {/* upload imgs in clud danary for using here */}
      {CATEGORIES.map((category, i) => (
        <Link key={i} href={`/category/${category.split(' ').join('')}`}>
          <div className="bg-[#fff] rounded-10 overflow-hidden hover:bg-[#eee] duration-200 cursor-pointer">
            <Image width={100} src={img} alt={''} />
            <div className="px-4 py-2">
              <p className="text-lg font-medium text-[#333]">{category}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
