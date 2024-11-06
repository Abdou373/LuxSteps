import OrdersRow from "@/components/dashbord/OrdersRow";
import { orders } from "@/utils/date";



export default function Orders() {
    return (
        <div className="relative py-5 px-[2%] max-sm:px-[5px] text-center">
            <h1 className="text-center text-[--second-color] text-2xl font-bold">Orders</h1>
            <div className="flex flex-col gap-4 my-5 ">
                {orders.map((o, i) =>
                    <OrdersRow key={i} order={o} />
                )}
            </div>
        </div>
    )
}