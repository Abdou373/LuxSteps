"use client";

import { useState } from "react";
import { LuSearch } from "react-icons/lu";

export default function SearchForm() {
  const [search, setSearch] = useState("");

  function Search(e: React.FormEvent) {
    e.preventDefault()

    // console.log(search);
    setSearch("");
  }
  return (
    <form onSubmit={(e) => Search(e)} className="relative  w-3/5 flex items-center justify-center gap-2">
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="w-full max-[425px]:w-full max-sm:px-3 max-sm:text-sm px-5 py-2 rounded-10 outline-none"
        type="text"
        placeholder="Find your shoes..." />
      <button className="absolute left-full -translate-x-full rounded-r-10 bg-[#aaa] outline-none p-2 text-[#333]"><LuSearch className="size-6" /></button>
    </form>
  )
}