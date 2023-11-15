"use client";
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function FindAddress() {

    const [sstr, setSstr] = useState("")
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        router.push(`/searchResults?sstr=${sstr}`)
        
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input 
                onChange={e => setSstr(e.target.value)}
                type="text" 
                name="sstr" 
                className="border border-slate-500 px-8 py-2" 
            />
            <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                Find Address
            </button>
        </form>
        
        </>
    )

}