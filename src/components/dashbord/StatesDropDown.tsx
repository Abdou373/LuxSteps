"use client";

import { STATES } from '@/utils/contants'
import React from 'react'

export default function StatesDropDown() {
  return (
    <div className="grid grid-cols-10 mt-3 w-full min-h-10 bg-white shadow-[0_0_10px_0_#aaa] rounded-10">
      {STATES.map((state, i) => (
        <button onClick={(e) => console.log(e.currentTarget.innerHTML)} key={i} className="py-2 px-2 text-[#585858] text-sm hover:text-black hover:font-semibold duration-100">{state}</button>
      ))}
    </div>
  )
}
