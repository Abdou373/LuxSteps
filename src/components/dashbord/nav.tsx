"use client";

import Link from "next/link";
import { AiFillProduct } from "react-icons/ai";
import { ImBoxAdd } from "react-icons/im";
import { BsClipboard2PulseFill } from "react-icons/bs";
import { FaUsersCog } from "react-icons/fa";
import { useRef, useState } from "react";
import { DOMAIN } from "@/utils/contants";
import { FaList } from "react-icons/fa";



export default function Nav() {
  const [open, setOpen] = useState(false)
  const orders = useRef<HTMLAnchorElement>(null)
  const allShoes = useRef<HTMLAnchorElement>(null)
  const addShoe = useRef<HTMLAnchorElement>(null)
  const users = useRef<HTMLAnchorElement>(null)


  function ChangePath(e: string) {
    console.log(e)
    switch (e) {
      case `${DOMAIN}/dashbord/all_shoes`:
        allShoes.current?.classList.add("dashbord-path");
        addShoe.current?.classList.remove("dashbord-path");
        orders.current?.classList.remove("dashbord-path");
        users.current?.classList.remove("dashbord-path");
        break;
      case `${DOMAIN}/dashbord/orders`:
        allShoes.current?.classList.remove("dashbord-path");
        orders.current?.classList.add("dashbord-path");
        addShoe.current?.classList.remove("dashbord-path");
        users.current?.classList.remove("dashbord-path");
        break;
      case `${DOMAIN}/dashbord/add_shoe`:
        allShoes.current?.classList.remove("dashbord-path");
        orders.current?.classList.remove("dashbord-path");
        addShoe.current?.classList.add("dashbord-path");
        users.current?.classList.remove("dashbord-path");
        break;
      case `${DOMAIN}/dashbord/users`:
        allShoes.current?.classList.remove("dashbord-path");
        orders.current?.classList.remove("dashbord-path");
        addShoe.current?.classList.remove("dashbord-path");
        users.current?.classList.add("dashbord-path");
        break;
    }
  }


  return (
    <div className="bg-[--second-color] h-screen py-5 sticky sm:top-0 max-sm:fixed max-sm:bottom-0 max-sm:w-full max-sm:h-fit max-sm:z-50 max-sm:py-1">
      <div className=" px-5 w-full mb-5 duration-150 max-sm:hidden">
        {open ? <FaList onClick={() => setOpen(false)} className="h-8 w-8 text-white cursor-pointer max-sm:h-7 max-sm:w-7 " /> : <FaList onClick={() => setOpen(true)} className="h-8 w-8 text-white cursor-pointer max-sm:h-7 max-sm:w-7" />}
      </div>
      <ul className="py-4 flex flex-col max-sm:flex-row max-sm:justify-between max-sm:py-0 dashbord-nav">
        <Link
          ref={allShoes}
          onClick={(e) => ChangePath(e.currentTarget.href)}
          href={"/dashbord/all_shoes"}
          className="relative flex items-center max-sm:p-2 max-sm:gap-2 gap-5 px-5 py-4 text-xl max-md:text-lg font-medium text-[#bbb] hover:text-white duration-100 max-sm:text-base max-sm:mx-2 text-nowrap max-sm:flex-col dashbord-path">
          {<AiFillProduct className="w-8 h-8 max-sm:w-5 max-sm:h-5" />}<span className={`${open ? "flex" : "hidden"} max-sm:block max-sm:text-sm`}>All Shoes</span>
        </Link>
        <Link
          ref={addShoe}
          onClick={(e) => ChangePath(e.currentTarget.href)}
          href={"/dashbord/add_shoe"}
          className="relative flex items-center max-sm:p-2 max-sm:gap-2 gap-5 px-5 py-4 text-xl max-md:text-lg font-medium text-[#bbb] hover:text-white duration-100 max-sm:text-base max-sm:mx-2 text-nowrap max-sm:flex-col">
          <ImBoxAdd className="w-8 h-8 max-sm:w-5 max-sm:h-5" /><span className={`${open ? "flex" : "hidden"} max-sm:block max-sm:text-sm`}>Add Shoe</span>
        </Link>
        <Link
          ref={orders}
          onClick={(e) => ChangePath(e.currentTarget.href)}
          href={"/dashbord/orders"}
          className="relative flex items-center max-sm:p-2 max-sm:gap-2 gap-5 px-5 py-4 text-xl max-md:text-lg font-medium text-[#bbb] hover:text-white duration-100 max-sm:text-base max-sm:mx-2 text-nowrap max-sm:flex-col">
          <BsClipboard2PulseFill className="w-8 h-8 max-sm:w-5 max-sm:h-5" /><span className={`${open ? "flex" : "hidden"} max-sm:block max-sm:text-sm`}>Orders</span>
        </Link>
        <Link
          ref={users}
          onClick={(e) => ChangePath(e.currentTarget.href)}
          href={"/dashbord/users"}
          className="relative flex items-center max-sm:p-2 max-sm:gap-2 gap-5 px-5 py-4 text-xl max-md:text-lg font-medium text-[#bbb] hover:text-white duration-100 max-sm:text-base max-sm:mx-2 text-nowrap max-sm:flex-col">
          <FaUsersCog className="w-8 h-8 max-sm:w-5 max-sm:h-5" /><span className={`${open ? "flex" : "hidden"} max-sm:block max-sm:text-sm`}>Users</span>
        </Link>
      </ul>
    </div>
  )
}