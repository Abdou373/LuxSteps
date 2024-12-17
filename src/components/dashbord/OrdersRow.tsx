"use client";

import { OrderType } from "@/utils/type"
import { useRef, useState } from "react";
import { CgDetailsMore } from "react-icons/cg";
import { MdVerifiedUser } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";




export default function OrdersRow({ order }: { order: OrderType }) {
  const [open, setOpen] = useState(false)
  const details = useRef<HTMLDivElement>(null)
  const row = useRef<HTMLDivElement>(null)

  function Open() {
    const models = document.querySelectorAll(".details");
    models.forEach((m) => {
      m.classList.replace("flex", "hidden");
    })
    details.current?.classList.replace("hidden", "flex");
    row.current?.classList.add("shadow-[0_0_20px_0_black]");
    row.current?.classList.add("bg-gray-300");

    setOpen(true)
  }


  function Close() {
    const models = document.querySelectorAll(".details");
    models.forEach((m) => {
      m.classList.replace("flex", "hidden")
    })
    row.current?.classList.remove("shadow-[0_0_20px_0_black]");
    row.current?.classList.remove("bg-gray-300");
    setOpen(false)
  }


  return (
    <>
      <div ref={row} onClick={() => Open()} className="relative cursor-pointer flex justify-between items-center bg-gray-200 p-3 rounded-2xl hover:bg-gray-300 duration-200 max-sm:p-2">
        <h3 className="font-semibold text-lg w-[30%] text-[#333] max-sm:text-base">{order.client}</h3>
        <p className="text-sm w-[15%] max-md:hidden">{order.phone}</p>
        <h2 className="font-semibold text-xl w-[20%] text-[--second-color] max-sm:text-base">{order.state}</h2>
        <h3 className="text-lg w-[20%] max-sm:hidden">{order.shoe.name}</h3>
        <button className="text-sm w-[15%] max-sm:text-xs max-sm:w-auto">2024-11-04 10:21 AM</button>
        <div ref={details} className="absolute flex-col items-center left-[10%] top-[calc(100%+10px)] py-2 w-1/3 max-sm:w-1/2 z-20 bg-[--main-color] rounded-3xl after:bg-[--main-color] details hidden">
          <div className="flex items-center gap-5 py-2 cursor-pointer font-semibold text-lg text-[#ddd]" >Details <CgDetailsMore /></div>
          <div className="flex items-center gap-5 py-2 cursor-pointer font-semibold text-lg text-sky-500">Confarmed <MdVerifiedUser /></div>
          <div className="flex items-center gap-5 py-2 cursor-pointer font-semibold text-lg text-green-400">Delivered <TbTruckDelivery /></div>
        </div>
      </div>
      {open && <div onClick={() => Close()} className="absolute w-full h-full top-0 left-0 z-10"></div>}
    </>
  )
}