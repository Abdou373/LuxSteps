import Link from "next/link";
import Image from "next/image";
import { ShoesCardType } from "@/utils/type";




export default function ShoesCard({ id, img, price, name }: ShoesCardType) {
  return (
    <Link href={`/shoes/${id}`} className="relative bg-[#fff] rounded-lg hover:shadow-[0_0_20px_0_#333] hover:scale-105 hover:z-10 hover:bg-[#eee] duration-200">
      <div>
        <Image className="rounded-lg w-full" width={300} height={300} src={img} alt="" />
      </div>
      <div className="pt-2 pb-4 px-4">
        <h3 className="font-semibold text-xl pl-2">{price} <span className="text-sm">DA</span></h3>
        <p className="text-[#333]">{name}</p>
      </div>
    </Link>
  )
}