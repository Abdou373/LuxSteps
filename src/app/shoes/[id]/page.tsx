import PhoneShoes from "@/components/Home/PhoneShoes";
import SelectSize from "@/components/ShoePage/SelectSize";
import ShoeImgs from "@/components/ShoePage/ShoeImgs";
import ShoesCard from "@/components/ShoesCard";
import { shoes } from "@/utils/date";
import { ShoesType } from "@/utils/type";


export default async function Shoe({ params }: { params: Promise<{ id: string }> }) {

    const id = (await params).id;

    const targetShoe = shoes.filter((s) => {
        if (s.id === parseInt(id)) {
            return s;
        }
    })

    const moreShoes: ShoesType[] = shoes.filter((s) => {
        if (s !== targetShoe[0]) {
            return s.category === targetShoe[0].category;
        }
    })
    return (
        <div className="px-10 max-sm:px-[5%] pb-10">
            <div className="flex py-4 h-[calc(100vh-76px)] max-lg:flex-col max-lg:h-auto">
                <ShoeImgs imgs={targetShoe[0].imgs} />
                <div className="w-[40%] max-lg:w-full px-5 py-4">
                    <div className="flex justify-between px-5 my-3">
                        <h3 className="text-2xl text-gray-700  ">{targetShoe[0].name}</h3>
                        <h2 className="font-semibold text-2xl ">{targetShoe[0].price} <span className="text-sm">DA</span></h2>
                    </div>
                    <p className="text-wrap">{targetShoe[0].description}</p>
                    <SelectSize id={targetShoe[0].id} sizes={targetShoe[0].sizes} />
                </div>
            </div>
            <h1 className="text-3xl font-semibold m-4 text-[--main-color]">More of You like</h1>
            <div className="max-sm:hidden grid grid-cols-5 max-xl:grid-cols-4 max-md:grid-cols-3 gap-4">
                {moreShoes.map((s, i) =>
                    <ShoesCard key={i} id={s.id} name={s.name} price={s.price} img={s.imgs[0]} />
                )}
            </div>
            <PhoneShoes shoes={moreShoes} />
        </div>
    )
}