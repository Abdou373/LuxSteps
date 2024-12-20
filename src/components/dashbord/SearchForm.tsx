import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchForm({ placeholder }: { placeholder: string }) {
  return (
    <form className="flex-grow relative">
      <input
        type="text"
        className="bg-gray-200 w-full text-lg font-medium px-3 py-2 rounded-10 border border-secondary border-solid outline-none"
        placeholder={placeholder}
      />
      <button className="absolute text-center bg-secondary rounded-r-10 -translate-x-full h-full px-5 ">
        <FaSearch className="size-5 text-[#ddd]" />
      </button>
    </form>
  )
}
