import Link from 'next/link'
import Image from 'next/image';
import { CATEGORIES } from '@/utils/contants'
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
            <Image height={100} src={img} alt={''} />
            <div className="px-4 py-2">
              <em className="text-3xl text-[#333]">{category}</em>
            </div>
          </div>
        </Link>
      ))} */}
      <div>
        <div className="grid grid-cols-3 gap-4 px-4 py-4">
          <Link href={`/shoes?category=${CATEGORIES[0].split(' ').join('')}`} >
            <div className="category-card">
              <Image height={150} width={0} src={Sneakers} alt={''} />
              <div className="px-4 py-2">
                <em className="text-3xl text-[#333]">{CATEGORIES[0]}</em>
              </div>
            </div>
          </Link>
          <Link href={`/shoes?category=${CATEGORIES[1].split(' ').join('')}`} >
            <div className="category-card">
              <Image height={150} src={casualShoes} alt={''} />
              <div className="px-4 py-2">
                <em className="text-3xl text-[#333]">{CATEGORIES[1]}</em>
              </div>
            </div>
          </Link>
          <Link href={`/shoes?category=${CATEGORIES[2].split(' ').join('')}`} >
            <div className="category-card">
              <Image height={120} src={menBoots} alt={''} />
              <div className="px-4 py-2">
                <em className="text-3xl text-[#333]">{CATEGORIES[2]}</em>
              </div>
            </div>
          </Link>
          <Link href={`/shoes?category=${CATEGORIES[3].split(' ').join('')}`} >
            <div className="category-card">
              <Image height={150} src={footballShoes} alt={''} />
              <div className="px-4 py-2">
                <em className="text-3xl text-[#333]">{CATEGORIES[3]}</em>
              </div>
            </div>
          </Link>
          <Link href={`/shoes?category=${CATEGORIES[4].split(' ').join('')}`} >
            <div className="category-card">
              <Image height={150} src={Safety} alt={''} />
              <div className="px-4 py-2">
                <em className="text-3xl text-[#333]">{CATEGORIES[4]}</em>
              </div>
            </div>
          </Link>
          <Link href={`/shoes?category=${CATEGORIES[5].split(' ').join('')}`} >
            <div className="category-card">
              <Image height={150} src={snowBoots} alt={''} />
              <div className="px-4 py-2">
                <em className="text-3xl text-[#333]">{CATEGORIES[5]}</em>
              </div>
            </div>
          </Link>
          <Link href={`/shoes?category=${CATEGORIES[6].split(' ').join('')}`} >
            <div className="category-card">
              <Image height={150} src={ankleBoots} alt={''} />
              <div className="px-4 py-2">
                <em className="text-3xl text-[#333]">{CATEGORIES[6]}</em>
              </div>
            </div>
          </Link>
          <Link href={`/shoes?category=${CATEGORIES[7].split(' ').join('')}`} >
            <div className="category-card">
              <Image height={150} src={canvas} alt={''} />
              <div className="px-4 py-2">
                <em className="text-3xl text-[#333]">{CATEGORIES[7]}</em>
              </div>
            </div>
          </Link>
          <Link href={`/shoes?category=${CATEGORIES[8].split(' ').join('')}`} >
            <div className="category-card">
              <Image height={150} src={highSandals} alt={''} />
              <div className="px-4 py-2">
                <em className="text-3xl text-[#333]">{CATEGORIES[8]}</em>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
