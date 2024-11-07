import SelectSize from "@/components/ShoePage/SelectSize";
import ShoeImgs from "@/components/ShoePage/ShoeImgs";
import { shoes } from "@/utils/date"


// interface Props {
//     params: {
//         id: string,
//     }
// }


export default async function Shoe({ params }: { params: Promise<{ id: string }> }) {

    const id = (await params).id;

    const targetShoe = shoes.filter((s) => {
        if (s.id === parseInt(id)) {
            return s;
        }
    })
    return (
        <div className="flex px-10 py-4 h-[calc(100vh-76px)] max-lg:flex-col max-lg:h-auto max-sm:px-[5%]">
            <ShoeImgs imgs={targetShoe[0].imgs} />
            <div className="w-[40%] max-lg:w-full px-5 py-4">
                <h3 className="text-2xl text-gray-700 my-2 ">{targetShoe[0].name}</h3>
                <h2 className="font-semibold text-2xl mb-3 ml-3">{targetShoe[0].price} <span className="text-sm">DA</span></h2>
                <p className="text-wrap">{targetShoe[0].description}</p>
                <SelectSize id={targetShoe[0].id} sizes={targetShoe[0].sizes} />
            </div>
        </div>
    )
}