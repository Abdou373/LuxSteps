import Link from "next/link";



export default function Dashbord() {
  return (
    <div className="relative py-5 px-[2%] max-sm:px-5">
      <h1 className="dashboard-section">Overview</h1>
      <div className="flex gap-10 px-5">
        <div className="flex items-center gap-4">
          <div className="p-4 shadow-[0_0_10px_0_#999] rounded-10">
            <p className="font-medium">Total orders / month</p>
            <h3 className="text-9xl text-[#aaa] font-bold text-center">143<span className="text-xl mx-2">orders</span></h3>
            <p className="text-center text-[12px] font-medium text-green-600 my-4">+{10}% this month</p>
          </div>
          <div className="flex flex-col gap-2 h-full">
            <div className="p-2 shadow-[0_0_10px_0_#999] rounded-10 h-1/2">
              <p className="text-sm">Completed orders / month</p>
              <h3 className="text-4xl text-[#aaa] font-bold text-center">92<span className="text-sm mx-2">orders</span></h3>
              <p className="text-center text-[12px] font-medium text-red-600">-{3}% this month</p>
            </div>
            <div className="p-2 shadow-[0_0_10px_0_#999] rounded-10 h-1/2">
              <p className=" text-sm">Pending orders / month</p>
              <h3 className="text-4xl text-[#aaa] font-bold text-center">51<span className="text-sm mx-2">orders</span></h3>
              <p className="text-center text-[12px] font-medium text-green-600">+{13}% this month</p>
            </div>
          </div>
        </div>
        <div className="flex-grow p-4 shadow-[0_0_10px_0_#999] rounded-10">
          <p className="font-medium">Total Shoes in Store</p>
          <h3 className="text-9xl text-secondary font-bold text-center">367<span className="text-xl mx-2">shoes</span></h3>
          <div className="text-center my-4">
            <Link href={"/dashboard/shoes"} className="bg-primary text-[#eee] px-5 py-2 rounded-10">Views All Shoes</Link>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mx-3 my-5">Orders during current week</h2>
        <div>
          <div className="grid grid-cols-7 items-end gap-4 max-h-[70vh]">
            <div className="flex flex-col gap-[2px] items-center flex-grow py-2">
              {[...Array(3)].map((n, i) => (
                <div key={i} className="bg-blue-950 w-full h-3 rounded-10"></div>
              ))}
            </div>
            <div className="flex flex-col gap-[2px] items-center flex-grow py-2">
              {[...Array(20)].map((n, i) => (
                <div key={i} className="bg-blue-950 w-full h-3 rounded-10"></div>
              ))}
            </div>
            <div className="flex flex-col gap-[2px] items-center flex-grow py-2">
              {[...Array(20)].map((n, i) => (
                <div key={i} className="bg-blue-950 w-full h-3 rounded-10"></div>
              ))}
            </div>
            <div className="flex flex-col gap-[2px] items-center flex-grow py-2">
              {[...Array(3)].map((n, i) => (
                <div key={i} className="bg-blue-950 w-full h-3 rounded-10"></div>
              ))}
            </div>
            <div className="flex flex-col gap-[2px] items-center flex-grow py-2">
              {[...Array(5)].map((n, i) => (
                <div key={i} className="bg-blue-950 w-full h-3 rounded-10"></div>
              ))}
            </div>
            <div className="flex flex-col gap-[2px] items-center flex-grow py-2">
              {[...Array(3)].map((n, i) => (
                <div key={i} className="bg-blue-950 w-full h-3 rounded-10"></div>
              ))}
            </div>
            <div className="flex flex-col gap-[2px] items-center flex-grow py-2">
              {[...Array(3)].map((n, i) => (
                <div key={i} className="bg-blue-950 w-full h-3 rounded-10"></div>
              ))}
            </div>
          </div>
          <div className="flex w-full">
            <h3 className="flex-grow text-center py-3 border-black border-t border-solid">Sanday</h3>
            <h3 className="flex-grow text-center py-3 border-black border-t border-solid">Monday</h3>
            <h3 className="flex-grow text-center py-3 border-black border-t border-solid">Tusday</h3>
            <h3 className="flex-grow text-center py-3 border-black border-t border-solid">Wednesday</h3>
            <h3 className="flex-grow text-center py-3 border-black border-t border-solid">Thursday</h3>
            <h3 className="flex-grow text-center py-3 border-black border-t border-solid">Friday</h3>
            <h3 className="flex-grow text-center py-3 border-black border-t border-solid">Saturday</h3>
          </div>
        </div>
      </div>

      {/* Complete Styles */}
      <h2 className="text-2xl font-semibold mx-3 my-5">Customers & Visitors</h2>
      <div className="flex gap-4">
        <div className="p-4 shadow-[0_0_10px_0_#999] rounded-10">
          <p className="font-medium text-2xl">Total Visitors</p>
          <h3 className="text-9xl text-[#aaa] font-bold text-center">1203<span className="text-xl mx-2">visitors</span></h3>
        </div>
        <div className="p-4 shadow-[0_0_10px_0_#999] rounded-10">
          <p className="font-medium text-2xl">Total Customers</p>
          <h3 className="text-9xl text-[#aaa] font-bold text-center">432<span className="text-xl mx-2">Customers</span></h3>
        </div>
        <div className="gap-2 flex-grow flex flex-col">
          <div className="p-2 shadow-[0_0_10px_0_#999] rounded-10">
            <p className="text-lg font-medium">new visitors this month</p>
            <h3 className="text-5xl font-semibold text-[#aaa] text-center">310<span className="text-sm mx-2">visitors</span></h3>
            <p className="text-sm text-green-900 text-center">+{32}% This week</p>
          </div>
          <div className="p-2 shadow-[0_0_10px_0_#999] rounded-10">
            <p className="text-lg font-medium">New customer this month</p>
            <h3 className="text-5xl font-semibold text-[#aaa] text-center">154<span className="text-sm mx-2">customers</span></h3>
            <p className="text-sm text-green-900 text-center">+{21}% This month</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mx-3 my-5">Most reviewed customers</h2>
      <div>
        {/* {[...Array(5)].map((n,i) => ( */}
        {/* <div> */}
        {/* avatar */}
        {/* Name */}
        {/* email */}
        {/* Total reviews */}
        {/* </div> */}
        {/* ))} */}
      </div>
    </div>
  )
}