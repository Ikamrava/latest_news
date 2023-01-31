"use client"

import { useRouter } from "next/navigation"


type Props={
    article:Article
}

function ReadMore({article}:Props) {
   
    const router = useRouter()
    const handleClick = ()=>{
        const queryString = Object.entries(article)
        .map(([key,value])=> `${key}=${value}`)
        .join("&")
        const url = `/article?${queryString}`
        console.log(url)
        router.push(url)
    }
  return (
 <button onClick={handleClick}
 className=" bg-orange-400 h-10 rounded-b-lg hover:bg-orange-500"
 >Reade More

 </button>
  )
}

export default ReadMore