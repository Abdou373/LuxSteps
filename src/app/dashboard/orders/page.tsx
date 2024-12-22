import OrdersRow from "@/components/dashbord/OrdersRow";
import SearchForm from "@/components/dashbord/SearchForm";
import StatesDropDown from "@/components/dashbord/StatesDropDown";
import { STATES } from "@/utils/contants";
import { orders } from "@/utils/date";
import { useState } from "react";
import { FaBoxes } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";



export default function Orders() {

  return (
    <div className="relative py-5 px-[2%] max-sm:px-5">
      <div className="flex items-center justify-between">
        <h1 className="dashboard-section">Orders</h1>
        <button className="px-5 py-2 bg-blue-950 rounded-10 mx-4 mb-4 text-[#eee] flex items-center gap-2">
          Confirmed Orders
          <FaBoxes />
        </button>
      </div>
      <div className="relative flex gap-4 px-5">

        <SearchForm placeholder={"Search Orders by client, city..."} />


        <div className="flex gap-5 items-center">
          <h3 className="text-xl">Filter by :</h3>
          <div className="px-3 py-1 bg-[#eee] rounded-10 flex items-center gap-1 border border-[#aaa] border-solid hover:bg-white duration-100 cursor-pointer states-btn">
            <span className="font-medium text-[#555]">State</span>
            <HiChevronDown className={`size-4 `} />
            <div className="absolute top-2/3 left-0 hidden z-20 w-full pt-3">
              <StatesDropDown />
            </div>
          </div>
          <button className="px-3 py-1 bg-[#eee] rounded-10 flex items-center gap-2 border border-[#aaa] border-solid hover:bg-white duration-100">
            <span className="font-medium text-[#555]">Add Time</span>
            <div>
              <svg className="size-2 fill-[#555]" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512.01 336.37"><path fillRule="nonzero" d="M469.51 336.37H42.47c-9.9-.03-19.84-3.47-27.89-10.47-17.68-15.4-19.55-42.24-4.15-59.92L229.45 14.56c1.51-1.7 3.17-3.33 4.98-4.82 18.06-14.93 44.83-12.41 59.76 5.65l206.65 249.76a42.308 42.308 0 0 1 11.17 28.71c0 23.47-19.03 42.51-42.5 42.51z" /></svg>
              <svg className="size-2 fill-[#555]" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 336.36"><path fillRule="nonzero" d="M42.47.01 469.5 0C492.96 0 512 19.04 512 42.5c0 11.07-4.23 21.15-11.17 28.72L294.18 320.97c-14.93 18.06-41.7 20.58-59.76 5.65-1.8-1.49-3.46-3.12-4.97-4.83L10.43 70.39C-4.97 52.71-3.1 25.86 14.58 10.47 22.63 3.46 32.57.02 42.47.01z" /></svg>
            </div>
          </button>
          <button className="px-3 py-1 bg-[#eee] rounded-10 flex items-center gap-2 border border-[#aaa] border-solid hover:bg-white duration-100">
            <span className="font-medium text-[#333]">Order Price</span>
            <div>
              <svg className="size-2 fill-[#555]" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512.01 336.37"><path fillRule="nonzero" d="M469.51 336.37H42.47c-9.9-.03-19.84-3.47-27.89-10.47-17.68-15.4-19.55-42.24-4.15-59.92L229.45 14.56c1.51-1.7 3.17-3.33 4.98-4.82 18.06-14.93 44.83-12.41 59.76 5.65l206.65 249.76a42.308 42.308 0 0 1 11.17 28.71c0 23.47-19.03 42.51-42.5 42.51z" /></svg>
              <svg className="size-2 fill-[#555]" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 336.36"><path fillRule="nonzero" d="M42.47.01 469.5 0C492.96 0 512 19.04 512 42.5c0 11.07-4.23 21.15-11.17 28.72L294.18 320.97c-14.93 18.06-41.7 20.58-59.76 5.65-1.8-1.49-3.46-3.12-4.97-4.83L10.43 70.39C-4.97 52.71-3.1 25.86 14.58 10.47 22.63 3.46 32.57.02 42.47.01z" /></svg>
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 my-5 ">
        {orders.map((o, i) =>
          <OrdersRow key={i} order={o} />
        )}
      </div>
    </div>
  )
}