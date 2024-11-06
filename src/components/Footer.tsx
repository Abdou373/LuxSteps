import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "@/images/Logo.png";









export default function Footer() {
  return (
    <div className="px-10 py-5 bg-gradient-to-t from-[--main-color] to-[--second-color]">
      <div className="flex justify-between pb-4 max-[425px]:flex-col max-[425px]:items-center max-[425px]:gap-4">
        <div >
          <Image src={logo} width={200} height={120} alt="" />
        </div>
        <div className="flex justify-between w-2/3 max-sm:flex-col-reverse max-sm:items-center max-sm:gap-4">
          <div>
            <h3 className="font-semibold text-2xl text-[#bbb] ">Contact</h3>
            <p className="flex items-center gap-2 my-2 font-light text-md text-[#aaa]"><HiOutlineMail /> pasdelux@gmail.com</p>
            <p className="flex items-center gap-2 my-2 font-light text-md text-[#aaa]"><FaPhoneAlt /> +213540415848</p>
          </div>
          <div className="text-center ">
            <h3 className="font-semibold text-2xl text-[#bbb] mb-4">Follow</h3>
            <div className="flex gap-4 text-[#aaa]">
              <Link href={""}><FaFacebookF className="w-10 h-10" /></Link>
              <Link href={""}><FaInstagram className="w-10 h-10" /></Link>
              <Link href={""}><FaTiktok className="w-10 h-10" /></Link>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-[#555] text-sm border-t-2 border-solid border-[--main-color] pt-4">{`Copyright © 2024  Created by AbdElAziz Mesbahi (abdoumes3539@gmail.com)`}</p>
    </div>
  )
}