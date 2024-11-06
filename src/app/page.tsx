import SecondHeader from "@/components/Home/SecondHeader";
import ShoesCard from "@/components/ShoesCard";
import Slider from "@/components/Home/Slider";
import { shoes } from "@/utils/date";
import PhoneShoes from "@/components/Home/PhoneShoes";

export default function Home() {
  return (
    <div className="relative">
      <SecondHeader />
      <Slider />
      <main>
        <div className="bg-[--second-color] px-10 py-5 grid grid-cols-4 gap-4 pb-10 2xl:grid-cols-5 max-md:grid-cols-3 max-md:px-5  max-[425px]:hidden">
          {shoes.map((s, i) =>
            <ShoesCard key={i} id={s.id} name={s.name} price={s.price} img={s.imgs[0]} />
          )}
        </div>
        <PhoneShoes shoes={shoes} />
      </main>
    </div>
  );
}
