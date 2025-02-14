"use client";

import { useState } from "react";

export default function FilterBtn() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center gap-2 relative">
      <div onClick={() => { open ? setOpen(false) : setOpen(true) }} className='h-10 w-10 bg-black cursor-pointer'></div>
      {open && (
        <form className="flex gap-2">
          <input type="number" className="bg-[#eee] px-4 py-2 rounded-10" placeholder="Expensive than :" />
          <input type="number" className="bg-[#eee] px-4 py-2 rounded-10" placeholder="Cheaper than :" />
          <div className="bg-[#eee] px-4 py-2 rounded-10">Rating</div>
        </form>
      )}
    </div>
  )
}
