"use client";

import Link from "next/link"
import { HiChevronDown } from "react-icons/hi";
import { LuSearch } from "react-icons/lu";
import { FiMenu } from "react-icons/fi";
import { useRef, useState } from "react";
import SearchForm from "./SearchForm";
import { TiShoppingCart } from "react-icons/ti";





export default function SecondHeader() {
  const [open, setOpen] = useState(false);
  const [catigory, setCatigory] = useState(false)

  const sideBar = useRef<HTMLDivElement>(null)

  function sidebarOpen() {
    sideBar.current?.classList.replace("-translate-x-[101%]", "translate-x-0");
    setOpen(true)
  }
  function sidebarClose() {
    sideBar.current?.classList.replace("translate-x-0", "-translate-x-[101%]");
    setOpen(false)
  }

  return (
    <>
      <div className="sticky top-0 left-0 w-full py-2 px-[2%] flex items-center justify-between bg-[#001127] bg-opacity-50 backdrop-blur z-50 max-md:justify-evenly">
        <div className="flex gap-2 flex-nowrap max-md:hidden">
          <Link className="nav-section" href={"#"}>New</Link>
          <Link className="nav-section" href={"#"}>Sold</Link>
          <div onClick={() => setCatigory(true)} className="nav-section relative flex items-center cursor-pointer">
            Catigories <HiChevronDown className={`${catigory && "rotate-180"} duration-200 w-fit`} />
            {catigory && (
              <div className="categories">
                <Link href={`shoes?category=men`} className="category">{`Men's shoes`}</Link>
                <Link href={`shoes?category=women`} className="category">{`Women's Shoes`}</Link>
                <Link href={`shoes?category=kids`} className="category">Kids shoes</Link>
              </div>
            )}
          </div>
          {catigory && <div onClick={() => setCatigory(false)} className="absolute z-20 w-full h-screen left-0 top-0"></div>}
          <Link className="nav-section" href={"/dashbord/all_shoes"}>Dashboard</Link>
        </div>

        {/* <FiMenu onClick={() => sidebarOpen()} className="md:hidden w-7 h-7 ml-[5%] mr-2 text-[#ddd] max-[425]: ml-" /> */}

        <SearchForm />
        <div>
          <TiShoppingCart className="size-10 text-[#d0d0d0]" />
        </div>
      </div>

      {/* Small Screen Navbar */}

      {/* <div ref={sideBar} className="md:hidden z-30 flex flex-col w-1/2 bg-[--main-color] -translate-x-[101%] absolute top-0 left-0 duration-200">
        <Link className="pl-[20%] py-3 font-medium text-[#ddd] hover:text-white hover:bg-[#183350]" href={"#"}>Vente</Link>
        <Link className="pl-[20%] py-3 font-medium text-[#ddd] hover:text-white hover:bg-[#183350]" href={"#"}>New</Link>
        <div onClick={() => catigory2 ? setCatigory2(false) : setCatigory2(true)} className="pl-[20%] py-3 font-medium text-[#ddd] hover:text-white hover:bg-[#183350] flex items-center">
          Catigories <HiChevronDown />
          {catigory2 && (
            <div className="absolute bg-[#ddd] left-[105%] flex flex-col text-center rounded-xl top-1/2 w-2/3 after:w-7 after:h-7 after:bg-[#ddd] after:left-0 after:top-[20%] details z-30">
              <Link href={`shoes?category=men`} className="text-[#333] rounded-t-xl hover:bg-gray-200 py-2">{`Men's shoes`}</Link>
              <Link href={`shoes?category=women`} className="text-[#333] hover:bg-gray-200 py-2">{`Women's shoes`}</Link>
              <Link href={`shoes?category=kids`} className="text-[#333] rounded-b-xl hover:bg-gray-200 py-2">Kids shoes</Link>
            </div>
          )}
        </div>
        <Link className="pl-[20%] py-3 font-medium text-[#ddd] hover:text-white hover:bg-[#183350]" href={"/dashbord/all_shoes"}>Dashbord</Link>
        <Link className="py-2 font-medium text-[#333] bg-[#ffffffc4] hover:text-[#183350] hover:bg-white text-center" href={"#"}>Log In</Link>
      </div>
      {open && <div onClick={() => { sidebarClose(); setCatigory2(false) }} className="md:hidden fixed w-full h-screen bg-opacity-20 z-20 top-0"></div>} */}

      {/* Small Screen Navbar */}
    </>
  )
}