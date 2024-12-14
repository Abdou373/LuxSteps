import SecondHeader from "@/components/Home/SecondHeader";
import ShoesCard from "@/components/ShoesCard";
import Slider from "@/components/Home/Slider";
import { shoes } from "@/utils/date";
import PhoneShoes from "@/components/Home/PhoneShoes";
import HorizontalShoes from "@/components/Home/HorizontalShoes";
import Link from "next/link";
import shoes1 from "@/images/products/Shoe1.jpg";
import Image from "next/image";


export default function Home() {
  return (
    <div className="relative">
      <SecondHeader />
      <Slider />
      <main className="bg-[#d0d0d0] px-10 pt-5 pb-10 max-sm:px-5 ">
        <h2 className="section-heading">New Shoes</h2>
        <HorizontalShoes />
        <h2 className="section-heading">Sold Shoes</h2>
        <HorizontalShoes />
        <h1 className="section-heading">More</h1>
        <div className="grid-container">
          {shoes.map((s, i) =>

            <ShoesCard key={i} newPrice={s.newPrice} id={s.id} name={s.name} price={s.price} rating={s.rating} reviews={s.reviews} img={s.imgs[0]} />

            // <div className="overflow-hidden bg-[#fff] rounded-10 hover:bg-[#eee] duration-200">
            //   <Link href={``}>
            //     <Image className="w-full" width={300} height={200} src={shoes1} alt="" />
            //   </Link>
            //   <div className="px-4 py-2">
            //     <div className="flex justify-between">
            //       <p className="text-lg font-medium text-[#333]">{s.name}</p>
            //       <h3 className="font-semibold text-xl">{s.price}.00 $</h3>
            //     </div>
            //     <div className="text-center mt-5">
            //       <button className="px-5 py-1 bg-secondary text-[#eee] font-semibold rounded-10">Add to Cart</button>
            //     </div>
            //   </div>
            // </div>


          )}
        </div>
      </main>
    </div>
  );
}
