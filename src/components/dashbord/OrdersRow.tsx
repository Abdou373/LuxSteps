"use client";

import { OrderType } from "@/utils/type"
import { useRef, useState } from "react";
import { CgRemove } from "react-icons/cg";
import Image from "next/image";
import shoe1 from '@/images/products/Shoe1.jpg';
import shoe2 from '@/images/products/Shoe2.png';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";




export default function OrdersRow({ order }: { order: OrderType }) {
  const [open, setOpen] = useState(false)
  const model = useRef<HTMLDivElement>(null);
  const row = useRef<HTMLDivElement>(null)

  function Open() {
    model.current?.classList.replace("hidden", "flex");
    row.current?.classList.add("shadow-[0_0_20px_0_#333]");
    row.current?.classList.add("bg-gray-300");
    setOpen(true)
  }


  function Close() {
    model.current?.classList.replace("flex", "hidden")
    row.current?.classList.remove("shadow-[0_0_20px_0_#333]");
    row.current?.classList.remove("bg-gray-300");
    setOpen(false)
  }

  // for githup
  return (
    <>
      <div ref={row} onClick={() => Open()} className="relative cursor-pointer flex justify-between items-center bg-[#eee] rounded-10 hover:bg-gray-300 duration-100">
        <Image className="rounded-10" src={shoe2} width={150} height={100} alt="" />
        <div className="flex-grow flex justify-around items-center text-center">
          <div className="w-1/4 flex flex-col justify-center gap-2">
            <h2 className="text-xl font-medium">{order.shoe.name}</h2>
            <h2 className="text-sm">size :<span className="mx-2 font-medium">{order.size}</span></h2>
          </div>
          <div className="w-1/4 flex flex-col justify-center">
            <h3 className="text-xl font-medium text-[#555]">{order.client}</h3>
            <p className="text-[#333] font-light">{order.phone}</p>
          </div>
          <h2 className="w-1/4 text-xl font-medium">{order.price}.00 $</h2>
          <h2 className="w-1/4 text-xl font-bold uppercase text-primary">{order.state}</h2>
        </div>

        <div ref={model} className="row-navigation hidden">
          <div className="status_btn text-[#ddd] " >Details</div>
          <div className="status_btn text-[#eee] ">Confarmed</div>
          <div className="status_btn text-green-400 ">Completed <IoMdCheckmarkCircleOutline /></div>
          <div className="status_btn text-red-400 ">Cenceled <CgRemove /></div>
        </div>

      </div>
      {open && <div onClick={() => Close()} className="absolute w-full h-full top-0 left-0 z-10"></div>}
    </>
  )
}