import Link from "next/link";
import Image from "next/image";
import { ShoesCardType } from "@/utils/type";
import shoes2 from "@/images/products/Shoe2.png"




export default function ShoesCard({ id, img, price, name }: ShoesCardType) {
  return (
    <div className="bg-[#fff] rounded-10 hover:bg-[#eee] duration-200">
      <Link href={``} className="">
        <Image className="w-full" width={300} height={200} src={shoes2} alt="" />
      </Link>
      <div className="px-4 py-2">
        <div className="flex justify-between">
          <p className="text-lg font-medium text-[#333]">{name}</p>
          <h3 className="font-semibold text-xl">{price}.00 $</h3>
        </div>
        <div className="text-center mt-5">
          <button className="px-5 py-1 bg-secondary text-[#eee] font-semibold rounded-10">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}