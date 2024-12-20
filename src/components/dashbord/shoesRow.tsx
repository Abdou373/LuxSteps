"use client";

import { ShoesType } from "@/utils/type";
import Image from "next/image";
import { useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import shoeimg from "@/images/products/Shoe1.jpg"
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";



export default function ShoesRow({ shoe }: { shoe: ShoesType }) {

  const [open, setOpen] = useState(false)
  const model = useRef<HTMLDivElement>(null)
  const row = useRef<HTMLDivElement>(null)

  function Open() {

    model.current?.classList.replace("hidden", "flex");
    row.current?.classList.add("shadow-[0_0_20px_0_black]");
    row.current?.classList.add("bg-gray-300");
    setOpen(true);
  }


  function Close() {
    model.current?.classList.replace("flex", "hidden");
    row.current?.classList.remove("shadow-[0_0_20px_0_black]");
    row.current?.classList.remove("bg-gray-300");
    setOpen(false);
  }
  return (
    <>
      <div
        ref={row} onClick={() => Open()} className="relative cursor-pointer flex justify-between rounded-10 hover:bg-gray-300 duration-100">
        <Image
          src={shoeimg}
          alt=""
          width={120}
          height={80}
          className="rounded-10"
        />
        <div className="flex-grow flex items-center justify-around">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold">{shoe.name}</h2>
            <div className="flex text-[#df7606]">
              {[...Array(Math.floor(shoe.rating))].map((n, i) =>
                <FaStar key={i} />
              )}
              {Math.floor(shoe.rating) !== shoe.rating && (
                <FaStarHalfAlt />
              )}
              {[...Array(5 - Math.ceil(shoe.rating))].map((n, i) =>
                <FaRegStar key={i} />
              )}
            </div>
          </div>
          <div className="text-xl font-semibold text-[#333]">
            <h2 className={`${shoe.newPrice ? "line-through text-[#A0A0A0]" : ""}`}>$ {shoe.price}</h2>
            {shoe.newPrice && <h2>$ {shoe.newPrice}</h2>}
          </div>
          <h2 className="text-lg font-semibold">{shoe.category}</h2>
          <div className="flex gap-3">
            <button className="px-5 py-1 bg-[#5B87A6] rounded-10 text-[#eee]">Edit</button>
            <button className="px-5 py-1 bg-[#8C5050] rounded-10 text-[#eee]">Delete</button>
          </div>
        </div>

        <div ref={model} className="row-navigation hidden">
          <div className="status_btn text-[#ddd]">See into Store</div>
          <div className="status_btn text-sky-500">Edit<BiSolidEditAlt /></div>
          <div className="status_btn text-red-500">Delete<MdDelete /></div>
        </div>
      </div>
      {open && <div onClick={() => Close()} className="absolute w-full h-full top-0 left-0 z-10"></div>}
    </>
  )
}