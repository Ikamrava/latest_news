"use client"
import { catergories } from "../constants"
import {usePathname} from "next/navigation"
import NavLink from "./NavLink"

function NavLinks() {
    const pathname = usePathname()
    const isActive = (path:string)=>{
        return pathname?.split("/").pop() === path
    }
  return (
 <nav className=" grid grid-cols-4 md:grid-cols-7 text-sx md:text-lg lg:text-lg gap-4 pb-5 max-w-6xl mx-auto border-b-2  ">
    {catergories.map(category=>(
        <NavLink key={category} category={category} isActive={isActive(category)}/>
    ))}
    
 </nav>
  )
}

export default NavLinks
