import { helfArray, restOfArray } from "@/utils/functioin"
import { ShoesType } from "@/utils/type"
import ShoesCard from "../ShoesCard"

interface Props {
  shoes: ShoesType[]
}

export default function PhoneShoes({ shoes }: Props) {
  return (
    <div className="min-[426px]:hidden flex p-4 gap-2 bg-[--second-color]">
      <div className="flex flex-col w-1/2 gap-2">
        {helfArray(shoes).map((s, i) =>
          <ShoesCard key={i} id={s.id} img={s.imgs[0]} price={s.price} name={s.name} />
        )}
      </div>
      <div className="flex flex-col w-1/2 gap-2">
        {restOfArray(shoes).map((s, i) =>
          <ShoesCard key={i} id={s.id} img={s.imgs[0]} price={s.price} name={s.name} />
        )}
      </div>
    </div>
  )
}