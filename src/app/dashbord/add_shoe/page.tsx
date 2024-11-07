"use client";

import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { FormEvent, useState } from "react";
// import axios from "axios";
// import { DOMAIN } from "@/utils/constants";



const imgs: string[] = []
const sizes: number[] = []
export default function AddShoes() {
    const [name, setName] = useState("")
    const [Price, setPrice] = useState("")
    const [description, setDesc] = useState("")
    const [image, setImage] = useState("")
    const [size, setSize] = useState("")


    function addimage(e: FormEvent) {
        e.preventDefault()
        if (image !== "") {
            const imagesContainer = document.querySelector("#images");
            const child = document.createElement("img")
            child.setAttribute("src", image)
            child.setAttribute("alt", "")
            child.append(image)
            imagesContainer?.appendChild(child)
            imgs.push(image)
            setImage("")
        }
    }

    function addsize(e: FormEvent) {
        e.preventDefault()
        if (size !== "") {
            const sizesContainer = document.querySelector("#sizes")
            const child = document.createElement("button")
            child.append(size)
            sizesContainer?.appendChild(child)
            sizes.push(parseInt(size))
            setSize("")
        }
    }

    function createShoe() {

        console.log("Hello that is your Product")
        console.log(name)
        console.log(Price)
        console.log(description)
        console.log(sizes)
        console.log(imgs)
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
        <div className="py-5 px-12 max-sm:px-5">
            <h1 className="text-center text-[--second-color] text-2xl font-bold">Add Shoe</h1>
            <div className="flex max-sm:flex-col">
                <div className="px-4 w-[40%] max-sm:w-full max-sm:p-0">
                    <div>
                        <h3 className="ml-8 mt-4 mb-2">Name of Shoe</h3>
                        <input onChange={(e) => setName(e.target.value)} value={name} className="px-4 py-2 [border:1px_solid_var(--main-color)] w-full text-base rounded-lg outline-none" type="text" />
                    </div>
                    <div>
                        <h3 className="ml-8 mt-4 mb-2">Discription</h3>
                        <textarea onChange={(e) => setDesc(e.target.value)} value={description} className="max-w-full max-h-28 h-28 px-3 py-2 [border:1px_solid_var(--main-color)] w-full text-lg rounded-lg outline-none" />
                    </div>
                    <div>
                        <h3 className="ml-8 mt-4 mb-2">Price</h3>
                        <input onChange={(e) => setPrice(e.target.value)} value={Price} className="px-4 py-2 [border:1px_solid_var(--main-color)] w-full text-base rounded-lg outline-none" type="number" />
                    </div>
                    <div className='text-center mt-5'>
                        <button onClick={() => createShoe()} className="cursor-crosshair rounded-md text-base px-12 py-2 text-[#ddd] bg-slate-500 hover:text-white hover:bg-slate-800 max-sm:hidden">Add To Store</button>
                    </div>
                </div>
                <div className="flex-grow w-[60%] max-sm:w-full">
                    <form onSubmit={addimage} className="">
                        <h3 className="ml-8 mt-4 mb-2">Images</h3>
                        <div className="relative">
                            <input className="px-4 py-2 [border:1px_dashed_var(--main-color)] w-full text-base rounded-lg outline-none" onChange={(e) => setImage(e.target.value)} value={image} type="url" />
                            <a href="https://console.cloudinary.com/console/c-5cd89122dedfeefeb2fded1b79c365/media_library/search?q=&view_mode=mosaic" target="_blank" className="absolute right-2 top-1/2 -translate-y-1/2"><MdOutlineAddPhotoAlternate /></a>
                        </div>
                    </form>
                    <ol id="images" className="grid grid-cols-3 gap-2 mt-3"></ol>

                    <div className='flex items-start'>
                        <form onSubmit={addsize} className="w-1/3 inline-block">
                            <h3 className="ml-8 mt-4 mb-2">Sizes</h3>
                            <div className="relative">
                                <input onChange={(e) => setSize(e.target.value)} value={size} className="px-4 py-2 [border:1px_dashed_var(--main-color)] w-full text-base rounded-lg outline-none" type="number" maxLength={2} />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-xl cursor-pointer bg-transparent"><IoIosAddCircle /></button>
                            </div>
                        </form>
                        <div id="sizes" className=" py-2 flex flex-wrap gap-2 px-5 mt-12"></div>
                    </div>
                </div>
                <div className='flex justify-center mt-12'>
                    <button onClick={createShoe} className="cursor-crosshair rounded-md font-medium py-2 px-12 text-[#ddd] bg-slate-500 hover:text-white hover:bg-slate-800 duration-100 sm:hidden">Add To Store</button>
                </div>
            </div>
        </div>
    )
}