import ShoesCard from "@/components/ShoesCard";
import { shoes } from "@/utils/date";
import { ShoesType } from "@/utils/type";



export default async function Shoes({ searchParams }: { searchParams: Promise<{ category: string }> }) {
  const { category } = await searchParams;

  const menShoes: ShoesType[] = shoes.filter((s) => {
    if (!category) {
      return s;
    }
    return s.category === category;
  })

  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-[--second-color] max-md:grid-cols-3 max-sm:grid-cols-2">
      {menShoes.map((m, i) =>
        <ShoesCard key={i} id={m.id} img={m.imgs[0]} price={m.price} name={m.name} />
      )}
    </div>
  )
}