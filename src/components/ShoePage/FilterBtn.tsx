"use client";

import { useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";

export default function FilterBtn() {
  const [open, setOpen] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  return (
    <div className="flex items-center gap-2 relative">
      <div onClick={() => { open ? setOpen(false) : setOpen(true) }} className='cursor-pointer'><FaFilter className="size-6 text-gray-500" /></div>
      {open && (
        <form className="flex gap-2">
          {/* <div className="relative">
            <input name="exp" type="number" className="bg-[#eee] px-4 py-2 w-full rounded-10" />
            <label className="absolute z-10 left-1/2 -translate-x-1/2 text-lg text-nowrap top-1/2 -translate-y-1/2" htmlFor="exp">Expensive Than</label>
          </div> */}
          {/* <div className="relative">
            <input name="cheaper" type="number" className="bg-[#eee] px-4 py-2 w-full rounded-10" />
            <label className="absolute z-10 left-1/2 -translate-x-1/2 text-lg text-nowrap top-1/2 -translate-y-1/2" htmlFor="cheaper">Cheaper than</label>
          </div> */}
          <div onClick={() => { input.current?.classList.remove("hidden"); input.current?.classList.add("input"); input.current?.focus() }} className="bg-white px-4  rounded-md shadow-md flex items-center gap-2 cursor-pointer">
            <label className="px-1 text-black">Expensive Than</label>
            <input className="text-black px-1 w-20 outline-none hidden" ref={input} type="number" max={5} required />
          </div>
          <div className="bg-[#eee] px-4 py-2 rounded-10">Rating</div>
        </form>
      )}
    </div>
  )
}
