"use client";

import Link from "next/link";
import { AiFillProduct } from "react-icons/ai";
import { FaBoxes, FaHome, FaStore, FaUsers } from "react-icons/fa";
import { useRef, useState } from "react";
import { DOMAIN } from "@/utils/contants";


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
    <div className="bg-gradient-to-r from-bgPrimary-from to-bgPrimary-to h-screen py-5 sticky sm:top-0 max-sm:fixed max-sm:bottom-0 max-sm:w-full max-sm:h-fit max-sm:z-50 max-sm:py-1">
      <div className=" px-5 w-full mb-5 duration-150 max-sm:hidden">
        <h2 className="font-bold text-2xl text-[#eee]">Dashboard</h2>
      </div>
      <ul className="py-4 flex flex-col">
        <Link
          ref={allShoes}
          // onClick={(e) => ChangePath(e.currentTarget.href)}
          href={"/dashboard"}
          className="dashboard_nav-link dashbord-path">
          <AiFillProduct className="size-6 max-sm:w-5 max-sm:h-5" />
          <span>Overview</span>
        </Link>
        <Link
          ref={addShoe}
          href={"/dashboard/orders"}
          className="dashboard_nav-link">
          <FaBoxes className="size-6" />
          <span>Orders</span>
        </Link>
        <Link
          ref={orders}
          // onClick={(e) => ChangePath(e.currentTarget.href)}
          href={"/dashboard/shoes"}
          className="dashboard_nav-link">
          <FaStore className="size-6" />
          <span>Shoes</span>
        </Link>
        <Link
          ref={users}
          // onClick={(e) => ChangePath(e.currentTarget.href)}
          href={"/dashboard/users"}
          className="dashboard_nav-link">
          <FaUsers className="size-6 max-sm:w-5 max-sm:h-5" /><span>Customers</span>
        </Link>
      </ul>
    </div>
  )
}