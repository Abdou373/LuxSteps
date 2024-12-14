import Link from "next/link";
import Image from "next/image";
import { ShoesCardType } from "@/utils/type";
import shoes2 from "@/images/products/Shoe2.png";
import { CiStar } from "react-icons/ci";
import { FaRegStar, FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";





export default function ShoesCard({ id, img, price, name, rating, newPrice, reviews }: ShoesCardType) {
  const integerPart = Math.floor(rating)

  const rest = rating - integerPart;

  // console.log(newPrice)/

  return (
    <div className="relative bg-[#fff] rounded-10 overflow-hidden hover:bg-[#eee] duration-200">
      <Link href={`/shoes/${id}`} className="">
        <Image className="w-full" width={300} height={200} src={shoes2} alt="" />
      </Link>
      <div className="px-4 py-2">
        <div className="flex justify-between">
          <p className="text-lg font-medium text-[#333]">{name}</p>
          <div>
            {newPrice ? (
              <>
                <h3 className="font-semibold text-xl">{newPrice}.00 $</h3>
                <h3 className="font-semibold text-xl line-through">{price}.00 $</h3>
              </>
            ) : (
              <h3 className="font-semibold text-xl">{price}.00 $</h3>
            )}
          </div>
        </div>
        <div className="flex items-center">
          {reviews > 4 && (
            <>
              {[...Array(integerPart)].map((n, i) =>
                <FaStar key={i} color="#df7606" />
              )}
              {rest !== 0 && (
                <FaStarHalfAlt color="#df7606" className="w-fit" />
              )}
              {[...Array(5 - Math.ceil(rating))].map((n, i) =>
                <FaRegStar key={i} color="#df7606" />
              )}
              <p className="mx-2 text-sm"><span className="mx-1 font-medium">{reviews}</span>reviews</p>
            </>
          )}
        </div>
        <div className="flex justify-center mt-5">
          <button className="px-5 py-1 bg-secondary text-[#eee] font-semibold rounded-10 bg-opacity-80 hover:bg-opacity-100 duration-200 flex items-center gap-3">
            Add to Cart
            <TiShoppingCart className="size-5 text-[#d0d0d0]" />
          </button>
        </div>
      </div>
    </div>
  )
}