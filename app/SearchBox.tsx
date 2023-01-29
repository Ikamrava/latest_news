"use client"

import { useState } from "react"

function SearchBox() {
    const [input,setInput] = useState("")
  return (
    <form action="" className="max-w-6xl mx-auto flex justify-between items-center px-5">
        <input placeholder="Searck Keywords..." type="text"
         className=" w-full h-14 rounder-sm flex-1 placeholder:gray-500 text-gray-500 outline-none
         bg-transparent dark:text-oragnge-400"
         value={input}
         onChange={(e)=>setInput(e.target.value)} />
        <button type='submit' 
        className=" text-orange-400 disabled:text-gray-400"
        disabled={!input}
        >Search</button>
    </form>
  )
}

export default SearchBox