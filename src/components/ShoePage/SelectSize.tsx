"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs"
interface Props {
  sizes: number[],
  id: number,
}

export default function SelectSize({ id, sizes }: Props) {
  const router = useRouter()

  const [setect, setSelect] = useState('')
  const [info, setInfo] = useState(false)

  useEffect(() => {
    document.querySelector(".active")?.classList.replace("active", "not-active")
    document.querySelector(`#size${setect}`)?.classList.replace("not-active", "active")
  }, [setect])

  function ClickForOrder() {
    if (setect === "") {
      setInfo(true)
    } else {
      router.push(`/shoes/${id}/placeOrder?size=${setect}`)
    }
  }
  return (
    <div className="flex-grow flex flex-col justify-evenly">
      <div>
        <h6 className="font-light my-3">Sélectionner votre taille</h6>
        {sizes.map((s, i) =>
          <input
            type="button"
            key={i}
            id={`size${s}`}
            onClick={(e) => {
              setSelect(e.currentTarget.value)
              setInfo(false)
            }}
            value={s}
            className={`not-active`}
          />
        )}
        {info && (<p className="flex items-center gap-2 ml-3 text-blue-900 font-medium">
          <BsFillInfoCircleFill /> Veuillez sélectionner un taille</p>)}
      </div >
      <div className="w-full text-center mt-4">
        <button onClick={ClickForOrder} className="bg-[--second-color] text-[#ddd] py-2 px-10 rounded-lg">Commandez maintenant</button>
      </div>
    </div>
  )
}