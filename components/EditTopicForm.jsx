"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function EditTopicForm( {id, title, description, firstName}) {

    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)
    const [newFirstName, setNewFirstName] = useState(firstName)
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`https://admirable-conkies-c2b178.netlify.app/api/topics/${id}`,
            {
                method: "PUT",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({ newTitle, newDescription})
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
            value={firstName}
            type="text" 
            placeholder="First Name" 
            className="border border-slate-500 px-8 py-2"
        />
        <input 
            onChange={e => setNewTitle(e.target.value)}
            value={newTitle}
            type="text" 
            placeholder="Topic Title" 
            className="border border-slate-500 px-8 py-2"
        />
        <input 
            onChange={e => setNewDescription(e.target.value)}
            value={newDescription}
            type="text" 
            placeholder="Topic Description" 
            className="border border-slate-500 px-8 py-2"
        />
        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
            Update Topic
        </button>
    </form>
    )
}