"use client";

import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { FormEvent, useState } from "react";
import { CATEGORIES } from "@/utils/contants";
import { FaCaretDown, FaSquareCaretRight } from "react-icons/fa6";
import Image from "next/image";
// import axios from "axios";
// import { DOMAIN } from "@/utils/constants";


export default function AddShoes() {
  const [name, setName] = useState("")
  const [Price, setPrice] = useState("")
  const [description, setDesc] = useState("")
  const [image, setImage] = useState("")
  const [size, setSize] = useState("")
  const [category, setCategory] = useState("")
  const [sizes, setSizes] = useState<string[]>([])
  const [images, setImages] = useState<string[]>([])




  function createShoe() {

    console.log("Hello that is your Product")
    console.log(name)
    console.log(Price)
    console.log(description)
    console.log(sizes)
    console.log(images)
  }
  //     try {
  //       const price = parseInt(Price)
  //       await axios.post(`${DOMAIN}/api/shoes`, {
  //         name,
  //         price,
  //         imgs,
  //         sizes,
  //         description,
  //       })

  //       const images = document.querySelector("#images");
  //       while (images?.children.length !== 0) {
  //         images?.lastChild?.remove()
  //         imgs.pop()
  //       }
  //       const sizesContainer = document.querySelector("#sizes");
  //       while (sizesContainer?.children.length !== 0) {
  //         sizesContainer?.lastChild?.remove()
  //         sizes.pop()
  //       }
  //       setDesc("");
  //       setName("")
  //       setPrice("")
  //       router.refresh()
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  return (
    <div className="relative py-5 px-[2%] max-sm:px-5">
      <h1 className="dashboard-section">Add Shoe</h1>
      <div className="flex gap-4">
        <div className="flex-grow flex flex-col gap-3">
          <div>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="dashboard_adding-input"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={Price}
              type="number"
              className="dashboard_adding-input"
              placeholder="Price"
            />
          </div>
          <div className="relative h-max">
            <input
              type="text"
              value={category}
              readOnly
              className="dashboard_adding-category"
              placeholder="Category"
            />

            <div className="absolute overflow-hidden top-full left-0 w-full ">
              <div className="-translate-y-full relative w-full h-max duration-200 z-30">
                <div className="grid grid-cols-3 w-full gap-1 p-2 bg-[#eee] border border-solid border-secondary text-white rounded-b-10">
                  {CATEGORIES.map((category, i) => (
                    <button
                      key={i}
                      onClick={(e) => setCategory(e.currentTarget.innerHTML)}
                      className="py-2 bg-bgPrimary-from rounded-10 hover:bg-bgPrimary-to duration-150 z-20">
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer rotate duration-200">
              <FaCaretDown className="size-5 text-primary" />
            </span>
          </div>
        </div>
        <div className="w-1/3">
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            value={description}
            className="dashboard_adding-input !h-full"
            placeholder="Description"
          />
        </div>
      </div>
      <div className='flex items-center my-10'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSizes([...sizes, size]);
            setSize("")
          }}
          className="relative w-1/4">
          <input
            onChange={(e) => setSize(e.target.value)}
            value={size}
            type="tel"
            maxLength={2}
            minLength={2}
            className="px-4 py-2 border border-secondary border-dashed w-full rounded-10 outline-none"
            placeholder="Size..."
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-xl cursor-pointer text-secondary"><FaSquareCaretRight /></button>
        </form>
        {sizes.length !== 0 && <h3 className="text-2xl font-bold mx-10 text-primary">Sizes</h3>}
        <div className="py-2 flex flex-wrap gap-2 px-5">
          {sizes.map((size, i) => (
            <button
              key={i}
              className="bg-bgPrimary-from cursor-pointer text-[#eee] px-2 py-1 rounded-lg z-20"
              onClick={() => setSizes(sizes.filter((s) => s !== size))}>
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setImages([...images, image]);
            setImage("")
          }}
          className="relative">
          <input
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="url"
            className="px-4 py-2 border border-secondary border-dashed w-full text-base rounded-lg outline-none"
            placeholder="Image URL..."
            required
          />
          <a
            href="https://console.cloudinary.com/console/c-5cd89122dedfeefeb2fded1b79c365/media_library/search?q=&view_mode=mosaic"
            target="_blank"
            className="absolute right-2 top-1/2 -translate-y-1/2">
            <MdOutlineAddPhotoAlternate className="text-primary" />
          </a>
        </form>
        {images.length !== 0 && <h3 className="text-2xl font-bold mx-10 mt-3 text-primary">Images</h3>}
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {images.map((img, i) => (
            <Image
              key={i}
              onClick={() => setImages(images.filter((image) => image !== img))}
              width={150}
              height={100}
              src={img}
              alt=""
              className="rounded-lg cursor-pointer"
            />
          ))}
        </div>
      </div>
      <div className='flex justify-center mt-12'>
        <button
          onClick={() => createShoe()}
          className="cursor-pointer rounded-10 font-medium py-2 px-12 text-[#ddd] bg-bgPrimary-from hover:text-white hover:bg-bgPrimary-to duration-100">
          Add To Store
        </button>
      </div>
    </div>
  )
}