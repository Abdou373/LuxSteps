"use client";

import Link from "next/link"
import { HiChevronDown } from "react-icons/hi";
import { LuSearch } from "react-icons/lu";
import { FiMenu } from "react-icons/fi";
import { FormEvent, useState } from "react";




export default function SecondHeader() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [catigory1, setCatigory1] = useState(false)
  const [catigory2, setCatigory2] = useState(false)

  function Search(e: FormEvent) {
    e.preventDefault()

    console.log(search);
    setSearch("");
  }

  return (
    <>
      <div className="absolute top-0 left-0 w-full py-4 px-[2%] flex items-center z-10 max-md:justify-evenly">
        <div className="flex flex-nowrap max-md:hidden">
          <Link className="px-3 py-2 mx-2 font-medium text-[#ddd]" href={"#"}>Vente</Link>
          <Link className="px-3 py-2 mx-2 font-medium text-[#ddd]" href={"#"}>New</Link>
          <div onClick={() => setCatigory1(true)} className="relative px-3 py-2 mx-2 font-medium text-[#ddd] flex items-center cursor-pointer">
            Catigories <HiChevronDown className={catigory1 ? "rotate-180 duration-200" : "duration-200"} />
            {catigory1 && (
              <div className="absolute top-full left-1/2 text-[#333] text-nowrap z-30 bg-[#ddd] rounded-xl after:bg-[#ddd] after:h-7 after:w-7 details">
                <div className="pt-2 px-5 duration-150 rounded-t-xl hover:bg-gray-300">Men shoes</div>
                <div className="py-2 px-5 duration-150 hover:bg-gray-300">Women Shoes</div>
                <div className="pb-2 px-5 duration-150 rounded-b-xl hover:bg-gray-300">Kids</div>
              </div>
            )}
          </div>
          {catigory1 && <div onClick={() => setCatigory1(false)} className="absolute z-20 w-full h-screen left-0 top-0"></div>}
          <Link className="px-3 py-2 mx-2 font-medium text-[#ddd]" href={"/dashbord/all_shoes"}>Dashbord</Link>
        </div>

        <FiMenu onClick={() => setOpen(true)} className="md:hidden w-7 h-7 ml-[5%] mr-2 text-[#ddd] max-[425]: ml-" />

        <form onSubmit={(e) => Search(e)} className="flex-grow flex items-center justify-center gap-2">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="w-2/3 max-[425px]:w-full max-sm:px-3 max-sm:text-sm px-5 py-2 rounded-xl outline-none"
            type="text"
            placeholder="Search for your shoe..." />
          <button className="max-[425px]:hidden outline-none bg-[--main-color] p-2 rounded-full"><LuSearch className="w-6 h-6 text-[#ddd]" /></button>
        </form>
      </div>

      {/* Small Screen Navbar */}

      {open && (
        <>
          <div className="md:hidden z-30 flex flex-col w-1/2 bg-[--main-color] pt-[70px] side-bar fixed top-0 left-0">
            <Link className="pl-[20%] py-3 font-medium text-[#ddd] hover:text-white hover:bg-[--main-color]" href={"#"}>Vente</Link>
            <Link className="pl-[20%] py-3 font-medium text-[#ddd] hover:text-white hover:bg-[--main-color]" href={"#"}>New</Link>
            <div onClick={() => catigory2 ? setCatigory2(false) : setCatigory2(true)} className="pl-[20%] py-3 font-medium text-[#ddd] hover:text-white hover:bg-[--main-color] flex items-center">
              Catigories <HiChevronDown />
              {catigory2 && (
                <div className="absolute bg-[#ddd] left-[105%] text-center rounded-xl top-1/2 w-2/3 after:w-7 after:h-7 after:bg-[#ddd] after:left-0 after:top-[20%] details z-30">
                  <div className="text-[#333] rounded-t-xl hover:bg-gray-200 py-2">For Men</div>
                  <div className="text-[#333] hover:bg-gray-200 py-2">For Women</div>
                  <div className="text-[#333] rounded-b-xl hover:bg-gray-200 py-2">For Kids</div>
                </div>
              )}
            </div>
            <Link className="pl-[20%] py-3 font-medium text-[#ddd] hover:text-white hover:bg-[--main-color]" href={"/dashbord/all_shoes"}>Dashbord</Link>
            <Link className="py-2 font-medium text-[#333] bg-[#ffffffc4] hover:text-[--main-color] hover:bg-white text-center" href={"#"}>Log In</Link>
          </div>
          <div onClick={() => { setOpen(false); setCatigory2(false) }} className="md:hidden fixed w-full h-screen bg-black bg-opacity-20 z-20 top-0"></div>
        </>
      )}

      {/* Small Screen Navbar */}
    </>
  )
}