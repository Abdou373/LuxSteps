"use client";

import { STATES } from "@/utils/contants";
import { useState } from "react";
import { FaPhone, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface Props {
  price: number,
}

export default function PlaceOrderForm({ price }: Props) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")

  const [total, setTotal] = useState(0)
  const [submit, setSubmit] = useState(false)
  const router = useRouter()

  function selectState(state: string) {
    STATES.map((s) => {
      if (s.name === state) {
        setState(state)
        setTotal(price + s.price)
      }
    })
  }

  function Submit(e: React.FormEvent) {
    e.preventDefault()

    console.log(name);
    console.log(phone);
    console.log(city);
    console.log(state);
    setSubmit(true)
    setName("");
    setPhone("");
    setState("");
    setCity("");

    setTimeout(() => {
      router.replace("successful_opiration")
    }, 5000)
  }


  return (
    <form onSubmit={(e) => Submit(e)} className="w-2/3 px-10 max-sm:w-full max-sm:px-0">
      <h1 className="font-semibold text-2xl text-gray-600 mb-5 ml-5">Your Information</h1>
      <div className="relative w-full my-6 input-groupe">
        <input
          className="input px-4 py-2 rounded-lg w-full text-lg outline-none [border:1px_solid_var(--main-color)] focus:border-2 duration-[50ms] "
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          required />
        <label className="absolute left-4 px-1 top-1/2 -translate-y-1/2 text-[#aaa] pointer-events-none duration-100">Nom et Prenom / الاسم و اللقب</label>
        <FaUser className="absolute right-3 z-10 top-1/2 -translate-y-1/2 text-[#aaa]" />
      </div>
      <div className="relative w-full my-6 input-groupe">
        <input
          className="input px-4 py-2 rounded-lg w-full text-lg outline-none [border:1px_solid_var(--main-color)] focus:border-2 duration-[50ms]"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          maxLength={10}
          type="tel"
          required />
        <label className="absolute left-4 px-1 top-1/2 -translate-y-1/2 text-[#aaa] pointer-events-none duration-100">Numéro de Téléphone / رقم الهاتف</label>
        <FaPhone className="absolute right-3 z-10 top-1/2 -translate-y-1/2 text-[#aaa]" />
      </div>
      <div className="relative w-full my-6 input-groupe">
        <select
          className="input px-4 py-2 rounded-lg w-full text-lg outline-none [border:1px_solid_var(--main-color)] focus:border-2 duration-[50ms]"
          onChange={(e) => selectState(e.target.value)}
          value={state}
          required>
          <option className="text-base" value=""></option>
          {STATES.map((s) =>
            <option className="text-base" key={s.number} value={s.name}>{s.name}</option>
          )}
        </select>
        <label className="absolute left-4 px-1 top-1/2 -translate-y-1/2 text-[#aaa] pointer-events-none duration-100">Choisissez votre wilaya / الولاية</label>
      </div>
      <div className="relative w-full my-6 input-groupe">
        <input
          className="input px-4 py-2 rounded-lg w-full text-lg outline-none [border:1px_solid_var(--main-color)] focus:border-2 duration-[50ms]"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          type="text"
          required />
        <label className="absolute left-4 px-1 top-1/2 -translate-y-1/2 text-[#aaa] pointer-events-none duration-100">Votre Ville / المدينة</label>
        <FaLocationDot className="absolute right-3 z-10 top-1/2 -translate-y-1/2 text-[#aaa]" />
      </div>
      <div className="flex flex-col gap-3 items-center w-full mt-10">
        {total ? <p>Le price avec livrison : <span>{total}</span> DA</p> : <></>}
        <button className={`flex items-center gap-4 px-[10%] w-fit py-2 rounded-lg font-semibold text-xl duration-200 ${submit ? "cursor-not-allowed bg-[--second-color] text-[#ddd]" : "text-[#ddd] hover:text-white bg-[--second-color] hover-[--main-color]"}`}>
          {submit && <div className="border-4 border-solid border-r-transparent border-[#ddd] rounded-full h-8 w-8 animate-spin"></div>}
          {/* <div className="border-2 border-solid border-r-transparent border-white rounded-full h-5 w-5 animate-spin"></div> */}
          Commande</button>
        <button onClick={() => router.back()} className="font-semibold w-fit px-[10%] py-2 bg-[#aaa] rounded-lg text-[#333] hover:bg-[#ddd] hover:text-black duration-100">Back</button>
      </div>
    </form>
  )
}