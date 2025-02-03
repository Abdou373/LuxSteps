"use client";

import { CATEGORIES } from "@/utils/contants";

export default function CategoriesDropDown() {
  return (
    <div className="grid grid-cols-3 mt-3 w-full min-h-10 bg-white shadow-[0_0_10px_0_#aaa] rounded-10">
      {CATEGORIES.map((c, i) => (
        <button onClick={(e) => console.log(e.currentTarget.innerHTML)} key={i} className="py-2 px-4 text-[#aaa] font-medium hover:text-black hover:font-semibold duration-100">{c}</button>
      ))}
    </div>
  )
}
