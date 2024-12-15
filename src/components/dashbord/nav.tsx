"use client";

import Link from "next/link";
import { AiFillProduct } from "react-icons/ai";
import { ImBoxAdd } from "react-icons/im";
import { BsClipboard2PulseFill } from "react-icons/bs";
import { FaHome, FaUsers, FaUsersCog, FaWarehouse } from "react-icons/fa";
import { useRef, useState } from "react";
import { DOMAIN } from "@/utils/contants";
import { FaList } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";



export default function Nav() {
  const [open, setOpen] = useState(true)
  const orders = useRef<HTMLAnchorElement>(null)
  const allShoes = useRef<HTMLAnchorElement>(null)
  const addShoe = useRef<HTMLAnchorElement>(null)
  const users = useRef<HTMLAnchorElement>(null)


  // function ChangePath(e: string) {
  //   console.log(e)
  //   switch (e) {
  //     case `${DOMAIN}/dashbord/all_shoes`:
  //       allShoes.current?.classList.add("dashbord-path");
  //       addShoe.current?.classList.remove("dashbord-path");
  //       orders.current?.classList.remove("dashbord-path");
  //       users.current?.classList.remove("dashbord-path");
  //       break;
  //     case `${DOMAIN}/dashbord/orders`:
  //       allShoes.current?.classList.remove("dashbord-path");
  //       orders.current?.classList.add("dashbord-path");
  //       addShoe.current?.classList.remove("dashbord-path");
  //       users.current?.classList.remove("dashbord-path");
  //       break;
  //     case `${DOMAIN}/dashbord/add_shoe`:
  //       allShoes.current?.classList.remove("dashbord-path");
  //       orders.current?.classList.remove("dashbord-path");
  //       addShoe.current?.classList.add("dashbord-path");
  //       users.current?.classList.remove("dashbord-path");
  //       break;
  //     case `${DOMAIN}/dashbord/users`:
  //       allShoes.current?.classList.remove("dashbord-path");
  //       orders.current?.classList.remove("dashbord-path");
  //       addShoe.current?.classList.remove("dashbord-path");
  //       users.current?.classList.add("dashbord-path");
  //       break;
  //   }
  // }


  return (
    <div className="bg-primary h-screen py-5 sticky sm:top-0 max-sm:fixed max-sm:bottom-0 max-sm:w-full max-sm:h-fit max-sm:z-50 max-sm:py-1">
      <div className=" px-5 w-full mb-5 duration-150 max-sm:hidden">
        <h2 className="font-bold text-3xl text-[#eee]">Dashboard</h2>
      </div>
      <ul className="py-4 flex flex-col max-sm:flex-row max-sm:justify-between max-sm:py-0 dashbord-nav">
        <Link
          ref={allShoes}
          // onClick={(e) => ChangePath(e.currentTarget.href)}
          href={"/dashbord"}
          className="relative flex items-center max-sm:p-2 max-sm:gap-2 gap-5 px-5 py-4 text-xl max-md:text-lg font-medium text-[#bbb] hover:text-white duration-100 max-sm:text-base max-sm:mx-2 text-nowrap max-sm:flex-col dashbord-path">
          <FaHouse className="size-6 max-sm:w-5 max-sm:h-5" /><span>Overview</span>
        </Link>
        <Link
          ref={addShoe}
          // onClick={(e) => ChangePath(e.currentTarget.href)}
          href={"/dashbord/orders"}
          className="relative flex items-center max-sm:p-2 max-sm:gap-2 gap-5 px-5 py-4 text-xl max-md:text-lg font-medium text-[#bbb] hover:text-white duration-100 max-sm:text-base max-sm:mx-2 text-nowrap max-sm:flex-col">
          <svg className="size-6 fill-[#aaa]" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.34 122.88"><title>only-use-the-trolley</title><path fillRule="evenodd" d="M53.85,94.05a14.42,14.42,0,1,1-14.41,14.42A14.43,14.43,0,0,1,53.85,94.05ZM3.92,9.83A5,5,0,1,1,6,.11L28.56,5,51.9,87.53a20.87,20.87,0,0,0-9.4,3.24L20.63,13.45,3.92,9.83Zm48.75,47L92,46.87a2.22,2.22,0,0,1,2.62,1.54l8.59,30A2,2,0,0,1,101.78,81L62.46,90.9a2.22,2.22,0,0,1-2.62-1.54l-8.6-30a2,2,0,0,1,1.43-2.55ZM41,16,80.23,6a2.24,2.24,0,0,1,2.63,1.54l8.88,30a2,2,0,0,1-1.4,2.55L51.11,50.06a2.24,2.24,0,0,1-2.63-1.54l-8.89-30A2,2,0,0,1,41,16ZM71.16,96.53l35-9.23a5,5,0,1,1,2.53,9.6l-33.92,9a20.93,20.93,0,0,0-3.56-9.33Zm-17.31,8.4a3.54,3.54,0,1,1-3.54,3.54,3.53,3.53,0,0,1,3.54-3.54Z" /></svg>
          <span> Orders</span>
        </Link>
        <Link
          ref={orders}
          // onClick={(e) => ChangePath(e.currentTarget.href)}
          href={"/dashbord/shoes"}
          className="relative flex items-center max-sm:p-2 max-sm:gap-2 gap-5 px-5 py-4 text-xl max-md:text-lg font-medium text-[#bbb] hover:text-white duration-100 max-sm:text-base max-sm:mx-2 text-nowrap max-sm:flex-col">
          <svg className="size-6 fill-[#aaa]" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100.31 122.88"><g><path fillRule="evenodd" clipRule={"evenodd"} d="M1.05,0h7.68c0.58,0,1.05,0.47,1.05,1.05v13.87h80.75V1.05C90.53,0.47,91,0,91.58,0h7.68 c0.58,0,1.05,0.47,1.05,1.05v120.77c0,0.58-0.47,1.05-1.05,1.05h-7.68c-0.58,0-1.05-0.47-1.05-1.05v-8.22H9.78v8.22 c0,0.58-0.47,1.05-1.05,1.05H1.05c-0.58,0-1.05-0.47-1.05-1.05V1.05C0,0.47,0.47,0,1.05,0L1.05,0z M35.19,88.61h-6.68 c-1.6,0-2.91,1.31-2.91,2.91l0,0c0,1.6,1.31,2.91,2.91,2.91h6.68c1.6,0,2.91-1.31,2.91-2.91l0,0 C38.1,89.92,36.79,88.61,35.19,88.61L35.19,88.61z M71.81,85.56h-6.68c-1.6,0-2.91,1.31-2.91,2.91l0,0c0,1.6,1.31,2.91,2.91,2.91 h6.68c1.6,0,2.91-1.31,2.91-2.91l0,0C74.72,86.87,73.41,85.56,71.81,85.56L71.81,85.56z M65.13,47.59h6.68 c1.6,0,2.91,1.31,2.91,2.91l0,0c0,1.6-1.31,2.91-2.91,2.91h-6.68c-1.6,0-2.91-1.31-2.91-2.91l0,0 C62.22,48.9,63.53,47.59,65.13,47.59L65.13,47.59z M28.51,44.53h6.68c1.6,0,2.91,1.31,2.91,2.91l0,0c0,1.6-1.31,2.91-2.91,2.91 h-6.68c-1.6,0-2.91-1.31-2.91-2.91l0,0C25.59,45.84,26.9,44.53,28.51,44.53L28.51,44.53z M90.53,103.82V73.8H9.78v30.02h6.08v-19.4 c0-0.93,0.36-1.79,0.95-2.45l0.13-0.15c0.67-0.67,1.58-1.08,2.6-1.08h24.62c1.01,0,1.93,0.41,2.6,1.08 c0.67,0.67,1.08,1.59,1.08,2.6v19.4h4.64V81.36c0-1.01,0.41-1.93,1.08-2.6c0.67-0.67,1.58-1.08,2.6-1.08h24.62 c1.01,0,1.93,0.41,2.6,1.08c0.67,0.67,1.08,1.59,1.08,2.6v22.46H90.53L90.53,103.82z M19.59,103.82h24.52V84.47H19.59V103.82 L19.59,103.82z M56.21,103.82h24.52V81.41H56.21V103.82L56.21,103.82z M90.53,64.02v-39.3H9.78v39.3h6.08V40.33 c0-1.01,0.41-1.93,1.08-2.59v-0.01c0.67-0.67,1.59-1.08,2.6-1.08h24.62c1.01,0,1.93,0.41,2.6,1.08c0.67,0.67,1.08,1.59,1.08,2.6 v23.69h4.64V43.39c0-1.01,0.41-1.93,1.08-2.6c0.67-0.67,1.59-1.08,2.6-1.08h24.62c1.01,0,1.93,0.41,2.6,1.08l0.13,0.15 c0.59,0.65,0.95,1.52,0.95,2.45v20.63H90.53L90.53,64.02z M19.59,64.02h24.52V40.38H19.59V64.02L19.59,64.02z M56.21,64.02h24.52 V43.44H56.21V64.02L56.21,64.02z" /></g></svg>
          <span>Shoes</span>
        </Link>
        <Link
          ref={users}
          // onClick={(e) => ChangePath(e.currentTarget.href)}
          href={"/dashbord/users"}
          className="relative flex items-center max-sm:p-2 max-sm:gap-2 gap-5 px-5 py-4 text-xl max-md:text-lg font-medium text-[#bbb] hover:text-white duration-100 max-sm:text-base max-sm:mx-2 text-nowrap max-sm:flex-col">
          <FaUsers className="size-6 max-sm:w-5 max-sm:h-5" /><span>Customers</span>
        </Link>
      </ul>
    </div>
  )
}