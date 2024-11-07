"use client";

import slide1 from "@/images/Slides/slide1.png";
import slide2 from "@/images/Slides/slide2.png";
import slide3 from "@/images/Slides/slide3.png";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";







export default function Slider() {

  function toLeft() {
    const slides = document.querySelectorAll(".slide");

    for (let i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains("selectR") || slides[i].classList.contains("selectL")) {
        const pellets = document.querySelectorAll(".Pellets");
        document.querySelector(".here")?.classList.remove("here")
        pellets[i - 1]?.classList.add("here")


        slides[i].classList.remove("selectR");
        slides[i].classList.remove("selectL");
        slides[i].classList.add("outR");
        if (i === 0) {
          slides[slides.length - 1].classList.add("selectL")
          setTimeout(() => {
            slides[i].classList.remove("outR")
          }, 500);
          pellets[slides.length - 1].classList.add("here")
          break;
        } else {
          slides[i - 1].classList.add("selectL");
          setTimeout(() => {
            slides[i].classList.remove("outR")
          }, 500);
          break;
        }
      }
    }
  }
  function toRight() {
    const slides = document.querySelectorAll(".slide");


    for (let i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains("selectR") || slides[i].classList.contains("selectL")) {
        const pellets = document.querySelectorAll(".Pellets");
        document.querySelector(".here")?.classList.remove("here")
        pellets[i + 1]?.classList.add("here")



        slides[i].classList.remove("selectR");
        slides[i].classList.remove("selectL");
        slides[i].classList.add("outL")
        if (i === slides.length - 1) {
          slides[0].classList.add("selectR")
          setTimeout(() => {
            slides[i].classList.remove("outL")
          }, 500)
          pellets[0].classList.add("here")
          break;
        } else {

          slides[i + 1].classList.add("selectR");
          setTimeout(() => {
            slides[i].classList.remove("outL")
          }, 500)
          break;
        }

      }
    }
  }
  return (
    <div className="relative w-full h-[calc(100vh-76px)] max-sm:h-auto overflow-hidden" >
      <div className="relative flex items-center gap-10  w-full h-full overflow-hidden">
        <Image
          className="h-full max-sm:h-auto w-full duration-500 opacity-0"
          src={slide1.src}
          height={1000}
          width={1400}
          alt="" /> {/* for fixing size */}
        <Image
          className="absolute top-0 left-0 h-full w-full duration-500 opacity-100 slide selectR"
          src={slide1.src}
          height={1000}
          width={1400}
          alt="" />
        <Image
          className="absolute top-0 left-0 h-full w-full duration-500 opacity-100 slide"
          src={slide2.src}
          height={1000}
          width={1400}
          alt="" />
        <Image
          className="absolute top-0 left-0 h-full w-full duration-500 opacity-100 slide"
          src={slide3.src}
          height={1000}
          width={1400}
          alt="" />
        <div className="z-20 absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 max-sm:gap-2">
          <div className="w-4 h-4 max-sm:h-3 max-sm:w-3 rounded-full border-gray-300 border-solid border-[1px] duration-700 Pellets here"></div>
          <div className="w-4 h-4 max-sm:h-3 max-sm:w-3 rounded-full border-gray-300 border-solid border-[1px] duration-700 Pellets"></div>
          <div className="w-4 h-4 max-sm:h-3 max-sm:w-3 rounded-full border-gray-300 border-solid border-[1px] duration-700 Pellets"></div>
        </div>
      </div>



      <div onClick={() => toRight()} className="absolute [border:1px_solid_gray] h-40 max-sm:h-20 rounded-xl top-1/2 -translate-y-1/2 mx-[1%] right-0 cursor-pointer z-10 flex items-center"><FaChevronRight className="w-10 h-10 px-3 text-[#aaa]" /></div>
      <div onClick={() => toLeft()} className="absolute [border:1px_solid_gray] h-40 max-sm:h-20 rounded-xl top-1/2 -translate-y-1/2 mx-[1%] left-0 cursor-pointer z-10 flex items-center"><FaChevronLeft className="w-10 h-10 px-3 text-[#aaa]" /></div>
    </div>
  )
}