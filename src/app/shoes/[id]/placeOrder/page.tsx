import PlaceOrderForm from "@/components/PlaceOrderForm";
import { shoes } from "@/utils/date";
import { ShoesType } from "@/utils/type";
import Image from "next/image";



export default async function PlaceOrder({ searchParams, params }: { params: Promise<{ id: string }>, searchParams: Promise<{ size: string }> }) {
    const { size } = await searchParams;
    const { id } = await params;

    const target: ShoesType[] = shoes.filter((s) => {
        if (s.id === parseInt(id)) {
            return s;
        }
    })


    return (
        <div className="relative flex px-5 py-5 justify-center min-h-[calc(100vh-76px)] max-sm:flex-col max-sm:gap-3 max">
            <div >
                <h1 className="font-semibold text-2xl text-[--main-color] mb-5 text-center">Shoe Information</h1>
                <div className="max-sm:flex justify-center">
                    <Image className="rounded-lg max-sm:w-1/2 h-auto" src={target[0].imgs[0]} alt="" width={200} height={200} />
                    <div className="p-2">
                        <h2 className="text-xl">{target[0].name}</h2>
                        <p className="text-sm px-2 font-semibold">Size - <span className="text-lg font-semibold">{size}</span> -</p>
                    </div>
                </div>
            </div>
            <PlaceOrderForm price={target[0].price} />
        </div>
    )
}