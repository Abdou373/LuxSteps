"use client";

import { ShoesType } from "@/utils/type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";



interface Props {
  shoe: ShoesType
}

export default function ShoesRow({ shoe }: Props) {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const details = useRef<HTMLDivElement>(null)
  const row = useRef<HTMLDivElement>(null)

  function Open() {
    setTimeout(() => {
      const models = document.querySelectorAll(".details");
      models.forEach((m) => {
        m.classList.replace("flex", "hidden");
      })
      details.current?.classList.replace("hidden", "flex");
      row.current?.classList.add("shadow-[0_0_20px_0_black]");
      row.current?.classList.add("bg-gray-300");

      setOpen(true)
    }, 350)
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
      <div
        ref={row}
        onDoubleClick={() => router.push(`/shoes/${shoe.id}`)}
        onClick={() => Open()}
        className="relative flex justify-between items-center bg-gray-200 pr-4 rounded-3xl hover:bg-gray-300 max-sm:pr-1 select-none duration-200">
        <Image
          src={shoe.imgs[0]}
          alt=""
          width={100}
          height={100}
          className="max-md:w-20 max-md:h-20 max-sm:w-16 max-sm:h-16 rounded-[24px_0_0_24px]"
        />
        <h2 className="text-lg font-medium max-sm:text-base">{shoe.name}</h2>
        <h3 className="text-xl text-[--main-color] max-sm:text-base">{shoe.price} <span className="text-sm">DA</span></h3>
        <p className="max-md:hidden">2023-10-03 12:23 PM</p>
        <div ref={details} className="absolute flex-col items-center left-[10%] top-[calc(100%+10px)] py-2 w-1/3 max-sm:w-1/2 z-20 bg-[--main-color] rounded-3xl after:bg-[--main-color] details hidden">
          <div className="flex items-center gap-5 py-2 cursor-pointer font-semibold text-lg text-[#ddd]">See into Store</div>
          <div className="flex items-center gap-5 py-2 cursor-pointer font-semibold text-lg text-sky-500">Edit<BiSolidEditAlt /></div>
          <div className="flex items-center gap-3 py-2 cursor-pointer font-semibold text-lg text-red-500">Delete<MdDelete /></div>
        </div>
      </div>
      {open && <div onClick={() => Close()} className="absolute w-full h-full top-0 left-0 z-10"></div>}
    </>
  )
}