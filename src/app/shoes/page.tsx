import FilterBtn from "@/components/ShoePage/FilterBtn";
import ShoesCard from "@/components/ShoesCard";
import { shoes } from "@/utils/date";
import { ShoesType } from "@/utils/type";



export default async function Shoes({ searchParams }: { searchParams: Promise<{ category: string }> }) {
  const { category } = await searchParams;

  const target: ShoesType[] = shoes.filter((s) => {
    return s.category.split(" ").join("") === category;
  })

  return (
    <div className="bg-[#ddd] px-10 py-3">
      <div className="flex justify-between">
        <div className="flex gap-6">
          <h1 className="text-3xl font-semibold">{target.at(0)?.category}</h1>
          <FilterBtn />
        </div>
        {/* <div>
          <h3>Sort by :</h3>
        </div> */}
      </div>
      <div className="grid grid-cols-3 gap-4 p-4 max-md:grid-cols-3 max-sm:grid-cols-2">
        {target.map((s, i) =>
          <ShoesCard key={i} id={s.id} img={s.imgs[0]} price={s.price} name={s.name} rating={s.rating} reviews={s.reviews} />
        )}
      </div>
    </div>
  )
}