"use client";

import { useRef } from 'react';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";



export default function HorizontalShoes() {
  const wriper = useRef<HTMLDivElement>(null)

  return (
    <div className='relative'>
      <div ref={wriper} className=" flex gap-4 overflow-hidden snap-proximity snap-x">
        {/* adding a new component for single shoes */}
        <div className="snap-center overflow-hidden rounded-10 min-w-[300px] h-[150px] bg-slate-800"></div>
        <div className="snap-center overflow-hidden rounded-10 min-w-[300px] h-[150px] bg-slate-800"></div>
        <div className="snap-center overflow-hidden rounded-10 min-w-[300px] h-[150px] bg-slate-800"></div>
        <div className="snap-center overflow-hidden rounded-10 min-w-[300px] h-[150px] bg-slate-800"></div>
        <div className="snap-center overflow-hidden rounded-10 min-w-[300px] h-[150px] bg-slate-800"></div>
        <div className="snap-center overflow-hidden rounded-10 min-w-[300px] h-[150px] bg-slate-800"></div>
      </div>
      <button onClick={() => { wriper.current?.scrollBy({ left: 200, behavior: "smooth" }) }} className="absolute  top-1/2 -translate-y-1/2 right-0 translate-x-1/2 size-16 rounded-full bg-black/20 border border-[#aaa] border-solid flex justify-center items-center">
        <FaAngleRight className='text-white opacity-70 size-2/3' />
      </button>
      <button onClick={() => { wriper.current?.scrollBy({ left: -200, behavior: "smooth" }) }} className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 size-16 rounded-full bg-black/20 border border-[#aaa] border-solid flex justify-center items-center">
        <FaAngleLeft className='text-white opacity-70 size-2/3' />
      </button>
    </div>
  )
}
