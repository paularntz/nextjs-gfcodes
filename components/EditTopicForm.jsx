"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function EditTopicForm( {id, title, lastName, firstName, description}) {

    const [newTitle, setNewTitle] = useState(title)
    const [newLastName, setNewLastName] = useState(lastName)
    const [newFirstName, setNewFirstName] = useState(firstName)
    const [newDescription, setNewDescription] = useState(description)
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(process.env.URI + `/api/topics/${id}`,
            {
                method: "PUT",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({"firstName": newFirstName, "lastName": newLastName, "title": newTitle, "description": newDescription}),
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
        <input 
            onChange={e => setNewTitle(e.target.value)}
            value={newTitle}
            type="text" 
            placeholder="Contact Title" 
            className="border border-slate-500 px-8 py-2"
        />
        <textarea
            onChange={e => setNewDescription(e.target.value)}
            value={newDescription}
            placeholder="Description - Notes"
            className="border border-slate-500 px8 py2"
        />

        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
            Update Topic
        </button>
    </form>
    )
}