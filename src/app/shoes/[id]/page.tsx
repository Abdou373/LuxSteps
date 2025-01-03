import PhoneShoes from "@/components/Home/PhoneShoes";
import SelectSize from "@/components/ShoePage/SelectSize";
import ShoeImgs from "@/components/ShoePage/ShoeImgs";
import ShoesCard from "@/components/ShoesCard";
import { shoes } from "@/utils/date";
import { ShoesType } from "@/utils/type";
import Image from "next/image";
import shoe1 from "@/images/products/Shoe1.jpg"
import shoe2 from "@/images/products/Shoe2.png"
import { TiShoppingCart } from "react-icons/ti";
import Link from "next/link";
import PlaceOrderModel from "@/components/ShoePage/PlaceOrderModel";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";


export default async function Shoe({ params, searchParams }: { searchParams: Promise<{ size: string }>, params: Promise<{ id: string }> }) {

    const { id } = await params;
    const { size } = await searchParams;

    // const targetShoe = shoes.filter((s) => {
    //     if (s.id === parseInt(id)) {
    //         return s;
    //     }
    // })

    // const moreShoes: ShoesType[] = shoes.filter((s) => {
    //     if (s !== targetShoe[0]) {
    //         return s.category === targetShoe[0].category;
    //     }
    // })

    const shoe = shoes.at(parseInt(id) - 1)
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]


    return (
        <div className="relative flex gap-5 px-10 py-5">
            <div className="flex flex-col gap-2 w-[10%] overflow-auto h-[50vh] my-2">
                {numbers.map((i) =>
                    <div key={i}>
                        <Image className="rounded-10" key={i} src={shoe1} alt="" />
                    </div>
                )}
            </div>
            <div className="w-[62%]">
                <Image className="w-full rounded-10" src={shoe1} alt="" />
            </div>
            <div className="w-[28%] py-2">
                <div className="px-3 flex justify-between">
                    <div>
                        <h1 className="text-xl font-semibold text-[#333] flex items-center">
                            {shoe?.name}
                            {shoe?.newPrice && (
                                <span className="mx-2 text-red-400 text-sm">-{Math.floor(100 - (((shoe?.newPrice || 0) * 100) / (shoe?.price || 0)))}%</span>
                            )}
                        </h1>
                        <div className="flex my-3">
                            {[...Array(Math.floor(shoe?.rating || 0))].map((n, i) =>
                                <FaStar key={i} color="#df7606" />
                            )}
                            {(shoe?.rating || 0) - Math.floor(shoe?.rating || 0) != 0 && (
                                <FaStarHalfAlt color="#df7606" />
                            )}
                            {[...Array(5 - Math.ceil(shoe?.rating || 0))].map((n, i) =>
                                <FaRegStar key={i} color="#df7606" />
                            )}
                            <p className="text-sm mx-2"><span className="font-medium mx-1">{shoe?.reviews}</span>reviews</p>
                        </div>
                    </div>
                    <div>
                        {shoe?.newPrice ? (
                            <>
                                <h1 className="text-xl font-bold">{shoe?.newPrice}.00 $</h1>
                                <h1 className="text-lg text-[#555] font-bold line-through">{shoe?.price}.00 $</h1>
                            </>
                        ) : (
                            <h1 className="text-xl font-bold">{shoe?.price}.00 $</h1>
                        )}
                    </div>
                </div>
                <p className="text-sm text-slate-600 my-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore eum laudantium placeat! Eligendi, temporibus ullam? Laudantium, soluta in dicta veniam enim nemo sint molestiae reprehenderit voluptatem, alias culpa inventore quas.</p>
                <div>
                    <h3 className="text-lg font-medium mx-4 my-2">Sizes :</h3>
                    <div className="flex gap-2 overflow-auto">
                        {shoe?.sizes.map((size, i) =>
                            <button key={i} className="bg-[#CDD7E2] rounded-10 border border-[#aaa] border-solid px-4 py-2">{size}</button>
                        )}
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-2 mt-20">
                    <Link href={"?size=40"} className="text-center w-2/3 bg-primary font-semibold text-lg rounded-10 text-[#eee] py-2">Buy now</Link>
                    <button className="w-2/3 bg-secondary font-semibold text-lg rounded-10 text-[#eee] py-2 flex items-center justify-center gap-2">
                        Add to Cart
                        <TiShoppingCart className="size-6 text-[#eee]" />
                    </button>
                </div>
            </div>
            {size && (
                <PlaceOrderModel id={id} name="Nike Airmax 90" price={400} size={size} />
            )}
        </div>
    )
}



{/* <div className="max-sm:hidden grid grid-cols-5 max-xl:grid-cols-4 max-md:grid-cols-3 gap-4">
        {moreShoes.map((s, i) =>
            <ShoesCard key={i} id={s.id} name={s.name} price={s.price} img={s.imgs[0]} />
        )}
    </div> */}
{/* <PhoneShoes shoes={moreShoes} /> */ }