"use client";

import Link from "next/link"
import { HiChevronDown } from "react-icons/hi";
import { LuSearch } from "react-icons/lu";
import { FiMenu } from "react-icons/fi";
import { useRef, useState } from "react";
import SearchForm from "./SearchForm";
import { TiShoppingCart } from "react-icons/ti";
import { CATEGORIES } from "@/utils/contants";





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
          <Link className="nav-section" href={"/shoes/new"}>New</Link>
          <Link className="nav-section" href={"/shoes/sale"}>Sale</Link>
          <div onClick={() => setCatigory(true)} className="nav-section relative flex items-center cursor-pointer">
            Catigories <HiChevronDown className={`${catigory && "rotate-180"} duration-200 w-fit`} />
            {catigory && (
              <div className="categories">
                {CATEGORIES.map((category, i) => (
                  <Link key={i} href={`shoes?category=${category.split(" ").join("")}`} className="category">{category}</Link>
                ))}
              </div>
            )}
          </div>
          {catigory && <div onClick={() => setCatigory(false)} className="absolute z-20 w-full h-screen left-0 top-0"></div>}
          <Link className="nav-section" href={"/dashboard"}>Dashboard</Link>
        </div>

        {/* <FiMenu onClick={() => sidebarOpen()} className="md:hidden w-7 h-7 ml-[5%] mr-2 text-[#ddd] max-[425]: ml-" /> */}

        <SearchForm />
        <div>
          <TiShoppingCart className="size-10 text-[#d0d0d0]" />
        </div>
      </div>
      {/* ok */}
    </>
  )
}