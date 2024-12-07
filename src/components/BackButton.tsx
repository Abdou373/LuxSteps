"use client";

import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";


export default function BackButton() {
  const router = useRouter()
  return <button onClick={() => router.back()} className="h-16 w-16 rounded-full bg-[--second-color] p-4 text-[#eee]"><IoMdArrowRoundBack className="w-full h-full" /></button>
}



