import Link from 'next/link'
import Image from 'next/image';
import { CATEGORIES } from '@/utils/contants'
import img from '../../images/shoes-categories/shoe.png';
import Sneakers from "@/images/shoes-categories/shoe.png";
import casualShoes from "@/images/shoes-categories/Nike-Shoes.png";
import menBoots from "@/images/shoes-categories/Boots.png";
import highSandals from "@/images/shoes-categories/High-Heel-Sandal.png";
import footballShoes from "@/images/shoes-categories/Football-Boots.png";
import ankleBoots from "@/images/shoes-categories/Womens-Boots.png";
import canvas from "@/images/shoes-categories/canvas-shoes.png";
import Safety from "@/images/shoes-categories/safety-boots.png";
import snowBoots from "@/images/shoes-categories/snow-boots-shoes.png";

export default function ShopByCategory() {

  return (
    <div>
      {/* upload imgs in clud danary for using here */}
      {/* {CATEGORIES.map((category, i) => (
        <Link key={i} href={`/category/${category.split(' ').join('')}`}>
          <div className="category-card">
            <Image width={100} src={img} alt={''} />
            <div className="px-4 py-2">
              <p className="text-lg font-medium text-[#333]">{category}</p>
            </div>
          </div>
        </Link>
      ))} */}
      <h1>Shoes By Categories</h1>
      <div>
        <div className="grid grid-cols-3 gap-4">
          <Link href="/category/Sneakers">
            <div className="category-card">
              <Image width={100} src={Sneakers} alt={''} />
              <div className="px-4 py-2">
                <p className="text-lg font-medium text-[#333]">Sneakers</p>
              </div>
            </div>
          </Link>
          <Link href="/category/CasualShoes">
            <div className="category-card">
              <Image width={100} src={casualShoes} alt={''} />
              <div className="px-4 py-2">
                <p className="text-lg font-medium text-[#333]">Casual Shoes</p>
              </div>
            </div>
          </Link>
          <Link href="/category/Sneakers">
            <div className="category-card">
              <Image width={100} src={Sneakers} alt={''} />
              <div className="px-4 py-2">
                <p className="text-lg font-medium text-[#333]">Sneakers</p>
              </div>
            </div>
          </Link>
          <Link href="/category/CasualShoes">
            <div className="category-card">
              <Image width={100} src={casualShoes} alt={''} />
              <div className="px-4 py-2">
                <p className="text-lg font-medium text-[#333]">Casual Shoes</p>
              </div>
            </div>
          </Link>
          <Link href="/category/Sneakers">
            <div className="category-card">
              <Image width={100} src={Sneakers} alt={''} />
              <div className="px-4 py-2">
                <p className="text-lg font-medium text-[#333]">Sneakers</p>
              </div>
            </div>
          </Link>
          <Link href="/category/CasualShoes">
            <div className="category-card">
              <Image width={100} src={casualShoes} alt={''} />
              <div className="px-4 py-2">
                <p className="text-lg font-medium text-[#333]">Casual Shoes</p>
              </div>
            </div>
          </Link>
          <Link href="/category/Sneakers">
            <div className="category-card">
              <Image width={100} src={Sneakers} alt={''} />
              <div className="px-4 py-2">
                <p className="text-lg font-medium text-[#333]">Sneakers</p>
              </div>
            </div>
          </Link>
          <Link href="/category/CasualShoes">
            <div className="category-card">
              <Image width={100} src={casualShoes} alt={''} />
              <div className="px-4 py-2">
                <p className="text-lg font-medium text-[#333]">Casual Shoes</p>
              </div>
            </div>
          </Link>
          <Link href="/category/CasualShoes">
            <div className="category-card">
              <Image width={100} src={casualShoes} alt={''} />
              <div className="px-4 py-2">
                <p className="text-lg font-medium text-[#333]">Casual Shoes</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
