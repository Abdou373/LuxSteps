import ShoesRow from "@/components/dashbord/shoesRow";
import { shoes } from "@/utils/date";



export default function AllShoes() {
    return (
        <div className="relative py-5 px-[2%] max-sm:px-[5px]">
            <h1 className="text-center text-[--second-color] text-2xl font-bold">All Shoes</h1>
            <div className="flex flex-col gap-4 my-5">
                {shoes.map((s, i) =>
                    <ShoesRow key={i} shoe={s} />
                )}
            </div>
        </div>
    )
}