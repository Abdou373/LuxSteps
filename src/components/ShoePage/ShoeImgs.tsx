"use client";

import Image from "next/image"
import { Dispatch, SetStateAction, useState } from "react";
import shoe1 from "@/images/products/Shoe1.jpg";
import shoe2 from "@/images/products/Shoe2.png";



export default function ShoeImgs({ imgs }: { imgs: string[] }) {
  const [image, setImage] = useState(imgs[0])

  return (
    <div className="flex-grow flex max-lg:justify-center gap-3 max-sm:flex-col-reverse">
      <div className="flex flex-col gap-2 my-2 overflow-x-auto pr-1 w-1/3 max-sm:flex-row max-sm:h-auto max-sm:w-[calc(100%-8px)] max-sm:my-0 max-sm:mx-1 max-sm:pr-0 max-sm:pb-1 small-images">
        {imgs.map((i, j) =>
          <SmallImg key={j} image={i} setImage={setImage} />
        )}
      </div>
      <Image
        className="rounded-10 w-1/2 max-md:w-full max-md:h-auto"
        width={1000}
        height={1000}
        src={shoe1}
        alt=""
        priority
      />
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
      className="cursor-pointer rounded-10 max-lg:w-32"
      onClick={() => setImage(image)}
      src={shoe1}
      alt=""
      width={50}
      height={50}
    />
  )
}