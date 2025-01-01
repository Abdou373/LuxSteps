import { CATEGORIES } from '@/utils/contants'
import Link from 'next/link'
import React from 'react'
import img from '../../images/categories/1.jpg'

export default function ShopByCategory() {
  // console.log(CATEGORIES[1])
  CATEGORIES.map((category) => {
    console.log(category.split(' ').join(''))
  })
  return (
    <div>
      {/* upload imgs in clud danary for using here */}
      {CATEGORIES.map((category, i) => (
        <Link key={i} href={`/category/${category.split(' ').join('')}`}>
          <div className="bg-[#fff] rounded-10 overflow-hidden hover:bg-[#eee] duration-200 cursor-pointer">
            <img src={`../../images/categories/${category.split(' ').join('')}.jpg`} alt="" className="w-full" />
            <div className="px-4 py-2">
              <p className="text-lg font-medium text-[#333]">{category}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
