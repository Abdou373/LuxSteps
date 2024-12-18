import ShoesRow from "@/components/dashbord/shoesRow";
import { shoes } from "@/utils/date";
import { FaSearch } from "react-icons/fa";



export default function AllShoes() {
    return (
        <div className="relative py-5 px-[2%] max-sm:px-5">
            <h1 className="dashboard-section">Shoes</h1>
            <div className="flex gap-4 px-5">
                {/* search form */}
                <form className="relative w-1/2">
                    <input
                        type="text"
                        className="bg-gray-200 w-full text-lg font-medium px-3 py-2 rounded-10 border border-secondary border-solid outline-none"
                        placeholder="Search orders by customer, shoe..."
                    />
                    <button className="absolute text-center bg-secondary rounded-r-10 -translate-x-full h-full px-5 ">
                        <FaSearch className="size-5 text-[#ddd]" />
                    </button>
                </form>

                <div className="flex gap-10 items-center">
                    <h3 className="text-xl">Filter by :</h3>
                    <button className="font-medium">Category</button>
                    <button className="font-medium">Price</button>
                    <button className="font-medium">Added Time</button>
                    <button className="font-medium">Rating</button>
                </div>
            </div>
            <div className="flex flex-col gap-2 my-5">
                {shoes.map((s, i) =>
                    <ShoesRow key={i} shoe={s} />
                )}
            </div>
        </div>
    )
}