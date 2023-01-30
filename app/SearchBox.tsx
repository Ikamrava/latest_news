"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

function SearchBox() {
    const [input,setInput] = useState("")
    const router = useRouter()
    
    const submitHandler = (e:FormEvent<HTMLElement>)=>{
        e.preventDefault()
        if (!input) return
        router.push(`/search?term=${input}`)


    }
  return (
    <form onSubmit={submitHandler}  className="max-w-6xl mx-auto flex justify-between items-center px-5">
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