"use client";

import Image from "next/image"
import { Dispatch, SetStateAction, useState } from "react";


interface Props1 {
  imgs: string[]
}


export default function ShoeImgs({ imgs }: Props1) {
  const [image, setImage] = useState(imgs[0])

  return (
    <div className="flex max-lg:justify-center gap-3 h-full max-sm:flex-col-reverse">
      <div className="flex flex-col gap-2 my-2 overflow-x-auto pr-1 max-lg:h-[calc(100vh-124px)] max-sm:flex-row max-sm:h-auto max-sm:w-[calc(100%-8px)] max-sm:my-0 max-sm:mx-1 max-sm:pr-0 max-sm:pb-1 small-images">
        {imgs.map((i, j) =>
          <SmallImg key={j} image={i} setImage={setImage} />
        )}
      </div>
      <Image className="rounded-xl h-full w-auto max-lg:h-[calc(100vh-108px)] max-lg:w-auto max-sm:w-full max-sm:h-auto" width={200} height={200} src={image} alt="" priority />
    </div>
  )
}

interface Props2 {
  image: string,
  setImage: Dispatch<SetStateAction<string>>

}

function SmallImg({ image, setImage }: Props2) {
  return (
    <Image
      className="cursor-pointer rounded-xl w-[80px] h-auto max-lg:w-32"
      onClick={() => setImage(image)}
      src={image}
      alt=""
      width={50}
      height={50}
    />
  )
}