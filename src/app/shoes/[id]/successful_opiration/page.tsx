import SuccessSign from "@/components/SuccessSign"
import Link from "next/link"




export default function SuccessfulOpiration() {
  return (
    <div className="h-[calc(100vh-76px)] px-10">
      <h1 className="text-center text-[--main-color] my-10 max-sm:my-5 text-3xl font-semibold animate-pulse">The order has been placed</h1>
      <SuccessSign />
      <p className="text-[#333] text-lg text-center font-medium my-5">You will receive a call in the next few hours to confirm your order.</p>

      <div className="text-center mt-20">
        <Link className="px-8 py-3 bg-[--second-color] font-semibold text-[#ddd] rounded-lg hover:bg-[--main-color] hover:text-white duration-200" href={"/"}>Back to Shoping</Link>
      </div>
    </div>
  )
}