import Link from "next/link";
import Image from "next/image";
import { ShoesCardType } from "@/utils/type";




export default function ShoesCard({ id, img, price, name }: ShoesCardType) {
  return (
    <Link href={`/shoes/${id}`} className="bg-[#ccc] rounded-lg hover:shadow-[0_0_10px_0_white] hover:scale-105 hover:bg-[#eee] duration-200">
      <div>
        <Image className="rounded-lg w-full" width={300} height={300} src={img} alt="" />
      </div>
      <div className="pt-2 pb-4 px-4">
        <h3 className="font-semibold text-xl pl-2">{price} <span className="text-sm font-light">DA</span></h3>
        <p className="text-gray-500">{name}</p>
      </div>
    </Link>
  )
}