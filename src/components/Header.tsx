import Image from "next/image";
import Link from "next/link";
import logo from "@/images/Logo.png";



export default function Header() {
  return (
    <div className="flex justify-between items-center bg-[--main-color] py-2 px-8 shadow-lg shadow-gray-500 sticky z-50 max-md:px-4">
      <div className="">
        <Link href={"/"}>
          <Image width={165} height={200} src={logo} alt="" />
        </Link>
      </div>
      <div className="flex gap-3 mr-10">
        <Link className="text-white rounded-lg [border:2px_solid_white] font-medium px-4 py-1 text-sm max-md:hidden" href={"/login"}>Log In</Link>
        <Link className="bg-white text-[--main-color] rounded-lg font-medium px-4 py-1 text-sm max-sm:hidden" href={"/signup"}>Sign up</Link>
      </div>
    </div>
  )
}