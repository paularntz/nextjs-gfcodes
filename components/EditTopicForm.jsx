"use client";
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function EditTopicForm( {id, address, lastName, firstName, description, violation}) {

    const [newAddress, setNewAddress] = useState(address)
    const [newLastName, setNewLastName] = useState(lastName)
    const [newFirstName, setNewFirstName] = useState(firstName)
    const [newDescription, setNewDescription] = useState(description)
    const [newViolation, setNewViolation] = useState(violation)
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`/api/topics/${id}`,
            {
                method: "PUT",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({"firstName": newFirstName, "lastName": newLastName, "address": newAddress, "description": newDescription, "violation": newViolation}),
            })
            if (!res.ok) {
                throw new Error("Failed to update topic.")
            }
            router.refresh()
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input 
            onChange={e => setNewFirstName(e.target.value)}
            value={newFirstName}
            type="text" 
            placeholder="First Name" 
            className="border border-slate-500 px-8 py-2"
        />
        <input 
            onChange={e => setNewLastName(e.target.value)}
            value={newLastName}
            type="text" 
            placeholder="Last Name" 
            className="border border-slate-500 px-8 py-2"
        />  
        <select
            onChange={(e) => setNewViolation(e.target.value)}
            placeholder="Contact Description"
            defaultValue={newViolation}
            className="border border-slate-500 px-8 py-2"
        >
            <option value="0" disabled selected>Select One</option>
            <option value="Tall Grass">Tall Grass</option>
            <option value="Trash In Yard">Trash In Yard</option>
            <option value="Downed Tree">Downed Tree</option>
            <option value="Illegal Burning">Illegal Burning</option>
        </select>      
        <input
            onChange={e => setNewAddress(e.target.value)}
            value={newAddress}
            type="text" 
            placeholder="Contact Address" 
            className="border border-slate-500 px-8 py-2"
        />
        <textarea
            onChange={e => setNewDescription(e.target.value)}
            value={newDescription}
            placeholder="Description - Notes"
            className="border border-slate-500 px-8 py-2"
        />

        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
            Update Topic
        </button>
    </form>
    )
}