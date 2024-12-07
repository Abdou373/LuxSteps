import SecondHeader from "@/components/Home/SecondHeader";
import ShoesCard from "@/components/ShoesCard";
import Slider from "@/components/Home/Slider";
import { shoes } from "@/utils/date";
import PhoneShoes from "@/components/Home/PhoneShoes";
import HorizontalShoes from "@/components/Home/HorizontalShoes";

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
        <h1 className="section-heading">More Shoes</h1>
        <div className="grid grid-cols-4 gap-4 2xl:grid-cols-5 max-md:grid-cols-3 max-md:px-5 max-[425px]:hidden">
          {shoes.map((s, i) =>
            <ShoesCard key={i} id={s.id} name={s.name} price={s.price} img={s.imgs[0]} />
          )}
        </div>
        <PhoneShoes shoes={shoes} />
      </main>
    </div>
  );
}
